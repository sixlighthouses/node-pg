import express from 'express';

const app = express();
const port = 3000;


app.get("/", async (req, res) => {
    res.setHeader("Content-Type", "application/json");
    res.status(200);
    res.send({"message": "hello world"});
})

app.listen(port, () => {
    console.log(`Server running on port ${port}`)
});