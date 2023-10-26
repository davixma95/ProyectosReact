import { StyledTarjet} from "./styles";
import Parrafo from './../parrafo-componente/Parrafo'
import Titulo from './../titulo-componente/Titulo';

const Tarjet = () => { 

    return(
        <>
            <StyledTarjet color='cyan'>
                <Titulo texto = 'Team Builder'/>
                <Parrafo texto = 'SOLDADO... NOS VAMOOOOS!!!'/>
                <img src='./../../../public/icon-team-builder.svg'></img>
            </StyledTarjet>

            <StyledTarjet color='red'>
                <Titulo texto = 'Team Builder'/>
                <Parrafo texto = 'SOLDADO... NOS VAMOOOOS!!!'/>
                <img src='./../../../public/icon-team-builder.svg'></img>
            </StyledTarjet>

            <StyledTarjet color='yellow'>
                <Titulo texto = 'Team Builder'/>
                <Parrafo texto = 'SOLDADO... NOS VAMOOOOS!!!'/>
                <img src='./../../../public/icon-team-builder.svg'></img>
            </StyledTarjet>

            <StyledTarjet color='green'>
                <Titulo texto = 'Team Builder'/>
                <Parrafo texto = 'SOLDADO... NOS VAMOOOOS!!!'/>
                <img src='./../../../public/icon-team-builder.svg'></img>
            </StyledTarjet>
        </>
    )
}
export default Tarjet;