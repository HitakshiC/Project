import { Application } from "express";
export declare class ExpressServer {
    /**
     * Reference to the HTTP Server
     */
    private httpServer;
    private routeManager;
    private configParams;
    private dbManager;
    start: (express: Application) => Promise<void>;
    stop(): void;
}
