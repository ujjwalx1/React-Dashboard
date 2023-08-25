import React, { useState } from 'react';
import './Sidebar.css';

function Sidebar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="sidebar ">
      <nav>
        <ul>
          <li>Button 1</li>
          <li>Button 2</li>
          <li>Button 3</li>
         
        </ul>
      </nav>
    </div>
  );
}

export default Sidebar;
