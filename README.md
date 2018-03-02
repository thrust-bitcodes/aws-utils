<!-- Mail
===============

Mail é um *bitcode* para [Thrust](https://gitlab.com/thrustjs/thrust-seed) para envio de e-mails.

## API

```javascript
/**
  * Send an e-mail
  * @param {String} recipientMail - Recipient's mail address
  * @param {String} subject - Mail's subject
  * @param {String} content - Mail`s content
  * @param {String} senderMail - Sender's mail address (optional)
  * @param {String} senderPassword - Sender's mail password (optional)
  * @example
   * sendMail("johnsmith@gmail.com", "Thust Mail Sender Test", "Hey John, how're u?")
*/
function sendMail(recipientMail, subject, content, senderMail, senderPassword)
```

## Parâmetros de configuração
As propriedades abaixo devem ser configuradas no arquivo *config.json* (distribuído juntamente com o Thrust):

``` javascript
"mail": {
  "smtpHost": /*String*/,
  "smtpSocketFactoryPort":  /*Number*/,
  "smtpAuth": /*Boolean*/,
  "smtpPort": /*Number (In most cases, same as smtpSocketFactoryPort)*/,
  "senderAddress": /*String (optional)*/,
  "senderPassword": /*String (optional)*/
}
``` -->