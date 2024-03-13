import React from 'react';

import PageContainer from 'src/components/container/PageContainer';
import DashboardCard from '../../components/shared/DashboardCard';
import {Grid, TableContainer,Table, TableHead, TableBody, TableRow, TableCell,Paper} from '@mui/material';


const Order = () => {
  return (
    <PageContainer title="Order" description="this is Order">

      <DashboardCard title="Orders">
        <Grid container spacing={2}>
          <TableContainer component={Paper} sx={{maxHeight:"500px"}}>
            <Table aria-label="simple table" stickyHeader>
              <TableHead>
                <TableRow>
                  <TableCell>Order-Id</TableCell>
                  <TableCell>Name</TableCell>
                  <TableCell align = "center">Email</TableCell>
                  <TableCell>Product</TableCell>
                  <TableCell >Order Date</TableCell>
                  <TableCell>Paid</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {
                  tableData.map(row => (
                    <TableRow key={row.id} sx ={{'&:last-child td, &:last-child th':{border:0}}}>
                      <TableCell>{row.id}</TableCell>
                      <TableCell>{row.first_name}</TableCell>
                      <TableCell align = "center">{row.email}</TableCell>
                      <TableCell>{row.product}</TableCell>
                      <TableCell>{row.date}</TableCell>
                      <TableCell>{row.paid}</TableCell>
                    </TableRow>
                    ))
                }
              </TableBody>
              
            </Table>
          </TableContainer>
        </Grid>
      </DashboardCard>
    </PageContainer>
  );
};

const tableData = [{
  "id": 1,
  "first_name": "Nithin",
  "last_name": "Kumar U",
  "email": "nithinkumar83161@gmail.com",
  "product": "Samsung Phone",
  "date":"12/03/2024",
  "paid": "Yes"
}, {
  "id": 2,
  "first_name": "Loella",
  "last_name": "Hewell",
  "email": "lhewell1@indiatimes.com",
  "product": "Vikas Chair",
  "date":"12/03/2024",
  "paid": "Yes"
}, {
  "id": 3,
  "first_name": "Tirrell",
  "last_name": "Oak",
  "email": "toak2@gravatar.com",
  "product": "Red Jacket",
  "date":"12/03/2024",
  "paid": "No"
}, {
  "id": 4,
  "first_name": "Gladys",
  "last_name": "Petyt",
  "email": "gpetyt3@com.com",
  "product": "FireBolt Watch",
  "date":"12/03/2024",
  "paid": "Yes"
}, {
  "id": 5,
  "first_name": "Elbertine",
  "last_name": "Wisbey",
  "email": "ewisbey4@gnu.org",
  "product": "Vivo v21e",
  "date":"12/03/2024",
  "paid": "No"
}, {
  "id": 6,
  "first_name": "Rod",
  "last_name": "Vynall",
  "email": "rvynall5@hatena.ne.jp",
  "product": "FireBolt Watch",
  "date":"12/03/2024",
  "paid": "No"
}, {
  "id": 7,
  "first_name": "Celina",
  "last_name": "Kesterton",
  "email": "ckesterton6@blogtalkradio.com",
  "product": "Red Jacket",
  "date":"12/03/2024",
  "paid": "Yes"
}, {
  "id": 8,
  "first_name": "Raddy",
  "last_name": "Bernhardi",
  "email": "rbernhardi7@bizjournals.com",
  "product": "OnePlus Nord CE Buds",
  "date":"12/03/2024",
  "paid": "No"
}, {
  "id": 9,
  "first_name": "Fulvia",
  "last_name": "Boardman",
  "email": "fboardman8@indiatimes.com",
  "product": "FireBolt Watch",
  "date":"12/03/2024",
  "paid": "Yes"
}, {
  "id": 10,
  "first_name": "Baldwin",
  "last_name": "Yarr",
  "email": "byarr9@tripadvisor.com",
  "product": "Red Jacket",
  "date":"12/03/2024",
  "paid": "Yes"
}]


export default Order;
