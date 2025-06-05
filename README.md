# 📚 Technical Assessment - Book Management API

## 🧩 Project Overview

This assessment requires creating a **Book Management REST API** that allows users to manage their personal book collection.

### Core Features

- User Registration
- User Authentication with JWT
- CRUD operations on books (Add, Edit, Delete, List)
- User-level access control: users can only manage their own books

### Book Model

Each book consists of:

- `id` (auto-generated (UUID))
- `title` (string, required)
- `author` (string, required)
- `description` (string, optional)
- `year` (number, required)
- `coverImageUrl` (string, optional)

---

## ⚙️ Technical Requirements

- Implemented using **NodeJS** (NestJS recommended)
- Authentication with **JWT**
- Well-structured, maintainable code with separation of concerns
- Secure endpoints to protect user data
- Data persistence using in-memory storage or lightweight DB (SQLite/PostgreSQL)

### Bonus Features Implemented

- Provide API documentation via Swagger

---

## 🚀 Getting Started

1. Clone the repository
2. Install dependencies:
   ```bash
   npm install
   ```
