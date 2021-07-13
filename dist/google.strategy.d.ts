import { Strategy, VerifyCallback } from 'passport-google-oauth20';
declare const GoogleSrategy_base: new (...args: any[]) => Strategy;
export declare class GoogleSrategy extends GoogleSrategy_base {
    constructor();
    validate(accessToken: string, refreshToken: string, profile: any, done: VerifyCallback): Promise<any>;
}
export {};
