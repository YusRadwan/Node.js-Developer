import { Document } from "mongoose";
interface IUser extends Document {
    username: string;
    email: String;
    password: string;
}
declare const User: import("mongoose").Model<IUser, {}, {}, {}, Document<unknown, {}, IUser> & IUser & Required<{
    _id: unknown;
}> & {
    __v: number;
}, any>;
export default User;
