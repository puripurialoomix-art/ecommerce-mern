# 🛒 E-Commerce MERN Stack Project

Full-stack e-commerce application built with MongoDB, Express, React, and Node.js.

## 🚀 Quick Start (Local Development)

### Backend
```cmd
cd server
npm install
npm run dev
```
Server runs on: `http://localhost:8000`

### Frontend
```cmd
cd client
npm install
npm start
```
Frontend runs on: `http://localhost:3000`

---

## 🌐 Deployment

See [DEPLOYMENT_SETUP.md](./DEPLOYMENT_SETUP.md) for complete deployment guide.

**Stack:**
- Frontend: Cloudflare Pages
- Backend: Render.com
- Database: MongoDB Atlas

---

## 📁 Project Structure

```
ECommerce-Website/
├── client/              # React frontend
│   ├── src/
│   ├── public/
│   └── package.json
├── server/              # Express backend
│   ├── controller/
│   ├── model/
│   ├── routes/
│   └── package.json
└── DEPLOYMENT_SETUP.md  # Deployment guide
```

---

## 🔧 Environment Variables

### Backend (.env)
```
DB_USERNAME=your_mongodb_username
DB_PASSWORD=your_mongodb_password
PORT=8000
```

### Frontend (.env)
```
REACT_APP_BASE_URL=http://localhost:8000
```

---

## 📦 Features

- User authentication (signup/login)
- Product listing and details
- Shopping cart
- Manual payment processing
- Responsive design

---

## 🛠️ Tech Stack

**Frontend:**
- React 18
- Material-UI
- Redux
- Axios

**Backend:**
- Node.js
- Express
- MongoDB (Mongoose)
- CORS enabled

---

## 📝 License

MIT
