const { MongoClient } = require('mongodb')

// Create Instance of MongoClient for mongodb
const client = new MongoClient('mongodb://0.0.0.0:27017/Property')

// Connect to database
client.connect()
    .then(() => console.log('Connected to MongoDB'))
    .catch(error => console.log('Failed to connect', error))

module.exports = MongoClient
