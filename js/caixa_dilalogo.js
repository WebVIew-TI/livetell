
class CaixaDialogo{
  constructor(params){
    if(params == null || params == undefined){
      params = {
        tipo: "s",
        titulo: "Livetell",
        texto: "",
        callbackBtnOk: undefined,
        callbackBtnCancelar: undefined,
        modalTravado: false,
      };
    }
    this.params = params;
  }

  show(){
    let self = this;
    if(this.params.tipo == null || this.params.tipo == undefined || this.params.titulo == null || this.params.titulo == undefined || this.params.texto == null || this.params.texto == undefined){
      console.error("Variável tipo, titulo ou texto inválida!");
      return;
    }else{
      let html = '<div class="modal fade" id="caixa_dialogo" tabindex="-1" role="dialog" ' + 
      '               aria-labelledby="exampleModalLabel" aria-hidden="true" ';
      if(this.params.modalTravado == true){
          html += 'data-keyboard="false" data-backdrop="static">';
      }else{
          html += '>';
      }
      html += '<div class="modal-dialog" role="document">' +
      '        <div class="modal-content">';
      if(this.params.tipo.toLocaleLowerCase() == "e"){
          html += '<div class="modal-pre-header-container-icon fundo-erro-modal">' +
          '            <i class="fas fa-times icon-pre-header"></i>';
      }else if(this.params.tipo.toLocaleLowerCase() == "w"){
          html += '<div class="modal-pre-header-container-icon fundo-alerta-modal">' +
          '            <i class="fas fa-exclamation icon-pre-header"></i>';
      }else if(this.params.tipo.toLocaleLowerCase() == "c"){
          html += '<div class="modal-pre-header-container-icon fundo-confirmacao-modal">' +
          '            <i class="fas fa-question icon-pre-header"></i>';
      }else{
          html += '<div class="modal-pre-header-container-icon fundo-ok-modal">' +
          '            <i class="fas fa-check icon-pre-header"></i>';
      }
      html += '    </div>' +
      '            <div class="modal-header">' +
      '                <h5 class="modal-title" id="exampleModalLabel">' + this.params.titulo + '</h5>' +
      '            </div>' +
      '            <div class="modal-body">' +
      '                ' + this.params.texto +
      '            </div>' +
      '            <div class="modal-footer">';
      if(this.params.tipo.toLocaleLowerCase() == "e"){
          html += '    <button id="btn_modal_ok" type="button" class="btn btn-secondary botao-caixa-dialogo btn-modal-erro"">OK</button>';
      }else if(this.params.tipo.toLocaleLowerCase() == "w"){
          html += '    <button id="btn_modal_ok" type="button" class="btn btn-secondary botao-caixa-dialogo btn-modal-alerta">OK</button>';
      }else if(this.params.tipo.toLocaleLowerCase() == "c"){
          html += '    <button id="btn_modal_cancelar" type="button" class="btn btn-secondary botao-caixa-dialogo btn-modal-confirmacao-cancel">Não</button>' +
          '            <button id="btn_modal_ok" type="button" class="btn btn-secondary botao-caixa-dialogo btn-modal-confirmacao-ok">Sim</button>';
      }else{
          html += '    <button id="btn_modal_ok" type="button" class="btn btn-secondary botao-caixa-dialogo btn-modal-ok">OK</button>';
      }
      html += '    </div>' +
      '        </div>' +
      '    </div>' +
      '</div>';
      $("#contaier_caixa_dialogo").html(html);
      $('#caixa_dialogo').modal('show');

      $("#btn_modal_ok").click(function(event) {
        event.preventDefault();
        if(self.params.callbackBtnOk == undefined){
          $('#caixa_dialogo').modal('toggle');
        }else{
          self.params.callbackBtnOk();
        }
      });

      $("#btn_modal_cancelar").click(function(event) {
        event.preventDefault();
        if(self.params.callbackBtnCancelar == undefined){
          $('#caixa_dialogo').modal('toggle');
        }else{
          self.params.callbackBtnOk();
        }
      });
    }
  }
}
