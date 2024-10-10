// import Accordion from '@mui/material/Accordion';
import AccordionDetails from '@mui/material/AccordionDetails';
import AccordionSummary from '@mui/material/AccordionSummary';
import Typography from '@mui/material/Typography';
import { useEffect, useState } from 'react';
import { RiArrowDropDownFill } from "react-icons/ri";
import { CustomAccordion } from './styled';
import './style.scss'
import { useEventGameListMutation } from '../../services/sport/eventGameList';
import { useGameNameMutation } from '../../services/sport/gameName';
import { MdKeyboardDoubleArrowRight } from 'react-icons/md';
const SideBar = () => {
  const [gameList, setGameList] = useState([])
    const [expanded, setExpanded] = useState(4);

    const handleChange = (panel) => (event, isExpanded) => {
      setExpanded(isExpanded ? panel : false);
    };
    const [trigger,{data}] = useGameNameMutation()
    const [trigg,{data:gameEvent}] = useEventGameListMutation()

    useEffect(() => {
    trigger({limit: 50, pageno: 1})
    }, [])


    useEffect(() => {
      trigg({"limit":10,"sport_id":expanded,"pageno":1})
    }, [expanded])
    

    useEffect(() => {
      if(data?.data){
        const addGameList = data?.data?.map((item)=>{
          return{
            ...item,list:gameEvent?.data
          }
        })
        setGameList(addGameList)
      }
    }, [data?.data,expanded,gameEvent])
    

  
  return (
         <div>
          <h6 className='sports-heading'>Sports</h6>
          <h6 className='play-heading'>In Play</h6>
{gameList?.map((item)=>{
  return(

  <CustomAccordion key={item?.name} expanded={expanded === item?.sport_id} onChange={handleChange(item?.sport_id)}>
    <AccordionSummary
      expandIcon={<RiArrowDropDownFill size={24}/>}
      aria-controls="panel1bh-content"
      id="panel1bh-header"
    >
      {item?.name}
    </AccordionSummary>
    <AccordionDetails   sx={{
      // height: '30px',
      minHeight: '30px !important',
      backgroundColor: 'white !important',
      color: 'black',
      margin: '0px 0 !important',
      padding: '2px 0px 0px 0px !important',
      paddingBottom: '0px !important',
      borderBottom: '1px solid gray', 
       
      fontSize: '13px',
      // You can also target expanded state if needed
      '&.Mui-expanded': {
        margin: '0px 0 !important',
      },
      '&:last-child': {
        borderBottom: 'none',
      },
    }}>
      {item?.list?.map((elm)=>{
        return(

      <Typography key={elm?.name} sx={{color:"#4083a9",  fontSize:"13px", padding:"0", borderBottom:'1px solid #ddd'}}>
                <MdKeyboardDoubleArrowRight style={{ marginRight: '4px', color:"#CCCCCC" }} size={16} />
                {elm?.name}
      </Typography>
        )
      })}
    </AccordionDetails>
  </CustomAccordion>
  )
})}
 
  

    
    </div>
  )
}

export default SideBar