export interface ILocationData{
    id:number;
    area_name:string;
    lat:string | null;
    lng:string | null;
}
export interface ILocations{
    data:ILocationData[];
    totalCount:number;
}