export class GlobalConstants{
    private BASE_URL = "http://ec2-15-206-146-88.ap-south-1.compute.amazonaws.com:3000/";
    public ALL_INSTITUTES = this.BASE_URL + "registrationData/getAllInstitutes";
    public ALL_CLASSES = this.BASE_URL + "registrationData/getAllClasses";
    public USER_AUTHENTICATION = this.BASE_URL + "users/authenticate";
    public CHECK_USERNAME = this.BASE_URL + "";
}