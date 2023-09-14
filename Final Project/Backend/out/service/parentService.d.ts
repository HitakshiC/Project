import { IParentService } from "../service/iparentService";
import { UserLogin } from "../db/model/userlogin";
export declare class ParentService implements IParentService {
    private parentDbManager;
    findfieldpagi(field: string, table: string, where: string, limit: number, offset: number): Promise<any>;
    User_Login(username: string, password: string): Promise<UserLogin>;
    allcount(table: string): Promise<UserLogin>;
    findrecords(table: string, where: string): Promise<UserLogin>;
    loginuser(email: string, password: string): Promise<UserLogin>;
    delete_data(table: string, where: string): Promise<any>;
    get_data(table: string): Promise<any>;
    Insert_data(table: string, col: string, val: string, primaryid: string): Promise<any>;
    Update_data(table: string, set: string, where: string): Promise<any>;
    findfield(field: string, table: string, where: string): Promise<any>;
    findcount(field: string, table: string, where: string): Promise<any>;
    sumfeild(field: string, table: string, where: string): Promise<any>;
}
