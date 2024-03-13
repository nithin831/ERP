import React from 'react';
import {  Grid,  } from '@mui/material';
import PageContainer from 'src/components/container/PageContainer';
import DashboardCard from '../../components/shared/DashboardCard';

import Blog from 'src/views/dashboard/components/Product_page';

const Product = () => {
  return (
    <PageContainer title="Product" description="this is Product">

      <Grid container spacing={3}>
        <Grid item sm={12}>
          <DashboardCard title="Products">
            <Grid container spacing={3}>
              <Grid item xs={12}>
                <Blog />
              </Grid>
            </Grid>

          </DashboardCard>
        </Grid>

      </Grid >
    </PageContainer>
  );
};

export default Product;
