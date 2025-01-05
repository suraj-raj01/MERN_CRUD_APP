import React from "react";
import { Table } from "react-bootstrap";

const RecentDelete = () => {
  return (
    <div>
      <div style={
        {
            width:'100%',
            height:'60vh',
            boxShadow:'0px 0px 1px',
            borderRadius:'5px'
        }
      }>
        <Table bordered striped hover>
            <thead>
                <tr>
                    <th style={{borderTopLeftRadius:'5px',backgroundColor:'#22C55E',color:'white'}}>S.No</th>
                    <th style={{backgroundColor:'#22C55E',color:'white'}}>Author Name</th>
                    <th style={{backgroundColor:'#22C55E',color:'white'}}>Book Name</th>
                    <th style={{backgroundColor:'#22C55E',color:'white'}}>Publish Date</th>
                    <th style={{backgroundColor:'#22C55E',color:'white'}}>Book Price</th>
                </tr>
            </thead>
            <tbody>
                
            </tbody>
        </Table>
      </div>
    </div>
  );
};

export default RecentDelete;
