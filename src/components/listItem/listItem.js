import React from "react"

function ListItem(props){
    return(
        <li className="skillListItem text" value={props.skill} onClick={props.onClick}>{props.skill}</li>
    )
}

export default ListItem;