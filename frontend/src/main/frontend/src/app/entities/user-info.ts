/**
 * Created by alexander on 17.07.16.
 */

export interface IUserInfo {
    userId:string;      // deprecated, use authInfoService
    name:string;
    currentlyTracking:Boolean;
}

export class UserInfo implements IUserInfo {
    constructor(public userId:string,  // deprecated, use authInfoService
                public name:string,
                public currentlyTracking:Boolean) {
    };

}
