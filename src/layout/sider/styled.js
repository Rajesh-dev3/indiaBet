// import { AccordionSummary, styled } from "@mui/material";

// export const StyledAccordionSummary = styled(AccordionSummary)`

//      & .MuiAccordionSummary-content {
//          borderRadius: '0',
//     margin: 0; /* Remove margin from content */
//   }
//   padding: 0; /* Remove padding from AccordionSummary */
// `;

import Accordion from "@mui/material/Accordion";
import { styled } from "@mui/material/styles";
import { fontWeight, margin, padding } from "@mui/system";
export const CustomAccordion = styled(Accordion)(({ theme }) => {
    return {
      boxShadow: "none", // this styles directly apply to accordion
      ".MuiAccordionDetails-root": {
        backgroundColor:"#bbbbbb",
        
      },
      
  
      

      ".MuiAccordionSummary-root": {
        height: "30px",
        minHeight: "30px !important",
        backgroundColor: "white",
        
        color: "#4083a9",
        fontWeight:"bold",
        margin: "0px 0 !important",
        padding:"8px !important",
        fontSize:"13px",
      }, // this apply to Summary
      "&.Mui-expanded":{
        margin: "0px 0 !important",
      },
  



    //  "&..MuiAccordionDetails":{
    //   backgroundColor:"white !important",
    //   color: "black",
    //  }
   
    };
  });