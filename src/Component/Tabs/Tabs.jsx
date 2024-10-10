import React, { useState } from 'react';
import './Tabs.scss'; // Import SCSS file for styling

function Tabs() {
  const [activeTab, setActiveTab] = useState(0);
  const [isContentVisible, setIsContentVisible] = useState(true); // Toggle for content visibility

  // Array of tab labels
  const tabs = ['All Bet', 'Fancy Bet'];

  // Content for each tab including tables
  const tabContent = [
    <div>
      <table>
        <thead>
          <tr>
            <th>No.</th>
            <th>Runner</th>
            <th>Odds</th>
            <th>Stack</th>
            <th>Bet Type</th>
            <th>PnL</th>
            <th>Time</th>
          </tr>
        </thead>
        <tbody>
          {/* Add your table rows here */}
        </tbody>
      </table>
    </div>,
    <div>
      <table>
        <thead>
          <tr>
            <th>No.</th>
            <th>Runner</th>
            <th>Bet Type</th>
            <th>Odds</th>
            <th>Stack</th>
            <th>PnL</th>
            <th>Time</th>
          </tr>
        </thead>
        <tbody>
          {/* Add your table rows here */}
        </tbody>
      </table>
    </div>
  ];

  // Toggle content visibility based on the active tab
  const handleTabClick = (index) => {
    if (activeTab === index) {
      setIsContentVisible(!isContentVisible); // Toggle if the same tab is clicked
    } else {
      setActiveTab(index); // Switch to the new tab
      setIsContentVisible(true); // Ensure content is visible when switching tabs
    }
  };

  return (
    <div className="tabs-container">
      {/* Tabs Header with Arrow Icon */}
      <div className="tabs-header">
        {tabs.map((tab, index) => (
          <button
            key={index}
            className={`tab-button ${activeTab === index ? 'active' : ''}`}
            onClick={() => handleTabClick(index)} // Use the new click handler
          >
            {tab} (0)
          </button>
        ))}
        <div
          className={`arrow-icon ${isContentVisible ? 'open' : ''}`}
          onClick={() => setIsContentVisible(!isContentVisible)} // Toggle content visibility
        >
          <i className='fa fa-caret-down'></i> {/* Arrow icon */}
        </div>
      </div>

      {/* Tabs Content */}
      {isContentVisible && (
        <div className="tabs-content">
          {tabContent[activeTab]}
        </div>
      )}
    </div>
  );
}

export default Tabs;
