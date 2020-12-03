// always at top of index.js
const dotenv = require('dotenv');
dotenv.config();
// could also do require('dotenv').config()

const express = require('express');
const cors = require('cors');
const port = process.env.PORT || 4000;

console.log('web 36 rocks');
console.log(__dirname);

console.log(process.env.LADY);
console.log(process.env.FOO);
console.log(process.env.ALWAYS);
console.log(process.env.PORT);

const app = express();
app.use(cors());
app.use(express.json());

// api, routers
app.use('/api/*', (_, res) => {
	res.json({ data: 'will output to all endpoints' });
});

app.listen(port, () => {
	console.log(`listening on ${port}`);
});
