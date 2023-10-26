export const BotonCheck = ({evento}) => {

    return(
        <>
            <label>
                Anual
                    <input type='checkbox' value='mes' id='check' className="check" onClick={evento}></input>
                Mensual
            </label>
        </>
    )
}