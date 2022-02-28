import express from 'express';
import { Client } from 'pg';

const app = express();
const port = 3000;

const client = new Client({
    password: "root",
    user: "root",
    host: "postgres",
})


client.connect();

app.get("/", async (req, res) => {
    res.setHeader("Content-Type", "application/json");
    res.status(200);
    res.send({"message": "hello world"});
})


app.get("/employees", async (req, res) => {
    const results = await client
      .query("SELECT * FROM employees")
      .then((payload) => {
        return payload.rows;
      })
      .catch(() => {
        throw new Error("Query failed");
      });
    res.setHeader("Content-Type", "application/json");
    res.status(200);
    res.send(JSON.stringify(results));
  });

    
  
app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`);
});
  