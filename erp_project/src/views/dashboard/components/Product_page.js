import React, {useState} from 'react';
import MaterialTable from 'material-table'



const prod= [
    {   
        id:1,
        title: 'Vivo v21e',
        category: 'Phone',
        date: 'March 14, 2024',
        price: 27580,
        available:20,
    },
    {
        id:2,
        title: 'FireBolt Watch',
        category: 'Watch',
        date: 'March 14, 2024',
        price: 3500,
        available:10,
    },
    {
        id:3,
        title: 'Red Jacket',
        category: 'Dress',
        date: 'March 14, 2024',
        price: 1250,
        available:15,
    },
    {
        id:4,
        title: 'Vikas Chair',
        category: 'Furniture',
        date: 'March 14, 2024',
        price: 3200,
        available:30,
    },
];


const Product = () => {
        const [data, setData] = useState(prod)
        const columns = [
            {title:'ID',field:"id"},
            {title:'Name',field:"title"},
            {title:'Category',field:"category"},
            {title:'Price',field:"price"},
            {title:'Available',field:"available"},
            {title:'Date',field:"date"},
        ]
    
    return (
        <MaterialTable
            title='Products'
            options={{
                actionsColumnIndex:-1,
                addRowPosition:"first"
            }}
            data = {data}
            columns={columns}
            editable={{
                onRowAdd:(newRow)=>new Promise((resolve, reject)=>{
                    const updatedRows =[...data, newRow] 
                    setTimeout(()=>{
                        setData(updatedRows)
                        resolve()},
                        2000)
                }),
                onRowDelete:selectedRow=>new Promise((resolve, reject)=>{
                    const index= selectedRow.tableData.id;
                    const updatedRows =[...data] 
                    updatedRows.splice(index,1)
                    // console.log(updatedRows)
                    setTimeout(()=>{
                        setData(updatedRows)
                        resolve()},
                        2000)
                }),
                onRowUpdate:(updatedRow, oldRow)=> new Promise((resolve, reject)=>{
                    const index= oldRow.tableData.id;
                    const updatedRows =[...data] 
                    updatedRows[index]=updatedRow
                    // console.log(updatedRow)
                    setTimeout(()=>{
                        setData(updatedRows)
                        resolve()},
                        2000)
                }),
            }}          
        />
        
    );
};

export default Product;
