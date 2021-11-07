import React from "react";
import "../styles.css";
import DeleteOutlineOutlinedIcon from '@mui/icons-material/DeleteOutlineOutlined';

export default function EntryItem(props) {
  return (
    <div>
      <div id="entry-item-style">
        <p>{props.text}</p>
           
        <button onClick={()=>{
          props.deleteItem(props.id)
        }}>
          <DeleteOutlineOutlinedIcon />
        </button>
      </div>
    </div>
  );
}
