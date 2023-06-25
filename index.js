import express from 'express';

const app = express();

app.use(express.json());

app.get('/', (req, res) => {
    res.send({
        "message": "Hello World!"
    })
});

app.get("/hello", (req, res) => {
    res.send({
        "message": "Hello Earth!"
    })
});

app.get("/exit", (req, res) => {
    res.send({
        "message": "Goodbye!"
    });
    exit();
})
app.listen(3000, () => {
    console.log('Server is running on port 3000');
});