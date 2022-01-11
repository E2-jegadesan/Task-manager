const express = require('express')
const Task = require('../models/task')
const auth = require('../middleware/auth')
const router = new express.Router()

//Task Module
router.post('/task',auth , async (req, res) => {
        //const task = await new Task(req.body)
        const task = new Task({
            ...req.body,
            owner: req.user._id
        })
        
    try {
        await task.save()
        res.status(201).send(task)
    } catch (e) {
        res.status(400).send(e)
    }
})

router.get('/tasks',auth, async (req, res) => {
    const match = {}
    const sort ={}
    if(req.query.completed){
        match.completed= req.query.completed === 'true'
    }

    if(req.query.sortBy){
        const parts = req.query.sortBy.split(':')
        sort[parts[0]] = parts[1] =='desc'?-1:1
        
    }

    try {
        // const task = await Task.find({owner:req.user._id})
        await req.user.populate({
            path:'tasks',
            match,
            options:{
                limit: parseInt(req.query.limit),
                skip: parseInt(req.query.skip),
                sort
            }
        })
        res.status(201).send(req.user.tasks)
    } catch (e) {
        res.status(500).send(e)
    }
})

router.get('/tasks/:id',auth, async (req, res) => {
    const _id = req.params.id
    try {
        // const task = await Task.findById(req.params.id)
        const task = await Task.findOne({ _id, owner:req.user._id}) 
        if (!task) {
            res.status(404).send()
        }
        res.status(200).send(task)
    } catch (e) {
        res.status(500).send(e)
    }

})

router.patch('/tasks/:id',auth, async (req, res) => {
    const updates = Object.keys(req.body)
    const allowedUpdates = ['description', 'completed']
    const isValidOperation = updates.every((update) => allowedUpdates.includes(update))

    if (!isValidOperation) {
        res.status(400).send({ error: 'Invalid Updates..!' })
    }

    try {
        //const task = await Task.findByIdAndUpdate(req.params.id, req.body, { new: true, runValidators: true })
        const task = await Task.findOne({_id:req.params.id, owner:req.user._id})

        if (!task) {
            res.status(404).send()
        }

        updates.forEach((update) => task[update] = req.body[update])
        await task.save()

        res.send(task)
    } catch (e) {
        res.status(400).send(e)
    }
})

router.delete('/tasks/:id',auth, async(req,res)=>{

    try{
        const task = await Task.findByIdAndDelete({_id:req.params.id,owner:req.user._id})
        if(!task){
            res.status(404).send()
        }
        res.status(200).send({message: 'Task Deleted..!'})
    }catch(e){
        res.status(500).send(e)
    }
})

module.exports = router