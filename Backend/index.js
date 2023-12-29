// import express from "express"
// import mysql from 'mysql'
// import cors from "cors"



// const app = express()



// const db = mysql.createConnection({
//     host:"localhost",
//     user:"root",
//     password:"123",
//     database:"customer",
// })

// app.use(express.json())
// app.use(cors())

// app.get("/", (req,res)=>{
//     res.json("Hello this is backend!")
// })

// app.get("/CustomsegA/:targetValue", (req, res)=>{
//     const targetValue = req.params.targetValue;
//     const q = "SELECT * FROM world_trade WHERE Target = ?" ;
//     db.query(q,[targetValue], (err, data)=>{
//         if(err) return res.json(err)
//         return res.json(data)
//     })
// })


// app.listen(8800, ()=>{
//     console.log("Connected to backend!")
// })


// code 2
// import express from "express";
// import mysql from 'mysql';
// import cors from "cors";

// const app = express();

// const db = mysql.createConnection({
//     host: "localhost",
//     user: "root",
//     password: "123",
//     database: "customer",
// });

// app.use(express.json());
// app.use(cors());

// app.get("/", (req, res) => {
//     res.json("Hello, this is the backend!");
// });

// app.get("/CustomsegA/:targetValue", (req, res) => { // Use "targetValue" as the parameter name
//     const targetValue = req.params.targetValue; // Correctly get the parameter value
//     const q = "SELECT * FROM world_trade WHERE Target = ?";
//     db.query(q, [targetValue], (err, data) => {
//         if (err) return res.json(err);
//         return res.json(data);
//     });
// });

// app.get("/CustomsegAWithPercentage/:targetValue", (req, res) => {
//     const targetValue = req.params.targetValue;
//     const q = "SELECT * FROM world_trade WHERE Target = ?";
    
//     db.query(q, [targetValue], (err, data) => {
//         if (err) return res.json(err);

//         const totalRecords = data.length;
//         const percentage = (totalRecords / totalRecords) * 100;

//         res.json({ data, percentage });
//     });
// });

// app.listen(8800, () => {
//     console.log("Connected to the backend!");
// })



// code 3
import express from "express";
import mysql from 'mysql';
import cors from "cors";

const app = express();

const db = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "123",
    database: "customer",
});

app.use(express.json());
app.use(cors());

app.get("/", (req, res) => {
    res.json("Hello, this is the backend!");
});

app.get("/CustomsegA/:targetValue", (req, res) => {
    const targetValue = req.params.targetValue;
    const q = "SELECT * FROM world_trade WHERE Target = ?";
    db.query(q, [targetValue], (err, data) => {
        if (err) return res.json(err);
        return res.json(data);
    });
});

app.get("/CustomsegAWithPercentage/:targetValue", (req, res) => {
    const targetValue = req.params.targetValue;
    const q = "SELECT * FROM world_trade WHERE Target = ?";

    db.query(q, [targetValue], (err, data) => {
        if (err) return res.json(err);

        const totalRecordsQuery = "SELECT COUNT(*) AS totalRecords FROM world_trade";
        db.query(totalRecordsQuery, (totalErr, totalResult) => {
            if (totalErr) return res.json(totalErr);

            const totalRecords = totalResult[0].totalRecords;
            const percentage = ((data.length / totalRecords) * 100).toFixed(2);

            res.json({ data, percentage });
        });
    });
});

app.listen(8800, () => {
    console.log("Connected to the backend!");
});
