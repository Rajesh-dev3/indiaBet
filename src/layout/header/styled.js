import { Button, styled } from "@mui/material";

export const StyledButton = styled(Button)`
  padding-bottom: 0; /* Remove padding bottom */
  padding-top: 0; /* Remove padding bottom */
  padding-left: 15px; /* Remove padding bottom */
  padding-right: 15px; /* Remove padding bottom */
  color: #ffffff; /* Text color */
    @media (max-width: 780px) {
      font-size: 11px; /* Set font size to 11px for screens <= 780px */
      padding:0;
    }
   .MuiButton-endIcon {
    margin-left: 0; /* Remove left margin of the icon */
  }
  &:hover {
    background-color: transparent; /* Hover background color */
  }
`;