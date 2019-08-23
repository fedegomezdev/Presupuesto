import React, {useState} from 'react';
import Error from './Error';
import shortid from 'shortid';


function Formulario(props){

    const {guardarGasto, guardarCrearGasto} = props;

    //state
    const [nombreGasto, guardarNombreGasto] = useState('');
    const [cantidadGasto, guardarCantidadGasto] = useState(0);
    const [error, guardarError] = useState(false);

    //cuando se agrega el gasto
    const agregarGasto = e => {
        e.preventDefault();

        //validar
        if (cantidadGasto < 1 || isNaN(cantidadGasto) || nombreGasto === '' ) {
            guardarError(true);
            
            return; //para q no pase a las siguientes lineas

        
        }
        //construir objeto de gasto
        const gasto = {
            nombreGasto, 
            cantidadGasto,
            id: shortid.generate() 
        }
        //pasar el gasto al componente principal
        guardarGasto(gasto);
        guardarCrearGasto(true);

        //eliminar alerta
        guardarError(false);

        //resetear el form
        guardarNombreGasto('');
        guardarCantidadGasto('');

        
    }

    return(
        <form
            onSubmit={agregarGasto}
        >
            <h2>Agrega tus datos aqui</h2>

            { error ? <Error mensaje='Ambos campos son obligatorios o Presupuesto incorrecto' /> : null}

            <div className='campo'>
                <label>Nombre Gasto</label>
                <input 
                    type='text'
                    className='u-full-width'
                    placeholder='EJ: Transporte'
                    onChange={e => guardarNombreGasto(e.target.value)}
                    value={nombreGasto}
                />
            </div>
            
            <div className='campo'>
                <label>Cantidad de Gasto</label>
                <input 
                    type='number'
                    className='u-full-width'
                    placeholder='EJ: 300'
                    onChange={e => guardarCantidadGasto(parseInt(e.target.value, 10))}
                    value={cantidadGasto}
                />
            </div>

            <input type='submit' className='button-primary u-full-width' value='Agregar' />

        </form>

    )
}

export default Formulario; 