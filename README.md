## NODE WITH JWT - simple exemple

> This is just a simple exemple of authorization with nodejs and JWT

 - Clone the project `git clone https://github.com/jorgeelucas/node-auth-api.git`
 - Install dependencies `npm install`
 - Run `node index.js`

##  `Paths`

> First of all - you only need to get the token calling the following
> API with a `POST` request without body since the user credentials are mocked

     - http://localhost:3000/api/login

It will retrieve a json containing a key `message` and a value which is the token you'll need.

    {
        "token": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9..."
    }

To check if it works you just need to request to: `http://localhost:3000/api/posts` as a `POST`

It must return a FORBIDDEN message for the first - take it easy, it's correct.

## Using token to authorization
Now you have to update your request using a HEADER - the header must have the key `Authorization` and the value with the token you have received from the last step, just like it is. 

Just call the last path again

If everything is correct it will retrieve a `post created...` message in a JSON.
