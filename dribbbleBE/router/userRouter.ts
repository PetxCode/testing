import { Router } from "express";
import {
  createUserAccount,
  getAllUser,
  getAllUsers,
  loginUserAccount,
  sendMail,
} from "../controller/userController";

const router: Router = Router();

router.route("/send-mail").get(sendMail);

router.route("/get-users").get(getAllUsers);
router.route("/create-user").post(createUserAccount);
router.route("/login-user").post(loginUserAccount);

export default router;
