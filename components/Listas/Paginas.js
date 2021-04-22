/*
 *   Copyright (c) 2021 
 *   All rights reserved.
 */
import React from 'react';
import Link from 'next/link';

const Paginas = () => (
    <div className="flex-1 flex vertical institucional">
        <div>
            <h2>Páginas</h2>
            <br />
        </div>
        <Link href="/">
            <span class="texto-pagina">Página Inicial</span>
        </Link>
        <Link href="/carrinho">
            <span class="texto-pagina">Ver Carrinho</span>
        </Link>
        <Link href="/area-cliente/">
            <span class="texto-pagina">Minha Conta</span>
        </Link>
        <Link href="/sobre">
            <span class="texto-pagina">Sobre a Loja</span>
        </Link>
    </div>
)

export default Paginas;