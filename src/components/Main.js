import React, { useEffect, useState } from "react";
import axios from "axios";
import DeleteForeverIcon from "@mui/icons-material/DeleteForever";
import EditIcon from "@mui/icons-material/Edit";
import "./css/Main.css";
import { Button, Form, InputGroup, Row, Stack } from "react-bootstrap";
import EditCom from "./EditCom";
import { render } from "react-dom";

function Main() {

// CODE
const [getTodo, setGetTodo] = useState([]);
const [del , setDel] = useState('')

async function getData() {
  try {
    const response = await axios.get("http://localhost:4000/data");
    setGetTodo(response.data);
  } catch (error) {
    console.error(error);
  }
}

useEffect(() => {
  getData();
}, []);
// CODE

// async function getId(id) {
// await axios.get(`http://localhost:4000/search/${id}`)
// return (<EditCom />)
// }
function name(params) {


return  ( <EditCom /> )
  

}



  return (
    <div className="">
      {/* FORM */}
      <form action="/" method="post" className="mt-3 mb-3">
        <Stack direction="horizontal" gap={3}>
          <InputGroup className="">
            <Form.Control
              placeholder="Enter Todo"
              aria-label="Username"
              aria-describedby="basic-addon1"
              name="todo"
            />
          </InputGroup>

          <Button type="submit" variant="outline-primary">
            Submit
          </Button>
        </Stack>
      </form>
      {/* FORM */}

      {/* TODO ITEM */}
      <Stack gap={3}>
          {getTodo.map((item, index) => (
            
    
      <div key={index} className="item p-4 d-flex  justify-content-between  gap-2">
  


          <span>{item.todo} </span>
          <div className="icons  d-flex gap-3">
            <EditIcon className="edit_icon"  onClick={() => {name()}}/>
            <DeleteForeverIcon color="warning" className="delete_cion"  />
          </div>




          </div>
        
     
          ))}
    </Stack>








      {/* <Stack gap={3}>
        <div className="item p-4 d-flex  justify-content-between  gap-2">
          <span>item </span>
          <div className="icons  d-flex gap-3">
            <EditIcon color={"success"} className="edit_icon" />
            <DeleteForeverIcon color="warning" className="delete_cion" />
          </div>
        </div>
      </Stack> */}
      {/* TODO ITEM */}
    </div>
  );
}

export default Main;
