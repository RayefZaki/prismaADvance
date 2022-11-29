import express from "express";
import { connectDB } from "./config/db";
import bookRouter from "./routes/booksRouter";
import loanRouter from "./routes/loanRouter";
import userRouter from "./routes/userRouter";

const app = express();

connectDB();
app.use(express.json());

app.use(`/api/v1/user`, userRouter);
app.use(`/api/v1/book`, bookRouter);
app.use(`/api/v1/loan`, loanRouter);

const PORT = process.env.port || 5007;
app.listen(PORT, () => {
  console.log("server run on port : " + PORT);
});