// Import packages
const express = require('express');
const cors = require('cors');

// Create app
const app = express();

// Middleware
app.use(cors({
  origin: '*'
}));
app.use(express.json());

// Sample data (acting as our database)
const dashboardData = {
  
  // KPI Cards Data
  kpis: {
    totalRevenue: '$48,295',
    totalUsers: '1,240',
    totalOrders: '320',
    growthRate: '12.5%'
  },

  // Monthly Sales for Bar Chart
  monthlySales: [
    { month: 'Jan', sales: 4000, revenue: 2400 },
    { month: 'Feb', sales: 3000, revenue: 1398 },
    { month: 'Mar', sales: 5000, revenue: 3800 },
    { month: 'Apr', sales: 2780, revenue: 3908 },
    { month: 'May', sales: 1890, revenue: 4800 },
    { month: 'Jun', sales: 6390, revenue: 3800 }
  ],

  // Category Data for Pie Chart
  categories: [
    { name: 'Electronics', value: 400 },
    { name: 'Clothing', value: 300 },
    { name: 'Food', value: 200 },
    { name: 'Books', value: 100 }
  ]
};

// ============ ROUTES (APIs) ============

// Test route
app.get('/', (req, res) => {
  res.json({ message: '🚀 Backend is running!' });
});

// Get KPI data
app.get('/api/kpis', (req, res) => {
  res.json(dashboardData.kpis);
});

// Get monthly sales
app.get('/api/sales', (req, res) => {
  res.json(dashboardData.monthlySales);
});

// Get categories
app.get('/api/categories', (req, res) => {
  res.json(dashboardData.categories);
});

// Start server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`✅ Server running on port ${PORT}`);
});