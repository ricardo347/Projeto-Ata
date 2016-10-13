/// <reference path="_references.js" />
var appweburl;
var hostweburl;
//var clientContext;
var web;
var index_problema;
var opener;
var id_itemAta;
var on;

$(function () {
    //SP.SOD.loadMultiple(['init.js', 'sp.js'], loadContext());
    initializePeoplePickerProblemaOwner('peoplePickerProblemaOwner');
    initializePeoplePickerAtribuido('peoplePickerAtribuido');
    
    //id se refere ao numerador de items de problema e item de ata e não ao id gravado na lista de problemas.
    index_problema = opener.$('#cont_itemProb').children('div').length+1;
    
    console.log("Este é o problema numero: "+index_problema);
    console.log("Que pertence ao item de ata : "+id_itemAta);
    //$("#discussao_problema").val(opener.$("#txt_descricao\\." + id_itemAta).val());
    //console.log("Valor do index problema " + index_problema);
    //console.log("valor do id itemata " + id_itemAta);
   
    $("#dt_venc_problema").datepicker({ dateFormat: 'mm/dd/yy' });
});
//criar mecanismo para saber se esta sendo aberto pela primeira vez, ou está sendo editado.

function loadContext() { 

    if (on) {
        //  console.log('loadcontext ja foi executado');
    } else {
        // console.log('loadcontext não foi executado, executando pela primeira vez');
        on = true;
        hostweburl = decodeURIComponent(GetUrlKeyValue("SPHostUrl"));
        appweburl = decodeURIComponent(GetUrlKeyValue("SPAppWebUrl"));
        $.getScript(hostweburl + "/_layouts/15/" + "SP.RequestExecutor.js", execCrossDomainRequest);
    }
}

function execCrossDomainRequest() {

    clientContext = new SP.ClientContext(appweburl);
    var appContextSite = new SP.AppContextSite(clientContext, 'https://jesuitasbrcnet.sharepoint.com/sites/pwa_at/Projeto_Ata/');
    web = appContextSite.get_web();
    clientContext.load(web);
    clientContext.executeQueryAsync(function () {
        console.log("rodou");
    },
    function (sender, args) {
        alert('Error: ' + args.get_message());
    });
}

function criaDivDadosProblema(pblOwner,attrIds) {
    //criação de elemento hidden para a passagem de dados que serão salvos na lista de problemas na pagina mãe

    //atribuição da variavel que indica o valor do item de ata q
    id_itemAta = $('#id_itemAta').val();

    var div_conteiner = document.createElement('div');
    div_conteiner.id = "item" + id_itemAta + "problema" + index_problema;
    div_conteiner.className = "itemProblema"+id_itemAta;
    
    var titulo = criaHidden($("#txt_tituloProblema").val(), 'txt_tituloProblema');
    var proprietario = criaHidden(pblOwner, 'txt_ProprietarioProblema');
    var atribuido = criaHidden(attrIds, 'txt_Atribuido');
    var status = criaHidden($("#status_problema").val(), 'status_problema');
    var categoria = criaHidden($("#categoria_problema").val(), 'categoria_problema');
    var prioridade = criaHidden($("#prioridade_problema").val(), 'prioridade_problema');
    var dt_vencto = criaHidden($("#dt_venc_problema").val() +" 00:00", 'dt_venc_problema');
    var discussao = criaHidden($("#discussao_problema").val(), 'discussao_problema');
    var resolucao = criaHidden($("#resolucao_problema").val(), 'resolucao_problema');
    var item_ata = criaHidden(id_itemAta, 'id_item_ata_problema');
   

    div_conteiner.appendChild(titulo);
    div_conteiner.appendChild(proprietario);
    div_conteiner.appendChild(atribuido);
    div_conteiner.appendChild(status);
    div_conteiner.appendChild(categoria);
    div_conteiner.appendChild(prioridade);
    div_conteiner.appendChild(dt_vencto);
    div_conteiner.appendChild(discussao);
    div_conteiner.appendChild(resolucao);
    div_conteiner.appendChild(item_ata);
        
    return div_conteiner;
    //window.close();
}

function criaHidden(valor, tipo) {
    var prob_hidden_data = document.createElement('input');
    prob_hidden_data.type = 'hidden'
    //prob_hidden_data.id = tipo;
    prob_hidden_data.value = valor;

    return prob_hidden_data;
}

function adicionaDiv() {

    if (opener.$('div.hidden_conteiner#' + id_itemAta).length)
        console.log("VALIDAÇÃO POSITIVA DENTRO DO CRIADADOS");
    else
        console.log("VALIDAÇÃO NEGATIVA DENTRO DO CRIADADOS");

    var div = document.createElement('div');
    div.id = 'teste';
    div.className = 'classe';

    var input = document.createElement('input');
    input.type = 'text';
    input.value = 'dentro do div;';

    div.appendChild(input);
    criaDadosProblema2();
}

function getInfoFromPeoplePickers(callback) {

    var problemaOwnerKey = getUserInfoProblemaOwner();
    var problemaOwner = problemaOwnerKey[0].Key
    
    var atribuidosKeys = getUserInfoAtribuido();
    var atribuidos = atribuidosKeys[0].Key;
    

    callback(problemaOwner, atribuidos);
}

function salvarPeoplePickers() {
    if (validacoes()) {
        getInfoFromPeoplePickers(function (problemaOwner, atribuidos) {
            if (opener) {
                var div_conteiner = criaDivDadosProblema(problemaOwner, atribuidos);
                opener.$('div.item_ata#' + id_itemAta).append(div_conteiner);

                opener.$('#status'+id_itemAta).append("Pendente<br>")
                opener.$('#problemas' + id_itemAta).append("<a href='Page1.aspx'>Problema " + index_problema + "</a><br>");
                opener.$('#imgBtnDel' + id_itemAta).append('<img src="../Images/del_icon.png" class="btnProblemas" width="15" height="15">');
                window.close();
            }            
        });
    } else {
        //validações retorna negativo, há campos vazios a serem preenchidos.
        alert("Existem Campos vazios que devem ser preenchidos");
    }    
}

function finalizaSalvar(OwnerId,attrId) {
    if (opener) {
        //validação para detectar se a div com o itemAta atual ja foi criado, pois pode ser que este não seja
        //primeiro problema a ser adicionado
        if (opener.$('div.hidden_conteiner#' + id_itemAta).length) {
            console.log("A div do conteiner existe");

            var div_conteiner = criaDivDadosProblema(OwnerId,attrId);
            opener.$('.hidden_conteiner#' + id_itemAta).append(div_conteiner);

            opener.$('#problema\\.' + id_itemAta).append("Problema" + index_problema + "<br>");
            window.close();

        } else {
            console.log("Div do conteiner não existe");

            var div_conteiner_pai = document.createElement('div');
            div_conteiner_pai.id = id_itemAta;
            div_conteiner_pai.className = 'hidden_conteiner';

            var div_conteiner_filha = criaDivDadosProblema(OwnerId, attrId);

            div_conteiner_pai.appendChild(div_conteiner_filha);
            opener.$('#hidden_conteiners').append(div_conteiner_pai);
            opener.$('#problema\\.' + id_itemAta).append("Problema" + index_problema + "<br>");

            //pega valores dos peoplepickers e transformam em ids do usuário
            window.close();
        }
    }
}

function validacoes() {
    var valida = true;
    console.log($("#txt_tituloProblema").val());
    if ($("#txt_tituloProblema").val() == "") {
        //alert("titulo vazio");
        valida = false;
    }
    if ($("#peoplePickerProblemaOwner_TopSpan_HiddenInput").val() == "") {
        alert("Insira um proprietario");
        valida = false;
    }
    if ($("#peoplePickerAtribuido_TopSpan_HiddenInput").val() == "") {
        alert("Insira um atribuido");
        valida = false;
    }
    if ($("#categoria_problema").val() == "") {
        console.log("Categoria vazia");
        valida = false;
    }
    if ($("#dt_venc_problema").val() == "") {
        console.log("Insira uma data de vencimento");
        valida = false;
    }
    if ($("#discussao_problema").val() == "") {
        console.log("Insira uma discussão");
        valida = false;
    }

    return valida;
}

function cancelar() {
    window.close();
}

