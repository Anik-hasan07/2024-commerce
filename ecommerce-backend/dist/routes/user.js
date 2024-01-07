import express from "express";
import { 
//   deleteUser,
//   getAllUsers,
//   getUser,
newUser, } from "../controllers/user.js";
// import { adminOnly } from "../middlewares/auth.js";
const app = express.Router();
// route - /api/v1/user/new
app.post("/new", newUser);
// Route - /api/v1/user/all
// app.get("/all",  getAllUsers);
// Route - /api/v1/user/dynamicID
// app.route("/:id").get(getUser).delete( deleteUser);
export default app;
