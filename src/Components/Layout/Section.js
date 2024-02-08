// Importing styled-components library
import styled from "styled-components";

// Styled component for a section with specific styling
const Section = styled.section`
  /* Styling for the section */
  overflow: scroll;
  overflow-x: hidden;
  margin-top: 1.5rem;

  /* Media queries for responsiveness */
  @media (min-width: 768px) {
    height: 90.1vh !important;
    max-width: 97%;
  }

  @media (max-width: 767px) {
    max-width: 90%;
    max-height: none !important;
  }
`;

// Exporting the styled section component
export default Section;