import { JwtPayload } from "jsonwebtoken";
import { Request } from "express";

/**
 * Description placeholder
 * @date 2/21/2024 - 12:58:16 PM
 *
 * @export
 * @interface RequestExt
 * @typedef {RequestExt}
 * @extends {Request}
 */
export interface RequestExt extends Request {
  /**
   * Description placeholder
   * @date 2/21/2024 - 12:58:16 PM
   *
   * @type {?(JwtPayload | { id: string })}
   */
  user?: JwtPayload | { id: string };
}