import styled from 'styled-components';

const StyledCard = styled.div`
background-color: rgb(2, 1, 31);
display:flex;
align-items: center;
`

const StyledTexto = styled.div`
width: 300px;
height: 15rem;
margin-top:150px;
margin-left:35%;
border:1px solid white;
border-radius:2%;
`
const StyledInfo = styled.div`
width: 300px;
height: 200px;
border:1px solid white;
display: inline-block;
margin-left:7%;
margin-top:7%;
border-radius:5%;
`

const StyledTitle = styled.div`
margin-left: 60%;
font-size: 4rem;
`

const StyledButton = styled.button`
margin-left: 60%;
font-size: 1.5rem;
width: 14vw;
background-color: #6EAEEA;
`


export {StyledCard, StyledTexto, StyledInfo, StyledTitle, StyledButton };