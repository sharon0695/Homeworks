import React, { useEffect, useState } from 'react';
import CircularLinkedList from '../estructuras/CircularList/CircularLinkedList';

interface Doctor {
    name: string;
}

const doctorsList: Doctor[] = [
    { name: 'Dr. Basante' },
    { name: 'Dr. Gracia' },
    { name: 'Dr. Gracia' },
    { name: 'Dra. Abella' },
    { name: 'Dr. Rojas' },
    { name: 'Dra. Salazar' },
];

const Doctores: React.FC = () => {
    const [doctorList] = useState<CircularLinkedList<Doctor>>(new CircularLinkedList<Doctor>());
    const [currentDoctor, setCurrentDoctor] = useState<Doctor | null>(null);

    useEffect(() => {
        doctorsList.forEach(doctor => doctorList.append(doctor));
        setCurrentDoctor(doctorList.head?.value || null);

        const interval = setInterval(() => {
            const nextDoctor = doctorList.next();
            setCurrentDoctor(nextDoctor);
        }, 10000); 
        return () => clearInterval(interval);
    }, [doctorList]);

    return (
        <div>
            <h2>Doctor de turno</h2>
            {currentDoctor ? <p>{currentDoctor.name}</p> : <p>No hay doctores disponibles</p>}
        </div>
    );
};

export default Doctores;