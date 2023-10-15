const mongoose = require('mongoose')
const fs = require('fs')
const path = require('path')
const alltasksSchema = new mongoose.Schema(
  {
    id: Number,
   category: {
      type: String,
      
    },
    details: [
      {title: String,
        description: String
        }
      
    ],
  
  }
 
);


let Data = mongoose.model('alltasks', alltasksSchema)
// const dbjson = require('../db.json')

// const jsonFilePath = "../db.json";
// const jsonData = JSON.parse(fs.readFileSync(path.resolve(__dirname, jsonFilePath)));

// // Insert the data into the database
// Data.insertMany(jsonData).then((err) => {
//   if (err) {
//     console.error("Error seeding data:", err);
//   } else {
//     console.log("Data seeded successfully!");
//   }

//   // Close the database connection
//   mongoose.connection.close();
// });
module.exports = Data
