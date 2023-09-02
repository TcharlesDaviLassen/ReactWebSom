import React, { useState } from 'react';
import jsonData from '../jsonData';

import "./BoxSection.css"
import { DescricaoServicoSelecionadoPage } from '../pages/DescricaoServicoSelecionadoPage';

function ItemList() {

    const [descricaoServico, setDescricaoServico] = useState(null);

    const handleItemClick = (descricao) => {

        if (descricao) {
            setDescricaoServico(descricao);

            localStorage.setItem('descricaoServico', descricao);

            window.location.replace("./descriptionsPage");
        }

    };

    return (
        <div>
            <div className="box-section">
                {jsonData.map((item, index) => (
                    <div
                        key={index}
                        className="box"
                        onClick={() => handleItemClick(item.nome)}
                    >
                        <h3>{item.codigo}</h3>
                        <p>{item.nome}</p>
                    </div>
                ))}
            </div>
            {/* 
            {descricaoServico && (
                <div>
                    <h2>Descrição do Serviço Selecionado:</h2>
                    <p>{descricaoServico}</p>
                    <DescricaoServicoSelecionadoPage descricaoServico={descricaoServico} />
                </div>
            )} */}
        </div>
    );

    // return (
    //     <div className="box-section">
    //         {jsonData.map((item, index) => (
    //             <div key={index} className="box">
    //                 <h3>{item.codigo}</h3>
    //                 <p>{item.nome}</p>
    //             </div>
    //         ))}
    //     </div>
    // );
}

export default ItemList;