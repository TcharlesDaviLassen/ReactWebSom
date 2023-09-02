import React, { useEffect, useState } from "react";

import '../css/horariosPage.css'

const HorarioPage = () => {
    const [horariosSelecionados, setHorariosSelecionados] = useState([]);
    const [selectedHorario, setSelectedHorario] = useState(null);
    const [descricao, setDescricao] = useState('');

    const horarios = [
        '8:00 AM - 9:00 AM',
        '10:00 AM - 11:00 AM',
        '13:00 PM - 14:00 PM',
        '15:00 PM - 16:00 PM',
        '17:00 PM - 18:00 PM',
    ];

    // useEffect(() => {
    //     if (selectedHorario) {
    //         const timeoutId = setTimeout(() => {
    //             setSelectedHorario(null); // Desabilitar o horário selecionado após um período (pode ser personalizado)
    //         }, 300000); // Desabilitar após 5 minutos (300000 milissegundos)

    //         return () => {
    //             clearTimeout(timeoutId);
    //         };
    //     }
    // }, [selectedHorario]);


    const handleHorarioClick = (horario) => {
        // console.log('Horario selected', horario)

        // if (selectedHorario === horario) {
        //     setSelectedHorario(null); // Desmarcar se o mesmo horário for clicado novamente
        // } else {
        //     setSelectedHorario(horario);
        // }

        // if (!horariosSelecionados.includes(horario)) {
        //     setHorariosSelecionados([...horariosSelecionados, horario]);
        // } else if (horariosSelecionados.length > 0) {
        //     console.log("horariosSelecionados => ", horariosSelecionados)
        //     setHorariosSelecionados([...horariosSelecionados]); // Desmarcar se o mesmo horário for clicado novamente
        // }
    };

    const handleDescricaoChange = (event) => {
        setDescricao(event.target.value);
    };

    const handleAgendar = () => {
        // const dados = new Array();

        if (horariosSelecionados.length > 0) {

            // Aqui você pode adicionar a lógica para agendar o horário e salvar a descrição
            console.log('Horário agendado:', selectedHorario);
            console.log('Descrição:', descricao);
        }

        // let obj = {};
        // obj.horario = selectedHorario;
        // obj.descricao = descricao;

        // dados.push(obj);
    };

    return (
        <div className="container">
            {horariosSelecionados.length === 0 && (
                <h2>Horários Disponíveis</h2>
            )}

            {horariosSelecionados != 0 && (
                <h2>Horário selecionado</h2>
            )}

            <ul>
                {horarios.map((horario, index) => (
                    <li
                        key={index}
                        onClick={() => handleHorarioClick(horario)}
                        // className={`${selectedHorario === horario ? 'selected ' : selectedHorario !== null ? 'hidden' : ''}`}
                        className={`${horariosSelecionados.includes(horario) ? 'selected ' : ''}${horariosSelecionados.length > 0 ? 'hidden ' : ''}`}
                    >
                        {horario}
                    </li>
                ))}
            </ul>

            {/* {selectedHorario && ( */}
            {horariosSelecionados.length > 0 && (
                <div>
                    <h3>Agendar {selectedHorario}</h3>

                    <ul>
                        {horariosSelecionados.map((horario) => (
                            <li key={horario}>{horario}</li>
                        ))}
                    </ul>

                    <textarea
                        placeholder="Descrição do serviço"
                        value={descricao}
                        onChange={handleDescricaoChange}
                    />
                    <button onClick={handleAgendar}>Agendar</button>
                </div>
            )}
        </div>
    );
}

export { HorarioPage }