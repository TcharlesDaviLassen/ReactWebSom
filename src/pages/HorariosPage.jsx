import React, { useEffect, useState } from "react";

import '../css/horariosPage.css'
import imageLotus from '../assets/animations/lotusFlower.jpg';

const HorarioPage = () => {
    // const [selectedHorario, setSelectedHorario] = useState(null);
    // const [descricao, setDescricao] = useState('');

    // const horarios = [
    //     '8:00 AM - 9:00 AM',
    //     '10:00 AM - 11:00 AM',
    //     '13:00 PM - 14:00 PM',
    //     '15:00 PM - 16:00 PM',
    //     '17:00 PM - 18:00 PM',
    // ];


    // const handleHorarioClick = (horario) => {
    //     // console.log('Horario selected', horario)

    //     if (selectedHorario === horario) {
    //         setSelectedHorario(null); // Desmarcar se o mesmo horário for clicado novamente
    //     } else {
    //         setSelectedHorario(horario);
    //     }



    // };

    // const handleDescricaoChange = (event) => {
    //     setDescricao(event.target.value);
    // };

    // const handleAgendar = async () => {
    //     // const dados = new Array();

    //     // Aqui você pode adicionar a lógica para agendar o horário e salvar a descrição
    //     console.log('Horário agendado:', selectedHorario);
    //     console.log('Descrição:', descricao);


    //     // let obj = {};
    //     // obj.horario = selectedHorario;
    //     // obj.descricao = descricao;

    //     // dados.push(obj);

    //     if (descricao !== "") {
    //         window.location.replace("/horario");
    //     } else {
    //         alert("Campo de descrição é requerido");
    //     }

    // };

    // return (
    //     <div className="container">
    //         {selectedHorario === null && (
    //             <h2>Horários Disponíveis</h2>
    //         )}

    //         {selectedHorario != null && (
    //             <h2>Horário selecionado</h2>
    //         )}

    //         <ul>
    //             {horarios.map((horario, index) => (
    //                 <li
    //                     key={index}
    //                     onClick={() => handleHorarioClick(horario)}
    //                     className={`${selectedHorario === horario ? 'selected ' : selectedHorario !== null ? 'hidden' : ''}`}
    //                 >
    //                     {horario}
    //                 </li>
    //             ))}
    //         </ul>

    //         {selectedHorario && (
    //             <div>
    //                 <h3>Agendar {selectedHorario}</h3>

    //                 {/* <ul>
    //                     {horariosSelecionados.map((horario) => (
    //                         <li key={horario}>{horario}</li>
    //                     ))}
    //                 </ul> */}

    //                 <textarea
    //                     placeholder="Descrição do serviço"
    //                     value={descricao}
    //                     onChange={handleDescricaoChange}
    //                     required
    //                 />
    //                 <button onClick={handleAgendar}>Agendar</button>
    //             </div>
    //         )}
    //     </div>
    // );



    const [horariosDisponiveis, setHorariosDisponiveis] = useState([
        '8:00 AM - 9:00 AM',
        '10:00 AM - 11:00 AM',
        '13:00 PM - 14:00 PM',
        '15:00 PM - 16:00 PM',
        '17:00 PM - 18:00 PM',
    ]);

    const [horariosSelecionados, setHorariosSelecionados] = useState([]);
    const [descricao, setDescricao] = useState('');

    const handleHorarioClick = (horario) => {

        if (horariosSelecionados.includes(horario)) {

            // var dadosPromot = prompt("Qual é seu código");

            // if (dadosPromot === '123') {
                // Se o horário já estiver selecionado, remova-o ao clicar duas vezes (cancelar)
                const horariosAtualizados = horariosSelecionados.filter((selectedHorario) => selectedHorario !== horario);

                setHorariosSelecionados(horariosAtualizados);
            // } else {
                // alert("Você não pode selecionar o horário já selecionado por outro usuário");
            // }

        } else {
            // Se o horário não estiver selecionado, adicione-o
            setHorariosSelecionados([...horariosSelecionados, horario]);

        }
    };

    const descricaoTextArea = (e) => {
        setDescricao(e.target.value);
    }

    const handleAgendar = async () => {
        // const dados = new Array();

        // Aqui você pode adicionar a lógica para agendar o horário e salvar a descrição
        console.log('Horário agendado:', horariosSelecionados);
        console.log('Descrição:', descricao);


        // let obj = {};
        // obj.horario = selectedHorario;
        // obj.descricao = descricao;

        // dados.push(obj);

        // if (descricao !== "") {
            window.location.replace("/home");
        // } else {
            // alert("Campo de descrição é requerido");
        // }

    };

    return (
        <>
            <div className="div_horario">
                <img className="imageFlower" src={imageLotus} alt="Minha Imagem" />
            </div>

            <div>

                <div>

                    {horariosSelecionados.length <= 0 && (<h2>Horários Disponíveis</h2>)}

                    {horariosSelecionados.length !== 0 && (<h2>Horário Selecionado</h2>)}

                    <ul>
                        {horariosDisponiveis.map((horario, index) => (
                            <li
                                key={index}
                                onClick={() => handleHorarioClick(horario)}
                                className={horariosSelecionados.includes(horario) ? 'selected' : horariosSelecionados.length > 0 ? 'hidden' : ''}
                            >
                                {horario}
                            </li>
                        ))}
                    </ul>
                </div>


                {horariosSelecionados.length !== 0 && (
                    <>
                        {/* <h3>Horário Selecionado</h3><ul>
                            {horariosSelecionados.map((horario, index) => (
                                <li key={index}>{horario}</li>
                            ))}

                        </ul> */}

                        {/* <textarea
                            placeholder="Descrição do serviço"
                            value={descricao}
                            onChange={descricaoTextArea}
                        /> */}

                        <button onClick={handleAgendar}>Agendar</button>
                    </>
                )}
            </div>
        </>

    );


    // const [horariosSelecionados, setHorariosSelecionados] = useState([]);
    // const [descricao, setDescricao] = useState('');
    // const horariosDisponiveis = [
    //     '8:00 AM - 9:00 AM',
    //     '10:00 AM - 11:00 AM',
    //     '1:00 PM - 2:00 PM',
    //     // ... adicione mais horários aqui
    // ];

    // const handleHorarioClick = (horario) => {
    //     if (!horariosSelecionados.includes(horario)) {
    //         setHorariosSelecionados([...horariosSelecionados, horario]);
    //     } else if (horariosSelecionados.includes(horario)) {
    //         setHorariosSelecionados([]);
    //     }
    // };

    // const handleDescricaoChange = (event) => {
    //     setDescricao(event.target.value);
    // };

    // const handleAgendar = () => {
    //     if (horariosSelecionados.length > 0) {
    //         // Aqui você pode adicionar a lógica para agendar os horários selecionados e salvar a descrição
    //         console.log('Horários agendados:', horariosSelecionados);
    //         console.log('Descrição:', descricao);
    //     }
    // };

    // return (
    //     <div>
    //         <h2>Horários Disponíveis</h2>
    //         <ul>
    //             {horariosDisponiveis.map((horario, index) => (
    //                 <li
    //                     key={index}
    //                     onClick={() => handleHorarioClick(horario)}
    //                     className={`${horariosSelecionados.includes(horario) ? 'selected' : ''} ${horariosSelecionados.length > 0 ? 'disabled' : ''
    //                         }`}
    //                 >
    //                     {horario}
    //                 </li>
    //             ))}
    //         </ul>
    //         {horariosSelecionados.length > 0 && (
    //             <div>
    //                 <h3>Agendar Horários</h3>
    //                 <ul>
    //                     {horariosSelecionados.map((horario) => (
    //                         <li key={horario}>{horario}</li>
    //                     ))}
    //                 </ul>
    //                 <textarea
    //                     placeholder="Descrição do serviço"
    //                     value={descricao}
    //                     onChange={handleDescricaoChange}
    //                 />
    //                 <button onClick={handleAgendar}>Agendar</button>
    //             </div>
    //         )}
    //     </div>
    // );




    // const [selectedHorario, setSelectedHorario] = useState(null);
    // const [descricao, setDescricao] = useState('');
    // const horarios = [
    //   '8:00 AM - 9:00 AM',
    //   '10:00 AM - 11:00 AM',
    //   '1:00 PM - 2:00 PM',
    //   // ... adicione mais horários aqui
    // ];

    // useEffect(() => {
    //   if (selectedHorario) {
    //     const timeoutId = setTimeout(() => {
    //       setSelectedHorario(null); // Desabilitar o horário selecionado após um período (pode ser personalizado)
    //     }, 300000); // Desabilitar após 5 minutos (300000 milissegundos)

    //     return () => {
    //       clearTimeout(timeoutId);
    //     };
    //   }
    // }, [selectedHorario]);

    // const handleHorarioClick = (horario) => {
    //   if (selectedHorario === horario) {
    //     setSelectedHorario(null); // Desmarcar se o mesmo horário for clicado novamente
    //   } else {
    //     setSelectedHorario(horario);
    //   }
    // };

    // const handleDescricaoChange = (event) => {
    //   setDescricao(event.target.value);
    // };

    // const handleAgendar = () => {
    //   if (selectedHorario) {
    //     // Aqui você pode adicionar a lógica para agendar o horário e salvar a descrição
    //     console.log('Horário agendado:', selectedHorario);
    //     console.log('Descrição:', descricao);
    //   }
    // };

    // return (
    //   <div>
    //     <h2>Horários Disponíveis</h2>
    //     <ul>
    //       {horarios.map((horario, index) => (
    //         <li
    //           key={index}
    //           onClick={() => handleHorarioClick(horario)}
    //           className={`${selectedHorario === horario ? 'selected ' : ''}${selectedHorario ? 'disabled' : ''}`}
    //         >
    //           {horario}
    //         </li>
    //       ))}
    //     </ul>
    //     {selectedHorario && (
    //       <div>
    //         <h3>Agendar {selectedHorario}</h3>
    //         <textarea
    //           placeholder="Descrição do serviço"
    //           value={descricao}
    //           onChange={handleDescricaoChange}
    //         />
    //         <button onClick={handleAgendar}>Agendar</button>
    //       </div>
    //     )}
    //   </div>
    // );
}

export { HorarioPage }