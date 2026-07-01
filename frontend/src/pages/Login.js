import React, { useState } from 'react';

const Login = ({ onLogin }) => {
  // Storing what user types
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  // Function runs when user clicks Login button
  const handleLogin = (e) => {
    e.preventDefault();
    
    // Simple static login check
    if (email === 'admin@demo.com' && password === 'admin123') {
      onLogin(true);  // Tell App.js login successful
      setError('');
    } else {
      setError('❌ Invalid! Use admin@demo.com / admin123');
    }
  };

  return (
    <div style={styles.container}>
      <div style={styles.loginBox}>
        
        <h2 style={styles.title}>📊 Analytics Dashboard</h2>
        <p style={styles.subtitle}>Login to continue</p>

        {error && <p style={styles.error}>{error}</p>}

        <form onSubmit={handleLogin}>
          
          <div style={styles.inputGroup}>
            <label style={styles.label}>Email</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="admin@demo.com"
              style={styles.input}
              required
            />
          </div>

          <div style={styles.inputGroup}>
            <label style={styles.label}>Password</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="admin123"
              style={styles.input}
              required
            />
          </div>

          <button type="submit" style={styles.button}>
            Login
          </button>

        </form>

        <p style={styles.hint}>
          💡 Demo: admin@demo.com / admin123
        </p>

      </div>
    </div>
  );
};

// All styles in one place
const styles = {
  container: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100vh',
    background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)'
  },
  loginBox: {
    backgroundColor: 'white',
    padding: '40px',
    borderRadius: '15px',
    boxShadow: '0 10px 25px rgba(0,0,0,0.2)',
    width: '380px'
  },
  title: {
    textAlign: 'center',
    color: '#1F2937',
    marginBottom: '5px',
    fontSize: '24px'
  },
  subtitle: {
    textAlign: 'center',
    color: '#6B7280',
    marginBottom: '25px',
    fontSize: '14px'
  },
  inputGroup: {
    marginBottom: '15px'
  },
  label: {
    display: 'block',
    marginBottom: '5px',
    color: '#374151',
    fontSize: '14px',
    fontWeight: 'bold'
  },
  input: {
    width: '100%',
    padding: '12px',
    border: '1px solid #D1D5DB',
    borderRadius: '8px',
    fontSize: '14px',
    outline: 'none'
  },
  button: {
    width: '100%',
    padding: '12px',
    backgroundColor: '#4F46E5',
    color: 'white',
    border: 'none',
    borderRadius: '8px',
    fontSize: '16px',
    cursor: 'pointer',
    fontWeight: 'bold',
    marginTop: '10px'
  },
  error: {
    backgroundColor: '#FEE2E2',
    color: '#991B1B',
    padding: '10px',
    borderRadius: '6px',
    fontSize: '13px',
    marginBottom: '15px',
    textAlign: 'center'
  },
  hint: {
    textAlign: 'center',
    color: '#6B7280',
    fontSize: '12px',
    marginTop: '20px'
  }
};

export default Login;