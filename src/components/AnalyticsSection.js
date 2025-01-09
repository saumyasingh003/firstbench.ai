import React from 'react';
import { Box, Typography, Chip, useTheme, useMediaQuery } from '@mui/material';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, ResponsiveContainer } from 'recharts';

// Import assets
import image1 from '../assets/1.png';
import image2 from '../assets/2.png';
import improvementsIcon from '../assets/improvements.svg';
import responseTimeIcon from '../assets/response-time.svg';
import approachDataIcon from '../assets/approach-data.svg';
import suggestionsIcon from '../assets/suggestions.svg';
import compareAccuracyIcon from '../assets/compare-accuracy.svg';
import timeTakenIcon from '../assets/time-taken.svg';

const IconWrapper = ({ icon, color = '#94A3B8' }) => (
  <Box sx={{ 
    width: '32px',
    height: '32px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#F3F4F6',
    borderRadius: '8px'
  }}>
    <img src={icon} alt="icon" style={{ width: '20px', height: '20px' }} />
  </Box>
);

const SubjectChip = ({ label, color }) => (
  <Chip 
    label={label}
    sx={{
      backgroundColor: color,
      color: 'white',
      fontSize: '13px',
      fontWeight: 500,
      borderRadius: '16px',
      height: '28px',
      '& .MuiChip-label': {
        padding: '0 12px',
      }
    }}
  />
);

const TimeScale = ({ min, max, showRedZone = true, showGreenZone = false, indicatorPosition = 50 }) => {
  const ticks = Array.from({ length: 9 }, (_, i) => min + i * ((max - min) / 8));

  return (
    <Box sx={{ 
      width: '100%', 
      height: '24px', 
      backgroundColor: '#F3F4F6',
      position: 'relative',
      borderRadius: '4px',
      mb: 2
    }}>
      {/* Dense tick marks */}
      <Box sx={{ 
        position: 'absolute',
        top: '-12px',
        left: 0,
        right: 0,
        display: 'flex',
        justifyContent: 'space-between',
        px: '8px'
      }}>
        {Array.from({ length: 45 }, (_, i) => (
          <Box
            key={i}
            sx={{
              width: '1px',
              height: '4px',
              backgroundColor: '#94A3B8',
              opacity: 0.3
            }}
          />
        ))}
      </Box>

      {/* Main tick marks with labels */}
      <Box sx={{ 
        position: 'absolute',
        top: '-16px',
        left: 0,
        right: 0,
        display: 'flex',
        justifyContent: 'space-between',
        px: '8px'
      }}>
        {ticks.map((value, index) => (
          <Box key={index} sx={{ 
            display: 'flex', 
            flexDirection: 'column', 
            alignItems: 'center',
            position: 'relative'
          }}>
            <Box sx={{ 
              width: '1px', 
              height: '8px', 
              backgroundColor: '#94A3B8',
              mb: '4px'
            }} />
            <Typography sx={{ 
              color: '#6B7280', 
              fontSize: '11px',
              fontWeight: 500,
              position: 'absolute',
              top: '12px',
              whiteSpace: 'nowrap'
            }}>
              {value}
            </Typography>
          </Box>
        ))}
      </Box>

      {/* Red zone */}
      {showRedZone && (
        <Box sx={{
          position: 'absolute',
          right: 0,
          width: '50%',
          height: '100%',
          backgroundColor: '#EF4444',
          opacity: 0.15,
          borderRadius: '0 4px 4px 0'
        }} />
      )}

      {/* Green zone */}
      {showGreenZone && (
        <Box sx={{
          position: 'absolute',
          left: '35%',
          width: '30%',
          height: '100%',
          backgroundColor: '#22C55E',
          opacity: 0.15
        }} />
      )}

      {/* Blue indicator line */}
      <Box sx={{
        position: 'absolute',
        left: `${indicatorPosition}%`,
        height: '100%',
        width: '2px',
        backgroundColor: '#4338CA',
        '&::before': {
          content: '""',
          position: 'absolute',
          top: '50%',
          left: '-3px',
          width: '8px',
          height: '8px',
          backgroundColor: '#4338CA',
          borderRadius: '50%',
          transform: 'translateY(-50%)'
        }
      }} />
    </Box>
  );
};

const TimeRuler = () => {
  return (
    <Box sx={{ width: '100%', mt: 2, mb: 4 }}>
      {/* First ruler */}
      <TimeScale min={10} max={90} showRedZone indicatorPosition={30} />

      <Typography sx={{ 
        color: '#6B7280', 
        fontSize: '13px',
        mb: 3,
        textAlign: 'center'
      }}>
        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum
      </Typography>

      {/* Second ruler */}
      <TimeScale min={-4} max={4} showRedZone showGreenZone indicatorPosition={50} />

      <Typography sx={{ 
        color: '#6B7280', 
        fontSize: '13px',
        textAlign: 'center'
      }}>
        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum
      </Typography>
    </Box>
  );
};

const TimeTakenSection = () => (
  <Box sx={{
    backgroundColor: 'white',
    borderRadius: '16px',
    padding: '24px',
    boxShadow: '0px 1px 3px rgba(0, 0, 0, 0.1)',
    gridColumn: '3/5'
  }}>
    <Box sx={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '24px' }}>
      <IconWrapper icon={timeTakenIcon} />
      <Typography sx={{ color: '#111827', fontSize: '16px', fontWeight: 500 }}>
        Time Taken
      </Typography>
    </Box>
    <TimeRuler />
  </Box>
);

const AnalyticsSection = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
  const isTablet = useMediaQuery(theme.breakpoints.down('md'));

  const subjects = [
    { label: 'Geography', color: '#0D9488' },
    { label: 'Politics', color: '#F59E0B' },
    { label: 'Current Affairs', color: '#3B82F6' },
    { label: 'General Studies', color: '#DC2626' },
    { label: 'Mathematics', color: '#0EA5E9' },
    { label: 'Social Studies', color: '#94A3B8' },
    { label: 'English Literature', color: '#EF4444' },
    { label: 'Indian History', color: '#F59E0B' },
    { label: 'Economics', color: '#0EA5E9' }
  ];

  const approachData = [
    { percentage: 25, type: 'Facts', color: '#818CF8' },
    { percentage: 32, type: 'Analysis', color: '#818CF8' },
    { percentage: 19, type: 'Elimination', color: '#818CF8' },
    { percentage: 24, type: 'Guess', color: '#818CF8' }
  ];

  const suggestions = [
    { range: 'Q. 1-12', time: '40sec', difficulty: 'Easy', color: '#0EA5E9' },
    { range: 'Q. 12-32', time: '1.5min', difficulty: 'Medium', color: '#F59E0B' },
    { range: 'Q. 32-40', time: '3min', difficulty: 'Hard', color: '#EF4444' }
  ];

  const accuracyData = [
    { slot: 1, accuracy: 85 },
    { slot: 2, accuracy: 45 },
    { slot: 3, accuracy: 35 },
    { slot: 4, accuracy: 60 },
    { slot: 5, accuracy: 55 },
    { slot: 6, accuracy: 45 },
    { slot: 7, accuracy: 65 }
  ];

  const timeMarkers = ['10MIN', '15MIN', '30MIN', '45MIN'];

  return (
    <Box sx={{ 
      flex: 1, 
      padding: isMobile ? '16px' : '40px 24px', 
      display: 'flex', 
      flexDirection: 'column', 
      gap: '24px'
    }}>
      {/* Empty Compare Accuracy Cards */}
      <Box sx={{ 
        display: 'flex', 
        flexDirection: isMobile ? 'column' : 'row',
        gap: '24px', 
        marginBottom: '24px'
      }}>
        {[1, 2, 3].map((i) => (
          <Box key={i} sx={{
            flex: 1,
            backgroundColor: 'white',
            borderRadius: '16px',
            padding: '24px',
            boxShadow: '0px 1px 3px rgba(0, 0, 0, 0.1)',
            height: isMobile ? '180px' : '240px',
            display: 'flex',
            alignItems: 'flex-start',
            gap: '12px'
          }}>
            <IconWrapper icon={compareAccuracyIcon} />
            <Typography sx={{ color: '#94A3B8', fontSize: '16px', fontWeight: 500 }}>
              Compare Accuracy
            </Typography>
          </Box>
        ))}
      </Box>

      {/* Main Analytics Grid */}
      <Box sx={{ 
        display: 'grid', 
        gridTemplateColumns: {
          xs: '1fr',
          sm: 'repeat(2, 1fr)',
          md: 'repeat(4, 1fr)'
        },
        gap: '24px'
      }}>
        {/* Subject Understanding */}
        <Box sx={{
          backgroundColor: 'white',
          borderRadius: '16px',
          padding: '24px',
          boxShadow: '0px 1px 3px rgba(0, 0, 0, 0.1)',
          gridColumn: {
            xs: '1',
            sm: '1/2',
            md: '1/2'
          }
        }}>
          <Box sx={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '24px' }}>
            <IconWrapper icon={improvementsIcon} />
            <Typography sx={{ color: '#111827', fontSize: '16px', fontWeight: 500 }}>
              Subject Understanding
            </Typography>
          </Box>
          <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
            {subjects.map((subject) => (
              <SubjectChip key={subject.label} {...subject} />
            ))}
          </Box>
        </Box>

        {/* Response Time */}
        <Box sx={{
          backgroundColor: 'white',
          borderRadius: '16px',
          padding: '24px',
          boxShadow: '0px 1px 3px rgba(0, 0, 0, 0.1)',
          gridColumn: {
            xs: '1',
            sm: '2/3',
            md: '2/3'
          }
        }}>
          <Box sx={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '24px' }}>
            <IconWrapper icon={responseTimeIcon} />
            <Typography sx={{ color: '#111827', fontSize: '16px', fontWeight: 500 }}>
              Response Time
            </Typography>
          </Box>
          <Box sx={{ 
            border: '1px dashed #E5E7EB',
            borderRadius: '8px',
            padding: '16px',
            marginBottom: '16px'
          }}>
            <Typography sx={{ 
              color: '#4338CA',
              fontSize: '14px',
              fontWeight: 500,
              marginBottom: '8px'
            }}>
              Std Time - 2min
            </Typography>
            <Box sx={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
              <Typography sx={{ fontSize: '24px', fontWeight: 600, color: '#111827' }}>
                60%
              </Typography>
              <Typography sx={{ color: '#6B7280', fontSize: '14px' }}>
                Ans took
              </Typography>
              <Typography sx={{ 
                color: '#EF4444',
                fontSize: '14px',
                fontWeight: 500,
                display: 'flex',
                alignItems: 'center'
              }}>
                ↑ 2min
              </Typography>
            </Box>
          </Box>
          <Typography sx={{ color: '#111827', fontSize: '16px', fontWeight: 500 }}>
            You are <span style={{ color: '#EF4444' }}>slow</span>!
          </Typography>
        </Box>

        {/* Approach Data */}
        <Box sx={{
          backgroundColor: 'white',
          borderRadius: '16px',
          padding: '24px',
          boxShadow: '0px 1px 3px rgba(0, 0, 0, 0.1)',
          gridColumn: {
            xs: '1',
            sm: '1/2',
            md: '3/4'
          }
        }}>
          <Box sx={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '24px' }}>
            <IconWrapper icon={approachDataIcon} />
            <Typography sx={{ color: '#111827', fontSize: '16px', fontWeight: 500 }}>
              Approach Data
            </Typography>
          </Box>
          <Box sx={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
            {approachData.map((item) => (
              <Box key={item.type} sx={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                <Typography sx={{ 
                  color: item.color,
                  fontSize: '14px',
                  fontWeight: 500,
                  width: '32px'
                }}>
                  {item.percentage}%
                </Typography>
                <Typography sx={{ color: '#6B7280', fontSize: '14px' }}>
                  Based on {item.type}
                </Typography>
              </Box>
            ))}
          </Box>
        </Box>

        {/* Suggestions */}
        <Box sx={{
          backgroundColor: 'white',
          borderRadius: '16px',
          padding: '24px',
          boxShadow: '0px 1px 3px rgba(0, 0, 0, 0.1)',
          gridColumn: {
            xs: '1',
            sm: '2/3',
            md: '4/5'
          }
        }}>
          <Box sx={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '24px' }}>
            <IconWrapper icon={suggestionsIcon} />
            <Typography sx={{ color: '#111827', fontSize: '16px', fontWeight: 500 }}>
              Suggestions
            </Typography>
          </Box>
          <Box sx={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
            {suggestions.map((item) => (
              <Box key={item.range} sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                <Typography sx={{ 
                  backgroundColor: '#F3F4F6',
                  padding: '4px 8px',
                  borderRadius: '4px',
                  fontSize: '14px',
                  color: '#6B7280'
                }}>
                  {item.range}
                </Typography>
                <Typography sx={{ 
                  backgroundColor: '#F3F4F6',
                  padding: '4px 8px',
                  borderRadius: '4px',
                  fontSize: '14px',
                  color: '#6B7280'
                }}>
                  {item.time}
                </Typography>
                <Typography sx={{ 
                  color: item.color,
                  fontSize: '14px',
                  fontWeight: 500
                }}>
                  {item.difficulty}
                </Typography>
              </Box>
            ))}
          </Box>
        </Box>

        {/* Compare Accuracy Graph */}
        <Box sx={{
          backgroundColor: 'white',
          borderRadius: '16px',
          padding: '24px',
          boxShadow: '0px 1px 3px rgba(0, 0, 0, 0.1)',
          gridColumn: {
            xs: '1',
            sm: '1/3',
            md: '1/3'
          },
          height: isMobile ? '300px' : 'auto'
        }}>
          <Box sx={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '24px' }}>
            <IconWrapper icon={compareAccuracyIcon} />
            <Typography sx={{ color: '#111827', fontSize: '16px', fontWeight: 500 }}>
              Compare Accuracy
            </Typography>
          </Box>
          <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 2 }}>
            {timeMarkers.map((marker) => (
              <Typography key={marker} sx={{ color: '#0EA5E9', fontSize: '12px', fontWeight: 500 }}>
                {marker}
              </Typography>
            ))}
          </Box>
          <ResponsiveContainer width="100%" height={200}>
            <BarChart data={accuracyData} margin={{ top: 20, right: 0, left: -20, bottom: 0 }}>
              <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#E5E7EB" />
              <XAxis 
                dataKey="slot" 
                axisLine={false} 
                tickLine={false}
                tick={{ fill: '#6B7280', fontSize: 12 }}
              />
              <YAxis 
                axisLine={false} 
                tickLine={false}
                tick={{ fill: '#6B7280', fontSize: 12 }}
                ticks={[0, 25, 50, 75, 100]}
                domain={[0, 100]}
              />
              <Bar 
                dataKey="accuracy" 
                fill="#818CF8"
                radius={[4, 4, 0, 0]}
                barSize={30}
              />
            </BarChart>
          </ResponsiveContainer>
        </Box>

        {/* Time Taken */}
        <Box sx={{
          backgroundColor: 'white',
          borderRadius: '16px',
          padding: '24px',
          boxShadow: '0px 1px 3px rgba(0, 0, 0, 0.1)',
          gridColumn: {
            xs: '1',
            sm: '1/3',
            md: '3/5'
          }
        }}>
          <Box sx={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '24px' }}>
            <IconWrapper icon={timeTakenIcon} />
            <Typography sx={{ color: '#111827', fontSize: '16px', fontWeight: 500 }}>
              Time Taken
            </Typography>
          </Box>
          <TimeRuler />
        </Box>
      </Box>
    </Box>
  );
};

export default AnalyticsSection; 