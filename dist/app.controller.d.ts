import { AppService } from './app.service';
export declare class AppController {
    private readonly appService;
    constructor(appService: AppService);
    googleAuth(req: any): Promise<any>;
    googleAuthRedirect(req: any, res: any): Promise<any>;
}
