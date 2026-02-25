import { useEffect, useState } from "react";

function EjemploFunciones() {
    const sumar = (e, valor) => {
        console.log(e)
        console.log('has presionado un click con ' + valor )
    }

return <button onClick={(evt) => sumar(evt, 4)}>
        Sumar
    </button>
}

export { EjemploFunciones };