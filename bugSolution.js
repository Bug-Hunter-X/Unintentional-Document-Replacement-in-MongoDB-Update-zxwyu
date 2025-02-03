```javascript
const MongoClient = require('mongodb').MongoClient;

async function updateDocument() {
  const uri = "mongodb+srv://<username>:<password>@<cluster-address>/<database>?retryWrites=true&w=majority";
  const client = new MongoClient(uri);

  try {
    await client.connect();
    const database = client.db('myDatabase');
    const collection = database.collection('myCollection');

    // Correct update operation using $set to update only the age field
    const updateQuery = {
        $set: {
            age: 30
        }
    };
    const result = await collection.updateOne({ name: 'John Doe' }, updateQuery);
    console.log('Modified count:', result.modifiedCount);
  } finally {
    await client.close();
  }
}

updateDocument().catch(console.dir);
```