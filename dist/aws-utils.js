
/*
 * @Author: Cleverson Puche
 * @Date: 2017-13-12 18:59:57
 */

function getS3Client() {
    var S3Utils = Java.type('br.com.softbox.awsutils.S3Utils')
    var awsUtilsConfig = getConfig()['aws-utils']
    var s3Client

    if(awsUtilsConfig && awsUtilsConfig.accessKey !== undefined && awsUtilsConfig.secretKey !== undefined) {
        s3Client = new S3Utils(awsUtilsConfig.accessKey, awsUtilsConfig.secretKey)
    } else {
        s3Client = new S3Utils()
    }

    return s3Client
}

/**
  * Get a file from a given S3 bucket
  * @param {String} bucketName
  * @param {String} keyName - key to be used to store file on S3
  * @example
   * getFileContentFromS3("myBucket", "myFileName")
*/
function getFileContentFromS3(bucketName, keyName) {
    var s3Client = getS3Client()
    return s3Client.getFile(bucketName, keyName)
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
    s3Client.sendFile(bucketName, keyName, filePath)
    return true
}


exports = {
    getFileContentFromS3: getFileContentFromS3,
    sendFileToS3: sendFileToS3
}