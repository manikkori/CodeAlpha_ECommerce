# E-Commerce Store - CodeAlpha Task 1

A full-stack e-commerce web application built for the CodeAlpha internship program. It features user authentication, product listings, a shopping cart, and an order management system.

## 🚀 Live Demo

- **Frontend (Vercel):** [Add your Vercel URL here]
- **Backend API (Render):** [Add your Render URL here]

## 🛠️ Tech Stack

- **Frontend:** React.js, Vite, Tailwind CSS, React Router
- **Backend:** Node.js, Express.js, JWT (JSON Web Tokens)
- **Database:** MySQL (Hosted on Aiven Cloud)
- **Deployment:** Vercel (Frontend) & Render (Backend)

## ✨ Key Features

- **User Authentication:** Secure registration and login using JWT and bcrypt.
- **Product Listing:** Dynamic fetching of products from the MySQL database.
- **Shopping Cart:** Global state management for adding/removing items using React Context API.
- **Order Placement:** Secure checkout process linked to the logged-in user.
- **Order History:** Dedicated profile page for users to view their past orders.
- **Fully Responsive:** Styled with Tailwind CSS for mobile and desktop compatibility.

## 📁 Project Structure (Monorepo)

- `/frontend` - Contains the Vite + React.js application.
- `/backend` - Contains the Node.js + Express.js REST API.

## ⚙️ Local Setup Instructions

1. **Clone the repository:**
   \`\`\`bash
   git clone https://github.com/your-username/CodeAlpha_ECommerce.git
   cd CodeAlpha_ECommerce
   \`\`\`

2. **Backend Setup:**
   \`\`\`bash
   cd backend
   npm install

   # Create a .env file with PORT, DB credentials, and JWT_SECRET

   npm start
   \`\`\`

3. **Frontend Setup:**
   \`\`\`bash
   cd ../frontend
   npm install
   # Create a .env file with VITE_API_URL pointing to the backend
   npm run dev
   \`\`\`

## 📝 License

Created for CodeAlpha Internship Task 1.
