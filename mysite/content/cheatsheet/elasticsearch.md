---
title: "Open search"
date: "2022-11-13"
author: "Tom"

toc:
  enable: true
  auto: true
---

# Elastic search / Open search

Opensearch is a fork of Elastic search after 7.10.

## Setup a testing env

Opensearch
```yaml
version: '3'
services:
  opensearch-node1: # This is also the hostname of the container within the Docker network (i.e. https://opensearch-node1/)
    image: opensearchproject/opensearch:latest # Specifying the latest available image - modify if you want a specific version
    container_name: opensearch-node1
    environment:
      - discovery.type=single-node
    ulimits:
      memlock:
        soft: -1 # Set memlock to unlimited (no soft or hard limit)
        hard: -1
      nofile:
        soft: 65536 # Maximum number of open files for the opensearch user - set to at least 65536
        hard: 65536
    volumes:
      - opensearch-data1:/usr/share/opensearch/data # Creates volume called opensearch-data1 and mounts it to the container
    ports:
      - 9200:9200 # REST API
      - 9600:9600 # Performance Analyzer
    networks:
      - opensearch-net # All of the containers will join the same Docker bridge network
  opensearch-dashboards:
    image: opensearchproject/opensearch-dashboards:latest # Make sure the version of opensearch-dashboards matches the version of opensearch installed on other nodes
    container_name: opensearch-dashboards
    ports:
      - 5601:5601 # Map host port 5601 to container port 5601
    expose:
      - "5601" # Expose port 5601 for web access to OpenSearch Dashboards
    environment:
      OPENSEARCH_HOSTS: '["https://opensearch-node1:9200"]' # Define the OpenSearch nodes that OpenSearch Dashboards will query
    networks:
      - opensearch-net

volumes:
  opensearch-data1:

networks:
  opensearch-net:
```

Elasticsearch 

Reference: https://gist.github.com/tomcant/ebce0df19cdde66cb7c7b5939fdba2ad
```yaml
version: "3.7"

services:
  elasticsearch:
    image: docker.elastic.co/elasticsearch/elasticsearch:7.10.2
    ports:
      - 9200
      - 9300
    environment:
      - discovery.type=single-node
    volumes:
      - elasticsearch_data:/usr/share/elasticsearch/data

  kibana:
    image: docker.elastic.co/kibana/kibana:7.10.2
    ports:
      - "5601:5601"
    environment:
      - ELASTICSEARCH_URL=http://elasticsearch:9200
    depends_on:
      - elasticsearch

volumes:
  elasticsearch_data:
    driver: local
```

### Sample dump of data for searching

For example, can take a look at here https://github.com/elastic/examples/tree/master/Exploring%20Public%20Datasets/nyc_traffic_accidents

data in CSV
pipeline on elasticsearch
filebeat for loading data.

## Index

### Create

```bash
# create an index
PUT http://127.0.0.1:9200/shopping

# create an index with mapping
PUT http://127.0.0.1:9200/user/_mapping
{
    "properties":{
        "name": {
            "type": "text",
            "index": true       //depends on the 分詞
        },
        "sex": {
            "type": "keyword",
            "index": true       //can only match as keyword
        },
        "tel": {
            "type": "keyword",
            "index": false      //query will result in exception
        },
    }
}
```

### Delete

```bash
DELETE /shopping
```

### Display

```bash
# show tables
GET http://127.0.0.1:9200/_cat/indicies?v
```

### Backup and restore

```bash
# list all the backup snapshot
GET _snapshot
GET _snapshot/my_repository/*?verbose=false

# backup hourly 
PUT _slm/policy/hourly-snapshots
{
  "name": "<hourly-snapshot-{now/d}>",
  "schedule": "0 0 * * * ?",
  "repository": "my_repository",
  "config": {
    "indices": "*",
    "include_global_state": true
  },
  "retention": {
    "expire_after": "1d",
    "min_count": 1,
    "max_count": 24
  }
}

# restore indicies
POST _snapshot/my_repository/my_snapshot_2099.05.06/_restore
{
  "indices": "my-index,logs-my_app-default"
}

GET _cluster/health
```


## Data

### Create

```bash
POST http://127.0.0.1/shopping/_doc
{
    "title": "android phone",
    "category": "android",
    "images": "http://www.image.com/x.jpg",
    "price": 3999,
}
```

### Retrieve

```bash
# search by id
GET http://127.0.0.1:9200/shopping/_doc/1001

# search all
GET http://127.0.0.1:9200/shopping/_search

GET http://127.0.0.1:9200/shopping/_search
{
    "query":{
        "match_all":{ }
    }
}

# search field 
GET http://127.0.0.1:9200/shopping/_search?q=category:android

# where
GET http://127.0.0.1:9200/shopping/_search
{
    "query":{
        "match":{
            "category": "android"
        }
    }
}
```

select field

```bash 
POST my-index-000001/_search
{
  "query": {
    "match": {
      "user.id": "kimchy"
    }
  },
  "fields": [
    "user.id",
    "http.response.*",         
    {
      "field": "@timestamp",
      "format": "epoch_millis" 
    }
  ],
  "_source": false
}
```


and+or
```bash
# and
POST http://127.0.0.1:9200/shopping/_search
{
    "query": {
        "bool": {
            "must": [
                "match": {
                    "category": "android"
                },
                "match": {
                    "price": 1999
                }
            ]
        }
    }
}

# or
POST http://127.0.0.1:9200/shopping/_search
{
    "query": {
        "bool": {
            "should": [
                "match": {
                    "category": "android"
                },
                "match": {
                    "category": "iphone"
                },
            ]
        }
    }
}

# range query
GET http://127.0.0.1:9200/shopping/_search
{
    "query": {
        "bool": {
            "should": [
                "match": {
                    "category": "android"
                },
                "match": {
                    "category": "iphone"
                },
            ],
            "filter": {
                "range": {
                    "price": {
                        "gt": 5000
                    }
                }
            }
        }
    }
}

# full text
GET http://127.0.0.1:9200/shopping/_search
{
    "query": {
        "match_phrase": {
            "category": "android phone"
        },
    },
    "highlight": {
        "fields":{
            "category": {}
        }
    }
}
```

order by + limit
```bash
GET http://127.0.0.1:9200/shopping/_search
{
    "query":{
        "match_all":{ }
    },
    "from": 0,
    "size": 2,
    "sort":{
        "price": { "order": "desc" }
    }
}
```

group by + count

```bash
# gropu by
GET http://127.0.0.1:9200/shopping/_search
{
    "aggs":{
        "price_group":{
            "terms":{
                "field": "price"
            }
        }
    },
    "size": 0  //this will stop returning raw data
}

# average
GET http://127.0.0.1:9200/shopping/_search
{
    "aggs":{
        "price_avg":{
            "avg":{
                "field": "price"
            }
        }
    },
    "size": 0
}
```

### Update

```bash
# update it from 3999 to 4999
PUT http://127.0.0.1/shopping/_doc/1001
{
    "title": "android phone",
    "category": "android",
    "images": "http://www.image.com/x.jpg",
    "price": 4999,
}

# using POST
POST http://127.0.0.1/shopping/_update/1001
{
    "doc": {
        "title": "Google Nexus 7"
    }
}
```

### Delete

```bash
DELETE /my-index-000001/_doc/1

POST /my-index-000001/_delete_by_query
{
  "query": {
    "match": {
      "user.id": "elkbee"
    }
  }
}
```

### Search relavant

Default boost is 2.2, 
BM25: in absence of an advanced optimization, as {\displaystyle k_{1}\in [1.2,2.0]}k_1 \in [1.2,2.0] and {\displaystyle b=0.75}b = 0.75

```bash
GET /testscore/_search?explain=true
{
    "query": {
        "bool": {
            "should": [
                "match": {
                    "title": { "query": "Hadoop", "boost": 1 }
                },
                "match": {
                    "title": { "query": "Hive", "boost": 1 }
                },
                "match": {
                    "title": { "query": "Spark", "boost": 2 }
                }
            ]
        }
    }
}
```

## Java client

### Library

- Jest Github: https://github.com/searchbox-io/Jest
- Elasticsearch

```xml
<dependency>
  <groupId>org.opensearch.client</groupId>
  <artifactId>opensearch-rest-high-level-client</artifactId>
  <version>2.4.0</version>
</dependency>
```


- Elasticsearch high level rest client
- Opensearch
- Opensearch high level rest client 

```xml
<dependency>
  <groupId>org.opensearch.client</groupId>
  <artifactId>opensearch-rest-high-level-client</artifactId>
  <version>2.4.0</version>
</dependency>
```

- Opensearch java client Github: https://github.com/opensearch-project/opensearch-java#sample-code

In short high level API is handwritten and java client is code generated.

### Send query to elasticsearch using Jest

```java
public JestClient jestClient() {
    JestClientFactory factory = new JestClientFactory();
    factory.setHttpClientConfig(
      new HttpClientConfig.Builder("http://localhost:9200")
        .multiThreaded(true)
        .defaultMaxTotalConnectionPerRoute(2)
        .maxTotalConnection(10)
        .build());
    return factory.getObject();
}

List<SearchResult.Hit<Employee, Void>> searchResults = 
  jestClient.execute(new Search.Builder(search).build())
    .getHits(Employee.class);
searchResults.forEach(hit -> {
    System.out.println(String.format("Document %s has score %s", hit.id, hit.score));
});
```

### Using elasticsearch library to generate Query

Elastic library can be used to build query and translate it to Json Request string.

```java

```