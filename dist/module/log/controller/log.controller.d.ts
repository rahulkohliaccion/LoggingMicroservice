import { LogService } from '../service/log.service';
export declare class LogController {
    private readonly logService;
    constructor(logService: LogService);
    addInfoLog(body: any): any;
    addDebugLog(body: any): any;
    addVerboseLog(body: any): any;
    addErrorLog(body: any): any;
    addFatalLog(body: any): any;
}
