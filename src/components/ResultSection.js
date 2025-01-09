import React from 'react';
import { Box, Typography, Button, useTheme, useMediaQuery } from '@mui/material';
import CheckBoxOutlineBlankIcon from '@mui/icons-material/CheckBoxOutlineBlank';
import ShareIcon from '@mui/icons-material/Share';
import InfoOutlinedIcon from '@mui/icons-material/InfoOutlined';

// Import assets
import resultIllustration from '../assets/1.png';
import profilePic from '../assets/2.png';

const ResultSection = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
  const isTablet = useMediaQuery(theme.breakpoints.down('md'));

  return (
    <Box sx={{ 
      maxWidth: { xs: '100%', md: '480px' },
      width: '100%',
      padding: isMobile ? '16px' : '40px 24px',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      gap: '16px'
    }}>
      <Box sx={{ textAlign: 'center', marginBottom: '4px', width: '100%' }}>
        <img 
          src={resultIllustration}
          alt="Result Illustration" 
          style={{ 
            width: isMobile ? '180px' : '240px', 
            height: isMobile ? '120px' : '160px', 
            marginBottom: '16px' 
          }}
        />
        <Typography sx={{ 
          color: '#4338CA',
          fontSize: isMobile ? '28px' : '36px',
          fontWeight: 600,
          marginBottom: '8px',
          fontFamily: 'Inter, sans-serif'
        }}>
          Your Result!
        </Typography>
        <Typography sx={{ 
          color: '#6B7280',
          fontSize: isMobile ? '14px' : '16px',
          fontWeight: 400
        }}>
          All your insights & details in one place
        </Typography>
      </Box>

      <Box sx={{ 
        width: '100%',
        backgroundColor: 'white',
        borderRadius: '16px',
        padding: isMobile ? '16px' : '24px',
        boxShadow: '0px 1px 3px rgba(0, 0, 0, 0.1)',
        display: 'flex',
        flexDirection: 'column',
        gap: isMobile ? '16px' : '24px'
      }}>
        <Box sx={{ 
          backgroundColor: '#F9FAFB',
          borderRadius: '8px',
          padding: '16px',
          display: 'flex',
          alignItems: 'flex-start',
          gap: '16px'
        }}>
          <Box sx={{ 
            backgroundColor: '#EEF2FF',
            borderRadius: '8px',
            padding: '8px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center'
          }}>
            <CheckBoxOutlineBlankIcon sx={{ fontSize: 24, color: '#4338CA' }} />
          </Box>
          <Box sx={{ flex: 1 }}>
            <Box sx={{ 
              backgroundColor: '#4338CA',
              color: 'white',
              borderRadius: '20px',
              padding: '4px 12px',
              display: 'inline-block',
              fontSize: '13px',
              fontWeight: 500,
              marginBottom: '12px'
            }}>
              YOU'VE PASSED
            </Box>
            <Box sx={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
              <Box sx={{ display: 'flex', alignItems: 'baseline' }}>
                <Typography sx={{ fontSize: '32px', fontWeight: 700, color: '#111827' }}>
                  136
                </Typography>
                <Typography sx={{ color: '#6B7280', fontSize: '16px', marginLeft: '4px' }}>
                  / 240
                </Typography>
              </Box>
              <Box sx={{ 
                backgroundColor: '#0D9488',
                color: 'white',
                borderRadius: '4px',
                padding: '4px 8px',
                fontSize: '13px',
                fontWeight: 500
              }}>
                76% ACCURACY
              </Box>
            </Box>
          </Box>
        </Box>

        <Box sx={{ 
          borderTop: '1px solid #E5E7EB',
          borderBottom: '1px solid #E5E7EB',
          padding: '24px 0'
        }}>
          <Box sx={{ display: 'flex', alignItems: 'center', gap: '16px', marginBottom: '16px' }}>
            <img 
              src={profilePic}
              alt="Top Scorer" 
              style={{ 
                width: '48px',
                height: '48px',
                borderRadius: '8px',
                objectFit: 'cover'
              }}
            />
            <Box>
              <Typography sx={{ fontSize: '16px', fontWeight: 600, color: '#111827', marginBottom: '4px' }}>
                Top Score
              </Typography>
              <Box sx={{ display: 'flex', alignItems: 'baseline' }}>
                <Typography sx={{ fontSize: '32px', fontWeight: 700, color: '#111827' }}>
                  230
                </Typography>
                <Typography sx={{ color: '#6B7280', fontSize: '16px', marginLeft: '4px' }}>
                  / 240
                </Typography>
              </Box>
            </Box>
          </Box>
          <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <Typography sx={{ color: '#6B7280', fontSize: '14px' }}>
              By Parth Akotkar
            </Typography>
            <Box sx={{ 
              backgroundColor: '#0D9488',
              color: 'white',
              borderRadius: '20px',
              padding: '4px 12px',
              fontSize: '13px',
              fontWeight: 500
            }}>
              92% ACCURACY
            </Box>
          </Box>
        </Box>

        <Box>
          <Typography sx={{ fontSize: '18px', fontWeight: 600, color: '#111827', marginBottom: '4px' }}>
            Improve your Marks
          </Typography>
          <Typography sx={{ color: '#6B7280', fontSize: '14px', marginBottom: '16px' }}>
            Improve your score by practicing more.
          </Typography>
          <Button
            fullWidth
            variant="contained"
            sx={{
              backgroundColor: '#4338CA',
              textTransform: 'none',
              padding: '12px',
              fontSize: '16px',
              fontWeight: 500,
              borderRadius: '8px',
              boxShadow: 'none',
              '&:hover': {
                backgroundColor: '#3730A3',
                boxShadow: 'none'
              }
            }}
          >
            Practice more
          </Button>
        </Box>
      </Box>

      <Box sx={{ 
        width: '100%',
        backgroundColor: 'white',
        borderRadius: '16px',
        padding: isMobile ? '16px' : '24px',
        boxShadow: '0px 1px 3px rgba(0, 0, 0, 0.1)'
      }}>
        <Typography sx={{ 
          fontSize: isMobile ? '16px' : '18px', 
          fontWeight: 600, 
          color: '#111827', 
          marginBottom: '4px' 
        }}>
          Revisit Paper
        </Typography>
        <Typography sx={{ 
          color: '#6B7280', 
          fontSize: isMobile ? '12px' : '14px', 
          marginBottom: '16px' 
        }}>
          Challenge your friends by simply sharing a link to this test
        </Typography>
        <Button
          fullWidth
          variant="contained"
          startIcon={<ShareIcon sx={{ fontSize: isMobile ? 16 : 20 }} />}
          sx={{
            backgroundColor: '#4338CA',
            textTransform: 'none',
            padding: isMobile ? '8px' : '12px',
            fontSize: isMobile ? '14px' : '16px',
            fontWeight: 500,
            borderRadius: '8px',
            marginBottom: '16px',
            boxShadow: 'none',
            '&:hover': {
              backgroundColor: '#3730A3',
              boxShadow: 'none'
            }
          }}
        >
          Visit
        </Button>
        <Box sx={{ display: 'flex', alignItems: 'center', gap: '8px', color: '#9CA3AF' }}>
          <InfoOutlinedIcon sx={{ fontSize: isMobile ? 14 : 16 }} />
          <Typography sx={{ fontSize: isMobile ? '11px' : '13px' }}>
            Instructions for how to upload your handwritten material in given
          </Typography>
        </Box>
      </Box>
    </Box>
  );
};

export default ResultSection; 