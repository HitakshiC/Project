import { pg } from "pg";
import { UserLogin } from "./model/userlogin";
export declare class DbManager {
    db: pg;
    connect(): Promise<void>;
    insert(table: string, columns: string, value: string, id: string): Promise<any>;
    login_user(username: string, password: string): Promise<UserLogin>;
    findfieldpagi(field: any, table: any, where: any, limit: any, offset: any): Promise<any>;
    findrecords(table: any, where: any): Promise<any>;
    login(email: string, password: string): Promise<UserLogin>;
    getAll_records(table: any): Promise<any>;
    findfield(field: any, table: any, where: any): Promise<any>;
    findcount(field: any, table: any, where: any): Promise<any>;
    sumfeild(field: any, table: any, where: any): Promise<any>;
    allcount(table: any): Promise<any>;
    update(table: string, set: string, where: string): Promise<any>;
    delete(table: string, where: string): Promise<any>;
    view_user_records1(columns: any, table1: any, table2: any, on: any, where: any): Promise<any>;
    view_user_records(columns: any, table1: any, table2: any, on: any, table3: any, on1: any, where: any): Promise<any>;
}
