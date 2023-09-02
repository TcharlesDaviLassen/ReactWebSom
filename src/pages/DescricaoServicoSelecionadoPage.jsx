import React from "react";
import { Link } from "react-router-dom";

import imageLotus from '../assets/animations/lotusFlower.jpg';

const DescricaoServicoSelecionadoPage = () => {

    const descricao = localStorage.getItem('descricaoServico');

    return (
        <>
            <img className="imageFlower" src={imageLotus} alt="Minha Imagem" />

            <div>
                <h2>Descrição do Serviço Selecionado:</h2>
                <p>{descricao}</p>

                <Link to="/home">
                    <button>Back</button>
                </Link>

            </div>
        </>
    );
}

export { DescricaoServicoSelecionadoPage };