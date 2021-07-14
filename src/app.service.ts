import { Injectable } from '@nestjs/common';
import {Model} from 'mongoose';
import {User} from './user.model';
import {InjectModel} from '@nestjs/mongoose';


@Injectable()
export class AppService {
  googleLogin(req) {
    if (!req.user) {
      return 'No user from google'
    }

    return `<h1 style="text-align:center">Welcome ${req.user.firstName} ${req.user.lastName}</h1>`
  }
  constructor(@InjectModel('User') private readonly userModel:Model<User>){

  }
  async addUser(name:string,email:string){
let user=await this.userModel.findOne({email:email});


if(user){
 console.log("user exists");
 
}else{

  const newuser=new this.userModel({
    name:name,
    email:email
  });
 const result=await newuser.save();
 return result;
}
   
    
  }
}