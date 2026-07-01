import React from 'react';
import {
  PieChart,
  Pie,
  Cell,
  Tooltip,
  Legend,
  ResponsiveContainer
} from 'recharts';

// Beautiful colors for pie slices
const COLORS = ['#4F46E5', '#10B981', '#F59E0B', '#EF4444'];

const CategoryPieChart = ({ data }) => {
  return (
    <div style={styles.card}>
      
      <div style={styles.header}>
        <h3 style={styles.title}>🥧 Sales by Category</h3>
        <p style={styles.subtitle}>Product distribution</p>
      </div>

      <ResponsiveContainer width="100%" height={300}>
        <PieChart>
          <Pie
            data={data}
            cx="50%"
            cy="50%"
            outerRadius={100}
            innerRadius={50}
            dataKey="value"
            label={({ name, percent }) => 
              `${name} ${(percent * 100).toFixed(0)}%`
            }
          >
            {data.map((entry, index) => (
              <Cell 
                key={`cell-${index}`} 
                fill={COLORS[index % COLORS.length]} 
              />
            ))}
          </Pie>
          <Tooltip 
            contentStyle={{ 
              backgroundColor: 'white', 
              border: '1px solid #E5E7EB',
              borderRadius: '8px'
            }}
          />
          <Legend />
        </PieChart>
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

export default CategoryPieChart;