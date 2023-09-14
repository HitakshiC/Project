import { UserLogin } from "./model/userlogin";
export declare class ParentDbManager {
    private dbManager;
    LoginUser(username: string, password: string): Promise<UserLogin>;
    delete_data(table: string, where: string): Promise<any>;
    allcount(table: string): Promise<any>;
    findrecords(table: string, where: string): Promise<any>;
    get_data(table: string): Promise<any>;
    login(email: string, password: string): Promise<UserLogin>;
    Inser_data(table: string, columns: string, value: string, primaryid: string): Promise<any>;
    findfieldpagi(field: string, table: string, where: string, limit: number, offset: number): Promise<any>;
    Update_data(table: string, set: string, where: string): Promise<any>;
    findfield(field: string, table: string, where: string): Promise<any>;
    findcount(field: string, table: string, where: string): Promise<any>;
    sumfeild(field: string, table: string, where: string): Promise<any>;
}
