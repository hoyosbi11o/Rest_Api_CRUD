/**
import { Schema, Types, model, Model } from "mongoose";
import { Storage } from "../interfaces/storage";

 * Description placeholder
 * @date 2/21/2024 - 1:01:00 PM
 *
 * @type {*}
 
const StorageSchema = new Schema<Storage>(
  {
    fileName: {
      type: String,
    },
    idUser: {
      type: String,
    },
    path: {
      type: String,
    },
  },
  {
    versionKey: false,
    timestamps: true,
  }
);


 * Description placeholder
 * @date 2/21/2024 - 1:01:00 PM
 *
 * @type {*}
const StorageModel = model("storage", StorageSchema);
export default StorageModel;

*/