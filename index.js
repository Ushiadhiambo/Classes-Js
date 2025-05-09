function FeatureToggle(featureName,isEnabled,userGroupAccess){
    this.featureName=featureName;
    this.isEnabled=isEnabled;
    this.userGroupAccess=userGroupAccess;
}
FeatureToggle.prototype.canAccess=function(userRole){
    
}











function TimeLog(freelancerName,projectDetails,logs){
    this.freelancerName=freelancerName;
    this.projectDetails=projectDetails;
    this.logs-=logs;
}
TimeLog.prototypetotalEarning=function(){
    
}










class Course{
    constructor(title,instructor,students){
        this.title=title;
        this.instructor=instructor;
        this.students=students;
    };
}
Course.prototype.studentsCompletedCourse=function(){
    return this.students.filter(student=>student).map(student.name)
};
Course.prototype.enrolledByExpertise=function(){
    
}
