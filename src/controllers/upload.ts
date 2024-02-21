import { Request, Response } from "express";
import dbConnect from "../config/mongo";
import { RequestExt } from "../interfaces/req-ext";
import { Storage } from "../interfaces/storage";
import { registerUpload } from "../services/storage";
import { handleHTTP } from "../utils/errorHandle";

const getFile = async (req: RequestExt, res: Response) => {
  try {
    const { user, file } = req;
    const dataToregister:Storage={
      fileName: `${file?.filename}`,
      idUser: `${user?.id}`,
      path:`${file?.path}`
    }
    const response = await registerUpload(dataToregister);
    res.send(response);
  } catch (e) {
    handleHTTP(res, "ERROR_GET_BLOG");
  }
};

export { getFile };

