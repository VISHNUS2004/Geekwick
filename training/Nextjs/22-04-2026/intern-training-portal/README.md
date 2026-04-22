# 🚀 Intern Training Portal (Next.js)

This project is developed as part of my internship training to understand and implement core concepts of **Next.js (App Router)** using **JavaScript (without TypeScript)**.

---

## 📌 Project Overview

The application demonstrates essential frontend and backend concepts including:
- Component-based architecture
- Routing (static & dynamic)
- Form handling and validation
- API creation and data fetching

---

## ✨ Features

### 🔹 1. Components & Props
- Created reusable `UserCard` component
- Passed data using props (name, role)
- Displayed multiple users

### 🔹 2. List Rendering
- Rendered course list using `map()`
- Displayed dynamic data efficiently

### 🔹 3. Conditional Rendering
- Displayed fallback message when data is empty

### 🔹 4. State Management
- Used `useState` for managing UI state
- Implemented toggle functionality

### 🔹 5. Forms
#### Basic Form:
- Controlled inputs
- Disabled submit button for empty fields
- Displayed submitted data

#### Advanced Form:
- Reusable `FormField` component
- Input validation with error messages
- Reset functionality
- Preview card for submitted data

### 🔹 6. Routing

#### Static Routes:
- `/` → Home Page
- `/form` → Basic Form
- `/advanced-form` → Advanced Form
- `/toggle` → Show/Hide Section

#### Dynamic Routes:
- `/students/[id]` → Student Details
- `/courses/[id]` → Course Details

---

### 🔹 7. API Routes

- `/api/interns` → Returns intern data (JSON)
- `/api/courses` → Returns course data (JSON)

---

### 🔹 8. Data Fetching
- Fetched data using `fetch()`
- Implemented loading state
- Displayed API data in UI

---

## 📁 Folder Structure

```
intern-training-portal/
 ├── src/
 │   ├── app/
 │   │   ├── advanced-form/
 │   │   ├── api/
 │   │   │   ├── courses/
 │   │   │   │   └── route.js
 │   │   │   ├── interns/
 │   │   │       └── route.js
 │   │   ├── courses/
 │   │   │   └── [id]/
 │   │   │       └── page.js
 │   │   ├── form/
 │   │   │   └── page.js
 │   │   ├── students/
 │   │   │   └── [id]/
 │   │   │       └── page.js
 │   │   ├── toggle/
 │   │   │   └── page.js
 │   │   ├── favicon.ico
 │   │   ├── globals.css
 │   │   ├── layout.js
 │   │   ├── page.js
 │   │
 │   ├── components/
 │       ├── UserCard.js
 │       ├── FormField.js
```

## ⚙️ Tech Stack

- **Next.js (App Router)**
- **React Hooks (useState, useEffect)**
- **JavaScript (ES6)**
- **CSS (Global Styling)**

---

## ▶️ Getting Started

### 1. Install dependencies
```
npm install
```
### 2. Run development server
```
npm run dev
```
### 3. Open in browser
```
http://localhost:3000
```
### 📄 Pages & Routes
## Route	Description
```
/	Home Page (Users & Courses)
/form	Basic Form
/advanced-form	Advanced Form
/toggle	Show/Hide Section
/students	Students List
/students/[id]	Student Detail Page
/courses	Courses List
/courses/[id]	Course Detail Page
/interns	Interns Data (API Fetch)
```
### 🎯 Learning Outcomes

- Learned Next.js App Router structure
- Understood dynamic routing and API routes
- Implemented form handling and validation
- Built reusable components
- Practiced real-world project structure
### 👨‍💻 Author
```
Kaushik
Intern
```
