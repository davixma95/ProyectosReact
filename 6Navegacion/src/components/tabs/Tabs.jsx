import { useState } from "react";

const Tabs = () => {

    const letras = ['A','B','C','D'];
    const numeros = ['1','2','3','4',];

    const [change, setChange] = useState(0);

    const clicable = (letra) => {
        const index = letras.indexOf(letra);
        
        setChange(numeros[index]);
    }

    return (
        <>
            <h1>TABS</h1>
            {letras.map((letra,index) => (
                    <button key={index} onClick={() => clicable(letra)}>{letra}</button>
                )
            )}
            <p>Numero que corresponde: {change}</p>
        </>
    )
}

export default Tabs