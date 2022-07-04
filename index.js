const express = require('express')
const mongoose = require('mongoose')
const dotenv = require('dotenv')
const userRoute = require('./routes/users')
const pinRoute = require('./routes/pins')
const path = require('path')
const app = express()

dotenv.config()

app.use(express.json());

mongoose.connect(process.env.MONGO_URL , {useNewUrlParser: true, useUnifiedTopology: true}).then(() =>{
    console.log('database connected')
}).catch((err) => console.log(err))    


//ROUTES 
app.use("/api/pins", pinRoute)
app.use("/api/users", userRoute) 
  

// app.use(express.static(path.join(__dirname, "./frontend/build")));

// app.get("*", function (_, res) {
//   res.sendFile(
//     path.join(__dirname, "./frontend/build/index.html"),
//     function (err) {
//       if (err) {
//         res.status(500).send(err);
//       }
//     }
//   );
// });

const port = process.env.PORT || 5000

app.listen(port , () => {      
    console.log("backend running")  
})      