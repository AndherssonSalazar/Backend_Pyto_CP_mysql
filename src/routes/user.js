import { Router } from "express";
import * as userCtrl from "../controllers/user.controller";
import { isAdmin, verifyToken } from "../middlewares/authJwt";
import { checkExistingUser } from "../middlewares/verifySignUp";

const router = Router();

router.get('/', userCtrl.getUsers);
router.get('/inhabilitados', userCtrl.getUsersInhabiltados);
router.get('/read/:dni', userCtrl.getUserDni);
router.post("/create", userCtrl.createUser);
router.put("/update/:_id", [verifyToken, isAdmin], userCtrl.updateUserById);
router.put("/inhabilitar/:_id", userCtrl.updateUserInhabilitar);
router.put("/habilitar/:_id",  userCtrl.updateUserHabilitar);
export default router;