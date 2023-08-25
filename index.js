const express = require("express");

const app = express();
app.get("/", (req, res) => {
  res.send("hellow world");
});

app.listen(3344);
console.log("App is running in port 3344");
/* 
1.  creat a new git repo
   a. name it express-website
   b. turn on Add Readme option
   c . add.gitignore template(select Node)

2. git clone <github-url>
3. creat index.js file
4. open terminal,
   a.npm i express
   b. npm i --save-dev nodemon
   d. fill up the form 

5. in index.js
   a. require express
   b.app=express()
   c. listen
   d.console.log
   e.app.get('/',hellow world callback)
   
   6. In package.json
      a. add start script in script object ,as nodemon.



*/
