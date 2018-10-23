var express = require('express');
var app = express();
var jwt = require('jsonwebtoken');

app.get('/api', (req, res) => {
	res.json({message:'worked fine!'});
});


// INSERT A MIDDLEWARE METHOD TO VERIFY AUTHORIZATION
app.post('/api/posts', verifyToken, (req, res) => {
    res.json({message:'post created...'});
});

app.post('/api/login', (req, res) => {
    // THE USER IS A MOCK BECAUSE I WAS ONLY TRYING TO UNDERSTAND THE AUTHORIZATION
	let user = {
		id: 1,
		username: 'name of the user',
		email: 'user@email.com'
	};
	jwt.sign({user}, 'secretKey', (err, token) => {
        res.json({token});
    });
});

function verifyToken(req, res, next) {
    
    // GETTING THE HEADER - authorization
    const bearerHeader = req.headers['authorization'];
    
    
    //VERIFING IF IT ISN'T UNDEFINED
    if(typeof bearerHeader !== 'undefined') {
        
        // IF IT'S NOT UNDEFINED VERIFY ITS LEGIBILITY
        const token = bearerHeader.substring(7);
        jwt.verify(token, 'secretKey', (err, token) => {
            if(err) res.sendStatus(403).end();
            next();
        });
    } else {
        // IF THE HEADER IS UNDEFINED RETURN A FORBIDDEN STATEMENT
        res.sendStatus(403).end();
    };
    
};

app.listen(3000, () => {console.log('server is running on port 3000');});
