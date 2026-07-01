# 📊 Analytics Dashboard

A full-stack data analytics and business intelligence dashboard built with React.js and Node.js.

## 🚀 Features

- 🔐 **Secure Login System** - Authentication with credentials validation
- 📊 **KPI Dashboard** - 4 real-time key performance indicator cards
- 📈 **Interactive Charts** - Bar chart, Pie chart, and Area chart
- 📋 **Data Table** - Detailed monthly report with progress bars
- 🎨 **Modern UI** - Beautiful gradients and smooth animations
- 📱 **Responsive Design** - Works on desktop and mobile
- 🔄 **Real-time Data** - Fetched from backend API

## 🛠️ Tech Stack

**Frontend:**
- React.js
- Recharts (for data visualization)
- CSS3 (custom styling)

**Backend:**
- Node.js
- Express.js
- CORS

## 📁 Project Structure

\`\`\`
analytics-dashboard/
├── frontend/
│   ├── src/
│   │   ├── components/
│   │   │   ├── KPICard.js
│   │   │   ├── SalesBarChart.js
│   │   │   ├── CategoryPieChart.js
│   │   │   ├── RevenueLineChart.js
│   │   │   └── DataTable.js
│   │   ├── pages/
│   │   │   ├── Login.js
│   │   │   └── Dashboard.js
│   │   ├── App.js
│   │   └── index.js
│   └── package.json
│
└── backend/
    ├── server.js
    └── package.json
\`\`\`

## 🔧 Installation & Setup

### Prerequisites
- Node.js (v14 or higher)
- npm

### Steps

**1. Clone the repository**
\`\`\`bash
git clone https://github.com/YOUR_USERNAME/analytics-dashboard.git
cd analytics-dashboard
\`\`\`

**2. Setup Backend**
\`\`\`bash
cd backend
npm install
npm run dev
\`\`\`
Backend will run on http://localhost:5000

**3. Setup Frontend**
\`\`\`bash
cd frontend
npm install
npm start
\`\`\`
Frontend will run on http://localhost:3000

## 🔑 Demo Credentials

\`\`\`
Email: admin@demo.com
Password: admin123
\`\`\`

## 📡 API Endpoints

| Method | Endpoint | Description |
|--------|----------|-------------|
| GET | `/` | Health check |
| GET | `/api/kpis` | Get KPI data |
| GET | `/api/sales` | Get monthly sales data |
| GET | `/api/categories` | Get category data |

## 📸 Screenshots

### Login Page
Beautiful gradient login with form validation

### Dashboard
Complete analytics view with KPIs, charts, and data table

## 🎯 Features Implemented

- [x] User authentication
- [x] KPI monitoring
- [x] Data visualization
- [x] Bar charts
- [x] Pie charts
- [x] Line/Area charts
- [x] Data tables
- [x] Responsive design
- [x] REST API
- [x] Logout functionality

## 👨‍💻 Developer

**P Harshavardhan**
- Internship Project

## 📝 License

This project is created for educational purposes.