/**
import { Request } from "express";
import multer, { diskStorage } from "multer";

 * Description placeholder
 * @date 2/21/2024 - 12:59:03 PM
 *
 * @type {string}
const PATH_STORAGE = `${process.cwd()}/storage`;

 * Description placeholder
 * @date 2/21/2024 - 12:59:03 PM
 *
 * @type {*}
const storage = diskStorage({
  destination(req: Request, file: Express.Multer.File, cb: any) {
    cb(null, PATH_STORAGE);
  },
  filename(req: Request, file: Express.Multer.File, cb: any) {
    const ext = file.originalname.split(".").pop();
    const fileNameRandom = `image-${Date.now()}.${ext}`;
    cb(null, fileNameRandom);
  },
});

 * Description placeholder
 * @date 2/21/2024 - 12:59:03 PM
*
* @type {*}
const multerMiddleware = multer({ storage });

export default multerMiddleware;
*/