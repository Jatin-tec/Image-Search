import weaviate from 'weaviate-ts-client';
import schemaConfig from './schema.js';


// Create client
const client = weaviate.client({
  scheme: 'http',
  host: 'localhost:8080',  // Replace with your endpoint
});


// Create schema 
await client.schema
    .classCreator()
    .withClass(schemaConfig)
    .do();

const schemaResponse = await client.schema.getter().do();
console.log(schemaResponse);


// Make query to Weaviate
import { readFileSync, writeFileSync } from 'fs';

const test = Buffer.from(readFileSync('path')).toString('base64');

const resImage = await client.graphql.get()
    .withClassName('Person')
    .withFields(['image'])
    .withNearImage({ image: test })
    .withLimit(10)
    .do();

result = resImage.data.Get.Person[0].image;
writeFileSync('result.jpg', result, 'base64');