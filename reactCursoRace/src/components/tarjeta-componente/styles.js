import styled from 'styled-components';

const StyledTarjet = styled.div`
width:350px;
border: 1px solid black;
margin-left: 40vw;
height:200px;
border-radius: 2%;
border-top-color: ${({color}) => color};
`


export { StyledTarjet };