1️⃣ Deployed URL

 Frontend (Vercel)

https://pastebin-frontend-rouge.vercel.app


 Backend API (Render)

https://pastebin-backend.onrender.com

2️⃣ Public Git Repository

 Frontend Repo

https://github.com/saurabhanand96310/pastebin-frontend


 Backend Repo

https://github.com/saurabhanand96310/pastebin-backend


Pastebin-like Web Application

A simple Pastebin-style web application that allows users to store and share text content using a unique URL.
Pastes can optionally expire based on time or number of views.

Running the App Locally
Prerequisites

Node.js (v18+)

MongoDB Atlas account

Backend
cd backend
npm install
npm start


Create a .env file:

MONGO_URI=<mongodb_connection_string>
FRONTEND_URL=http://localhost:5173
PORT=5000


Backend runs on:

http://localhost:5000

Frontend
cd frontend
npm install
npm run dev


Create a .env file:

VITE_API_URL=http://localhost:5000


Frontend runs on:

http://localhost:5173

🗄 Persistence Layer

MongoDB Atlas (cloud-hosted)

Mongoose ODM

Single collection (Paste) stores:

content

expiration time

view limits

view count

This approach keeps the system simple and avoids unnecessary complexity.

 Build & Runtime Notes (VERY IMPORTANT)

Uses standard commands:

npm install

npm start / npm run dev

No manual database migrations

No shell access required post-deployment

Application starts successfully on first deploy

✅ Status Codes Used
Case	            Status
Paste created	    201
Invalid request  	400
Paste found     	200
Paste expired    	410
Not found	        404

👤 Author

Saurabh Anand