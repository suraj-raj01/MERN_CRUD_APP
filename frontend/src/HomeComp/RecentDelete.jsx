import React from "react";
import { Table } from "react-bootstrap";
import { Empty } from 'antd';

const RecentDelete = () => {
  return (
    <div>
      <div id="recent-delete" style={
        {
            width:'100%',
            height:'60vh',
            boxShadow:'0px 0px 1px',
            borderRadius:'5px'
        }
      }>
        <Table>
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
                <tr>
                <td></td>
                <td></td>
                <td><center><Empty/></center></td>
                <td></td>
                <td></td>
                </tr>
            </tbody>
        </Table>
      </div>
    </div>
  );
};

export default RecentDelete;
