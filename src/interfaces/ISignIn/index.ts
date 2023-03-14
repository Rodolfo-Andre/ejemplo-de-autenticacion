import type { IUser } from "..";

export default interface ISignIn extends Pick<IUser, "email" | "password"> {}
