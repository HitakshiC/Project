import { Request, Response, Router } from "express";
export declare class TeacherController {
    router: Router;
    private ParentService;
    constructor();
    submitted_assignment: (req: Request, res: Response) => Promise<void>;
    submit_assignment: (req: Request, res: Response) => Promise<void>;
    change_profile: (req: Request, res: Response) => Promise<void>;
    update_profile: (req: Request, res: Response) => Promise<void>;
    update_password: (req: Request, res: Response) => Promise<void>;
    sendmsg: (req: Request, res: Response) => Promise<void>;
    view_chat: (req: Request, res: Response) => Promise<void>;
    view_teacherbyid: (req: Request, res: Response) => Promise<void>;
    view_assignmentbyid: (req: Request, res: Response) => Promise<void>;
    view_assignmentbystud: (req: Request, res: Response) => Promise<void>;
    login_teacher: (req: Request, res: Response) => Promise<void>;
    addteacher: (req: Request, res: Response) => Promise<void>;
    addassignment: (req: Request, res: Response) => Promise<void>;
    view_teacher: (req: Request, res: Response) => Promise<void>;
    search_teacher: (req: Request, res: Response) => Promise<void>;
}
