"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.GoogleSrategy = void 0;
const passport_1 = require("@nestjs/passport");
const passport_google_oauth20_1 = require("passport-google-oauth20");
const dotenv_1 = require("dotenv");
const common_1 = require("@nestjs/common");
dotenv_1.config();
let GoogleSrategy = class GoogleSrategy extends passport_1.PassportStrategy(passport_google_oauth20_1.Strategy, "google") {
    constructor() {
        super({
            clientID: process.env.google_client_id,
            clientSecret: process.env.google_client_secret,
            callbackURL: 'http://localhost:3000/auth/google/redirect',
            scope: ['email', 'profile']
        });
    }
    async validate(accessToken, refreshToken, profile, done) {
        const { name, emails, photos } = profile;
        const user = {
            email: emails[0].value,
            firstName: name.givenName,
            lastName: name.familyName,
            picture: photos[0].value,
            accessToken
        };
        console.log(profile);
        done(null, user);
    }
};
GoogleSrategy = __decorate([
    common_1.Injectable(),
    __metadata("design:paramtypes", [])
], GoogleSrategy);
exports.GoogleSrategy = GoogleSrategy;
//# sourceMappingURL=google.strategy.js.map