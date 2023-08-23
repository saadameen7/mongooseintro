const mongoose = require("mongoose");
mongoose.connect("mongodb://0.0.0.0:27017/test");

const testSchema = new mongoose.Schema ({
    name: {
        type: String,
        required: [true,'Name field is important']
    },
    rating: {
        type:Number,
        min:0,
        max:5
    },
    review:String
})

const Test = mongoose.model("Test", testSchema)
const test1 = new Test ({
    rating: 4,
    review:"this is very best"
})

test1.save();

const personSchema = new mongoose.Schema ({
    
    name: String,
    age:Number
})
 const Person = mongoose.model("Person",personSchema);

 const p1 = new Person({
    name:"Ali",
    age: 22
 })
 const p2 = new Person({
    name:"usman",
    age: 23
 })
 const p3 = new Person({
    name:"Akber",
    age: 24
 })

// Test.insertMany([p1,p2,p3])

// Person.find((err,result)=>{
//     if (err) {
//         console.log(err)
//     } else {
//         mongoose.connection.close();
//         // console.log(result)   
//         result.forEach(element => {
//             console.log(element.name);
//         });
//     }

// })