# 🎓 IIITDM Jabalpur Student Portal (Full-Stack ERP)

A production-ready **Student Portal / College ERP System** built for
**Indian Institute of Information Technology Design and Manufacturing Jabalpur (IIITDMJ)**.

🌐 **Live Demo:https://iiitdm-portal.vercel.app/
⚙️ **Backend API:https://iiitdm-portal.onrender.com

---

## 🚀 Project Overview

This project is a **modern full-stack web application** that digitizes academic and campus workflows.

It is designed to simulate a **real-world college ERP system**, enabling students, faculty, and admins to manage all academic activities in one place.

---

## 🧩 Tech Stack

### 🖥 Frontend

* React / Next.js
* Tailwind CSS
* UI/UX designed using Stitch

### ⚙️ Backend

* Node.js
* Express.js
* REST API architecture

### 🗄 Database

* MongoDB Atlas

### ☁️ Deployment

* Frontend → Vercel
* Backend → Render
* Database → MongoDB Atlas

---

## ✨ Core Features

### 👨‍🎓 Student Dashboard

* 📅 Personalized timetable
* 📊 Attendance tracking (subject-wise)
* 📝 Assignment submission system
* 📈 Result & CGPA tracking
* 📢 Notices & announcements

---

### 👩‍🏫 Faculty Panel

* Mark & update attendance
* Upload assignments & study material
* Evaluate submissions
* Manage course content

---

### 🛠 Admin Panel

* Manage students & faculty
* Create and assign subjects
* Publish notices
* Monitor system data

---

### 📊 Academic System

* Credit-based subject structure
* Attendance analytics
* Performance tracking dashboard

---

### 📂 Resource Hub

* Lecture notes
* PDFs & study material
* Previous year questions

---

### 🔐 Authentication & Security

* Role-based access (Student / Faculty / Admin)
* JWT Authentication
* Protected routes

---

## 🌐 System Architecture

```plaintext
Client (Vercel)
      ↓
Frontend (React)
      ↓
Backend API (Render)
      ↓
MongoDB Atlas (Database)
```

---

## ⚙️ Local Setup Guide

### 1️⃣ Clone the Repository

```bash
git clone https://github.com/piyush-of/iiitdm-portal.git
cd iiitdm-portal
```

---

### 2️⃣ Install Dependencies

#### Frontend

```bash
cd client
npm install
```

#### Backend

```bash
cd server
npm install
```

---

### 3️⃣ Configure Environment Variables

Create `.env` file inside `server/`

```env
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_secret
PORT=5000
```

---

### 4️⃣ Run Locally

#### Start Backend

```bash
cd server
npm start
```

#### Start Frontend

```bash
cd client
npm run dev
```

---

## 📸 Screenshots (Add Here)

* Dashboard UI
* Attendance Page
* Assignment Module
* Admin Panel

---

## 🚀 Deployment Details

| Service  | Platform      |
| -------- | ------------- |
| Frontend | Vercel        |
| Backend  | Render        |
| Database | MongoDB Atlas |

---

## ⚡ Challenges Faced

* Handling CORS between frontend & backend
* Managing authentication securely
* Connecting distributed services (Vercel + Render + MongoDB)
* Structuring scalable backend APIs

---

## 🔮 Future Enhancements

* 🤖 AI-based study assistant
* 📊 Placement prediction system
* 🔔 Real-time notifications (WebSockets)
* 📱 Mobile app version
* 📅 Smart timetable generator

---

## 🎯 Key Learnings

* Full-stack development (MERN)
* API integration & deployment
* Authentication & security
* Real-world system design

---

## 👨‍💻 Author

**Piyush Kumawat**
GitHub: https://github.com/piyush-of

---

## ⭐ Support

If you found this project useful, consider giving it a ⭐ on GitHub!

