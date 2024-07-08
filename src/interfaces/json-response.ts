export interface JSONResponse<T> {
    code : number;
    data? : T;
}