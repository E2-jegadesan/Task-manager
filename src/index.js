const express = require('express')
require('./db/mongoose')
const User = require('./models/user')
const Task = require('./models/task')
const userRouter = require('./router/user')
const taskRouter = require('./router/task')


const app = express()
const port = process.env.PORT


app.use(express.json())
app.use(userRouter)
app.use(taskRouter)


app.listen(port, () => {
    console.log('Server is up on port ' + port)
})

// const multer = require('multer')
// const upload = multer({
//     dest : 'images'
// })

// app.post('/upload', upload.single('upload'), (req, res)=>{
//     res.send()
// })



// const main= async()=>{
//     const user = await User.findById('61d41304e6d30a7cc0a0c1a6').populate('tasks')
//     // await user
//     console.log(user.tasks)

//     // const task = await Task.findById('61d424fdcc7134fe860f0386').populate('owner')
//     // // await task
//     // console.log(task.owner)
// }
// main()







//To restrict the user the GET the datas
// app.use((req, res, next)=>{
//     if(req.method === 'GET'){
//         res.send('GET request are disabled')
//     }else{
//         next()
//     }
// })

//Maintanace of app
// app.use((req,res,next)=>{
//     res.status(503).send('Application Under Maintenance, Try after some time..!')
// })





// const jwt = require('jsonwebtoken')

// const myFunction = async () => {
//     const token = jwt.sign({_id:'abc123'}, 'thisismycourse',{expiresIn:'7 days'})
//     console.log(token)

//     const data = jwt.verify(token , 'thisismycourse')
//     console.log(data)
    
// }

// myFunction()





// const password = "Pass@123"
//     const hashedPass = await bcrypt.hash(password, 8)

//     console.log(password)
//     console.log(hashedPass)

//     const isMatch = await bcrypt.compare('Pass@123', hashedPass)

//     console.log(isMatch)














//User main code

    // User.find({}).then((users) => {
    //     res.send(users)
    // }).catch((e) => {
    //     res.status(500).send(e)
    // })

    // User.findById(_id).then((user) => {
    //     if (!user) {
    //         return res.status(404).send()
    //     }

    //     res.send(user)
    // }).catch((e) => {
    //     res.status(500).send(e)
    // })



//task main code

    // const task = new Task(req.body)

    // task.save().then(() => {
    //     res.status(201).send(task)
    // }).catch((e) => {
    //     res.status(400).send(e)
    // })

    // Task.find({}).then((task) => {
    //     res.status(201).send(task)
    // }).catch((e) => {
    //     res.status(500).status(e)
    // })

    // const _id = req.params.id

    // Task.findById(_id).then((task) => {
    //     if (!task) {
    //         return res.status(404).send()
    //     }
    //     res.status(201).send(task)
    // }).catch((e) => {
    //     res.status(500).send(e)
    // })