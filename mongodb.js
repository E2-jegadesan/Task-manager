const { MongoClient, ObjectId } = require('mongodb')
// shorthand 

const connectionURL = 'mongodb://127.0.0.1:27017'
const databaseName = 'task-manager'

MongoClient.connect(connectionURL, { useNewUrlParser: true }, (error, client) => {
    if (error) {
        return console.log('Unable to connect to database..!')
    }
    const db = client.db(databaseName)
    // db.collection('Task').deleteMany({Description:'HTML'}
        
    // ).then((result)=>{
    //     console.log('success',result)
    // }).catch((error)=>{
    //     console.log('error',error)
    // })
    db.collection('Task').deleteOne({Description:'JS'}
        
    ).then((result)=>{
        console.log('success',result)
    }).catch((error)=>{
        console.log('error',error)
    })
    
})
















// const mongodb = require('mongodb')
// const MongoClient = mongodb.MongoClient

// const id = new ObjectId()
// console.log(id.id.length)
// console.log(id.toHexString().length)

// db.collection('Task').insertMany([
    //     {
    //         Description: 'HTML',
    //         Completed: true
    //     },
    //     {
    //         Description: 'CSS',
    //         Completed: true
    //     },
    //     {
    //         Description: 'JS',
    //         Completed: false
    //     },
    //     {
    //         Description: 'React',
    //         Completed: false
    //     }
    // ], (error, result) => {
    //     if (error) {
    //         return console.log('unable to insert documents!...')
    //     }
    //     console.log(result)
    // })

// db.collection('Task').findOne({ _id: new ObjectId("61bb078c1601b1399a1947ce") }, (error, user) => {
    //     console.log(user)
    // })
    // db.collection('Task').find({ Completed:false}).toArray((error ,users)=>{
    //     console.log(users)
    // })