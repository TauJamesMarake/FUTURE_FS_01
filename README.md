# 🌐 Personal Professional Portfolio Website

> A full-stack portfolio website built with **React.js**, **Node.js**, and **Supabase** - showcasing projects, skills, and professional experience with a working contact form and SEO-friendly structure.

---

## 📋 Table of Contents

- [Overview](#overview)
- [Features](#features)
- [Tech Stack](#tech-stack)
- [Project Structure](#project-structure)
- [Getting Started](#getting-started)
  - [Prerequisites](#prerequisites)
  - [Installation](#installation)
  - [Environment Variables](#environment-variables)
  - [Running the App](#running-the-app)
- [Database Setup (Supabase)](#database-setup-supabase)
- [Deployment](#deployment)
- [License](#license)

---

## Overview

This is a personal portfolio website developed as part of the **Future Interns Full-Stack Web Development Program – Task 1 (2026)**. It serves as a live, dynamic showcase of my skills, projects, and professional background, complete with a contact form that saves submissions to a database.

---

## Features

- ✅ **Interactive Portfolio Section** — Dynamic project cards fetched from Supabase, with live site links and tech stack icons
- ✅ **Resume Section** — Highlighted skills, experience, and education
- ✅ **Contact Form** — Submissions saved to Supabase; email notifications supported
- ✅ **SEO-Friendly Structure** — Semantic HTML, meta tags, and clean routing
- ✅ **Responsive Design** — Mobile-first layout
- ✅ **REST API Backend** — Express.js server with routes for projects and contact form

---

## Tech Stack

| Layer     | Technology                          |
|-----------|-------------------------------------|
| Frontend  | React.js, JSX, Inline Styles        |
| Backend   | Node.js, Express.js                 |
| Database  | Supabase (PostgreSQL)               |
| Auth/API  | Supabase JS Client                  |
| Dev Tools | nodemon, dotenv, cors               |

---

## Project Structure

```
portfolio/
├── client/                   # React frontend
│   ├── public/
│   └── src/
│       ├── assets/           # SVG icons, images
│       ├── components/       # Reusable UI components
│       ├── pages/            # Route-level pages (Home, Projects, Contact)
│       └── App.jsx
│
├── backend/                   # Node.js + Express backend
│   ├── src/
│   │   ├── routes/
│   │   │   ├── projects.js   # GET /api/projects, GET /api/projects/:id
│   │   │   └── contact.js    # POST /api/contact
│   │   └── index.js          # Express app entry point
│   └── .env
│
└── README.md
```

---

## Getting Started

### Prerequisites

Make sure you have the following installed:

- [Node.js](https://nodejs.org/) (v18 or higher)
- [npm](https://www.npmjs.com/) (v9 or higher)
- A [Supabase](https://supabase.com/) account and project

---

### Installation

1. **Clone the repository**

```bash
git clone https://github.com/your-username/portfolio.git
cd portfolio
```

2. **Install backend dependencies**

```bash
cd backend
npm install
```

3. **Install frontend dependencies**

```bash
cd ../client
npm install
```

---

### Environment Variables

#### Backend — `backend/.env`

Create a `.env` file inside the `backend/` directory:

```env
PORT=5000
SUPABASE_URL=your_supabase_project_url
SUPABASE_ANON_KEY=your_supabase_anon_key
```

> 🔑 You can find your `SUPABASE_URL` and `SUPABASE_ANON_KEY` in your Supabase project under **Settings → API**.

#### Frontend — `client/.env`

Create a `.env` file inside the `client/` directory:

```env
REACT_APP_API_URL=http://localhost:5000
```

---

### Running the App

#### Start the backend server

```bash
cd backend
npm run dev
```

The Express server will start on `http://localhost:5000`.

#### Start the React frontend

In a new terminal:

```bash
cd client
npm start
```

The React app will open at `http://localhost:3000`.

---

## Database Setup (Supabase)

Log in to your [Supabase dashboard](https://app.supabase.com/) and run the following SQL in the **SQL Editor**:

### Projects Table

```sql
CREATE TABLE projects (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  title TEXT NOT NULL,
  description TEXT,
  url TEXT,
  tech_stack TEXT[],
  created_at TIMESTAMP DEFAULT NOW()
);
```

### Contacts Table

```sql
CREATE TABLE contacts (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  name TEXT NOT NULL,
  email TEXT NOT NULL,
  message TEXT NOT NULL,
  created_at TIMESTAMP DEFAULT NOW()
);
```

> You can seed sample projects directly in the Supabase Table Editor or via the SQL Editor.

---

## Deployment

### Frontend (Vercel — Recommended)

1. Push your `client/` folder (or the full repo) to GitHub
2. Go to [vercel.com](https://vercel.com) → **New Project** → Import your repo
3. Set the root directory to `client/`
4. Add environment variables (`REACT_APP_API_URL`) in Vercel's project settings
5. Deploy ✅

### Backend (Render — Recommended)

1. Go to [render.com](https://render.com) → **New Web Service** → Connect your repo
2. Set the root directory to `server/`
3. Set the build command: `npm install`
4. Set the start command: `node src/index.js`
5. Add environment variables (`SUPABASE_URL`, `SUPABASE_ANON_KEY`, `PORT`)
6. Deploy ✅

> 💡 **Alternative backend options:** Railway, Fly.io, or a Node.js-compatible VPS.

---

## License

This project was built as part of the **Future Interns Full-Stack Web Development Internship – Task 1 (2026)**.

Feel free to use this as a reference or template for your own portfolio. If you do, a ⭐ on the repo is always appreciated!
A UI design can be given on request.
