import { StyledCard, StyledTexto,StyledInfo, StyledTitle, StyledButton }  from './styles';

const Card = ({planet,image}) => {
    
  return (
    <>
     <StyledTitle className='planetName'>{planet}</StyledTitle>
      <StyledCard>
        <img className='imagenes' src={image}></img>
          <StyledTexto className = 'texts'>
            1Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum
          </StyledTexto>
      </StyledCard>
      <div className="botonInfo">
        <StyledButton>Overview: {planet}</StyledButton>
        <StyledButton>Composition: {planet}</StyledButton>
        {/* <StyledButton>HOLA3</StyledButton> */}
      </div>
      <StyledInfo>
        2Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum
      </StyledInfo>
      <StyledInfo>
        3Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum
      </StyledInfo>
      <StyledInfo>
        4Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum
      </StyledInfo>
      <StyledInfo>
        5Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum
      </StyledInfo>
    </>
  )
}

export default Card;