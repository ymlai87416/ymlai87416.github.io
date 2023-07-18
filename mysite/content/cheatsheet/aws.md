---
weight: 1
title: "AWS scripting"
date: "2023-07-18"
author: "Tom"
draft: false

lightgallery: false

toc:
  enable: true
  auto: true
---

## AWS Cli

```sh
aws configure list-profiles
aws configure --profile profilename
# environment variable for profile is: AWS_PROFILE
```

## AWS Scripting in Python

### S3

```python
import boto3

s3_client = boto3.client('s3')

# create new bucket
response = s3_client.create_bucket(
    Bucket='my-bucket-name',
    CreateBucketConfiguration={
        'LocationConstraint': 'us-west-2'  # Replace with your desired region
    }
)

# upload file
s3_client.upload_file('local-file-path', 'my-bucket-name', 's3-file-key')

# download file
s3_client.download_file('my-bucket-name', 's3-file-key', 'local-file-path')

# list bucket
response = s3_client.list_objects(Bucket='my-bucket-name')

for obj in response['Contents']:
    print(obj['Key'])

# list folder
response = s3_client.list_objects(Bucket=bucket_name, Prefix=folder_path)

if 'Contents' in response:
    for obj in response['Contents']:
        print(obj['Key'])
else:
    print("The folder is empty or does not exist.")

# delete bucket
s3_client.delete_bucket(Bucket='my-bucket-name')

```

### DynamoDB

TBC

### Athena

TBC