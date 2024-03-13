import React from 'react';
import { Grid, Box,CardContent, Typography, Rating } from '@mui/material';
import PageContainer from 'src/components/container/PageContainer';

import { Stack } from '@mui/system';
// components
import SalesOverview from './components/SalesOverview';
import YearlyBreakup from './components/YearlyBreakup';

import MonthlyEarnings from './components/MonthlyEarnings';

import img1 from 'src/assets/images/products/s4.jpg';
import img2 from 'src/assets/images/products/s5.webp';
import img3 from 'src/assets/images/products/s7.jpg';
import img4 from 'src/assets/images/products/s11.jpg';


const prod= [
  {   
      id:1,
      title: 'Vivo v21e',
      subheader: 'March 14, 2024',
      photo: img1,
      salesPrice: 25000,
      price: 27580,
      rating: 4,
      available:20,
  },
  {
      id:2,
      title: 'FireBolt Watch',
      subheader: 'March 14, 2024',
      photo: img2,
      salesPrice: 3000,
      price: 3500,
      rating: 5,
      available:10,
  },
  {
      id:3,
      title: 'Red Jacket',
      subheader: 'March 14, 2024',
      photo: img3,
      salesPrice: 1000,
      price: 1250,
      rating: 3,
      available:15,
  },
  {
      id:4,
      title: 'Vikas Chair',
      subheader: 'March 14, 2024',
      photo: img4,
      salesPrice: 3000,
      price: 3200,
      rating: 2,
      available:30,
  },
];

const Dashboard = () => {
  return (
    <PageContainer title="Dashboard" description="this is Dashboard">
      <Box>
        <Grid container spacing={3}>
          <Grid item xs={12} lg={8}>
            <SalesOverview />
          </Grid>
          <Grid item xs={12} lg={4}>
            <Grid container spacing={3}>
              <Grid item xs={12}>
                <YearlyBreakup />
              </Grid>
              <Grid item xs={12}>
                <MonthlyEarnings />
              </Grid>
            </Grid>
          </Grid>
          <Grid container spacing={3}>
            
            {prod.map((product, index) => (
                <Grid item sm={12} md={4} lg={3} key={index}>
                   
                        <Typography >
                            <img src={product.photo} alt="img" width="100%" />
                        </Typography>
                        
                        <CardContent sx={{ p: 3, pt: 2 }}>
                            <Typography variant="h6">{product.title}</Typography>
                            <Stack direction="row" alignItems="center" justifyContent="space-between" mt={1}>
                                <Stack direction="row" alignItems="center">
                                    <Typography variant="h6">	&#8377;{product.price}</Typography>
                                    <Typography color="textSecondary" ml={1} sx={{ textDecoration: 'line-through' }}>
                                    &#8377;{product.salesPrice}
                                    </Typography>
                                </Stack>
                                <Rating name="read-only" size="small" value={product.rating} readOnly />
                            </Stack>
                            <Typography variant="h6">  Available: {product.available}</Typography>
                        </CardContent>
                    
                </Grid>
            ))}
        </Grid>
          
          
        </Grid>
      </Box>
    </PageContainer>
  );
};

export default Dashboard;
