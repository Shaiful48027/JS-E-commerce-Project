const express = require('express');
const { MongoClient, ServerApiVersion } = require('mongodb');
const cors = require('cors');
const dotenv = require('dotenv').config();

const app = express()
app.use(express.json());
app.use(express.urlencoded({extended : true}));
app.use(cors());

const uri = process.env.URI;

const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  }
});
async function run() {
  try {
    await client.connect();
    console.log('the database is connected');
    
    // slider mangment 

    const db = client.db('js-E-commerce');
    const slideCL = db.collection('slider');

    app.get('/slider', async(req, res)=>{
      const result = await slideCL.find().toArray();
      res.send(result);
    })

    // product mangment 

    const productCollection = db.collection('Products');
    app.get('/products', async(req, res)=>{

      const totalProduct = await productCollection.countDocuments();

      let skip = 0;

      if (totalProduct > 10) {
        skip = totalProduct - 10;
      }
      else{
        skip = 0;
      }

      const results = await productCollection.find().skip(skip).toArray();
      res.send(results);
    })

    app.listen(process.env.PORT, ()=>{
        console.log('this server is start')});
  } 
  finally {

  }
}
run().catch(console.dir);
