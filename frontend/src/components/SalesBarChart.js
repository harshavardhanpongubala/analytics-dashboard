import React from 'react';
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer
} from 'recharts';

const SalesBarChart = ({ data }) => {
  return (
    <div style={styles.card}>
      
      <div style={styles.header}>
        <h3 style={styles.title}>📊 Monthly Sales & Revenue</h3>
        <p style={styles.subtitle}>Last 6 months performance</p>
      </div>

      <ResponsiveContainer width="100%" height={300}>
        <BarChart data={data}>
          <CartesianGrid strokeDasharray="3 3" stroke="#E5E7EB" />
          <XAxis dataKey="month" stroke="#6B7280" />
          <YAxis stroke="#6B7280" />
          <Tooltip 
            contentStyle={{ 
              backgroundColor: 'white', 
              border: '1px solid #E5E7EB',
              borderRadius: '8px'
            }}
          />
          <Legend />
          <Bar dataKey="sales" fill="#4F46E5" radius={[8, 8, 0, 0]} />
          <Bar dataKey="revenue" fill="#10B981" radius={[8, 8, 0, 0]} />
        </BarChart>
      </ResponsiveContainer>

    </div>
  );
};

const styles = {
  card: {
    backgroundColor: 'white',
    padding: '25px',
    borderRadius: '12px',
    boxShadow: '0 2px 10px rgba(0,0,0,0.05)'
  },
  header: {
    marginBottom: '20px'
  },
  title: {
    color: '#1F2937',
    fontSize: '18px',
    marginBottom: '5px'
  },
  subtitle: {
    color: '#6B7280',
    fontSize: '13px'
  }
};

export default SalesBarChart;