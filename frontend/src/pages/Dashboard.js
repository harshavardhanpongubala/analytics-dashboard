import React, { useState, useEffect } from 'react';
import KPICard from '../components/KPICard';
import SalesBarChart from '../components/SalesBarChart';
import CategoryPieChart from '../components/CategoryPieChart';
import RevenueLineChart from '../components/RevenueLineChart';
import DataTable from '../components/DataTable';

const Dashboard = ({ onLogout }) => {
  const [kpis, setKpis] = useState(null);
  const [sales, setSales] = useState([]);
  const [categories, setCategories] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchAllData();
  }, []);

  const fetchAllData = async () => {
  try {
    const API_URL = process.env.REACT_APP_API_URL || 'http://localhost:5000';

    const kpisResponse = await fetch(`${API_URL}/api/kpis`);
    const kpisData = await kpisResponse.json();
    setKpis(kpisData);

    const salesResponse = await fetch(`${API_URL}/api/sales`);
    const salesData = await salesResponse.json();
    setSales(salesData);

    const categoriesResponse = await fetch(`${API_URL}/api/categories`);
    const categoriesData = await categoriesResponse.json();
    setCategories(categoriesData);

    setLoading(false);
  } catch (error) {
    console.error('Error fetching data:', error);
    setLoading(false);
  }
};

  if (loading) {
    return (
      <div style={styles.loading}>
        <h2>⏳ Loading dashboard data...</h2>
      </div>
    );
  }

  return (
    <div style={styles.container}>
      
      {/* Header with Logout */}
      <div style={styles.header}>
        <div>
          <h1 style={styles.title}>📊 Analytics Dashboard</h1>
          <p style={styles.subtitle}>Welcome back, Admin! Here's your overview</p>
        </div>
        <div style={styles.headerRight}>
          <div style={styles.dateBox}>
            📅 {new Date().toLocaleDateString('en-US', { 
              weekday: 'long', 
              year: 'numeric', 
              month: 'long', 
              day: 'numeric' 
            })}
          </div>
          <button 
            style={styles.logoutBtn}
            onClick={() => onLogout(false)}
          >
            🚪 Logout
          </button>
        </div>
      </div>

      {/* KPI Cards */}
      <div style={styles.kpiRow}>
        <KPICard 
          title="Total Revenue"
          value={kpis.totalRevenue}
          icon="💰"
          color="linear-gradient(135deg, #667eea 0%, #764ba2 100%)"
        />
        <KPICard 
          title="Total Users"
          value={kpis.totalUsers}
          icon="👥"
          color="linear-gradient(135deg, #f093fb 0%, #f5576c 100%)"
        />
        <KPICard 
          title="Total Orders"
          value={kpis.totalOrders}
          icon="📦"
          color="linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)"
        />
        <KPICard 
          title="Growth Rate"
          value={kpis.growthRate}
          icon="📈"
          color="linear-gradient(135deg, #43e97b 0%, #38f9d7 100%)"
        />
      </div>

      {/* Charts Row 1 */}
      <div style={styles.chartsRow}>
        <div style={{ flex: 2 }}>
          <SalesBarChart data={sales} />
        </div>
        <div style={{ flex: 1 }}>
          <CategoryPieChart data={categories} />
        </div>
      </div>

      {/* Line Chart Row */}
      <div style={{ marginBottom: '30px' }}>
        <RevenueLineChart data={sales} />
      </div>

      {/* Data Table */}
      <DataTable data={sales} />

      {/* Footer */}
      <div style={styles.footer}>
        <p>© 2026 Analytics Dashboard | Built with React & Node.js</p>
      </div>

    </div>
  );
};

const styles = {
  container: {
    padding: '30px',
    backgroundColor: '#F3F4F6',
    minHeight: '100vh'
  },
  header: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: '30px',
    flexWrap: 'wrap',
    gap: '15px'
  },
  title: {
    color: '#1F2937',
    fontSize: '28px',
    marginBottom: '5px'
  },
  subtitle: {
    color: '#6B7280',
    fontSize: '14px'
  },
  headerRight: {
    display: 'flex',
    gap: '10px',
    alignItems: 'center'
  },
  dateBox: {
    backgroundColor: 'white',
    padding: '10px 20px',
    borderRadius: '8px',
    color: '#374151',
    fontSize: '14px',
    boxShadow: '0 2px 4px rgba(0,0,0,0.05)'
  },
  logoutBtn: {
    backgroundColor: '#EF4444',
    color: 'white',
    border: 'none',
    padding: '10px 20px',
    borderRadius: '8px',
    fontSize: '14px',
    cursor: 'pointer',
    fontWeight: 'bold',
    boxShadow: '0 2px 4px rgba(0,0,0,0.05)'
  },
  loading: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100vh'
  },
  kpiRow: {
    display: 'flex',
    gap: '20px',
    marginBottom: '30px',
    flexWrap: 'wrap'
  },
  chartsRow: {
    display: 'flex',
    gap: '20px',
    marginBottom: '30px',
    flexWrap: 'wrap'
  },
  footer: {
    textAlign: 'center',
    color: '#9CA3AF',
    fontSize: '13px',
    marginTop: '30px',
    padding: '20px'
  }
};

export default Dashboard;