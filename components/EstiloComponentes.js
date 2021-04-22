/*
 *   Copyright (c) 2021 
 *   All rights reserved.
 */
import React from 'react'

export default () => (
    <style jsx global>{`

.Header {
    max-height: 150px;
}

.header-wrapper,
.categorias {
    max-width: 1200px;
    margin: 0 auto;
    width: 100%;
    display: flex;
}

@media screen and (max-width: 720px){
    .Header {
        max-height: 250px;
    }
    .header-wrapper {
        flex-direction: column;
    }
    .categorias {
        overflow-x: scroll;
    }
}

/*  Para mobile */

.logo {
    max-width: 230px;
    cursor: pointer;
}

.itens-cabecalho {
    padding: 10px 0;
}

.input-pesquisa {
    font-size: 1rem;
    color: #333;
    padding: 10px 25px;
    width: 90%;
    border: 1px solid #999;
    border-radius: 10px;
    outline-style: none;
    margin: 0 10;
}

.button-pesquisa {
    margin-left: -45px;
    font-size: 1.1rem;
    color: #ffa07f;
    background: transparent;
    border: 0;
    cursor: pointer;
    outline-style: none;
    font-family: 'Roboto', sans-serif;
}

/*minha conta*/
.Acesso-container{
margin: 50px auto 10px;
width: calc(100% - 20px);
padding: 10px;
max-width: 500px;
border: 1px solid #aaaa;
box-shadow: 0 0 5px #aaaa;
border-radius: 10px;
}

.Acesso-container .form-input input{
max-width: 100%;
}

.Acesso-container .link-acesso{
margin-top: 10px;
font-size: 0.9rem;
cursor: pointer;
color:#1e2032;

}
.item-cabecalho {
    cursor: pointer;
}

/* Estilos do icones */

.item-cabecalho i {
    color: #ffa07f;
    font-size: 1.7rem;
    margin: 0 5px;
}

.item-cabecalho span {
    color: #777;
    font-size: 14px;
}

.item-cabecalho.cart {
    margin-left: 15px;
}

.item-cabecalho.cart span {
    font-size: 1rem;
    background: #555;
    color: #fff;
    border-radius: 100px;
    padding: 0 5px;
    margin-left: -15px;
    position: relative;
    top: -15px;
}

/* Estilo das Categorias */
.categorias-wrapper {
    background: #ffa07f;
}
.categoria-item {
    padding: 10px 5px;
    border-right: 1px solid #ccc;
    cursor: pointer;
    font-weight: bold;
    text-transform: uppercase;
}

.categoria-item:hover {
    background: #ffa08e;
}

.categoria-item:last-child {
    border-right: 0;
}

/* Beneficios */

.Beneficios {
    padding: 25px 0;
    background: #ff9a08;
    margin-top: -5px;
}

.Beneficios i {
    color: #fff;
}

.Befenicios span {
    color: #1d1d1d;
    text-transform: uppercase;
    font-size: 0.75rem;
    font-weight: bold;
    margin-top: 10px;
}

/* Produtos */

.Produtos-Pagina.Inicial {
    margin: 30px auto;
}

.Produtos-Pagina.Inicial {
    color: #222;
    font-size: 2rem;
    font-weight: bold;
}

.produtos {
    cursor: pointer;
    margin: 10px;
    box-shadow: 0 0 4px #eee;
    flex-basis: calc(25% - 20px);
    padding: 15px;
    border-radius: 10px;
}

.produto:hover {
    box-shadow: 0 0 7px #ddd;
}

.produto-image {
    height: 250px;
}

.produto-title {
    font-size: 1.2rem;
    text-align: cneter;
    font-weight: bold;
    color: #333;
}

.produto-preco h2, .produto-preco-promocao h2 {
    font-size: 1.5rem;
    font-weight: bold;
}

.produto-preco.produto-por h2 {
    font-size: 1.1rem;
    text-decoration: line-through;
    color: #777;
    margin: 0;
}

.produto-preco-parcelado h4 {
    color: #666;
    font-size: 0.95rem;
}

/* Paginacao */

.Paginacao {
    margin: 10px 0;
}

.Paginacao-item {
    border: 1px solid #ccc;
    padding: 3px 8px;
    border-radius: 5px;
    color: #474747;
    margin: 0 5px;
    cursor: pointer;
}

.Paginacao-item.paginacao-item-active,
.Paginacao-item:hover {
    color: #fefefe;
    background-color: #333;
    border: 1px solid #333;
}

/* Página de Produtos */

.Produto-Hero .titulo {
    font-size: 1.8rem;
    color: #222;
}

.Produto-Hero .titulo h2 {
    margin-bottom: 0;
}

.Produto-Hero .categoria p {
    margin-top: 0;
    font-size: 0.2rem;
    color: #555;
}

.Produto-Hero .categoria-link {
    color: #e87c07;
    cursor: pointer;
}

.Produto-Hero .preco-original,
.Produto-Hero .preco-promocao {
    font-size: 1.8rem;
    color: #434343;
    margin: 0;
}

.Produto-Hero .preco-original.preco-por {
    color: #777;
    font-size: 0.95rem;
    font-weight: normal;
    text-decoration: line-through;
}

.Produto-Hero .preco-parcelado {
    margin: 0;
    color: #555;
    font-size: 1rem;
    font-weight: normal;
}

.Produto-Hero .variacao {
    max-width: 40px;
    border: 1px solid #999;
    padding: 10px 5px;
    font-size: 1rem;
    margin: 5px 10px 5px 0;
    cursor: pointer;
}

.Produto-Hero .variacao:hover,
.Produto-Hero .variacao.variacao-active {
    background: #111111;
    border-color: #111111;
    color: #fff;
}
.Produto-Hero .opcoes {
    margin: 20px,
}

.Produto-Hero .opcoes-tab {
    font-size: 0.9rem;
    color: #444;
}

.Produto-Hero .opcao-input {
    font-size: 0.9rem;
    padding: 10px 15px;

    margin: 5px;
    max-width: 45px;
    border: 1px solid #999;
}

/* Botão Comprar */

.btn {
    font-size: 1.1rem;
    padding: 10px 20px;
    margin: 10px 0;
    border: 1px solid #999;
    background: transparent;
    font-weight: bold;
    cursor: pointer;
}

.btn-primary {
    background: #e87c07;
    color: #FFF;
    border: 0;
}

.btn-success {
    background: rgb(91, 255, 110);
    color: #FFF;
    border: 0;
}

.btn-cta {
    padding: 15px 25px;
    font-size: 1.3rem;
    margin: 15px 0;
}

.btn-cta small{
    font-size: 0.85rem;
    padding: 5px 8px;
    border-radius: 10px;
    -webkit-border-radius: 10px;
    -moz-border-radius: 10px;
    -ms-border-radius: 10px;
    -o-border-radius: 10px;
}
.foto-principal {
    max-height: 550px;
}

.foto-principal img {
    max-width: 500px;
}

.mini-foto {
    border: 1px solid #999;
    max-width: 100px;
    margin-right: 10px;
    cursor: pointer;
    opacity: 0.8;
}

.mini-foto:hover {
    opacity: 1;
}

/* Descrição */

.Descricao {
    margin-top: 50px;
    max-width: 800px;
}

.Descricao h2,
.Avaliacoes h2,
.Produtos-Relacionados h2 {
    font-size: 1.2rem;
    color: #cec805;
    /* color: #222; */
    text-transform: uppercase;
}

.Avaliacoes,
.Produtos-Relacionados {
    margin-top: 50px;
}

.Produtos-Relacionados {
    margin-bottom: 10px;
}

.avaliacao {
    border: 1px solid #aaaa;
    box-shadow: 0 0 5px #aaaa;
    padding: 10px 15px;
    margin: 10px 10px 10px 0;
    border-radius: 15px;
}

.avaliacao i.fa-star {
    /* color: #dfd803; */
    color: #cec805;
    margin-right: 20px;
}

.avaliacao-form {
    margin-top: 15px;
}

.avaliacao-form h4 {
    color: #888;
    font-size: 1.2rem;
}

.avaliacao-form label {
    font-size: 0.9rem;
    color: #474747;
    margin: 10px 10px 5px 0;
}

.avaliacao-form select {
    font-size: 1rem;
    width: 120px;
    /* width: 1.2rem; */
}

.avaliacao-form textarea {
    border-radius: 10px;
    border: 1px solid #aaa;
    font-size: 0.9rem;
    padding: 10px;
}

/* Carrinho */
.carrinho > h2 {
    font-size: 2rem;
}

.carrinho .produto-image {
    height: auto;
}
.carrinho .produto-image,
.Checkout .produto-image{
  height: auto ;
}

.carrinho .produto-quantidade{
  font-size: 1rem;
  padding: 10px 15px;
  width: 60px;
  border: 1px solid #aaaa;

}


.carrinho .btn-remover,
.carrinho .limpar-CEP
  {
  color: #e87c08;
  font-size: 0.85rem;
  text-decoration: underline;
  cursor:pointer;
}

.carrinho .carrinho-item{
margin-bottom: 10px;
border-bottom: 1px solid #aaaa;
padding-bottom: 10px;
}

.carrinho .carrinho-item:last-child{
  border-bottom: 0;

}

.carrinho .carrinho-cabecalho{
  background-color: #1111;
  color:#fff;
}

.dados-do-carinho-container{
margin-top: 20px;

}

.dados-do-carrinho-item{
padding: 10px 0;
border-top: 1px solid #aaa;
}

.carrinho select{
  font-size: 1rem;
  padding: 5px 10px;
}

.carrinho .valor-frete{
  margin: 0;
}
.Pedidos-Container,
.Pedido-Container,
.Dados-Container,
.Senha-Container{
    padding-top: 30px !important;
}
.menu-lateral{
    border-top: 30px solid #ff9600;
    margin-top: 30px;
}
.menu-lateral-item{
    font-size: 1rem;
    font-weight: bold;
    padding: 10px 20px;
    border: 1px solid #aaa;
    border-top: 0;
    cursor: pointer;
}
.menu-lateral-item-active{
    font-size: 1rem;
    font-weight: bold;
    padding: 10px 20px;
    border: 1px solid #aaa;
    border-top: 0;
    cursor: pointer;
}
.menu-lateral-item{
    font-size: 1rem;
    font-weight: bold;
    padding: 10px 20px;
    border: 1px solid #aaa;
    border-top: 0;
    cursor: pointer;
}
.menu-lateral-item-active,
.menu-lateral-item:hover{
    background-color: #111111;
    color: #fff;
}


.Carrinho .produto-quantidade {
    font-size: 1rem;
    padding: 10px 15px;
    width: 60px;
    border: 1px solid #aaaa;
}

.Carrinho .btn-remover,
.Carrinho .limpar-CEP {
    color: #e87c08;
    font-size: 0.85rem;
    text-decoration: underline;
    cursor: pointer;
}

.Carrinho .carrinho-item {
    margin-bottom: 10px 0;
    border-bottom: 1px solid #aaa;
    padding-bottom: 10px;
}

.Carrinho .carrinho-item:last-child {
    margin-bottom: 10px;
}

.Carrinho .Carrinho-cabecalho {
    background: #272727;
    color: #FFF;
}

.dados-do-carrinho-container {
    margin-top: 20px;
}

.dados-do-carrinho-item {
    padding: 10px 0;
    border-top: 1px solid #aaaa;
}

.Carrinho select {
    font-size: 1rem;
    padding: 5px 10px;
}

.Carrinho .valor-frete {
    margin: 0;
}

.menu-pedidos {
    background-color: #111111;
    color: #fff;
}
.Pedido-Card{
    padding: 15px 0;
    border-bottom: 1px solid #aaa;
}
.menu-pedidos > div,
.Pedido-Card > div {
    padding: 0 10px;
}
.form-dados,
.form-dados input{
    max-width: 700px;
}

/* RODAPÉ */

.Rodape {
    background: #111111;
    padding: 40px 0 40px;
    color: #fff;
}

.Rodape a {
    color: #fff;
    font-size: 1.5rem;
    padding: 15px 0;
}

.Rodape h2 {
    font-size: 1.3rem;
    color: #ff9600;
    font-weight: bold;
}

table.simples{
border-collapse: collapse;
}
table.simples th,
table.simples td{
padding: 10px 15px;
}
table.simples th{
background-color: #ff9600;
color: #fff;
}
table.simples td{
border-bottom: 1px solid #dddd;
}
.Status-Item{
border-left: 3px solid rgb(1,78, 1);
border-left: 1px solid #dddd;
padding: 5px 10px;
margin: 3px 0;
width: 90%;
}
/*Alert*/
.alert{
margin: 10px 0;
padding: 10px 15px;
border: 2px solid #dddd;
background-color: #eeee;
color:#555;
font-size: 0.9rem;
border-radius: 10px;
-webkit-border-radius: 10px;
-moz-border-radius: 10px;
-ms-border-radius: 10px;
-o-border-radius: 10px;
}
.alert-danger{
border: 2px solid rgb(125, 0, 0);
background-color: rgb(255,190, 190);
color:rgb(115, 0, 0);
}

.checkout select{
max-width: 300px;
font-size: 1rem;
margin: 0px 5px 5px 0;
}

.Checkout .slash-pagamento {
display: flex;
align-items: center;
margin-bottom: 10px;
font-size: 1.2rem;
font-weight: bold;
}

.Checkout h2 {
border-top: 1px solid #aaaa;
margin-top: 80px;
padding-top: 30px;
}

.Checkout > h2 {
border-top: 0;
margin-top: 0px;
padding-top: 0px;
}

.form-input{
display: flex;
flex-direction: column;
}

.form-check{
flex-direction: row;
align-items: center;
}

.form-input label{
margin: 10px 0 5px;
font-size: 0.9rem;
font-weight: bold;
}

.form-input .form-check label{
margin: 0;
}


.form-input input{
max-width: 400px;
font-size: 1rem;
padding: 5px 8px;
margin: 0px 5px 5px 0px;
border: 1px solid #aaa;
border-radius: 5px;
}

.menu-pedido{
background-color: #111111;
color:#fff;

}
`}</style>
)