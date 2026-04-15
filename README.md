School ERP Mini System

A role-based School ERP system built with React that manages users, students, and teachers with secure authentication, structured state management, and optimized frontend performance.

🚀 Overview

This project is a frontend-focused School ERP system designed to simulate real-world application architecture. It implements role-based access control, authentication, modular state management, and performance optimizations using modern React practices.

🛠 Tech Stack

Frontend:

React (with functional components & hooks)
JavaScript

State Management & Routing:

Redux
React Router

Forms & Validation:

React Hook Form

Backend (BaaS):

Supabase (Authentication, Database, APIs)

Styling & UI:

Tailwind CSS
shadcn/ui

Tools:

Vite
Git
✨ Features
Role-Based Access Control (RBAC)

Restricts access to features and routes based on user roles (e.g., Admin, Teacher)

Authentication & Session Management

Secure login and session handling using Supabase Auth

Protected Routing

Route-level guards to prevent unauthorized access

Centralized State Management

Redux used to manage user sessions, roles, and shared application data

Dynamic Forms with Validation

Built using React Hook Form with optimized rendering and validation

Backend Integration

Supabase used for CRUD operations and real-time data interaction

Performance Optimization

Implemented lazy loading and code splitting to improve initial load time

📦 Modules

User Management (Admin)

Manage user roles and access

Student Management

Add, update, and manage student records

Teacher Management

Manage teacher data and related operations

Role-Based Dashboard

Personalized dashboard based on user role

🔐 Authentication Flow

User logs in via Supabase Auth

Session is stored and managed globally (Redux)

User role determines accessible routes and features

Protected routes ensure unauthorized users cannot access restricted pages

⚙️ Application Architecture

Component-based modular structure

Centralized global state using Redux

Route-based code splitting for performance

Separation of concerns between UI, logic, and data handling

📈 Performance Considerations

Lazy loading of routes to reduce bundle size

Minimized re-renders using React Hook Form

Efficient state updates via Redux

🔗 Live Demo

👉 https://gws-erp.netlify.app/

📌 Future Improvements

Add pagination and search optimization

Improve error handling and retry mechanisms

Add unit and integration testing

Enhance UI/UX with loading states and skeleton screens

👨‍💻 Author

Lalit Sharma
Frontend Developer
