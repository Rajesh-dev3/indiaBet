import React from 'react'
import './style.scss'
import './styled.js'
import { CustomSelect } from './styled.js'
import { MenuItem } from '@mui/material'
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import { Link } from 'react-router-dom'
const Announcement = () => {
  return (
    <>
    <div className='title_new_at'>
        <div className="annouce">

        Announcement <span><CustomSelect
             
             labelId="demo-simple-select-label"
             id="demo-simple-select"
            //  onChange={(e) => setLimit(e.target.value)}
             defaultValue={10}
             sx={{borderRadius:"0"}}
 
             IconComponent={KeyboardArrowDownIcon} 
             
           >
             <MenuItem value={10}>10</MenuItem>
             <MenuItem value={20}>20</MenuItem>
             <MenuItem value={30}>30</MenuItem>
             <MenuItem value={40}>40</MenuItem>
            
           </CustomSelect></span>
        </div>
           <div className="back-btn"><Link to={"/"}><span>Back</span></Link></div></div>
<div className="detail-sec-annoucement">
    <p>Showing 0 to 0 enteries</p>
</div>
    </>
  )
}

export default Announcement