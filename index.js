const express = require("express");
const path = require("path");
const app = express();
const port =process.env.PORT|| 2000;
const router = express.Router();

router.get('/',function(req,res){
    res.sendFile(path.join(__dirname+'/home.html'));
    //__dirname : It will resolve to your project folder.
  });
  app.use('/', router);
  app.listen(port);

console.log(`Running at port ${port}`);
  