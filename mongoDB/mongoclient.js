const { MongoClient } = require('mongodb');

// Connection URL (local MongoDB server)
const url = 'mongodb://localhost:27017';
const client = new MongoClient(url);

// Database Name
const dbName = 'myDatabase';

async function main() {
  try {
    // Connect to the MongoDB server
    await client.connect();
    console.log('Connected successfully to local MongoDB server!');

    const db = client.db(dbName);
    
    // In MongoDB, a "table" is called a "collection". 
    // This automatically creates a collection named 'users' when data is inserted.
    const collection = db.collection('users');

    // Insert a sample document (like a row in a table)
    const insertResult = await collection.insertOne({ name: 'John Doe', email: 'john@example.com' });
    console.log('Inserted document:', insertResult.insertedId);

  } catch (err) {
    console.error('Connection failed:', err);
  } finally {
    // Close the connection
    await client.close();
  }
}

main();