import express from  "express"
import { protect } from "../middleware/authMiddleware.js";
import multer from "multer";
import { parseResponseFromText } from "../Controllers/ai.Controller.js";

const router = express.Router();
const upload = multer({ storage: multer.memoryStorage() });

router.post("/generate", upload.single("file"), parseResponseFromText);

export default router;