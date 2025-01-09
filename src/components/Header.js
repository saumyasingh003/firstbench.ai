import React, { useState } from 'react';
import { AppBar, Toolbar, Typography, Box, IconButton, Drawer, useTheme, useMediaQuery } from '@mui/material';
import NotificationsIcon from '@mui/icons-material/Notifications';
import HomeIcon from '@mui/icons-material/Home';
import AutoAwesomeIcon from '@mui/icons-material/AutoAwesome';
import AccountBalanceIcon from '@mui/icons-material/AccountBalance';
import BoltIcon from '@mui/icons-material/Bolt';
import ShowChartIcon from '@mui/icons-material/ShowChart';
import AssignmentIcon from '@mui/icons-material/Assignment';
import MenuIcon from '@mui/icons-material/Menu';

// Import logo
import logo from '../assets/logo.png';

const Header = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
  const isTablet = useMediaQuery(theme.breakpoints.down('md'));
  const [mobileOpen, setMobileOpen] = useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const navItems = [
    { title: 'Dashboard', icon: <HomeIcon sx={{ fontSize: 18 }} />, color: '#94A3B8' },
    { title: 'FirstGuru', icon: <AutoAwesomeIcon sx={{ fontSize: 18 }} />, color: '#94A3B8' },
    { title: 'TownHall', icon: <AccountBalanceIcon sx={{ fontSize: 18 }} />, color: '#94A3B8' },
    { title: 'AI Evaluation', icon: <BoltIcon sx={{ fontSize: 18 }} />, color: '#94A3B8' },
    { title: 'Performance', icon: <ShowChartIcon sx={{ fontSize: 18 }} />, color: '#94A3B8' },
    { title: 'Mock Test', icon: <AssignmentIcon sx={{ fontSize: 18 }} />, color: '#3DD7C3', active: true }
  ];

  const renderNavItems = () => (
    <Box sx={{ display: 'flex', gap: isTablet ? '16px' : '32px', flexDirection: isTablet ? 'column' : 'row' }}>
      {navItems.map((item) => (
        <Box
          key={item.title}
          sx={{
            display: 'flex',
            alignItems: 'center',
            color: item.active ? '#3DD7C3' : item.color,
            cursor: 'pointer',
            gap: '8px',
            padding: isTablet ? '12px' : '0',
            '&:hover': { color: '#fff', backgroundColor: isTablet ? 'rgba(255,255,255,0.1)' : 'transparent' }
          }}
        >
          {item.icon}
          <Typography sx={{ 
            fontSize: '14px', 
            fontWeight: 500,
            color: 'inherit'
          }}>
            {item.title}
          </Typography>
        </Box>
      ))}
    </Box>
  );

  return (
    <AppBar 
      position="static" 
      sx={{ 
        backgroundColor: '#1E2A37', 
        boxShadow: 'none', 
        borderBottom: '1px solid rgba(255,255,255,0.1)',
        height: '64px',
        justifyContent: 'center'
      }}
    >
      <Toolbar sx={{ justifyContent: 'space-between', px: isMobile ? '16px' : '24px' }}>
        {/* Logo */}
        <Box 
          sx={{ 
            minWidth: isMobile ? 'auto' : '200px',
            padding: isMobile ? '8px 12px' : '12px 16px',
            borderRadius: '8px',
            cursor: 'pointer',
            display: 'flex',
            alignItems: 'center'
          }}
        >
          <Box sx={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
            <img 
              src={logo} 
              alt="Firstbench Logo" 
              style={{ 
                width: isMobile ? '28px' : '36px', 
                height: isMobile ? '28px' : '36px', 
                objectFit: 'contain'
              }} 
            />
            {!isMobile && (
              <Typography
                variant="h6"
                sx={{
                  color: '#FFFFFF',
                  fontWeight: 500,
                  fontSize: '20px',
                  letterSpacing: '-0.2px'
                }}
              >
                Firstbench
              </Typography>
            )}
          </Box>
        </Box>

        {/* Navigation - Centered */}
        {!isTablet ? (
          <Box sx={{ 
            display: 'flex', 
            justifyContent: 'center', 
            flex: 1,
            px: '24px'
          }}>
            {renderNavItems()}
          </Box>
        ) : (
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ ml: 2 }}
          >
            <MenuIcon />
          </IconButton>
        )}

        {/* Right section */}
        <Box sx={{ 
          display: 'flex', 
          alignItems: 'center', 
          gap: '16px',
          minWidth: isMobile ? 'auto' : '200px',
          justifyContent: 'flex-end'
        }}>
          <IconButton 
            sx={{ 
              color: '#94A3B8',
              padding: '8px',
              '&:hover': { backgroundColor: 'rgba(255,255,255,0.1)' }
            }}
          >
            <NotificationsIcon sx={{ fontSize: isMobile ? 18 : 20 }} />
          </IconButton>
          <Box sx={{ 
            display: 'flex', 
            alignItems: 'center', 
            backgroundColor: '#F97316',
            borderRadius: '4px',
            padding: '4px 8px',
            cursor: 'pointer'
          }}>
            <Typography sx={{ 
              color: 'white', 
              fontSize: '14px', 
              fontWeight: 500,
              lineHeight: '20px'
            }}>
              P
            </Typography>
          </Box>
        </Box>
      </Toolbar>

      {/* Mobile Navigation Drawer */}
      <Drawer
        variant="temporary"
        anchor="right"
        open={mobileOpen}
        onClose={handleDrawerToggle}
        ModalProps={{
          keepMounted: true // Better open performance on mobile.
        }}
        sx={{
          display: { xs: 'block', md: 'none' },
          '& .MuiDrawer-paper': { 
            boxSizing: 'border-box', 
            width: 240,
            backgroundColor: '#1E2A37',
            padding: '16px'
          },
        }}
      >
        {renderNavItems()}
      </Drawer>
    </AppBar>
  );
};

export default Header; 