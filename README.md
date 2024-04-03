## Setup node server

Set up environment variable as shown below:
```env
PORT=3000
PASS="secret123"
HOST="smtp.foo.com"
DOMAIN="abc@foo.com"
````

To start the server use the command: `npm start`

## ENDPOINT

send POST request on `/contact`. The request body must have these properties:

```js
  { receiver, subject, text } = req.body;
```
