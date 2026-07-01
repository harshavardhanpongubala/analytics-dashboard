import React from 'react';
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
  Area,
  AreaChart
} from 'recharts';

const RevenueLineChart = ({ data }) => {
  return (
    <div style={styles.card}>
      
      <div style={styles.header}>
        <h3 style={styles.title}>📈 Revenue Trend</h3>
        <p style={styles.subtitle}>Revenue growth over time</p>
      </div>

      <ResponsiveContainer width="100%" height={300}>
        <AreaChart data={data}>
          <defs>
            <linearGradient id="colorRevenue" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="#8B5CF6" stopOpacity={0.8}/>
              <stop offset="95%" stopColor="#8B5CF6" stopOpacity={0}/>
            </linearGradient>
          </defs>
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
          <Area 
            type="monotone" 
            dataKey="revenue" 
            stroke="#8B5CF6" 
            fillOpacity={1}
            fill="url(#colorRevenue)"
            strokeWidth={3}
          />
        </AreaChart>
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

export default RevenueLineChart;