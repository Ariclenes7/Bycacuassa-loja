/*
 *   Copyright (c) 2021 
 *   All rights reserved.
 */
import React, { Component } from 'react';

import Produtos from '../../../components/Listas/Produtos';

import { connect } from 'react-redux';

class ProdutosPaginaInicial extends Component {
    render() {
        return (
            <div className="container Produtos-Pagina-Inicial flex vertical">
                <h2>Lançamentos</h2>
                <br />
                <br />
                <Produtos
                    produtos={this.props.produtos ? this.props.produtos.docs : []}
                    itensPorLinha={4} />
            </div>
        )
    }
}

const mapStateToProps = state => ({
    produtos: state.produto.produtos
});

export default connect(mapStateToProps)(ProdutosPaginaInicial);