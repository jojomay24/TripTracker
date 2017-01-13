/**
 * Created by alexander on 31.03.16.
 */

export interface IWayPoint {
    id:string;
    userId:string;
    tripId:string;
    coordinates:Coordinates;
    creationTimeStamp:string;
}

export class Coordinates {
    constructor(public longitude:number, public latitude:number) {};
}


export class WayPoint implements IWayPoint {

    public id:string;
    public userId:string;
    public tripId:string;
    public coordinates:Coordinates;
    public creationTimeStamp:string;

    constructor() {
        this.userId='testUserId';
    };
}
