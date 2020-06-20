import express from "express";

const app = express();

app.get("/", (req, res) => {
    return res.json({ message: "Coé" });
});

app.listen(3333);
