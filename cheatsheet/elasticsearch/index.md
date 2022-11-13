# Elastic search


# Elastic search 


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
