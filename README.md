Aws-Utils
===============

Aws-Utils é um *bitcode* utilitário para [Thrust](https://gitlab.com/thrustjs/thrust-seed) para integração com os serviços da AWS.

# Instalação

Posicionado em um app [ThrustJS](https://github.com/thrustjs/thrust), no seu terminal:

```bash
thrust install aws-utils
```

## Tutorial
```javascript
var awsUtils = require('aws-utils')

awsUtils.sendFileToS3("myBucket", "myFileName", "/Users/cleverson/Documents/Softbox/myFile.txt")
```

## API

```javascript
/**
  * Obtém um arquivo de um bucket
  * @param {String} bucketName - nome do bucket
  * @param {String} keyName - chave (nome) do arquivo no bucket
  * @example
   * getFileContentFromS3("myBucket", "myFileName")
*/
function getFileFromS3(bucketName, keyName)

/**
  * Envia um arquivo para um bucket
  * @param {String} bucketName - nome do bucket
  * @param {String} keyName - chave (nome) do arquivo no bucket
  * @param {String} filePath - caminho do arquivo a ser enviado
  * @example
   * sendFileToS3("myBucket", "myFileName", "/Users/cleverson/Documents/Softbox/myFile.txt")
*/
function sendFileToS3(bucketName, keyName, filePath)
```

## Parâmetros de configuração
As propriedades abaixo devem ser configuradas no arquivo *config.json* (distribuído juntamente com o Thrust):

``` javascript
{
  ...
  "awsUtils": {
    "accessKey": "accesKey",
    "secretKey":  "secretKey"
  }
}
```
