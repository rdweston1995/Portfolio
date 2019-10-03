import React from "react"

function ListItem(props){
    return(
        <li className="skillListItem">{props.skill}</li>
    )
}

export default ListItem;