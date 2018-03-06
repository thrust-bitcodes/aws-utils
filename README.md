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

## Configurando diretamente no ambiente
Seguindo as recomendações da própria AWS, as configurações de acesso ao serviço S3 devem ficar no ambiente, e não no arquivo config.json. Sendo assim, você deve criar dois arquivos no diretório ~/.aws:

Arquivo chamado _config_:
[default]
region = us-east-1

Arquivo chamado _credentials_:
[default]
aws_access_key_id = sua_access_key_aqui
aws_secret_access_key = sua_secret_key_aqui