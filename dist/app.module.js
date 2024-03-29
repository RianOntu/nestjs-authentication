"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppModule = void 0;
const common_1 = require("@nestjs/common");
const app_controller_1 = require("./app.controller");
const app_service_1 = require("./app.service");
const google_strategy_1 = require("./google.strategy");
const mongoose_1 = require("@nestjs/mongoose");
const user_model_1 = require("./user.model");
let AppModule = class AppModule {
};
AppModule = __decorate([
    common_1.Module({
        imports: [mongoose_1.MongooseModule.forRoot(`mongodb+srv://RianOntu:${process.env.db_password}@cluster0.qioqq.mongodb.net/nestjs-authentication?retryWrites=true&w=majority`), mongoose_1.MongooseModule.forFeature([{ name: "User", schema: user_model_1.UserSchema }])],
        controllers: [app_controller_1.AppController],
        providers: [app_service_1.AppService, google_strategy_1.GoogleSrategy],
    })
], AppModule);
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map