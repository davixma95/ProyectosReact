import styled from 'styled-components';

const StyledCard= styled.div`
width: 250px;
height: 400px;
border: 1px solid black;
background-color: #6D72DE;
display:inline-block;
border-radius: 2%;
`

const StyledCardb = styled(StyledCard)`
width: 250px;
border-radius: 2%;
height: 400px;
border: 1px solid black;
background-color: white;
padding:1rem;
`

const StyledCardb2 = styled(StyledCard)`
border-radius: 2%;
width: 250px;
height: 400px;
border: 1px solid black;
background-color: white;
`

const StyledPadre = styled.div`
    margin-top: 25vh;
    margin-left: 50vh;
`


export { StyledCard, StyledCardb, StyledCardb2, StyledPadre };

