import { StyledButton, StyledButtonRed } from "./styles";

const Button = ({texto}) => (
    <>
        <StyledButton>
            <StyledButtonRed>{texto}</StyledButtonRed>
        </StyledButton>
    </>
)
export default Button;