# 🚀 Deployment Guide

## Setup Overview
- **Frontend:** Cloudflare Pages
- **Backend:** Render.com
- **Database:** MongoDB Atlas

---

## 📋 Prerequisites

1. GitHub account
2. MongoDB Atlas account (already setup ✅)
3. Render.com account (free)
4. Cloudflare account (free)

---

## 🗄️ Step 1: MongoDB Atlas (Already Done ✅)

Your MongoDB is already configured:
- Username: `rajivranjan722025_db_user`
- Cluster: `cluster0.aw29sgl.mongodb.net`
- Database: `ECOMMERCE`

---

## 🔧 Step 2: Push to GitHub

```cmd
cd C:\Users\Administrator\Desktop\MERN-Stack-Projects-master\ECommerce-Website
git add .
git commit -m "Initial commit for deployment"
git branch -M main
git remote add origin https://github.com/YOUR_USERNAME/YOUR_REPO_NAME.git
git push -u origin main
```

---

## 🖥️ Step 3: Deploy Backend to Render.com

### 3.1 Create Account
1. Go to: https://render.com
2. Sign up with GitHub

### 3.2 Create Web Service
1. Click **"New +"** → **"Web Service"**
2. Connect your GitHub repository
3. Configure:
   - **Name:** `ecommerce-backend` (or any name)
   - **Root Directory:** `server`
   - **Environment:** `Node`
   - **Build Command:** `npm install`
   - **Start Command:** `npm start`
   - **Instance Type:** `Free`

### 3.3 Add Environment Variables
Click **"Environment"** tab and add:
```
DB_USERNAME = rajivranjan722025_db_user
DB_PASSWORD = DIN2nkHOopqWjBtH
PORT = 8000
```

### 3.4 Deploy
- Click **"Create Web Service"**
- Wait 5-10 minutes for deployment
- Copy your backend URL: `https://ecommerce-backend-xxxx.onrender.com`

---

## 🌐 Step 4: Deploy Frontend to Cloudflare Pages

### 4.1 Update Backend URL
1. Open `client/.env` file
2. Replace with your Render backend URL:
   ```
   REACT_APP_BASE_URL=https://ecommerce-backend-xxxx.onrender.com
   ```
3. Commit and push:
   ```cmd
   git add client/.env
   git commit -m "Update backend URL"
   git push
   ```

### 4.2 Build Frontend Locally (Optional Test)
```cmd
cd client
npm install
npm run build
```

### 4.3 Deploy to Cloudflare Pages
1. Go to: https://dash.cloudflare.com
2. Click **"Workers & Pages"** → **"Create application"** → **"Pages"**
3. Connect GitHub repository
4. Configure:
   - **Project name:** `ecommerce-frontend`
   - **Production branch:** `main`
   - **Build command:** `npm run build`
   - **Build output directory:** `build`
   - **Root directory:** `client`

### 4.4 Add Environment Variable
In Cloudflare Pages settings:
```
REACT_APP_BASE_URL = https://ecommerce-backend-xxxx.onrender.com
```

### 4.5 Deploy
- Click **"Save and Deploy"**
- Wait 5 minutes
- Your site will be live at: `https://ecommerce-frontend.pages.dev`

---

## ✅ Verification

### Test Backend
```
https://ecommerce-backend-xxxx.onrender.com/products
```
Should return JSON data

### Test Frontend
```
https://ecommerce-frontend.pages.dev
```
Should show your website

---

## 🔄 Future Updates

### Update Backend
```cmd
git add server/
git commit -m "Backend update"
git push
```
Render will auto-deploy

### Update Frontend
```cmd
git add client/
git commit -m "Frontend update"
git push
```
Cloudflare will auto-deploy

---

## 🐛 Troubleshooting

### Backend Issues
- Check Render logs: Dashboard → Your Service → Logs
- Verify environment variables are set correctly
- MongoDB Atlas: Whitelist IP `0.0.0.0/0` (allow all)

### Frontend Issues
- Check Cloudflare build logs
- Verify `REACT_APP_BASE_URL` is correct
- Clear browser cache

### CORS Issues
Backend already has CORS enabled:
```javascript
app.use(cors({ origin: "*" }));
```

---

## 💰 Cost

- **MongoDB Atlas:** FREE (512MB)
- **Render.com:** FREE (750 hours/month)
- **Cloudflare Pages:** FREE (unlimited)

**Total: ₹0** 🎉

---

## 📞 Support

If deployment fails, check:
1. GitHub repo is public
2. All environment variables are set
3. MongoDB Atlas allows connections from anywhere
4. Node version compatibility (use Node 16+)

---

**Ready to deploy? Follow the steps above!** 🚀
