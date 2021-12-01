const express = require('express');
const app = express();
const cars = require('./cars.json');
app.use(express.json());

app.get("/cars",(req, res) => {
    console.log("hello form get request");
    res.send({ "api_requested_by": "Nitin Gupta" , "cars":cars});
})

app.get("/cars/:company",(req, res) => {
    const company = cars.filter((element)=>{
        if(element.company === req.params.company){
            return (element);
        }
    })
    res.json( {"api_requested_by": "Nitin Gupta", "company":company});
    
})
app.post("/",(req, res) => {
    console.log("hello form post request");
    const newCar = [...cars, req.body];
    res.json(  {"api_requested_by": "Nitin Gupta", "cars":newCar});
})

app.patch("/:car_name",(req, res) => {
    const new_car = cars.map((ele)=>{
        if(req.params.car_name === ele.car_name) {
            ele = req.body;
        }
        return ele;
    })
    res.json( {"api_requested_by": "Nitin Gupta", "cars":new_car})
})

app.delete("/:car_name", (req, res) => {
    const car = cars.filter((ele)=>{
        if(req.params.car_name !== ele.car_name) {
            return ele;
        }
    })
    res.json( {"api_requested_by": "Nitin Gupta", "cars":car});
})
app.listen(1234,function(){
    console.log('listening on port 1234');
})