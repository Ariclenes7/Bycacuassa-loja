/*
 *   Copyright (c) 2021 
 *   All rights reserved.
 */
import React, { Component } from 'react';

import Paginas from '../../components/Listas/Paginas';
import RedesSociais from '../../components/Listas/RedesSociais';
import DadosDaLoja from '../../components/Item/DadosDaLoja';

class Rodape extends Component {
    render() {
        return (
            <div className="Rodape">
                <div className="container flex horizontal">
                    <Paginas />
                    <RedesSociais />
                    <DadosDaLoja />
                </div>
            </div>
        )
    }
}

export default Rodape;