import React, { Fragment, useState } from 'react';
import Error from './Error';



function Pregunta (props) {

    const {guardarPresupuesto, guardarPreguntaPresupuesto, guardarRestante} = props; //podria pasarlo como parametro como siempre pero como son varios se puede pasar asi

    //definir el state
    const [cantidad, guardarCantidad ] = useState(0);
    const [error, guardarError] = useState(false); 


    //valiar el presupuesto
    const agregarPresupuesto = (e) => {
        e.preventDefault();

        //validar
        if (cantidad < 1 || isNaN(cantidad)) {
            guardarError(true);
            
            return; //para q no pase a las siguientes lineas
        }
        //si se pasa la validacion
        guardarError(false);
        guardarPresupuesto(cantidad);
        guardarRestante(cantidad);
        guardarPreguntaPresupuesto(false);

    }

    return(

        <Fragment>
        <h2>Coloca tu Presupuesto</h2>

        { error ? <Error mensaje='El presupuesto es incorrecto' /> : null}

        <form
            onSubmit={agregarPresupuesto}
        >
            <input type='number'
                className='u-full-width'
                placeholder='Agrega tu presupuesto' 
               onChange = {e => guardarCantidad(parseInt(e.target.value , 10 ))} 
               />
            <input type='submit'
                className='button-primary u-full-width'
                value='Definir presupuesto'
                />    
        </form>

        </Fragment>
    ) 
}

export default Pregunta;