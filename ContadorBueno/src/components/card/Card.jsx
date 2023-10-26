import { StyledCard, StyledCardb, StyledCardb2, StyledPadre } from './styles';
import { BotonCheck } from './../Boton/BotonCheck'
import { Textos } from './../textos/Textos'
import { useState } from 'react';

export const Card = () => {

    const [precio, setPrecio] = useState(true);

    const params = [
                    {preciomax:21,preciomin:11,funcion:'event => cambioPrecios(event, setPrecio)'},
                    {preciomax:22,preciomin:12,funcion:'event => cambioPrecios(event, setPrecio)'},
                    {preciomax:23,preciomin:13,funcion:'event => cambioPrecios(event, setPrecio)'},
                   ]

    return(
        <>
            <label>
                Anual
                    <input type='checkbox' onClick={event => cambioPrecios(event, setPrecio)}></input>
                Mensual
            </label>
            {params.map((param) => (
                <>
                    <StyledPadre>
                        <Textos cadena={precio ? param.preciomax : param.preciomin}></Textos>
                    </StyledPadre>
                </>
            ))}
        </>
    )
}

export const cambioPrecios = (event, setPrecio) => {
    setPrecio(event.target.checked)
}