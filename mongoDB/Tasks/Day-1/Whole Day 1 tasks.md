##### Basic Tasks

**1. Insert one student with name, age, course.**

use internhub



db.students.insertOne({

&#x20; name: "Kaushik",

&#x20; age: 21,

&#x20; course: "MERN"

})



**2. Insert one employee with name, department, salary.**



db.employees.insertOne({

&#x20; name: "Ravi",

&#x20; department: "HR",

&#x20; salary: 25000

})

**3. Insert one book with title, author, price.**

db.books.insertOne({

&#x20; title: "MongoDB Basics",

&#x20; author: "John",

&#x20; price: 499

})



**4. Insert one movie with name, rating, genre.**

db.movies.insertOne({

&#x20; name: "Dhurandhar The Revenge",

&#x20; rating: 10,

&#x20; genre: "Action thriller Spy movie inspired by real events in india"

})



**5. Insert one department with name and location.**

db.departments.insertOne({

&#x20; name: "IT",

&#x20; location: "Bangalore"

})

##### Intermediate Tasks



**1. Insert 5 students at once using insertMany().**

db.students.insertMany(\[

&#x20; { name: "Anmol", age: 20, course: "MERN" },

&#x20; { name: "Bhavana", age: 22, course: "Java" },

&#x20; { name: "Chiranjith", age: 21, course: "Python" },

&#x20; { name: "Deekshith", age: 23, course: "MERN" },

&#x20; { name: "Elango", age: 19, course: "C++" }

])



**2. Insert 5 employees with different salaries and departments.**

db.employees.insertMany(\[

&#x20; { name: "Samay", department: "HR", salary: 20000 },

&#x20; { name: "Tanmay", department: "IT", salary: 40000 },

&#x20; { name: "Prakhar", department: "QA", salary: 30000 },

&#x20; { name: "Ashish", department: "HR", salary: 25000 },

&#x20; { name: "Carry", department: "IT", salary: 50000 }

])



**3. Insert 5 products with category and stock.**

db.products.insertMany(\[

&#x20; { name: "Laptop", category: "Electronics", stock: 10 },

&#x20; { name: "Chair", category: "Furniture", stock: 5 },

&#x20; { name: "Phone", category: "Electronics", stock: 20 },

&#x20; { name: "Table", category: "Furniture", stock: 2 },

&#x20; { name: "TV", category: "Electronics", stock: 7 }

])



**4. Insert 5 tasks with title, priority, status.**

db.tasks.insertMany(\[

&#x20;{ Title: "Understand the node.js", priority: "high", status: ongoing },

&#x20; { Title: "Understand the react.js", priority: "modertate", status: initiated  },

&#x20; { Title: "Understand the mongoDB", priority: "highest", status: completed },

&#x20; { Title: "Understand the docker", priority: "low", status: ongoing },

&#x20; { Title: "Understand the communication", priority: "peak high", status: pre-production }

])



**5. Insert 5 interns with fields: name, age, department, isActive.**

db.interns.insertMany(\[

&#x20;{ name:"Ishan", age:21, department:"HR", isActive:true },

&#x20;{ name:"prajwal", age:22, department:"QA", isActive:false },

&#x20;{ name:"shamanth", age:23, department:"IT", isActive:true },

&#x20;{ name:"deekshith", age:20, department:"HR", isActive:true },

&#x20;{ name:"akshay", age:24, department:"QA", isActive:false }

])



##### Advanced Tasks

**1. Insert 10 documents into orders where each document contains:**

**o customerName**

**o items**

**o totalAmount**

**o status**
db.orders.insertMany(\[

&#x20;{ customerName:"Akshay", items:\["Laptop"], totalAmount:50000, status:"Placed" },

&#x20;{ customerName:"jaskirat", items:\["Phone"], totalAmount:20000, status:"Shipped" },

&#x20;{ customerName:"hamza", items:\["TV"], totalAmount:30000, status:"Placed" },

&#x20;{ customerName:"Drisha", items:\["Table"], totalAmount:10000, status:"Cancelled" },

&#x20;{ customerName:"Elango", items:\["Chair"], totalAmount:5000, status:"Placed" },

&#x20;{ customerName:"majri", items:\["Laptop"], totalAmount:60000, status:"Placed" },

&#x20;{ customerName:"Gyan", items:\["Phone"], totalAmount:15000, status:"Shipped" },

&#x20;{ customerName:"Harish", items:\["TV"], totalAmount:25000, status:"Placed" },

&#x20;{ customerName:"Imapna", items:\["Table"], totalAmount:12000, status:"Cancelled" },

&#x20;{ customerName:"Jameel", items:\["bandage"], totalAmount:7000, status:"Placed" }

])



**2. Insert documents with nested fields like:**

**o address.city**

**o address.pincode**

db.users.insertOne({

&#x20;name:"Kiran",

&#x20;address:{ city:"Chennai", pincode:600001 }

})



**3. Insert documents with arrays like:**

**o skills**

**o hobbies**

db.users.insertOne({

&#x20;name:"Pooja",

&#x20;skills:\["MongoDB","NodeJS"],

&#x20;hobbies:\["Reading","Gaming"]

})

**4. Insert documents with boolean and date-like values.**

db.users.insertOne({

&#x20;name:"Arjun",

&#x20;isActive:true,

&#x20;createdAt:new Date()

})



**5. Insert a mixed dataset into users where some users have skills, some have address, some**

**have both.**

db.users.insertMany(\[

&#x20;{ name:"U1", skills:\["JS"] },

&#x20;{ name:"U2", address:{ city:"Delhi" } },

&#x20;{ name:"U3", skills:\["MongoDB"], address:{ city:"Mumbai" } }

])



#### **Topic 3: Read / Find Operations**



##### **Basic Tasks**



**1. Show all students.**

db.students.find()

**2. Show all employees.**

db.employees.find()

**3. Show all products.**

db.products.find()

**4. Find one student by name.**

db.students.findOne({ name:"S1" })

**5. Find one employee by department.**

db.employees.findOne({ department:"HR" })



##### **Intermediate Tasks**



**1. Show only students whose course is "MERN".**

db.students.find({ course:"MERN" })



**2. Find all employees in "HR".**

db.employees.find({ department:"HR" })



**3. Find all products in category "Electronics".**

db.products.find({ category:"Electronics" })



**4. Find one task where status is "Pending".**

db.tasks.findOne({ status:"Pending" })



**5. Find all interns where isActive is true.**

db.interns.find({ isActive:true })



##### **Advanced Tasks**

**1. Find all orders where status is "Placed".**

db.orders.find({ status:"Placed" })



**2. Find one document using more than one field.**

db.students.findOne({ name:"S1", age:20 })



**3. Find all users who have a skills array.**

db.users.find({ skills:{ $exists:true } })



**4. Find documents where nested field address.city is "Chennai".**

db.users.find({ "address.city":"Chennai" })



**5. Compare find() and findOne() by running both on same collection and explain output**

**difference.**

db.students.find({ course: "MERN" })



db.students.findOne({ course: "MERN" })


find():

\- Returns all matching documents

\- Output is a cursor (multiple results)



findOne():

\- Returns only the first matching document

\- Output is a single object



##### **Topic 4: Filters and Query Operators**

##### **Basic Tasks**

**1. Find students whose age is greater than 20.**

db.students.find({ age: { $gt: 20 } })



**2. Find employees whose salary is less than 30000.**

db.employees.find({ salary: { $lt: 30000 } })



**3. Find products whose stock is greater than 0.**

db.products.find({ stock: { $gt: 0 } })



**4. Find interns whose age is greater than or equal to 22.**

db.products.find({ stock: { $gte:22 } })

**5. Find books whose price is less than or equal to 500.**

db.books.find({ price: { $lte: 500 } })



##### **Intermediate Tasks**

**1. Find employees with salary between 20000 and 50000.**

db.employees.find({ salary: { $gte: 20000, $lte: 50000 } })



**2. Find students whose course is not "Java".**

db.students.find({ course: { $ne: "Java" } })



**3. Find products whose category is either "Electronics" or "Furniture".**

db.products.find({ category: { $in: \["Electronics", "Furniture"] } })



**4. Find interns whose department is in \["HR", "QA"].**

db.interns.find({ department: { $in: \["HR", "QA"] } })



**5. Find tasks whose status is not "Completed".**

db.tasks.find({ status: { $ne: "Completed" } })



##### **Advanced Tasks**

**1. Find employees whose salary is greater than 25000 and department is "Engineering".**

db.employees.find({

&#x20;salary: { $gt: 25000 },

&#x20;department: "Engineering"

})



**2. Find students whose age is less than 21 or course is "Python".**

db.students.find({

&#x20;$or: \[

&#x20;  { age: { $lt: 21 } },

&#x20;  { course: "Python" }

&#x20;]

})



**3. Find orders whose totalAmount is greater than 1000 and status is not "Cancelled".**

db.orders.find({

&#x20;totalAmount: { $gt: 1000 },

&#x20;status: { $ne: "Cancelled" }

})



**4. Find interns whose department is "Engineering" and age is between 21 and 25.**

db.interns.find({

&#x20;department: "Engineering",

&#x20;age: { $gte: 21, $lte: 25 }

})



**5. Find products where stock is less than 5 or price is greater than 50000.**

db.products.find({

&#x20;$or: \[

&#x20;  { stock: { $lt: 5 } },

&#x20;  { price: { $gt: 50000 } }

&#x20;]

})



##### **Topic 5: Projection, Sorting, Limit**

##### **Basic Tasks**

**1. Show only name field from students.**

db.students.find({}, { name: 1, \_id: 0 })



**2. Show only name and department from employees.**

db.employees.find({}, { name: 1, department: 1, \_id: 0 })



**3. Hide \_id from products output.**

db.products.find({}, { \_id: 0 })



**4. Show only title and price from books.**

db.books.find({}, { title: 1, price: 1, \_id: 0 })



**5. Show only name and age from interns.**

db.interns.find({}, { name: 1, age: 1, \_id: 0 })



##### **Intermediate Tasks**

**1. Sort students by age ascending.**

db.students.find().sort({ age: 1 })



**2. Sort employees by salary descending.**

db.employees.find().sort({ salary: -1 })



**3. Show top 3 expensive products.**

db.products.find().sort({ price: -1 }).limit(3)



**4. Show first 2 tasks from tasks collection.**

db.tasks.find().limit(2)



**5. Sort interns by name alphabetically.**

db.tasks.find().limit(2)



##### **Advanced Tasks**

**1. Show only employee name and salary, sorted by salary descending.**

db.employees.find({}, { name: 1, salary: 1, \_id: 0 }).sort({ salary: -1 })



**2. Show top 5 students with highest age.**

db.employees.find({}, { name: 1, salary: 1, \_id: 0 }).sort({ salary: -1 })



**3. Show products with only name and stock where stock is greater than 10.**

db.products.find(

&#x20;{ stock: { $gt: 10 } },

&#x20;{ name: 1, stock: 1, \_id: 0 }

)



**4. Show first 3 pending tasks sorted by priority.**

db.tasks.find({ status: "Pending" }).sort({ priority: 1 }).limit(3)



**5. Show interns from Engineering with only name and email, sorted by age descending.**

db.interns.find(

&#x20;{ department: "Engineering" },

&#x20;{ name: 1, email: 1, \_id: 0 }

).sort({ age: -1 })



##### **Topic 6: Update Operations**

##### **Basic Tasks**

**1. Update one student's age.**

db.students.updateOne({ name: "deekshith" }, { $set: { age: 25 } })



**2. Update one employee's department.**

db.employees.updateOne({ name: "Elango" }, { $set: { department: "IT" } })



**3. Update one product's price.**

db.products.updateOne({ name: "Laptop" }, { $set: { price: 55000 } })



**4. Update one task's status.**

db.tasks.updateOne({ title: "Understand the node.js" }, { $set: { status: "successfully completed" } })



**5. Update one intern's email.**

db.interns.updateOne({ name: "hamza" }, { $set: { email: "jaskirat\_singh\_Rangi@gmail.com" } })

##### 

##### **Intermediate Tasks**



**1. Update all interns in QA department to isActive: true.**

db.interns.updateMany(

&#x20;{ department: "QA" },

&#x20;{ $set: { isActive: true } }

)

**2. Update all products in Electronics category by changing stock value.**

db.products.updateMany(

&#x20;{ category: "Electronics" },

&#x20;{ $set: { stock: 50 } }

)

**3. Update all employees in HR by adding location field.**

db.employees.updateMany(

&#x20;{ department: "HR" },

&#x20;{ $set: { location: "Bangalore" } }

)



**4. Update all tasks with status "Pending" to "In Progress".**

db.tasks.updateMany(

&#x20;{ status: "Pending" },

&#x20;{ $set: { status: "In Progress" } }

)



**5. Update all students of course "Java" to course "Java Full Stack".**

db.students.updateMany(

&#x20;{ course: "Java" },

&#x20;{ $set: { course: "Java Full Stack" } }

)



##### **Advanced Tasks**



**1. Update all employees whose salary is below 20000 by increasing designation to "Junior**

**Associate".**

db.employees.updateMany(

&#x20;{ salary: { $lt: 20000 } },

&#x20;{ $set: { designation: "Junior Associate" } }

)



**2. Add verified: true to all active interns.**

db.interns.updateMany(

&#x20;{ isActive: true },

&#x20;{ $set: { verified: true } }

)



**3. Add discount: 10 to all products with price greater than 1000.**

db.products.updateMany(

&#x20;{ price: { $gt: 1000 } },

&#x20;{ $set: { discount: 10 } }

)



**4. Update all orders with status "Placed" by adding deliveryStatus: "Preparing".**

db.orders.updateMany(

&#x20;{ status: "Placed" },

&#x20;{ $set: { deliveryStatus: "Preparing" } }

)



**5. Update one document using multiple fields inside $set.**

db.students.updateOne(

&#x20;{ name: "S1" },

&#x20;{ $set: { age: 26, course: "MERN", city: "Bangalore" } }

)



##### **Topic 7: Advanced Update Operators**

##### **Basic Tasks**

**1. Increase one student's age by 1 using $inc.**

db.students.updateOne({}, { $inc: { age: 1 } })



**2. Add one skill to an intern using $push.**

db.interns.updateOne({}, { $push: { skills: "MongoDB" } })



**3. Remove one field from an employee using $unset.**

db.employees.updateOne({}, { $unset: { phone: "" } })



**4. Add one hobby to a user document using $push.**

db.users.updateOne({}, { $push: { hobbies: "Gaming" } })



**5. Remove one skill from an intern using $pull.**

db.interns.updateOne({}, { $pull: { skills: "HTML" } })



##### **Intermediate Tasks**



**1. Add "MongoDB" skill to all Engineering interns.**

db.interns.updateMany(

&#x20;{ department: "Engineering" },

&#x20;{ $push: { skills: "MongoDB" } }

)



**2. Increase salary of all employees in HR by 2000.**

db.employees.updateMany(

&#x20;{ department: "HR" },

&#x20;{ $inc: { salary: 2000 } }

)



**3. Add a new tag to all products in Electronics.**

db.products.updateMany(

&#x20;{ category: "Electronics" },

&#x20;{ $push: { tags: "New" } }

)



**4. Remove inactive status field from all old documents.**

db.users.updateMany(

&#x20;{ isActive: false },

&#x20;{ $unset: { status: "" } }

)

**5. Use $addToSet to add a skill without duplication.**

db.interns.updateOne(

&#x20;{ name: "Ashay" },

&#x20;{ $addToSet: { skills: "MongoDB" } }

)



##### **Advanced Tasks**

**1. Build a skills array for interns and prevent duplicate entries.**

db.interns.updateMany(

&#x20;{},

&#x20;{ $addToSet: { skills: { $each: \["MongoDB", "NodeJS"] } } }

)



**2. Increase stock by 5 for all products in one category.**

db.products.updateMany(

&#x20;{ category: "Electronics" },

&#x20;{ $inc: { stock: 5 } }

)



**3. Remove "Completed" tag from all task documents.**

db.tasks.updateMany(

&#x20;{ status: "Completed" },

&#x20;{ $unset: { status: "" } }

)



**4. Add multiple technologies to employee skill arrays.**

db.employees.updateMany(

&#x20;{},

&#x20;{ $push: { skills: { $each: \["React", "NodeJS"] } } }

)



**5. Remove an unnecessary field from all orders and add a new one in same update statement.**

db.orders.updateMany(

&#x20;{},

&#x20;{

&#x20; $unset: { oldField: "" },

&#x20; $set: { newField: "value" }

&#x20;}

)

##### **Topic 8: Delete and Soft Delete**

##### **Basic Tasks**

**1. Delete one student by name.**

db.students.deleteOne({ name: "Bhavana" })

**2. Delete one employee by email.**

db.employees.deleteOne({ email: "emp@gmail.com" })



**3. Delete one product by category.**

db.products.deleteOne({ category: "Furniture" })



**4. Delete one task by title.**

db.tasks.deleteOne({ title: "Task1" })



**5. Delete one book by author.**

db.books.deleteOne({ author: "John" })



##### **Intermediate Tasks**



**1. Delete all interns with isActive: false.**

db.interns.deleteMany({ isActive: false })



**2. Delete all tasks with status "Completed".**

db.tasks.deleteMany({ status: "Completed" })



**3. Delete all products whose stock is 0.**

db.products.deleteMany({ stock: 0 })



**4. Delete all students whose age is less than 18.**

db.products.deleteMany({ stock: 0 })



**5. Delete all employees in a temporary department.**

db.employees.deleteMany({ department: "Temp" })



##### **Advanced Tasks**

**1. Instead of deleting inactive interns, mark them as:**

**o isDeleted: true**

**o deletedAt: new Date()**

db.interns.updateMany(

&#x20;{ isActive: false },

&#x20;{

&#x20; $set: {

&#x20;  isDeleted: true,

&#x20;  deletedAt: new Date()

&#x20; }

&#x20;}

)



**2. Soft delete all completed tasks.**

db.tasks.updateMany(

&#x20;{ status: "Completed" },

&#x20;{ $set: { isDeleted: true } }

)



**3. Soft delete products with zero stock.**

db.products.updateMany(

&#x20;{ stock: 0 },

&#x20;{ $set: { isDeleted: true } }

)

**4. Write a query to fetch only non-deleted documents.**

db.interns.find({ isDeleted: { $ne: true } })



**5. Compare hard delete and soft delete with one real business example.**

Hard delete:

\- Data is permanently removed



Soft delete:

\- Data is marked as deleted

\- Can be recovered



Example:

E-commerce → deleted orders stored for audit



##### **Topic 9: Array Queries**

##### **Basic Tasks**

**1. Create a document with a skills array.**



**2. Find interns who have "MongoDB" in their skills.**

**3. Add "Node.js" to a skills array.**

**4. Remove "HTML" from a skills array.**

**5. Show all documents containing arrays.**



##### **Intermediate Tasks**

**1. Create 5 interns with multiple skills each.**

db.interns.insertMany(\[

&#x20;{ name:"akshay", skills:\["MongoDB","React"] },

&#x20;{ name:"jaskirat", skills:\["JS","Node"] },

&#x20;{ name:"hamza", skills:\["MongoDB","Node"] },

&#x20;{ name:"drisha", skills:\["React"] },

&#x20;{ name:"mazari", skills:\["JS"] }

])



**2. Find interns who have either "React" or "MongoDB".**

db.interns.find({ skills: { $in: \["React", "MongoDB"] } })



**3. Add one skill to all QA interns.**

db.interns.updateMany(

&#x20;{ department: "QA" },

&#x20;{ $push: { skills: "Testing" } }

)



**4. Remove one common skill from all students.**

db.students.updateMany({}, { $pull: { skills: "HTML" } })



**5. Count how many interns contain "JavaScript" in skills.**

db.interns.countDocuments({ skills: "JavaScript" })



##### **Advanced Tasks**

**1. Find interns with both "Node.js" and "MongoDB".**

db.interns.find({

&#x20;skills: { $all: \["Node.js", "MongoDB"] }

})

**2. Prevent duplicate skill insertion using $addToSet.**

db.interns.updateOne(

&#x20;{},

&#x20;{ $addToSet: { skills: "MongoDB" } }

)

**3. Build a course document with array of modules.**

db.courses.insertOne({

&#x20;name: "MERN",

&#x20;modules: \["MongoDB", "Express", "React", "Node"]

})

**4. Remove multiple skills from an array.**

db.interns.updateMany(

&#x20;{},

&#x20;{ $pull: { skills: { $in: \["HTML", "CSS"] } } }

)



**5. Design a document where arrays are used for hobbies, certifications, and tools.**

db.users.insertOne({

&#x20;name: "User1",

&#x20;hobbies: \["Reading"],

&#x20;certifications: \["AWS"],

&#x20;tools: \["VSCode"]

})



##### **Topic 10: Data Modeling**

##### **Basic Tasks**

**1. Design a student document with name, age, course, email.**

{

&#x20; name: "Rahul",

&#x20; age: 20,

&#x20; course: "MERN",

&#x20; email: "rahul@gmail.com"

}

**2. Design an employee document with name, salary, department, skills.**

{

&#x20; name: "Rahul",

&#x20; age: 20,

&#x20; course: "MERN",

&#x20; email: "rahul@gmail.com"

}

**3. Design a product document with name, price, stock, category.**

{

&#x20; name: "Laptop",

&#x20; price: 50000,

&#x20; stock: 10,

&#x20; category: "Electronics"

}

**4. Design a task document with title, status, priority.**

{

&#x20; title: "Complete API",

&#x20; status: "Pending",

&#x20; priority: "High"

}

**5. Design an order document with customer name and item list.**

{

&#x20; customerName: "Rahul",

&#x20; items: \[

&#x20;   { name: "Laptop", quantity: 1 },

&#x20;   { name: "Mouse", quantity: 2 }

&#x20; ]

}



##### **Intermediate Tasks**

**1. Decide whether address should be embedded inside student document or kept separately.**

Embed inside student document



Reason:

\- Address is mostly used with student

\- Faster read (single document)



**2. Decide whether department details should be embedded or referenced for employees.**

Reference (separate collection)



Reason:

\- Department is shared across employees

\- Avoid duplication



**3. Design a blog post with comments.**

{

&#x20; title: "MongoDB Basics",

&#x20; content: "Learning MongoDB",

&#x20; comments: \[

&#x20;   { user: "Anmol", text: "Nice blog" },

&#x20;   { user: "hamza", text: "Helpful" }

&#x20; ]

}

**4. Design a movie document with cast as array.**

{

&#x20; name: "Inception",

&#x20; cast: \["Leonardo", "Joseph", "Elliot"]

}

**5. Design an e-commerce order with nested items.**

{

&#x20; customer: "Rahul",

&#x20; items: \[

&#x20;   { product: "Laptop", price: 50000, qty: 1 },

&#x20;   { product: "Mouse", price: 500, qty: 2 }

&#x20; ],

&#x20; totalAmount: 51000

}

##### **Advanced Tasks**

**1. For an intern management system, design collections for:**

**o interns**

**o departments**

**o tasks**

**o attendance**

// interns

{

&#x20; name: "Kiran",

&#x20; age: 22,

&#x20; departmentId: "D1",

&#x20; skills: \["MongoDB"]

}



// departments

{

&#x20; \_id: "D1",

&#x20; name: "Engineering"

}



// tasks

{

&#x20; title: "Build API",

&#x20; internId: "I1",

&#x20; status: "Pending"

}



// attendance

{

&#x20; internId: "I1",

&#x20; date: "2026-04-08",

&#x20; status: "Present"

}

**2. Decide where embedding should be used and where referencing should be used.**

Embedding:

\- Used for small, related data

\- Faster reads



Referencing:

\- Used for reusable data

\- Reduces duplication



**3. Design a project document with team members and deadlines.**

{

&#x20; name: "Inventory System",

&#x20; teamMembers: \["A", "B", "C"],

&#x20; deadline: "2026-05-01"

}

**4. Compare one MongoDB design with equivalent MySQL table structure.**

MongoDB:

\- Flexible schema

\- JSON documents



MySQL:

\- Fixed tables

\- Structured rows

**5. Explain which design is better for fast reads in a dashboard application.**

Embedding is better for dashboards

because all data is in one document



##### **Topic 11: Combined Practice Challenges**

##### **Basic Tasks**

**1. Create students collection, insert 5 docs, fetch all.**

db.students.insertMany(\[

&#x20;{ name:"A" }, { name:"B" }, { name:"C" }, { name:"D" }, { name:"E" }

])

db.students.find()

**2. Create employees collection, insert 5 docs, update one salary.**

db.employees.insertMany(\[

&#x20;{ name:"E1", salary:20000 },

&#x20;{ name:"E2", salary:30000 }

])



db.employees.updateOne(

&#x20;{ name:"E1" },

&#x20;{ $set:{ salary:25000 } }

)

**3. Create tasks collection, insert 5 docs, delete one.**

db.tasks.insertMany(\[

&#x20;{ title:"T1" },

&#x20;{ title:"T2" }

])



db.tasks.deleteOne({ title:"T1" })

**4. Create products collection, sort by price.**

db.products.find().sort({ price: -1 })

**5. Create interns collection, project only name and department.**

db.interns.find({}, { name:1, department:1, \_id:0 })



##### **Intermediate Tasks**

**1. Insert 10 employees and find those with salary > 30000.**

db.employees.insertMany(\[

&#x20;{ salary:20000 }, { salary:35000 }, { salary:40000 }

])



db.employees.find({ salary:{ $gt:30000 } })

**2. Insert 10 tasks and update all pending tasks to in-progress.**

db.tasks.updateMany(

&#x20;{ status:"Pending" },

&#x20;{ $set:{ status:"In Progress" } }

)

**3. Insert 10 products and find top 3 by price.**
db.products.find().sort({ price:-1 }).limit(3)



**4. Insert 10 students and fetch only MERN students sorted by age.**

db.students.find({ course:"MERN" }).sort({ age:1 })



**5. Insert interns with skills array and find those with MongoDB skill.**

db.students.find({ course:"MERN" }).sort({ age:1 })



##### **Advanced Tasks**

**1. Build a mini employee management collection with:**

**o create**

**o filter**

**o update**

**o soft delete**

// create

db.employees.insertOne({ name:"A", salary:20000, isDeleted:false })



// filter

db.employees.find({ salary:{ $gt:15000 } })



// update

db.employees.updateOne(

&#x20;{ name:"A" },

&#x20;{ $set:{ salary:30000 } }

)



// soft delete

db.employees.updateOne(

&#x20;{ name:"A" },

&#x20;{ $set:{ isDeleted:true } }

)

**2. Build a task tracking collection with priority, due date, status, and perform operations.**

db.tasks.insertOne({

&#x20;title:"Build API",

&#x20;priority:"High",

&#x20;status:"Pending",

&#x20;dueDate:new Date()

})



db.tasks.updateMany(

&#x20;{ status:"Pending" },

&#x20;{ $set:{ status:"Completed" } }

)

**3. Create an intern collection with nested address and skills array, then run queries on both.**

db.interns.insertOne({

&#x20;name:"Kiran",

&#x20;address:{ city:"Bangalore" },

&#x20;skills:\["MongoDB","NodeJS"]

})



db.interns.find({ "address.city":"Bangalore" })

db.interns.find({ skills:"MongoDB" })

**4. Design and populate order collection with nested items and status updates.**

db.orders.insertOne({

&#x20;customer:"Rahul",

&#x20;items:\[

&#x20; { product:"Laptop", qty:1 },

&#x20; { product:"Mouse", qty:2 }

&#x20;],

&#x20;status:"Placed"

})



db.orders.updateOne(

&#x20;{ status:"Placed" },

&#x20;{ $set:{ status:"Shipped" } }

)

**5. Create a realistic internship data model and justify all major design choices.**

Collections:

\- interns

\- departments

\- tasks

\- attendance



Reason:

\- Separation improves scalability

\- Easy to query

