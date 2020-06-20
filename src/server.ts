import express from "express";
import { UserController } from "@controllers/UserController";

const app = express();

app.get("/", (req, res) => {
    const user = new UserController().create("Rony");
    return res.json({ message: `Coé ${user.name}` });
});

app.listen(3333);
