import { useEffect, useState } from 'react';

function EjemploMontaje() {

    useEffect(() => {
          console.log('El componente se montó');
     }, [ ]);

      return <h2>Ejemplo montaje</h2>;
}

function EjemploCleanUp() {
      const [segundos, setSegundos] = useState<number>(0);

      useEffect(() => {
            const timer = setInterval(() => {
                  setSegundos((s) => s + 1);
            }, 1000);

            return () => {
                  clearInterval(timer);
                  console.log('Intervalo limpiado');
            }
      }, [ ]);

      return <p>Segundos: {segundos}</p>;
}

export { EjemploMontaje, EjemploCleanUp };
