import React from 'react';

const DataTable = ({ data }) => {
  return (
    <div style={styles.card}>
      
      <div style={styles.header}>
        <h3 style={styles.title}>📋 Monthly Report</h3>
        <p style={styles.subtitle}>Detailed breakdown of monthly performance</p>
      </div>

      <div style={styles.tableWrapper}>
        <table style={styles.table}>
          
          <thead>
            <tr style={styles.headerRow}>
              <th style={styles.th}>Month</th>
              <th style={styles.th}>Sales</th>
              <th style={styles.th}>Revenue</th>
              <th style={styles.th}>Performance</th>
              <th style={styles.th}>Status</th>
            </tr>
          </thead>

          <tbody>
            {data.map((row, index) => {
              const isGood = row.sales > 3000;
              const percentage = ((row.sales / 6390) * 100).toFixed(0);

              return (
                <tr key={index} style={styles.row}>
                  <td style={styles.td}>
                    <strong>{row.month}</strong>
                  </td>
                  <td style={styles.td}>
                    {row.sales.toLocaleString()}
                  </td>
                  <td style={styles.td}>
                    ${row.revenue.toLocaleString()}
                  </td>
                  <td style={styles.td}>
                    <div style={styles.progressBar}>
                      <div style={{
                        ...styles.progressFill,
                        width: `${percentage}%`,
                        backgroundColor: isGood ? '#10B981' : '#EF4444'
                      }}></div>
                    </div>
                    <span style={styles.percentage}>{percentage}%</span>
                  </td>
                  <td style={styles.td}>
                    <span style={{
                      ...styles.badge,
                      backgroundColor: isGood ? '#D1FAE5' : '#FEE2E2',
                      color: isGood ? '#065F46' : '#991B1B'
                    }}>
                      {isGood ? '🟢 Good' : '🔴 Low'}
                    </span>
                  </td>
                </tr>
              );
            })}
          </tbody>

        </table>
      </div>

    </div>
  );
};

const styles = {
  card: {
    backgroundColor: 'white',
    padding: '25px',
    borderRadius: '12px',
    boxShadow: '0 2px 10px rgba(0,0,0,0.05)',
    marginBottom: '30px'
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
  },
  tableWrapper: {
    overflowX: 'auto'
  },
  table: {
    width: '100%',
    borderCollapse: 'collapse'
  },
  headerRow: {
    backgroundColor: '#F9FAFB',
    borderBottom: '2px solid #E5E7EB'
  },
  th: {
    padding: '12px 15px',
    textAlign: 'left',
    color: '#374151',
    fontWeight: 'bold',
    fontSize: '13px',
    textTransform: 'uppercase'
  },
  row: {
    borderBottom: '1px solid #E5E7EB',
    transition: 'background-color 0.2s'
  },
  td: {
    padding: '15px',
    color: '#4B5563',
    fontSize: '14px'
  },
  progressBar: {
    width: '100px',
    height: '8px',
    backgroundColor: '#E5E7EB',
    borderRadius: '4px',
    overflow: 'hidden',
    display: 'inline-block',
    marginRight: '10px',
    verticalAlign: 'middle'
  },
  progressFill: {
    height: '100%',
    borderRadius: '4px',
    transition: 'width 0.5s'
  },
  percentage: {
    fontSize: '12px',
    color: '#6B7280'
  },
  badge: {
    padding: '5px 12px',
    borderRadius: '20px',
    fontSize: '12px',
    fontWeight: 'bold'
  }
};

export default DataTable;