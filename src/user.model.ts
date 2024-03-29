import * as mongoose from 'mongoose';

export const UserSchema=new mongoose.Schema({
    name: {
        type: String,
    },
    email: {
        type: String,
        required: true,
        minlength: 5,
        maxlength: 150,
        unique: true
    },
    password: {
        type: String,
        minlength: 8,
        maxlength: 100
    }
}, { timestamps: true })

export interface User extends mongoose.Document{
   
    
    id:string;
    name:string;
    email:string;
    password:string;
} 