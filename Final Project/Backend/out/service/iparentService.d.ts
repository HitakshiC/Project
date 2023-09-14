import { UserLogin } from "src/db/model/userlogin";
export interface IParentService {
    User_Login(username: string, password: string): Promise<UserLogin>;
    Insert_data(table: string, col: string, val: string, primaryid: string): any;
    Update_data(table: string, set: string, where: string): any;
    get_data(table: string): any;
    allcount(table: string): any;
    findrecords(table: string, where: string): any;
    findfieldpagi(field: any, table: any, where: any, limit: any, offset: any): any;
    delete_data(table: string, where: string): any;
    findfield(field: any, table: any, where: any): any;
    findcount(field: any, table: any, where: any): any;
    sumfeild(field: any, table: any, where: any): any;
    loginuser(email: string, password: string): Promise<UserLogin>;
}
