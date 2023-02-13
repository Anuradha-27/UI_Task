const express = require('express')
const fs = require('fs')
const port = 4000
const app = express()
var cors = require('cors')
const bcrypt = require('bcrypt');
const saltRounds = 10;
const myPlaintextPassword = 's0/\/\P4$$w0rD';
app.use(cors())
const data = require('./Data.json')
app.use(express.json())

app.post('/users', (req, res) => {
  const hash = bcrypt.hashSync(req.body.password, saltRounds);

    let userObject ={
        'firstName':req.body.firstName,
        'lastName':req.body.lastName,
        'email':req.body.email,
        'password':hash,
    }
       data.push(userObject);
      let userJson = JSON.stringify(data);
      fs.writeFile("./data.json", userJson, (error) => {
        if (error) {
          res.send("wrong input send");
        } else {
          res.send(userObject);
        }
      });

})



app.get('/users', (req, res) => {
   const users=getUserData()
   res.send(users)

})

const getUserData = () => {
  const jsonData = fs.readFileSync('data.json')
  return JSON.parse(jsonData)    
}

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
  })

  app.post('/login', (req, res) => {
    const existUsers = getUserData()
    
   //const userData = req.body
    const userData=req.body
  
  
    const findExist = existUsers.find( user =>  user.email === userData.email && bcrypt.compareSync(userData.password,user.password))
    console.log(findExist)
    if (findExist) {
        return res.status(200).send({success:true,msg: 'Login successful'})
    } else {
      return res.status(404).send({error:true,msg:'email does not exist'})
    }
  

     //append the user data
   
  
  })
  
  