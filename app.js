const express=require('express')
const bodyParser = require('body-parser');
const app=express()
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
const sequelize=require('./database/db')
const expenseroutes=require('./routes/expenseroutes')

const cors=require('cors')

app.use(cors())

app.use('/expenses',expenseroutes)

sequelize.sync()
.then(()=>app.listen(3000))
.catch(err=>console.log(err))




