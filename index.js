const express = require('express')
const app = express()

const port = 5000 

// endpoint : https://devcore02.cimet.io/v1/generate-token
// Api-key : 4NKQ3-815C2-8T5Q2-16318-55301
// Method: Post


// importing packages
//const express = require('express');
//const router = express.Router();
const fetch = (...args) =>
	import('node-fetch').then(({default: fetch}) => fetch(...args));
app.get(`/`, async function (req, res) {
	const url =
		'https://devcore02.cimet.io/v1/generate-token';
	const options = {
		method: 'POST',
		headers: {
			'Api-key': '4NKQ3-815C2-8T5Q2-16318-55301',
			
		}
	};
	// promise syntax
	fetch(url, options)
		.then(res => res.json())
		.then(json => console.log(json))
		.catch(err => console.error('error:' + err));
	try {
		let response = await fetch(url, options);
		response = await response.json();
		res.status(200).json(response);
	} catch (err) {
		console.log(err);
		res.status(500).json({msg: `Internal Server Error.`});
	}
});


app.listen(port,()=>{
    console.log(`listening on port ${port}`)
})