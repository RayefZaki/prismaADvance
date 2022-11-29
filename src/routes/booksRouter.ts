import express from "express";
import { addNewBook, getAllBooks } from "../controller/booksController";
import validate from "../middlewares/validate";
import { addBooksSchema } from "../zod-Schema/zodSchema";

const bookRouter = express.Router();

bookRouter.get(`/`, getAllBooks);
bookRouter.post(`/`, validate(addBooksSchema), addNewBook);

export default bookRouter;