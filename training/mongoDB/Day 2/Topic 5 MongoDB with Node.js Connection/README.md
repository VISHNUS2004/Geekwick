# Intern Task Management Backend

This project covers the Day 2 MongoDB + Mongoose tasks with a single Express backend.

## What is included

- MongoDB connection moved to `config/db.js`
- `.env` support with `dotenv`
- Reusable DB connection function
- Folder structure using `config`, `controllers`, `models`, `routes`, `utils`, and `middlewares`
- Mongoose models for `Department`, `Intern`, `Employee`, `Task`, `Project`, `Attendance`, and `User`
- Validations, references, timestamps, indexes, soft delete support, populate, and aggregation
- Express APIs for departments, interns, employees, tasks, and reports

## Main routes

- `POST /departments`
- `POST /interns`
- `GET /interns`
- `GET /interns/:id`
- `PUT /interns/:id`
- `DELETE /interns/:id`
- `GET /interns/active`
- `POST /employees`
- `GET /employees`
- `POST /tasks`
- `GET /tasks`
- `GET /tasks/assigned/:internId`
- `PUT /tasks/:id/status`
- `DELETE /tasks/:id`
- `GET /tasks/status-summary`
- `GET /reports/interns-by-department`

## Why DB connection should not live in the main file

Real projects keep database connection logic outside the main entry file to improve separation of concerns, reusability, testing, maintainability, and secure handling of configuration.

## Notes

- The database name used is `internhub`
- Interns and tasks are filtered to non-deleted records in the main APIs
- Intern listing populates `departmentId`
- Task listing populates the assigned intern and that intern's department
