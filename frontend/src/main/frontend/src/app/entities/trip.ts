import {ITrip} from './Itrip';
/**
 * Created by alexander on 31.03.16.
 */
export class Trip implements ITrip {
    public static TRIP_STATUS_STARTED:string = 'STARTED';
    public static TRIP_STATUS_STOPPED:string = 'STOPPED';
    public userId:string;
    public id:string;
    public name:string;
    public description:string;
    public tripStatus:string;
    public startedAt:string;

    constructor() {

    };

}
