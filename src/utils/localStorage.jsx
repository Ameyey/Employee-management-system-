const employees = [
  {
    "id": 1,
    "firstName": "Aarav",
    "email": "employee1@example.com",
    "password": "123",
    "taskCount": {
      "active": 2,
      "newTask": 2,
      "completed": 1,
      "failed": 0
    },
    "tasks": [
      {
        "active": true,
        "new": true,
        "completed": false,
        "failed": false,
        "taskTitle": "Prepare Report",
        "taskDescription": "Prepare the monthly report for management.",
        "taskDate": "2024-11-01",
        "category": "Reports"
      },
      {
        "active": false,
        "new": false,
        "completed": true,
        "failed": false,
        "taskTitle": "Client Meeting",
        "taskDescription": "Attend the meeting with client XYZ.",
        "taskDate": "2024-10-20",
        "category": "Meetings"
      },
      {
        "active": true,
        "new": true,
        "completed": false,
        "failed": false,
        "taskTitle": "Update Documentation",
        "taskDescription": "Update the project documentation for the new release.",
        "taskDate": "2024-10-29",
        "category": "Documentation"
      }
    ]
  },
  {
    "id": 2,
    "firstName": "Viren",
    "email": "employee2@example.com",
    "password": "123",
    "taskCount": {
      "active": 2,
      "newTask": 1,
      "completed": 1,
      "failed": 0
    },
    "tasks": [
      {
        "active": true,
        "new": true,
        "completed": false,
        "failed": false,
        "taskTitle": "Inventory Check",
        "taskDescription": "Conduct a check on all inventory items.",
        "taskDate": "2024-10-30",
        "category": "Inventory"
      },
      {
        "active": false,
        "new": false,
        "completed": true,
        "failed": false,
        "taskTitle": "Product Demo",
        "taskDescription": "Give a demo of the new product to the sales team.",
        "taskDate": "2024-10-22",
        "category": "Training"
      },
      {
        "active": true,
        "new": false,
        "completed": false,
        "failed": false,
        "taskTitle": "Budget Review",
        "taskDescription": "Review the department's budget for Q4.",
        "taskDate": "2024-10-28",
        "category": "Finance"
      }
    ]
  },
  {
    "id": 3,
    "firstName": "Anaya",
    "email": "employee3@example.com",
    "password": "123",
    "taskCount": {
      "active": 1,
      "newTask": 1,
      "completed": 1,
      "failed": 0
    },
    "tasks": [
      {
        "active": true,
        "new": true,
        "completed": false,
        "failed": false,
        "taskTitle": "Social Media Plan",
        "taskDescription": "Create a social media plan for the next quarter.",
        "taskDate": "2024-11-01",
        "category": "Marketing"
      },
      {
        "active": false,
        "new": false,
        "completed": true,
        "failed": false,
        "taskTitle": "Quarterly Audit",
        "taskDescription": "Conduct an audit of all transactions from last quarter.",
        "taskDate": "2024-10-15",
        "category": "Finance"
      }
    ]
  },
  {
    "id": 4,
    "firstName": "Raj",
    "email": "employee4@example.com",
    "password": "123",
    "taskCount": {
      "active": 1,
      "newTask": 1,
      "completed": 0,
      "failed": 1
    },
    "tasks": [
      {
        "active": true,
        "new": true,
        "completed": false,
        "failed": false,
        "taskTitle": "Team Meeting",
        "taskDescription": "Organize a team meeting for project update.",
        "taskDate": "2024-10-27",
        "category": "Meetings"
      },
      {
        "active": false,
        "new": false,
        "completed": false,
        "failed": true,
        "taskTitle": "System Upgrade",
        "taskDescription": "Assist in upgrading the operating system of all computers.",
        "taskDate": "2024-10-24",
        "category": "IT Support"
      }
    ]
  },
  {
    "id": 5,
    "firstName": "Priya",
    "email": "employee5@example.com",
    "password": "123",
    "taskCount": {
      "active": 2,
      "newTask": 1,
      "completed": 0,
      "failed": 0
    },
    "tasks": [
      {
        "active": true,
        "new": true,
        "completed": false,
        "failed": false,
        "taskTitle": "Design Mockups",
        "taskDescription": "Create design mockups for the new project interface.",
        "taskDate": "2024-11-02",
        "category": "Design"
      },
      {
        "active": true,
        "new": false,
        "completed": false,
        "failed": false,
        "taskTitle": "User Testing",
        "taskDescription": "Conduct user testing sessions for new features.",
        "taskDate": "2024-10-29",
        "category": "Testing"
      }
    ]
  }
];


const admin = [{
    "id": 1,
    "email": "admin@example.com",
    "password": "123"
  }];

export const setLocalStorage =()=>{
    localStorage.setItem('employees',JSON.stringify(employees))
    localStorage.setItem('admin',JSON.stringify(admin))

}
export const getLocalStorage =()=>{
   const employees =JSON.parse(localStorage.getItem('employees'))
  //  eslint-disable-next-line no-unused-vars
   const admin = JSON.parse(localStorage.getItem('admin'))
   return {employees,admin}
}