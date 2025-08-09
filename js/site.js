let camposValidos;
let incrementou = false;
let digitou = false;
let indiceId;
let categoriasAdicionadas = [];
let atributosAdicionados = [];
let itensAtributoAdicionados = [];
let atributos = [];

function Utils() {}

Utils.prototype = {
  constructor: Utils,
  isElementInView: function (element, fullyInView) {
    let pageTop = $(window).scrollTop();
    let pageBottom = pageTop + $(window).height();
    let elementTop = $(element).offset().top;
    let elementBottom = elementTop + $(element).height();

    if (fullyInView === true) {
      return pageTop < elementTop && pageBottom > elementBottom;
    } else {
      return elementTop <= pageBottom && elementBottom >= pageTop;
    }
  },
};

var Utils = new Utils();

postLoadElements = function () {
  if (!broeseMobile()) {
    setTimeout(function () {
      $(".barra-direita").css("opacity", "1");
      $(".barra-direita").css("right", "20px");
    }, 500);
  }
  setTimeout(function () {
    $(".texto-titulo-livetell").css("opacity", "1");
    if (!broeseMobile()) $(".texto-titulo-livetell").css("text-indent", "70px");
  }, 700);
  setTimeout(function () {
    $(".texto-subtitulo-livetell").css("opacity", "1");
    if (!broeseMobile())
      $(".texto-subtitulo-livetell").css("text-indent", "70px");
  }, 900);
  setTimeout(function () {
    $(".texto-descricao-livetell").css("opacity", "1");
    if (!broeseMobile())
      $(".texto-descricao-livetell").css("text-indent", "70px");
  }, 1100);
};

capturaScroll = function (event) {
  if (!broeseMobile()) {
    if (event.scrollTop !== 0) {
      $("#menu_site").attr(
        "class",
        "navbar navbar-expand-lg navbar-light bg-light container-menu-menor"
      );
      $("#btn_topo").attr("class", "botao-voltar-topo");
    } else {
      $("#menu_site").attr(
        "class",
        "navbar navbar-expand-lg navbar-light bg-light container-menu"
      );
      $("#btn_topo").attr("class", "oculto");
    }
  } else {
    if (event.scrollTop !== 0) {
      $("#btn_whatsapp").attr("class", "botao-whatsapp-topo");
    } else {
      $("#btn_whatsapp").attr("class", "oculto");
    }
  }

  isElementInView = Utils.isElementInView($("#faca"), false);

  if (isElementInView) {
    if (!incrementou) {
      //incrementarNumerosStatus();
      incrementou = true;
    }
  }
  isElementInView2 = Utils.isElementInView($("#quem"), false);

  if (isElementInView2) {
    if (!digitou) {
      eventoSessao6();
      digitou = true;
    }
  }
};

$(function () {
  $("#btn_topo").click(function () {
    location.href = '#home';
    return false;
  });
});

$("#blogCarousel").carousel({
  interval: 50000,
});

incrementarNumerosStatus = function () {
  $(".texto-numeros-status").each(function () {
    $(this)
      .prop("Counter", 0)
      .animate(
        {
          Counter: $(this).text(),
        },
        {
          duration: 4000,
          easing: "swing",
          step: function (now) {
            $(this).text(Math.ceil(now));
          },
        }
      );
  });
};

eventoSessao6 = function () {
  $(".balao").toggle();
  $(".icone-balao-conversa").css("display", "block");

  let i = 0;
  const txt1 =
    "Está há " +
    calculaAnosExistenciaLivetell() +
    " anos no mercado, atendendo você com maior comodidade, segurança, por um preço justo #.";
  const txt2 =
    "Todo cliente Livetell é nosso parceiro #. A Livetell oferece os melhores produtos e serviços, e você nos ajuda divulgando nosso trabalho #.";
  const txt3 =
    "# A Livetell está presente em Barbacena, Antônio Carlos e Região.";
  //const txt4 = "Atendemos também pelo Mercado Livre ##. Clique & e venha conferir.";
  const txt4 =
    "Em breve, a Livetell estará também no Mercado Livre ##. Esta novidade promete.";
  const txt5 =
    "Trabalhamos com produtos de última geração, e com a qualidade Livetell que você merece ##.";

  let img1 = "#emoji_like";
  let img2 = "#emoji_forca";
  let img3 = "#emoji_sorriso";
  let img4 = "#emoji_globo";
  let img5 = "#emoji_estrela";
  let img6 = "#emoji_festa";
  let img7 = "#emoji_rainha";
  let img8 = "#emoji_rei";
  const speed = 25;

  escrever = function () {
    let achou = false;
    if (i < txt1.length) {
      if (txt1.charAt(i) != "#") {
        document.getElementById("balao1").innerHTML += txt1.charAt(i);
      } else {
        htmlImage = $(img1)[0].outerHTML;
        $(img1).remove();
        document.getElementById("balao1").innerHTML += htmlImage;
        $(img1).removeClass("oculto");
      }
      achou = true;
    }
    if (i < txt2.length) {
      if (txt2.charAt(i) != "#") {
        document.getElementById("balao2").innerHTML += txt2.charAt(i);
      } else {
        htmlImage = $(img2)[0].outerHTML;
        $(img2).remove();
        document.getElementById("balao2").innerHTML += htmlImage;
        $(img2).removeClass("oculto");
        img2 = img3;
      }
      achou = true;
    }
    if (i < txt3.length) {
      if (txt3.charAt(i) != "#") {
        document.getElementById("balao3").innerHTML += txt3.charAt(i);
      } else {
        htmlImage = $(img4)[0].outerHTML;
        $(img4).remove();
        document.getElementById("balao3").innerHTML += htmlImage;
        $(img4).removeClass("oculto");
      }
      achou = true;
    }
    if (i < txt4.length) {
      if (txt4.charAt(i) == "#") {
        htmlImage = $(img5)[0].outerHTML;
        $(img5).remove();
        document.getElementById("balao4").innerHTML += htmlImage;
        $(img5).removeClass("oculto");
        img5 = img6;
      } else {
        document.getElementById("balao4").innerHTML += txt4.charAt(i);
      }
      achou = true;
    }
    if (i < txt5.length) {
      if (txt5.charAt(i) != "#") {
        document.getElementById("balao5").innerHTML += txt5.charAt(i);
      } else {
        htmlImage = $(img7)[0].outerHTML;
        $(img7).remove();
        document.getElementById("balao5").innerHTML += htmlImage;
        $(img7).removeClass("oculto");
        img7 = img8;
      }
      achou = true;
    }
    if (achou) {
      i++;
      setTimeout(escrever, speed);
    }
  };
  escrever();
};

recarregarTesteVelocidade = function () {
  let iframe = document.getElementById("iframe_medidor");
  iframe.src = iframe.src;
};

calculaAnosExistenciaLivetell = function () {
  return new Date().getFullYear() - 2014;
};

hover = function () {
  $("#logo_mercado_livre_cinza").addClass("oculto");
  $("#logo_mercado_livre").removeClass("oculto");
};

unhover = function () {
  $("#logo_mercado_livre_cinza").removeClass("oculto");
  $("#logo_mercado_livre").addClass("oculto");
};

redirecionaWhatsApp = function (numero) {
  window.open(`https://api.whatsapp.com/send?phone=${numero}`, "_blank");
};

abreEmail = function (email) {
  window.open("mailtio:" + email, "_blank");
};

redirecionaSiteMercadoLivre = function (url) {
  window.open(url, "_blank");
};

IsEmail = function (email) {
  const er = new RegExp(
    /^[A-Za-z0-9_\-\.]+@[A-Za-z0-9_\-\.]{2,}\.[A-Za-z0-9]{2,}(\.[A-Za-z0-9])?/
  );
  if (email == "" || !er.test(email)) {
    return false;
  } else {
    return true;
  }
};

validaUsuario = function () {
  if (camposValidos) {
    if (!IsEmail($("#user_email").val())) {
      camposValidos = false;
      new CaixaDialogo({
        tipo: "e",
        titulo: "Livetell",
        texto: "Forneça um login válido",
      }).show();
    }
  }
};

validaSenha = function () {
  if (camposValidos) {
    if ($("#user_password").val().length == 0) {
      camposValidos = false;
      new CaixaDialogo({
        tipo: "e",
        titulo: "Livetell",
        texto: "Forneça uma senha válida",
      }).show();
    }
  }
};

inicializarTabela = function (ordenar, orderType) {
  const table = $("#tabela_dados").DataTable({
    sort: ordenar,
    order: orderType,
    language: {
      paginate: {
        previous: '<i class="fas fa-chevron-circle-left icon-next-prev"></i>',
        next: '<i class="fas fa-chevron-circle-right icon-next-prev"></i>',
      },
    },
  });
  $(".dataTables_filter").remove();
  $("#tabela_dados_filter").addClass(".dataTables_filter");
  $("#pesquisar_tabela").keyup(function () {
    table.search($(this).val()).draw();
  });
};

exibirImagemAmpliada = function (id) {
  $(".imagem-ampliada-tabela").attr("src", $("#" + id).attr("src"));
  $("#modalImagemAmpliada").modal("show");
};

broeseMobile = function () {
  if (
    /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
      navigator.userAgent
    )
  ) {
    return true;
  } else {
    return false;
  }
};

verificalayoutMobile = function () {
  if (broeseMobile()) {
    $("#opc_home").addClass("oculto");
    $("#opc_whatsapp").removeClass("oculto");
    $("#opc_email").removeClass("oculto");
    $("#opc_mercado_livre").removeClass("oculto");
    $(".subpagina-site").addClass("pagina-mobile");
    $("#menu_site").attr(
      "class",
      "navbar navbar-expand-lg navbar-light bg-light container-menu-menor"
    );
    $("#container-icone-menu").addClass("container-logo-menu-mobile");
    $("#icone_menu_principal").addClass("icone-menu-mobile");
    $("#navbarNavDropdown").addClass("container-opcoes-menu-mobile");
    $("#lista_navbar_site").addClass("lista-menu-mobile");
    $(".link-item-lista-menu").addClass("link-item-lista-menu-mobile");
    $(".dropdown-menu").addClass("dropdown-menu-mobile");
    $(".barra-direita").addClass("oculto");
    $(".container-esquerdo-sessao1").addClass(
      "container-esquerdo-sessao1-mobile"
    );
    $(".subcontainer-esquerdo-sessao1").addClass(
      "subcontainer-esquerdo-sessao1-mobile"
    );
    $(".texto-descricao-livetell").addClass("texto-descricao-livetell");
    $(".estilo-texto-titulo").addClass("estilo-texto-titulo-mobile");
    $(".botao-saiba-mais").addClass("botao-saiba-mais-mobile");
    $(".contaier-esquerdo-sessao2").addClass(
      "contaier-esquerdo-sessao2-mobile"
    );
    $(".titulo-sessao2").addClass("titulo-sessao2-mobile");
    $(".subtitulo-sessao2").addClass("subtitulo-sessao2-mobile");
    $(".texto-corpo-sessao2").addClass("texto-corpo-sessao2-mobile");
    $(".contaier-direito-sessao2").addClass("contaier-direito-sessao2-mobile");
    $(".slide-produtos").addClass("slide-produtos-mobile");
    $("#carouselExampleIndicators").addClass("slide-bootstrap-sessao2-mobile");
    $(".titulo-item-slide-produto").addClass(
      "titulo-item-slide-produto-mobile"
    );
    $(".descricao-item-slide-produto").addClass(
      "descricao-item-slide-produto-mobile"
    );
    $(".grupo-slide-produtos").addClass("grupo-slide-produtos-mobile");
    $(".imagem-fundo-sessao4").addClass("imagem-fundo-sessao4-mobile");
    $("#produtos").addClass("sessao2-mobile");
    $("#espacador1").addClass("sessao3-mobile");
    $("#teste").addClass("sessao4-mobile");
    $("#faca").addClass("sessao5-mobile");
    $(".subcontaier-titulo-sessao5").addClass(
      "subcontaier-titulo-sessao5-mobile"
    );
    $(".titulo-sessao5").addClass("titulo-sessao5-mobile");
    $(".subtitulo-sessao5").addClass("subtitulo-sessao5-mobile");
    $(".subcontaier-numeros-sessao5").addClass(
      "subcontaier-numeros-sessao5-mobile"
    );
    $(".box-superior-esquerdo-sessao5").addClass(
      "box-quadrado-esquerdo-sessao5-mobile"
    );
    $(".box-superior-direito-sessao5").addClass(
      "box-quadrado-esquerdo-sessao5-mobile"
    );
    $(".box-inferior-esquerdo-sessao5").addClass(
      "box-quadrado-esquerdo-sessao5-mobile"
    );
    $(".box-inferior-direito-sessao5").addClass(
      "box-quadrado-esquerdo-sessao5-mobile"
    );
    $(".box-inferior-esquerdo-sessao5").addClass(
      "box-quadrado-inf-esquerdo-sessao5-mobile"
    );
    $(".box-inferior-direito-sessao5").addClass(
      "box-quadrado-inf-esquerdo-sessao5-mobile"
    );
    $(".texto-numeros-status").addClass("texto-numeros-status-mobile");
    $(".texto-descricao-status").addClass("texto-descricao-status-mobile");
    $(".banner-parallax-gif").addClass("banner-parallax-gif-mobile");
    $(".subcontainer-rodape-esquerdo").addClass(
      "subcontainer-rodape-esquerdo-mobile"
    );
    $(".subcontainer-rodape-centro").addClass(
      "subcontainer-rodape-centro-mobile"
    );
    $(".subcontainer-rodape-direito").addClass(
      "subcontainer-rodape-direito-mobile"
    );
    $(".titulo-rodape").addClass("titulo-rodape-mobile");
    $(".subtitulo-rodape").addClass("subtitulo-rodape-mobile");
    $(".texto-rodape-normal").addClass("texto-rodape-normal-mobile");
    $(".texto-rodape-menor").addClass("texto-rodape-menor-mobile");
    $(".texto-centro-rodape").addClass("texto-centro-rodape-mobile");
    $(".lista-contatos").addClass("lista-contatos-mobile");
    $(".item-lista-contatos").addClass("item-lista-contatos-mobile");
    $(".icone-lista-contatos").addClass("icone-lista-contatos-mobile");
    $(".texto-item-lista-contatos").addClass(
      "texto-item-lista-contatos-mobile"
    );
    $(".texto-mapa-site").addClass("texto-mapa-site-mobile");
    $(".lista-mapa-site").addClass("lista-mapa-site-mobile");
    $(".item-lista-mapa-site").addClass("item-lista-mapa-site-mobile");
    $(".texto-item-lista-mapa-site").addClass(
      "texto-item-lista-mapa-site-mobile"
    );
    $(".modal-dialog-produto-detalhado").addClass(
      "modal-dialog-produto-detalhado-mobile"
    );
    $(".modal-content-produto-detalhado").addClass(
      "modal-content-produto-detalhado-mobile"
    );
    $(".texto-baloes").addClass("texto-baloes-mobile");
    $(".campo-pesquisa-tabela").addClass("campo-pesquisa-tabela-mobile");
    $(".icone-campo-pesquisa-tabela").addClass(
      "icone-campo-pesquisa-tabela-mobile"
    );
  }
};

removerCategoriaAtributo = function (index, tipo) {
  if (tipo === "c") {
    categoriasAdicionadas.splice(index, 1);
    criarListaCategoria();
  } else {
    atributosAdicionados.splice(index, 1);
    criarListaAtributo();
  }
};

inserirCategoriaAtributo = function (tipo) {
  let idElemento;
  if (tipo === "c") idElemento = $("#produto_categoria").val();
  else idElemento = $("#produto_atributo").val();
  if (idElemento !== "") {
    idElemento = parseInt(idElemento);
    let achou = false;
    if (tipo === "c") {
      for (let i = 0; i < categoriasAdicionadas.length; i++) {
        if (categoriasAdicionadas[i][0] === idElemento) {
          achou = true;
          break;
        }
      }
    } else {
      for (let i = 0; i < atributosAdicionados.length; i++) {
        if (atributosAdicionados[i][0] === idElemento) {
          achou = true;
          break;
        }
      }
    }
    if (!achou) {
      if (tipo === "c") {
        categoriasAdicionadas.push([
          idElemento,
          $("#produto_categoria option:selected").text(),
        ]);
        criarListaCategoria();
      } else {
        let nome = "";
        let itens = [];
        for (let s = 0; s < atributos.length; s++) {
          if (atributos[s].id_atributo === parseInt(idElemento)) {
            nome = atributos[s].nome_atributo;
            itens = atributos[s].atributo_items;
            break;
          }
        }
        atributosAdicionados.push([idElemento, nome, itens]);
        criarListaAtributo();
      }
    }
  }
};

criarListaCategoria = function () {
  let html = "";
  for (let i = 0; i < categoriasAdicionadas.length; i++) {
    html +=
      "<tr>" +
      '<td class="celula-tabela direito"><input type="hidden" id="produto_id_categoria' +
      i +
      '" name="produto[id_categoria][' +
      i +
      ']" value="' +
      categoriasAdicionadas[i][0] +
      '" />' +
      (i + 1) +
      "</td>" +
      '<td class="celula-tabela centro">' +
      categoriasAdicionadas[i][1] +
      "</td>" +
      '<td class="celula-tabela centro"><i class="fas fa-trash icone-tabela icone-inativar" onClick="removerCategoriaAtributo(' +
      i +
      ", 'c')\"></i></td>" +
      "</tr>";
  }
  $("#tabela_categoria").html(html);
};

criarListaAtributo = function () {
  let html = "";
  for (let i = 0; i < atributosAdicionados.length; i++) {
    html +=
      "<tr>" +
      '<td class="celula-tabela direito"><input type="hidden" id="produto_id_atributo' +
      i +
      '" name="produto[id_atributo][' +
      i +
      ']" value="' +
      atributosAdicionados[i][0] +
      '" />' +
      (i + 1) +
      "</td>" +
      '<td class="celula-tabela centro">' +
      atributosAdicionados[i][1] +
      "</td>" +
      '<td class="celula-tabela direito">' +
      '<ul class="lista-atributos">';
    for (let t = 0; t < atributosAdicionados[i][2].length; t++) {
      html +=
        "<li>" +
        atributosAdicionados[i][2][t].nome_item +
        " -> " +
        atributosAdicionados[i][2][t].valor_adicional +
        "</li>";
    }
    html +=
      "</ul>" +
      "</td>" +
      '<td class="celula-tabela centro"><i class="fas fa-trash icone-tabela icone-inativar" onClick="removerCategoriaAtributo(' +
      i +
      ", 'a')\"></i></td>" +
      "</tr>";
  }
  $("#tabela_atributo").html(html);
  $(".campo-monetario-tabela").mask("000.000.000.000.000,00", {reverse: true});
};

inserirItemAtributo = function () {
  let item = $("#nome_atributo").val();
  let valor = $("#valor_atributo").val();
  let achou = false;
  for (let i = 0; i < itensAtributoAdicionados.length; i++) {
    if (itensAtributoAdicionados[i][0].toLowerCase() === item.toLowerCase()) {
      achou = true;
      break;
    }
  }
  if (item === null || item === "" || item === undefined) {
    $("#erro_item_atributo").css("display", "block");
  } else if (valor === null || valor === "" || valor === undefined) {
    $("#erro_valor_atributo").css("display", "block");
  } else if (!achou) {
    $("#erro_item_atributo").css("display", "none");
    $("#erro_valor_atributo").css("display", "none");
    itensAtributoAdicionados.push([item, valor]);
    criarListaItens();
    $("#nome_atributo").val("");
    $("#valor_atributo").val("0,00");
  }
};

criarListaItens = function () {
  let html = "";
  for (let i = 0; i < itensAtributoAdicionados.length; i++) {
    html +=
      "<tr>" +
      '<td class="celula-tabela direito"><input type="hidden" id="atributo_id_item' +
      i +
      '" name="atributo[id_item][' +
      i +
      ']" value="' +
      i +
      '" />' +
      (i + 1) +
      "</td>" +
      '<td class="celula-tabela centro"><input type="hidden" id="atributo_nome_item' +
      i +
      '" name="atributo[nome_item][' +
      i +
      ']" value="' +
      itensAtributoAdicionados[i][0] +
      '" />' +
      itensAtributoAdicionados[i][0] +
      "</td>" +
      '<td class="celula-tabela centro"><input class="campo-monetario-tabela" type="text" id="atributo_valor_adicional' +
      i +
      '" name="atributo[valor_adicional][' +
      i +
      ']" onClick="this.select();" onBlur="updateValueItem(' +
      i +
      ');" value="' +
      parseFloat(itensAtributoAdicionados[i][1]).toFixed(2) +
      '" /></td>' +
      '<td class="celula-tabela centro"><i class="fas fa-trash icone-tabela icone-inativar" onClick="removerCategoriaItem(\'' +
      i +
      "')\"></i></td>" +
      "</tr>";
  }
  $("#tabela_item_atributo").html(html);
  $(".campo-monetario-tabela").mask("000.000.000.000.000,00", {reverse: true});
};

updateValueItem = function (index) {
  itensAtributoAdicionados[index][1] = $(
    "#atributo_valor_adicional" + index
  ).val();
};

removerCategoriaItem = function (index) {
  itensAtributoAdicionados.splice(index, 1);
  criarListaItens();
};

habilitaCheckbox = function (id) {
  $("#" + id).prop("checked", true);
};
