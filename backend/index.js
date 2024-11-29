const express = require('express');
const { MongoClient, ServerApiVersion } = require('mongodb');
const cors = require('cors');
const dotenv = require('dotenv').config();


const app = express()
app.use(express.json());
app.use(express.urlencoded({extended : true}));


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

    app.listen(4000, ()=>{
        console.log('this server is start')});
  } 
  finally {

  }
}
run().catch(console.dir);
