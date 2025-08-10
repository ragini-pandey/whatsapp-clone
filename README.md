# WhatsApp Clone (MERN Monorepo)

A full-stack WhatsApp-style chat app built on the MERN stack with real-time messaging via Pusher. This monorepo contains separate `frontend` and `backend` packages to keep UI and API concerns clean and scalable.

---

## ✨ Features

- Real-time messaging with Pusher (instant send/receive)
- Store and retrieve message history in MongoDB
- Responsive UI for desktop and mobile

---

## 🖼️ Screenshots

![Chat Screen](https://github.com/ragini-pandey/whatsapp-clone/blob/master/frontend/public/screenshot1.png)

---

## 🧱 Tech Stack

**Frontend**
- React, React Router
- Axios
- Pusher JS
- CSS/SCSS for styling

**Backend**
- Node.js, Express
- MongoDB with Mongoose
- Pusher for real-time events

---

## 🗂️ Monorepo Structure

```
whatsapp-clone/
├─ backend/         # Express API, DB models, Pusher server hooks
├─ frontend/        # React app (UI, routes, services)
├─ package.json     # (root; optional scripts for convenience)
└─ README.md
```

---

## 🚀 Quick Start

### Prerequisites
- Node.js (v14+)
- MongoDB (local or Atlas)
- Pusher account & credentials (for live updates)

---

### 1) Clone
```bash
git clone https://github.com/ragini-pandey/whatsapp-clone.git
cd whatsapp-clone
```

---

### 2) Backend Setup
```bash
cd backend
npm install
```

Create a `.env` file inside `backend/`:

```ini
PORT=9000
MONGODB_URL=your-mongodb-connection-string
PUSHER_KEY=your_pusher_key
PUSHER_SECRET=your_pusher_secret
```

Now run the API:
```bash
npm run backend
```

---

### 3) Frontend Setup
Open a second terminal:
```bash
cd ../frontend
npm install
```

Create a `.env` file inside `frontend/`:

```ini
REACT_APP_PUSHER_KEY=your_pusher_key
```

Now start the React app:
```bash
npm run frontend
```

Then visit: `http://localhost:3000`

---

## 🏃 One-Command Dev (optional)

If you want to start both servers from the repo root, add this to the root `package.json`:

```json
{
  "scripts": {
    "dev:api": "npm --prefix backend run backend",
    "dev:web": "npm --prefix frontend run frontend",
    "dev": "concurrently \"npm run dev:api\" \"npm run dev:web\""
  },
  "devDependencies": {
    "concurrently": "^9.0.0"
  }
}
```

Then:
```bash
npm install
npm run dev
```

---

## 🔐 Environment Variables (recap)

| Key                  | Where      | Purpose                                  |
|----------------------|------------|------------------------------------------|
| `PORT`               | backend    | API port (e.g., 9000)                    |
| `MONGODB_URL`        | backend    | MongoDB connection string                |
| `PUSHER_KEY`         | backend    | Pusher app key                           |
| `PUSHER_SECRET`      | backend    | Pusher app secret                        |
| `PUSHER_APP_ID`*     | backend    | Pusher app id (*if required*)            |
| `PUSHER_CLUSTER`*    | backend/UI | Cluster, e.g. `mt1` (*if required*)      |
| `REACT_APP_PUSHER_KEY`| frontend  | Pusher app key for React client          |

> *Exact keys may vary depending on your Pusher config.*

---

## 📡 API (example)

- `GET /messages` — fetch all messages
- `POST /messages` — send a new message (triggers Pusher event)

---

## 📦 Dependencies (high-level)

**Backend:** Express, Mongoose, Pusher  
**Frontend:** React, Axios, Pusher-js, React Router

---

## 🗺️ Roadmap

- User authentication
- Typing indicators / read receipts
- File/image sharing
- Group chats
- Message search & pagination

---
