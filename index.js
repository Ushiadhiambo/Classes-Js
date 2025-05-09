// // function FeatureToggle(featureName,isEnabled,userGroupAccess){
// //     this.featureName=featureName;
// //     this.isEnabled=isEnabled;
// //     this.userGroupAccess=userGroupAccess;
// // }
// // FeatureToggle.prototype.canAccess=function(userRole){
    
// // }








// // Question1


// function FeatureToggle(featureName, isEnabled, userGroupAccess) {
//     this.featureName = featureName;
//     this.isEnabled = isEnabled;
//     this.userGroupAccess = userGroupAccess;
//   }
  
  
//   FeatureToggle.prototype.canAccess = function(userRole) {
//     return this.isEnabled && this.userGroupAccess.includes(userRole);
//   };
  
  
//   FeatureToggle.prototype.toggleFeature = function(flag) {
//     this.isEnabled = flag;
//   };
  
//   const feature = new FeatureToggle(true);
//   const userRole = "betaTesters";
  

  
//   if (feature.canAccess(userRole)) {
//     console.log("Access granted");
//   } else {
//     console.log("Access denied");
//   }
  
  
//   switch (userRole) {
//     case "betaTesters":
//     if (feature.canAccess("betaTesters")) {
//     console.log("Access granted for betaTesters");
//     } else {
//     console.log("Access denied for betaTesters");
//     }
//     break;
//     case "admins":
//     if (feature.canAccess("admins")) {
//     console.log("Access granted for admins");
//     } else {
//     console.log("Access denied for admins");
//     }
//     break;
//     default:
//     console.log("Unknown user role");
//   }


// //   Question2



//   function TimeLog(freelancerName, projectDetails, logs) {
//     this.freelancerName = freelancerName;
//     this.projectDetails = projectDetails;
//     this.logs = logs;
//   }
  
//   TimeLog.prototype.totalEarnings = function() {
//     return this.logs.reduce((total, log) => total + log.hoursWorked * this.projectDetails.hourlyRate, 0);
//   };
  
//   TimeLog.prototype.filterLogsByDate = function(startDate, endDate) {
//     return this.logs.filter(log => new Date(log.date) >= new Date(startDate) && new Date(log.date) <= new Date(endDate));
//   };
  
//   TimeLog.prototype.isOver40Hours = function() {
//     const totalHours = this.logs.reduce((sum, log) => sum + log.hoursWorked, 0);
//     if (totalHours > 40) {
//       return true;
//     } else {
//       return false;
//     }
//   };
  
  
//   const logs = [
//     { date: "2025-05-01", hoursWorked: 10 },
//     { date: "2025-05-02", hoursWorked: 12 },
//     { date: "2025-05-03", hoursWorked: 20 }
//   ];
  
//   const timeLog = new TimeLog("Jane", { name: "Website Redesign", hourlyRate: 50 }, logs);
//   console.log("Total earnings:", timeLog.totalEarnings());
//   console.log("Over 40 hours?", timeLog.isOver40Hours());

// // Question3

//   function Order(customer, items, status) {
//     this.customer = customer;
//     this.items = items;
//     this.status = status;
//   }
  
//   Order.prototype.totalCost = function() {
//     return this.items.reduce((sum, item) => sum + item.quantity * item.unitPrice, 0);
//   };
  
//   Order.prototype.updateStatus = function(paymentReceived) {
//     this.status = paymentReceived ? "Paid" : "Pending";
//   };
  
//   Order.prototype.orderUrgency = function() {
//     switch (this.status) {
//       case "Pending":
//         console.log("Urgency: High");
//         break;
//       case "Paid":
//         console.log("Urgency: Medium");
//         break;
//       case "Shipped":
//         console.log("Urgency: Low");
//         break;
//       default:
//         console.log("Status unknown.");
//     }
//   };
  
//   const order = new Order(
//     { name: "Alice", email: "alice@example.com" },
//     [{ productName: "Keyboard", quantity: 2, unitPrice: 30 }],
//     "Pending"
//   );
//   console.log("Total cost:", order.totalCost());
//   order.updateStatus(true);
//   order.orderUrgency();



// //   Question4
// function Employee(id, name, performanceMetrics, feedback) {
//     this.id = id;
//     this.name = name;
//     this.performanceMetrics = performanceMetrics;
//     this.feedback = feedback;
//   }
  
//   Employee.prototype.averageScore = function() {
//     const values = Object.values(this.performanceMetrics);
//     const total = values.reduce((sum, val) => sum + val, 0);
//     return total / values.length;
//   };
  
//   Employee.prototype.performanceLevel = function() {
//     const avg = this.averageScore();
//     if (avg >= 4.5) {
//       return "Excellent";
//     } else if (avg >= 3.5) {
//       return "Good";
//     } else {
//       return "Needs Improvement";
//     }
//   };
  
//   Employee.prototype.addFeedback = function(comment) {
//     if (comment.length > 5) {
//       this.feedback.push(comment);
//     } else {
//       console.log("Feedback too short.");
//     }
//   };
  
//   const emp = new Employee(1, "Tom", { communication: 4, efficiency: 5, reliability: 4.5 }, []);
//   console.log("Performance:", emp.performanceLevel());
//   emp.addFeedback("Great work on the last project!");
//   console.log("Feedback:", emp.feedback);

// //   question5

// function Course(title, instructor, students) {
//     this.title = title;
//     this.instructor = instructor;
//     this.students = students;
//   }
  
//   Course.prototype.completedStudents = function() {
//     return this.students.filter(s => s.completionStatus).map(s => s.name);
//   };
  
//   Course.prototype.countByExpertise = function(area) {
//     return this.students.filter(s => this.instructor.expertise === area).length;
//   };
  
//   Course.prototype.instructorMessage = function() {
//     if (this.students.length >= 5) {
//       console.log("You have a full class. Keep it going!");
//     } else {
//       console.log("You have a small group. Consider outreach.");
//     }
//   };
  
//   const course = new Course(
//     "JavaScript Basics",
//     { name: "Sara", expertise: "Web Development" },
//     [
//       { name: "Alex", completionStatus: true },
//       { name: "Sam", completionStatus: false },
//       { name: "Luna", completionStatus: true }
//     ]
//   );
//   console.log("Completed:", course.completedStudents());
//   course.instructorMessage();
  
  
  
  









// class Course{
//     constructor(title,instructor,students){
//         this.title=title;
//         this.instructor=instructor;
//         this.students=students;
//     };
// }
// Course.prototype.studentsCompletedCourse=function(){
//     return this.students.filter(student=>student).map(student.name)
// };
// Course.prototype.enrolledByExpertise=function(area){
//     return this.students.filter(s=>s.this.instructor===area.length)
// };
// Course.prototype.instructureMessages=function(){
//     if(this.students>=5){
//         console.log("You have a class")
//     }else{
//         console.log("Class will not continue")
//     }
// };

// const course=new Course({name:"Ushi",expertise:"Backend"},

// );
// console.log(course);
// course.instructureMessages();




//Question 1
function FeatureToggle(featureName, isEnabled, userGroupAccess) {
  this.featureName = featureName;
  this.isEnabled = isEnabled;
  this.userGroupAccess = userGroupAccess;
}

FeatureToggle.prototype.canAccess = function(userRole) {
  return this.isEnabled && this.userGroupAccess.includes(userRole);
};

FeatureToggle.prototype.toggleFeature = function(flag) {
  this.isEnabled = !!flag;
  console.log(`Feature '${this.featureName}' is now ${this.isEnabled ? 'enabled' : 'disabled'}`);
};

const feature = new FeatureToggle("New Dashboard", false, ["betaTesters", "admins"]);
const letisha ="Letisha a regularUser";
const kellan = "Kellan a betaTester";
const ushi= "Ushi an admin";

console.log(`${letisha} can access ${feature.featureName}: ${feature.canAccess(letisha)}`);
console.log(`${kellan} can access ${feature.featureName}: ${feature.canAccess(kellan)}`);
console.log(`${ushi} can access ${feature.featureName}: ${feature.canAccess(ushi)}`);

feature.toggleFeature(true);

console.log(`${letisha} can access ${feature.featureName}: ${feature.canAccess(letisha)}`);
console.log(`${kellan} can access ${feature.featureName}: ${feature.canAccess(kellan)}`);
console.log(`${ushi} can access ${feature.featureName}: ${feature.canAccess(ushi)}`);

function simulateAccess(feature, role) {
  let message;
  if (feature.canAccess(role)) {
    message = (`Access granted to ${role} for feature ${feature.featureName}`);
  } else {
    switch (role) {
      case "Letisha":
        message = (`Sorry, ${role} does not have access to ${feature.featureName}`);
        break;
      case "Kellan ":
        message = (`Access denied for '${role}' to '${feature.featureName}`);
        break;
      case " Ushi":
        message = (`Even with admin privileges, '${role}' might not have access to '${feature.featureName}' if it's disabled or not in their group`);
        break;
      default:
        message = (`Unknown role '${role}'. Access to '${feature.featureName}' cannot be determined`);
    }
  }
  console.log(message);
}

simulateAccess(feature, "Letisha");
simulateAccess(feature, "Kellan");
simulateAccess(feature, "Ushi");

// //Question 2
class TimeLog {
  constructor(freelancerName, projectDetails, logs) {
      this.freelancerName = freelancerName;
      this.projectDetails = projectDetails;
      this.logs = logs;
  }

  totalEarning() {
      return this.logs.reduce((total, log) => total + (log.hoursWorked * this.projectDetails.hourlyRate), 0);
  }

  filterLogByDateRange(startDate, endDate) {
      const start = new Date(startDate);
      const end = new Date(endDate);
      return this.logs.filter(log => {
          const logDate = new Date(log.date);
          return logDate >= start && logDate <= end;
      });
  }

  exceedWeeklyHours(weekStartDate) {
      const start = new Date(weekStartDate);
      const end = new Date(start);
      end.setDate(start.getDate() + 6);

      const weeklyHours = this.logs
          .filter(log => {
              const logDate = new Date(log.date);
              return logDate >= start && logDate <= end;
          })
          .reduce((sum, log) => sum + log.hoursWorked, 0);

      if (weeklyHours > 40) {
          return true;
      } else {
          return false;
      }
  }
}

const project = { name: "PBL PROJECT", hourlyRate: 50 };
const timelog = new TimeLog("Ushi", project, [
  { date: "2024-08-11", hoursWorked: 8 },
  { date: "2024-05-02", hoursWorked: 4 },
  { date: "2024-09-05", hoursWorked: 9 },
  { date: "2024-04-08", hoursWorked: 7 },
]);

console.log(`${timelog.freelancerName}'s total earnings: $${timelog.totalEarning()}`);
const filteredLogs = timelog.filterLogByDateRange("2024-08-11", "2024-09-05");
console.log("Logs within date range:", filteredLogs);
console.log(`Weekly hours exceed 40 (starting 2024-09-05)? ${timelog.exceedWeeklyHours("2024-09-05")}`);
console.log(`Weekly hours exceed 40 (starting 2024-04-08)? ${timelog.exceedWeeklyHours("2024-04-08")}`);

// //Question 3
class Order {
  constructor(customer, items, status) {
    this.customer = customer;
    this.items = items;
    this.status = status;
  }

  totalCost() {
    return this.items.reduce((total, item) => total + (item.quantity * item.unitPrice), 0);
  }

  orderStatusUpdate(paymentStatus) {
    if (paymentStatus === "paid") {
      this.status = "Processing";
      console.log(`Order for ${this.customer.name} is  ${this.status}`);
    } else if (paymentStatus === "failed") {
      this.status = "Payment Failed";
      console.log(`Payment failed for  ${this.customer.name}. Status: ${this.status}`);
    } else {
      console.log(`Order for ${this.customer.name} remains in '${this.status}' status`);
    }
  }

  orderUrgencyCategory() {
    const totalCost = this.totalCost();
    switch (true) {
      case totalCost > 1000:
        return "High Urgency";
      case this.items.length > 5:
        return "Medium Urgency ";
      case this.status === "Pending":
        return "Low Urgency";
      default:
        return "Normal";
    }
  }
}

const customerA = { name: "Peter", email: "peter@example.com" };
const order1 = new Order(customerA, [
  { productName: "phone", quantity: 1, unitPrice: 12000 },
  { productName: "earphone", quantity: 2, unitPrice: 15 },
], );

console.log(`Total cost for ${customerA.name}'s order: $${order1.totalCost()}`);
order1.orderStatusUpdate("paid");
console.log(`Order urgency: ${order1.orderUrgencyCategory()}`);

const order2 = new Order({ name: "Ushi", email: "ushi@testing.com" }, [
  { productName: "Pen", quantity: 10, unitPrice: 10 },
  { productName: "Rubber", quantity: 5, unitPrice: 5 },
], );
console.log(`Order urgency for Ushi: ${order2.orderUrgencyCategory()}`);

// //Question 4
class Employee {
  constructor(id, name, performanceMetrics, feedback) {
      this.id = id;
      this.name = name;
      this.performanceMetrics = performanceMetrics;
      this.feedback = feedback;
  }

  averageScore() {
      const scores = Object.values(this.performanceMetrics);
      if (scores.length === 0) {
          return 0;
      }
      const sum = scores.reduce((total, score) => total + score, 0);
      return sum / scores.length;
  }

  classifyPerformanceLevel() {
      const averageScore = this.averageScore();
      if (averageScore >= 10) {
          return "Excellence";
      } else if (averageScore >= 5) {
          return "Expectation meet";
      } else {
          return "Improvement needed";
      }
  }

  addFeedback(newFeedback) {
      if (typeof newFeedback === 'string' && newFeedback.trim() !== '') {
          this.feedback.push(newFeedback);
          console.log(`Feedback added for ${this.name}: ${newFeedback}`);
      } else {
          console.log("Invalid feedback provided.");
      }
  }
}
const employee = new Employee(150, "Letisha", { communication: 5, efficiency: 5, reliability: 5 }, ["Great job!"]);
console.log(`${employee.name} average performance: ${employee.averageScore()}`);
console.log(`${employee.name} performance level: ${employee.classifyPerformanceLevel()}`);
employee.addFeedback("Good trial");


const employee1 = new Employee(151, " Kellan", { communication: 4, efficiency: 5, reliability: 5 });
console.log(`${employee1.name} performance level: ${employee1.classifyPerformanceLevel()}`);

// //Question 5
class Course {
  constructor(title, instructor, students) {
      this.title = title;
      this.instructor = instructor;
      this.students = students;
  }

  getCompletedStudents() {
      return this.students.filter(student => student.completionStatus === "Completed").map(student => student.name);
  }

  countStudentsByExpertise(expertiseArea) {
      return this.students.filter(student => student.expertise === expertiseArea).length;
  }

  displayInstructorMessage() {
      if (this.students.length > 5) {
          console.log(`${this.instructor.name} (${this.instructor.expertise}):Course ${this.title} welcome!`);
      } else {
          console.log(`${this.instructor.name} (${this.instructor.expertise}): Course ${this.title} welcome!.`);
      }
  }
}


const instructor = { name: "Mary", expertise: "Backend" };
const course = new Course("Advanced Backend", instructor, [
  { name: "Ushi", completionStatus: "Completed", expertise: "Backend" },
  { name: "Kellan", completionStatus: "Completed", expertise: "Frontend" },

 ]);

console.log(`Completed students in '${course.title}': ${course.getCompletedStudents().join(", ")}`);
console.log(`Number Backend students: ${course.countStudentsByExpertise("Backend")}`);
course.displayInstructorMessage();

const instructor1 = { name: "John", expertise: "Web Development" };
const course1 = new Course("Introduction to web", instructor1, [
  { name: "Joy", completionStatus: "Completed", expertise: "UX Interface" },
  { name: "Shaback", completionStatus: "Almost to completion", expertise: "Fronted" },
  
]);

course1.displayInstructorMessage();