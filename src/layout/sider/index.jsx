import Accordion from '@mui/material/Accordion';
import AccordionDetails from '@mui/material/AccordionDetails';
import AccordionSummary from '@mui/material/AccordionSummary';
import Typography from '@mui/material/Typography';
import { useState } from 'react';
import { RiArrowDropDownFill } from "react-icons/ri";
import { StyledAccordionSummary } from './styled';

const SideBar = () => {
    const [expanded, setExpanded] = useState(false);

    const handleChange = (panel) => (event, isExpanded) => {
      setExpanded(isExpanded ? panel : false);
    };
  
  return (
         <div>
  <Accordion expanded={expanded === 'panel1'} onChange={handleChange('panel1')}>
    <StyledAccordionSummary
      expandIcon={<RiArrowDropDownFill />}
      aria-controls="panel1bh-content"
      id="panel1bh-header"
    >
      Cricket
    </StyledAccordionSummary>
    <AccordionDetails>
      <Typography>
        Donec placerat, 
      </Typography>
    </AccordionDetails>
  </Accordion>
      <Accordion expanded={expanded === 'panel2'} onChange={handleChange('panel2')}>
        <AccordionSummary
          expandIcon={<RiArrowDropDownFill />}
          aria-controls="panel1bh-content"
          id="panel1bh-header"
        >
    Sport
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Donec placerat,
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion expanded={expanded === 'panel3'} onChange={handleChange('panel3')}>
        <AccordionSummary
          expandIcon={<RiArrowDropDownFill />}
          aria-controls="panel1bh-content"
          id="panel1bh-header"
        >
    Tennis
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Donec placerat, 
          </Typography>
        </AccordionDetails>
      </Accordion>
     
    </div>
  )
}

export default SideBar