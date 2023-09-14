import { Request, Response, Router } from "express";
export declare class EmailController {
    router: Router;
    private ParentService;
    constructor();
    sendotp: (req: Request, res: Response) => Promise<void>;
    bookingotp: (req: Request, res: Response) => Promise<void>;
    private sendmail;
}
