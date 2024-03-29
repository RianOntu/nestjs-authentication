import {PassportStrategy} from '@nestjs/passport';
import { Strategy,VerifyCallback} from 'passport-google-oauth20';
import {config} from 'dotenv';
import {Injectable} from '@nestjs/common';

config();
@Injectable()
export class GoogleSrategy extends PassportStrategy(Strategy,"google"){
    constructor(){
        super({
            clientID:process.env.google_client_id,
            clientSecret: process.env.google_client_secret,
            callbackURL: 'http://localhost:3000/auth/google/redirect',
            scope: ['email', 'profile']
        })
    }
    async validate(accessToken: string, refreshToken: string, profile: any, done: VerifyCallback): Promise<any> {
        const { name, emails, photos } = profile
        const user = {
            email: emails[0].value,
            firstName: name.givenName,
            lastName: name.familyName,
            picture: photos[0].value,
            accessToken
        }
        console.log(profile);
        
        done(null, user);
    }
}