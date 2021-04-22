/*
 *   Copyright (c) 2021 
 *   All rights reserved.
 */
import React from 'react';

import ItemBeneficio from '../../components/Item/Beneficio';

const Beneficios = () => (
    <div className="Beneficios">
        <div className="container flex horizontal-mb wrap-mb">
            <ItemBeneficio
                icone="fa-credit-card-alt"
                texto="Pagamentos por multicaixa Express" />
            <ItemBeneficio
                icone="fa-truck"
                texto="Enviamos para toda Angola" />
            <ItemBeneficio
                icone="fa-star"
                texto="Os melhores produtos de beleza" />
            <ItemBeneficio
                icone="fa-diamond"
                texto="Productos Originais" />
        </div>
    </div>
)

export default Beneficios;