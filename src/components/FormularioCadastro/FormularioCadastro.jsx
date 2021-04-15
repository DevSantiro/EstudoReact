import React, { Component } from "react";
import "./estilo.css";
class FormularioCadastro extends Component {

  constructor(props) {
    super(props)
    this.titulo = "";
    this.texto  = "";
  }

  handleMudancaTitulo(event){
    event.stopPropagation();
    this.titulo = event.target.value
  }

  handleMudaTexto(event){
    event.stopPropagation();
    this.texto  = event.target.value
  }

  criarNota(event){
    event.preventDefault();
    event.stopPropagation();
    this.props.criarNota(this.titulo, this.texto)
  }

  render() {
    return (
      <form className="form-cadastro" onSubmit={this.criarNota.bind(this)}>
        <input
          type="text"
          placeholder="Título"
          className="form-cadastro_input"
          onChange={this.handleMudancaTitulo.bind(this)}
        />
        <textarea
          rows={15}
          placeholder="Escreva sua nota..."
          className="form-cadastro_input"
          onChange={this.handleMudaTexto.bind(this)}
        />
        <button className="form-cadastro_input form-cadastro_submit">
          Criar Nota
        </button>
      </form>
    );
  }
}

export default FormularioCadastro;
