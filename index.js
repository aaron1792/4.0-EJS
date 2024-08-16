import express from "express";


const app = express();
const port = 3000;


app.get("/" , (req , res)=>{
    const today = new Date("August 16,2024 10:00:00");
    const day = today.getDay();

    let type = "it's a weekday"
let ad = "it's time to work hard!"

if(day === 0 || day === 6){

    type = "It is the weekend"
    ad = "it's time to have fun"
}

    res.render("index.ejs", {
       dayType : type,
       advice  : ad
    })
})



app.listen(port,()=>{

    console.log(`Conneted to port ${port}`)
});