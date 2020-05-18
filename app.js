const express = require('express'); 
const app = express();
const mongoose = require('mongoose');
const db = mongoose.connection;
const orgFactory = require('./factories/orgFactory');
const projectFactory = require('./factories/projectFactory');
const sessionFactory = require('./factories/sessionFactory');
const userFactory = require('./factories/userFactory');
const User = require('./models/User');
const Session = require('./models/Session');
const Project = require('./models/Project');
const Org = require('./models/Org');
const bodyParser = require('body-parser');
const jsonParser = bodyParser.json();
const org_controller = require('./controllers/org_controller');
const project_controller = require('./controllers/project_controller');
const session_controller = require('./controllers/session_controller');
const user_controller = require('./controllers/user_controller');

app.get('/', (req, res) => res.send('hello world'));

app.post('/org', jsonParser, async (req, res) => {
    try{
        const org = await orgFactory.org(req)
        const savedPost = await org.save()
        await res.send(savedPost)
    }
    catch(err){
        res.send("there was an error")
    }
});

app.post('/project', jsonParser, async (req, res) => {
    try{
        const project = await projectFactory.project(req)
        const savedProject = await project.save()
        const org = await Org.findById({_id: req.body.org})
        await org.projects.push(savedProject._id)
        await org.save()
        await res.send(savedProject)
    }
    catch(err){
        res.send("there was an error")
        console.log(err)
    }
});

app.post('/session', jsonParser, async (req, res) => {
    try{
        const session = await sessionFactory.session(req)
        const savedSession = await session.save()
        const project = await Project.findById({_id: req.body.project})
        await project.sessions.push(savedSession._id)
        await project.save()
        await res.send(savedSession)
    }
    catch(err){
        res.send("there was an error")
        console.log(err)
    }
});

app.post('/user', jsonParser, async (req, res) => {
    try{
        const user = await userFactory.user(req)
        const savedUser = await user.save()
        await res.send(savedUser)
    }
    catch(err){
        res.send("there was an error")
        console.log(err)
    }
});

app.post('/subscribe', jsonParser, async (req, res) => {
    try{
        const project = await Project.findById({_id: req.body.project})
        await project.subscribers.push(req.body.user)
        await project.save()
        await res.send("you have subscribed")
    }
    catch(err){
        console.log(err)
    }
});

app.post('/subscribers', jsonParser, async (req, res) => {
    try{
        const org = await Org.findById({_id: "5ec06cd7e9bfdc5c9a0851ff"})
        .populate({
            path: 'projects',
            populate: { path: 'subscribers' }
        })
        await res.send(org)
    }
    catch(err){
        res.send("there was an error")
        console.log(err)
    }
});

db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', () => console.log("were connected to DB"));
mongoose.connect('mongodb+srv://Adrian:Ishaqsol1234@cluster0-zffly.mongodb.net/test?retryWrites=true&w=majority', {useNewUrlParser: true, useUnifiedTopology: true});
app.listen(3000, () => console.log('waiting on port 3000'));

