import React from 'react';

const KPICard = ({ title, value, icon, color }) => {
  return (
    <div style={{
      background: color,
      borderRadius: '12px',
      padding: '25px',
      color: 'white',
      boxShadow: '0 4px 15px rgba(0,0,0,0.1)',
      flex: 1,
      minWidth: '200px',
      transition: 'transform 0.2s',
      cursor: 'pointer'
    }}
    onMouseEnter={(e) => e.currentTarget.style.transform = 'translateY(-5px)'}
    onMouseLeave={(e) => e.currentTarget.style.transform = 'translateY(0)'}
    >
      
      {/* Icon */}
      <div style={{ 
        fontSize: '35px', 
        marginBottom: '10px' 
      }}>
        {icon}
      </div>

      {/* Title */}
      <h3 style={{ 
        fontSize: '14px', 
        fontWeight: 'normal',
        opacity: 0.9,
        marginBottom: '8px'
      }}>
        {title}
      </h3>

      {/* Value */}
      <p style={{ 
        fontSize: '28px', 
        fontWeight: 'bold',
        margin: 0
      }}>
        {value}
      </p>

    </div>
  );
};

export default KPICard;