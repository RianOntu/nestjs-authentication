import { Model } from 'mongoose';
import { User } from './user.model';
export declare class AppService {
    private readonly userModel;
    googleLogin(req: any): string;
    constructor(userModel: Model<User>);
    addUser(name: string, email: string): Promise<User>;
}
