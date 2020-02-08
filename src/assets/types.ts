//signin type
export interface ILoginResponse{
        success: boolean,
        msg: string,
        token: string,
        refreshToken: string,
        user: IUser
}

export interface IUser{
        _id: string,
        name : string,
        email : string,
        userType : string,
        phoneNo : string,
        dob : string,
        gender : string,
        parentsName : string,
        parentsEmail : string,
        parentsPhNo : string,
        parentsQual : string,
        stuClass : IClasses,
        stuInstitute : IInstitutes,
        medium : string
}
//get all insitute
export interface IGetAllInstitutes{
        success: boolean,
        Institutes: IInstitutes[]
};
export interface IInstitutes{
        _id: string,
        instituteName: string,
        instituteCity: string,
        instituteState: string
};
export interface IGetAllClasses{
        success: boolean,
        Classes: IClasses[]
};
export interface IClasses{
        _id: string,
        className: string
};
export interface IGetAllSubjects{
        success: boolean,
        Subjects: ISubjects[]
};
export interface ISubjects{
        _id: string,
        subjectName: string
}
//Registration for student
export interface IUserDetail{
        name : string,
        email : string,
        userType : string,
        password : string,
        phoneNo : string,
        dob : string,
        gender : string,
        parentsName : string,
        parentsEmail : string,
        parentsPhNo : string,
        parentsQual : string,
        stuClass : string,
        stuInstitute : string,
        medium : string
}
export interface IRegistrationResponse{
        success: boolean,
        msg: string
}
//Test creation for teacher
export interface ITestPaperDetail{
        questions: IQuestionDetail[],
        testTitle: string | undefined,
        public: boolean,
        startDate: string,
        endDate: string,
        description: string,
        class_id: string,
        subject_id: string,
        institute_id: string,
}
export interface IQuestionDetail{
        question: string,
        option1: string,
        option2: string,
        option3: string,
        option4: string,
        answer: string,
        image: string
}
export interface ITestPaperSubmissionResponse{
        success: boolean,
        msg: string
}

//image response
export interface IImageUploadResponse{
        success: boolean,
        msg: string,
        fileName: string
}

//test list
export interface ITestListDetail{
        success: boolean,
        TestList: ITestList[]
}

export interface ITestList{
        _id: string,
        testTitle: string,
        startDate: string,
        endDate: string,
        public: boolean,
        description: string,
        subjectName: string
}

//start test

export interface IQuestionPaperDetail{
        success: boolean,
        msg: string,
        questionsList: IQuestionPaper[]
}

export interface IQuestionPaper{
        question_id: string;
        question: string,
        option1: string,
        option2: string,
        option3: string,
        option4: string,
        selectedOption?: string,
        image: string
}
export interface ISavedAnswer{
        question_id: string,
        answer: string
}
export interface ISubmitAnswer{
        test_id: string;
        student_Id: string;
        answersList: ISavedAnswer[];

}