import React from 'react';
import './App.css';
import Header from './components/Header';
import ResultSection from './components/ResultSection';
import AnalyticsSection from './components/AnalyticsSection';
import { useTheme, useMediaQuery } from '@mui/material';

function App() {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
  const isTablet = useMediaQuery(theme.breakpoints.down('md'));

  return (
    <div className="App">
      <Header />
      <div style={{ 
        display: 'flex',
        flexDirection: isTablet ? 'column' : 'row',
        backgroundColor: '#F9FAFB',
        minHeight: 'calc(100vh - 64px)',
        padding: isMobile ? '16px' : '24px',
        gap: '24px'
      }}>
        <ResultSection />
        <AnalyticsSection />
      </div>
    </div>
  );
}

export default App;
