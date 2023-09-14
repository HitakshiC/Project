import { Request, Response, Router } from "express";
export declare class InstituteController {
    router: Router;
    private ParentService;
    constructor();
    remove_stud: (req: Request, res: Response) => Promise<void>;
    nonaddedsearchstud: (req: Request, res: Response) => Promise<void>;
    addedsearchstud: (req: Request, res: Response) => Promise<void>;
    addedstudlist: (req: Request, res: Response) => Promise<void>;
    addstudlist: (req: Request, res: Response) => Promise<void>;
    view_group: (req: Request, res: Response) => Promise<void>;
    search_group: (req: Request, res: Response) => Promise<void>;
    view_groupbyid: (req: Request, res: Response) => Promise<void>;
    login_user: (req: Request, res: Response) => Promise<void>;
    addinstitute: (req: Request, res: Response) => Promise<void>;
    addgroup: (req: Request, res: Response) => Promise<void>;
    addstudgroup: (req: Request, res: Response) => Promise<void>;
    view_institute: (req: Request, res: Response) => Promise<void>;
}
