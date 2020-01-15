export interface ICheckUserNameRes{
        
};
export interface IGetAllInstitutes{
        success: boolean,
        Institutes: IInstitutes
};

export interface IInstitutes{
        id: string,
        instituteName: string,
        instituteCity: string,
        instituteState: string
}