import styled from 'styled-components';

const StyledButton = styled.button
// `background-color: ${({color=> color})};
`background-color: red;

padding:8px;`

const StyledButtonRed = styled(StyledButton)
`background-color: green;
color:orange;`

export {StyledButton, StyledButtonRed };

