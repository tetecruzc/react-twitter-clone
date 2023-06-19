import React from 'react'
import './SidebarOption.css'
function SidebarOption({active, text, Icon}) {
  return (
    <div className={`sidebar-option ${active && 'sidebar-option__active'}`}>
        <Icon/>
        <h2>{text}</h2>  
    </div>
  )
}

export default SidebarOption