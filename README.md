# 📝 ToDo List Application

A simple, clean, and responsive **ToDo List App** built using the **MERN Stack**. This app allows users to manage their daily tasks effectively — add, update, delete, and mark tasks as completed.

---

## 🚀 Features

- ✅ Add new tasks
- ✏️ Edit existing tasks
- 🗑️ Delete tasks
- ✔️ Mark tasks as completed or pending
- 🔄 Real-time updates (optional with WebSocket if implemented)
- 💾 Data persistence with MongoDB
- 🎨 Responsive UI with modern design (React + CSS/Tailwind/Bootstrap)

---

## 🛠 Tech Stack

**Frontend:**
- React.js
- Axios / Fetch API
- Tailwind CSS / Bootstrap (based on your styling)
- React Icons (optional)

**Backend:**
- Node.js
- Express.js
- MongoDB with Mongoose

**Optional Tools:**
- Postman (for API testing)
- dotenv (for environment variables)
- CORS
- concurrently (for running server and client)

---

## 📁 Project Structure

```bash
todo-list/
├── client/                 # React frontend
│   ├── src/
│   │   ├── components/
│   │   ├── pages/
│   │   ├── App.js
│   │   └── index.js
├── server/                 # Node/Express backend
│   ├── models/
│   ├── routes/
│   ├── controllers/
│   └── server.js
├── .env
├── package.json
└── README.md
