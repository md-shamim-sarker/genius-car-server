const express = require('express');
const cors = require('cors');
const {MongoClient} = require('mongodb');

const app = express();
const port = process.env.PORT || 5000;

app.use(express.json());
app.use(cors());

const uri = 'mongodb://localhost:27017';
const client = new MongoClient(uri);

async function run() {
    const servicesCollection = client.db('geniusCar').collection('services');

}
run().catch(err => {
    console.log(err.message);
});

app.get('/', (req, res) => {
    res.send('Server is running fine.....');
});

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});