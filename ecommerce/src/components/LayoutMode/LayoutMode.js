import React from "react"


const LayoutMode = ({
    len,
    click,
    isActive
}) => {
    let items = [];
    let classes = "layout-mode__item";

    if(isActive) {
        classes += "layout-mode__item--active"
    }


    for(let i = 0; i< len; i++) {
        items.push(<div className={classes}/>)
    }

    return (
        <div className="layout-mode" onClick={() => {click(len)}}>

            {items}
        </div>
    )
}

