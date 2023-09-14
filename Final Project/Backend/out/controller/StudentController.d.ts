import { Request, Response, Router } from "express";
export declare class StudentController {
    router: Router;
    private ParentService;
    constructor();
    change_profile: (req: Request, res: Response) => Promise<void>;
    update_profile: (req: Request, res: Response) => Promise<void>;
    view_grp: (req: Request, res: Response) => Promise<void>;
    login_stud: (req: Request, res: Response) => Promise<void>;
    update_password: (req: Request, res: Response) => Promise<void>;
    addstudent: (req: Request, res: Response) => Promise<void>;
    view_user_byid: (req: Request, res: Response) => Promise<void>;
    view_user: (req: Request, res: Response) => Promise<void>;
    search_student: (req: Request, res: Response) => Promise<void>;
}
