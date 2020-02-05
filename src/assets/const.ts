export class GlobalConstants{
    // private BASE_URL = "http://ec2-13-232-146-55.ap-south-1.compute.amazonaws.com:3000/";
    // public IMAGE_BASE_URL = "http://ec2-13-232-146-55.ap-south-1.compute.amazonaws.com/queImages/";
    
    //localIP
    // public IMAGE_BASE_URL = "http://192.168.31.106:3001/queImages/"
    private BASE_URL = "http://192.168.31.106:3001/";
    public ALL_INSTITUTES = this.BASE_URL + "registrationData/getAllInstitutes";
    public ALL_CLASSES = this.BASE_URL + "registrationData/getAllClasses";
    public ALL_SUBJECT = this.BASE_URL + "registrationData/getAllSubjects";
    public USER_AUTHENTICATION = this.BASE_URL + "users/authenticate";
    public STUDENT_REGISTRATION = this.BASE_URL + "users/registerStudent";
    public CREATE_TEST_PAPER = this.BASE_URL + "testRoute/addSingleTest";
    public UPLOAD_IMAGE = this.BASE_URL + "upload/image";
    public GET_All_TEST = this.BASE_URL + "testRoute/getAllTests"
    public START_TEST = this.BASE_URL + "testRoute/getSingleTestQuestions";
}