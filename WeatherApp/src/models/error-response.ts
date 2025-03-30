import { MESSAGE_101, MESSAGE_601, MESSAGE_603, MESSAGE_GENERAL } from "../enums/error-messages"

export class ErrorResponse {
    code: number;
    message: string;
    friendlyMessage: string;

    constructor(code: number, info: string,) {
        this.code = code;
        this.message = info;
        this.friendlyMessage = this.setErrorMessage(code);
    }

    setErrorMessage(code : number): string {
        switch (code) {
            case 101:
                return MESSAGE_101;    
            break;
            case 601 :
                return MESSAGE_601;
            break;
            case 603 :
                return MESSAGE_603;
            break;
            default:
                return MESSAGE_GENERAL;
            break;
        }
    }

}