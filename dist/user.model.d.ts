import * as mongoose from 'mongoose';
export declare const UserSchema: mongoose.Schema<mongoose.Document<any, any, any>, mongoose.Model<any, any, any>, undefined, any>;
export interface User extends mongoose.Document {
    id: string;
    name: string;
    email: string;
    password: string;
}
