import  { useEffect, useState } from 'react';
import './Tabs.scss'; // Import SCSS file for styling
import AllBetTable from './AllBetTable';
import FancyBetTable from './FancyBetTable';
import { useMybetMutation } from '../../services/mybet/mybet';
import { useParams } from 'react-router-dom';

function Tabs() {
  const [activeTab, setActiveTab] = useState(0);
  const [isContentVisible, setIsContentVisible] = useState(true); // Toggle for content visibility

  // Array of tab labels
  const tabs = ['All Bet', 'Fancy Bet'];
  const {matchId} =useParams()
  const [formData, setFormData] = useState({
    fancy_id:0,
    market_id:"0",
    match_id:matchId,
    limit:10,
    pageno:1,
  });
const[trigger, {data} ]= useMybetMutation()
  const addData =data?.data?.MatchAndBetfair.length ? [ ...data?.data?.MatchAndBetfair]:[]

  // Content for each tab including tables
 

  // Toggle content visibility based on the active tab
  const handleTabClick = (index) => {
    if (activeTab === index) {
      setIsContentVisible(!isContentVisible); // Toggle if the same tab is clicked
    } else {
      setActiveTab(index); // Switch to the new tab
      setIsContentVisible(true); // Ensure content is visible when switching tabs
    }
  };

  const compObj = {
    0:<AllBetTable data={addData}/>,
    1:<FancyBetTable data={data?.data?.MatchFancy}/>
  }
  useEffect(() => {
   trigger(formData)
  }, [matchId])
  
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
          {compObj[activeTab]}
        </div>
      )}
    </div>
  );
}

export default Tabs;
