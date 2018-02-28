import React from 'react'

const Tab = ({ title, isActive, tabIndex, onChange }) => {
  return (
    <li className={isActive ? 'active' : ''} onClick={() => onChange(tabIndex)}>
      {title}
    </li>
  )
}

export default Tab
