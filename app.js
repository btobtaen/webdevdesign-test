const express=require("express");
const app=express();
//Port number is random.
const port=15000;

//parsing application
app.use(express.urlencoded({extended:true}))

//sends HTML file on GET request
app.get('/',(req,res) => {
    res.sendFile(__dirname + '/ContactMe(2).html')
    res.sendFile(__dirname + '/AboutMe(2).html')
    res.sendFile(__dirname + '/index.html')
});

//requires that first name, last name, and email address are not empty when submitting.
app.post('/submit-form', (req,res) => {
    const fname=req.body.fname;
    const lname=req.body.lname;
    const emailaddr=req.body.emailaddr;
});

//Listening on port 15000
app.listen (port,() => {
    console.log(`Server running on http://localhost:${port}`);
})