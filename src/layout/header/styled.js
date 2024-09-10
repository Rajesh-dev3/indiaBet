import { Button, styled } from "@mui/material";

export const StyledButton = styled(Button)`
  padding-bottom: 0; /* Remove padding bottom */
  color: #ffffff; /* Text color */
   .MuiButton-endIcon {
    margin-left: 0; /* Remove left margin of the icon */
  }
  &:hover {
    background-color: transparent; /* Hover background color */
  }
`;