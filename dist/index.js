/*
 * @Author: Cleverson Puche
 * @Date: 2018-02-03 18:59:57
 */

var BasicAWSCredentials = Java.type('com.amazonaws.auth.BasicAWSCredentials');
var AWSStaticCredentialsProvider = Java.type('com.amazonaws.auth.AWSStaticCredentialsProvider');
var GetObjectRequest = Java.type('com.amazonaws.services.s3.model.GetObjectRequest');
var AmazonS3ClientBuilder = Java.type('com.amazonaws.services.s3.AmazonS3ClientBuilder');
var Regions = Java.type('com.amazonaws.regions.Regions');
var File = Java.type('java.io.File');
var PutObjectRequest = Java.type('com.amazonaws.services.s3.model.PutObjectRequest');
var S3Utils = Java.type('br.com.softbox.awsutils.S3Utils')

function getS3Client() {
  var awsUtilsConfig = getConfig()['awsUtils']
  var s3Client

  if (awsUtilsConfig && awsUtilsConfig.accessKey !== undefined && awsUtilsConfig.secretKey !== undefined) {
    var credentials = new BasicAWSCredentials(awsUtilsConfig.accessKey, awsUtilsConfig.secretKey);

    s3Client = AmazonS3ClientBuilder
      .standard().withCredentials(new AWSStaticCredentialsProvider(credentials))
      .withRegion(Regions.US_EAST_1)
      .build();
  } else {
    s3Client = AmazonS3ClientBuilder
      .standard()
      .build();
  }

  return s3Client
}

/**
 * Get a file from a given S3 bucket
 * @param {String} bucketName
 * @param {String} keyName - key to be get from S3 bucket
 * @example
 * getFileContentFromS3("myBucket", "myFileName")
 */
function getFileFromS3(bucketName, keyName) {
  var s3Client = getS3Client()
  var object = s3Client.getObject(new GetObjectRequest(bucketName, keyName));
  return object.getObjectContent();
}

/**
 * Send a file to a given S3 bucket
 * @param {String} bucketName
 * @param {String} keyName - key to be used to store file on S3
 * @param {String} filePath
 * @example
 * sendFileToS3("myBucket", "myFileName", "/Users/cleverson/Documents/Softbox/myFile.txt")
 */
function sendFileToS3(bucketName, keyName, filePath) {
  var s3Client = getS3Client()
  var file = new File(filePath);
  s3Client.putObject(new PutObjectRequest(bucketName, keyName, file));
  return true
}

exports = {
  getFileFromS3: getFileFromS3,
  sendFileToS3: sendFileToS3
}
