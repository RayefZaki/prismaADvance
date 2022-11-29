import express from "express";
import {addNewLoan,getAllLoan,lendBooks,} from "../controller/loanController";
import validate from "../middlewares/validate";
import { addLoanSchema } from "../zod-Schema/zodSchema";

const loanRouter = express.Router();

loanRouter.get(`/`, getAllLoan);
loanRouter.get(`/user/loan/:userid`, lendBooks);
loanRouter.post(`/`, validate(addLoanSchema), addNewLoan);

export default loanRouter;