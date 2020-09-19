import React from 'react'
import HomeIcon from "@material-ui/icons/Home";

function SidebarRow({title}) {
  return (
    <div className="sidebarRow">
      <HomeIcon/>
      <h4>{title}</h4>
    </div>
  );
}

export default SidebarRow
