import axios from "axios";
import React, { useEffect, useState } from "react";
import { Button } from "react-bootstrap";
import { useNavigate, useParams } from "react-router-dom";

const Details = () => {
  const navigate = useNavigate();
  const [mydata, setData] = useState({});
  const {id} = useParams();
  const loadData = () => {
    let api = `http://localhost:8000/books/details/${id}`;
    axios.get(api).then((res) => {
      setData(res.data);
      console.log(res.data);
    });
  };

  useEffect(() => {
    loadData();
  }, []);

  //modify data
  const modify = (id) =>{
    navigate(`/editdata/${id}`)
  }
  // delete data
  const recDel = (id) => {
    let api = `http://localhost:8000/books/delrec`;
    axios.post(api,{id:id}).then((res)=>{
      console.log("data deleted!!")
      message.success("data deleted successfully")
    })
    navigate("/display");
  }

  // remove page or jump to home page
  const removePage = () =>{
    navigate("/home");
  }

  return(
    <>
    <h1>Details Page</h1>
    <br />
    <div id="details">
    <span id="remove" onClick={removePage}><i class="fas fa-delete-left"></i></span>
        <div id="box">
        <h2 style={{color:'#22C55E'}}>About the Auther</h2><br />
        <h5>Author Name : <span>{'"'}{mydata.auther_name}{'"'}</span></h5>
        <h5>Book Title : <span>{'"'}{mydata.book_name}{'"'}</span></h5>
        <h5>Publish Date :<span>{mydata.publish_date}</span></h5>
        <h5>Book Price : <span>{mydata.book_price}{'.00 ₹'}</span></h5>
        <br />
        <div style={{
            display:'flex',
            alignItems:'center',
            gap:'10px'
        }}>
        <Button style={{width:'120px',padding:'6px'}} variant="success" onClick={()=>{modify(mydata._id)}}>Update</Button>
        <Button style={{width:'120px',padding:'6px'}} variant="danger" onClick={()=>{recDel(mydata._id)}}>Delete</Button>
        </div>
        </div>
        <div id="box2">
            <img src={mydata.image_link} alt="image not found !!!" height='95%' width='75%'/>
        </div>
    </div>
    <br /><br />
    </>
  )
};

export default Details;
