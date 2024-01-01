import styled from 'styled-components';

const Section = styled.section`
    /* max-height: 77.5vh;  */
    overflow: scroll;
    overflow-x: hidden;
    @media (min-width: 768px){
        height: 77.5vh!important;
    }
    @media (max-width: 767px){
        max-height: none!important;
    }
`

export default Section