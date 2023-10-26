import { StyledCard } from './../card/styles'

export const Textos = ({cadena}) => {
    return(
        <>
            <StyledCard>
                <div>{cadena}</div>
            </StyledCard>

            {/* <StyledCardb>
                <div>{cadena}</div>
            </StyledCardb>

            <StyledCardb>
                <div>{cadena}</div>
            </StyledCardb> */}
        </>
    )
}