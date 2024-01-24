import styled from "styled-components";

/* const Section = styled.section`
    max-height: 77.5vh; 
    overflow: scroll;
    overflow-x: hidden;
    // margin: auto;
    margin-top: 1.5rem;
    @media (min-width: 768px){
        max-height: 100vh!important;
        max-width: 72%;
    }
    @media (max-width: 767px){
        max-width: 90%;
        max-height: none!important;
    }
` */

const Section = styled.section`
  /* max-height: 77.5vh;  */
  overflow: scroll;
  overflow-x: hidden;
  // margin: auto;
  margin-top: 1.5rem;
  @media (min-width: 768px) {
    height: 90.1vh !important;
    max-width: 97%;
  }
  @media (max-width: 767px) {
    max-width: 90%;
    max-height: none !important;
  }
`;
export default Section;
