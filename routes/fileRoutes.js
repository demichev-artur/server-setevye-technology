import express from 'express';
import upload from "../middleware/upload.js";
import {uploadFileController} from "../controllers/upload/uploadController.js";
import {getFilesController} from "../controllers/upload/getFilesController.js";
import {downloadFileController} from "../controllers/upload/downloadFileController.js";

const router = express.Router();


router.get("/", getFilesController);

router.get('/:filename', downloadFileController);

router.post('/upload', upload.single('file'), uploadFileController);

export default router;
