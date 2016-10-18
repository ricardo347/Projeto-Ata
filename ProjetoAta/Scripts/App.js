/// <reference path="_references.js" />
//ata de reunião be66be3e-c8cf-4e3e-a675-e0325c7d23a3
'use strict';
var appweburl;
var hostweburl;
var listCollection;
var url;
var web;
var site;
var rootweb;
var clientContext;
var items;
var on;
var cont_itemAta = 0; //contador de linhas de item de ata
var f = []; //contador de problemas em cada item de ata
var proprietario;
var participantes;

$(document).ready(function () {
    SP.SOD.loadMultiple(['init.js','sp.js', 'clienttemplates.js', 'clientforms.js', 'clientpeoplepicker.js', 'autofill.js','../Scripts/PeoplePickerOwner.js'],loadContext());
    initializePeoplePickerOwner('peoplePickerOwner');
    initializePeoplePickerParticipantes('peoplePickerParticipantes');
    $("#dt_ata").datepicker({ dateFormat: 'mm/dd/yy' });

    $(document).on('click',":checkbox.chk_itemAta", function () {
        var itemAta = $(this).attr('itemAta');
    });

    $(document).on('click', 'img.btnDelProblema', function () {
        console.log("Botao: Item Ata " + $(this).attr('itemAta') + " problema: " + $(this).attr('itemProblema'));
        var itemAta = $(this).attr('itemAta');
        var itemProblema = $(this).attr('itemProblema');
        
        //removendo de hidden_variaveis
        $('#itemAta' + itemAta).children('input').last().remove();
        //removendo de hidden_conteiners
        $('#item' + itemAta + 'problema' + itemProblema).remove();

        $(".linkproblema#linkItemProblema" + itemProblema).remove();
        
        $(this).remove();
    });
});

function loadContext() {

        if (on) {
            //  console.log('loadcontext ja foi executado');
        } else {
            // console.log('loadcontext não foi executado, executando pela primeira vez');
            on = true;
            hostweburl = decodeURIComponent(GetUrlKeyValue("SPHostUrl"));
            appweburl = decodeURIComponent(GetUrlKeyValue("SPAppWebUrl"));
            //console.log("hostweburl " + hostweburl);
            //console.log("appweburl " + appweburl);
            $.getScript(hostweburl + "/_layouts/15/" + "SP.RequestExecutor.js", execCrossDomainRequest);
            // console.log('loadContext')
        }
    }
    
function execCrossDomainRequest() {
        
    clientContext = new SP.ClientContext(appweburl);
    
   var appContextSite = new SP.AppContextSite(clientContext, 'https://jesuitasbrcnet.sharepoint.com/sites/pwa_at/Projeto_Ata/');
  // console.log(clientContext);
   web = appContextSite.get_web(),
   listCollection = web.get_lists().getByTitle('Items de ata'),
   items = listCollection.getItems('');
   
   clientContext.load(items);

   clientContext.executeQueryAsync(function () {
       var listEnumerator = items.getEnumerator();
       while (listEnumerator.moveNext()) {
           var item = listEnumerator.get_current();
           
           //console.log("Item de ata: ", item.get_fieldValues());
           //console.log("Problema: ", item.get_fieldValues().Discussion);
           //console.log("Problema Data:", item.get_fieldValues().DueDate);
           //console.log("Problema: ", item.get_fieldValues().Title);
       }
   }, function (sender, args) {
       alert('Error: ' + args.get_message());
   });
}

function newItemAta() {

    var items_ata = new Array(1);

    var data = $('#dt_ata').val() + " 00:00";
    console.log("valor da data" + data);
    
    var part = [];
    part.push(SP.FieldUserValue.fromUser("i:0#.f|membership|ebison.santos@aneas.org.br"));
    part.push(SP.FieldUserValue.fromUser("i:0#.f|membership|silvio.mendonca@aneas.org.br"));
    part.push(SP.FieldUserValue.fromUser("i:0#.f|membership|ricardo.fernando@aneas.org.br"));
    console.log(part[0]);
    console.log(part[1]);
    console.log(part[2]);
    console.log(part);
    var atribuido = SP.FieldUserValue.fromUser("i:0#.f|membership|ebison.santos@aneas.org.br");
    var dono = SP.FieldUserValue.fromUser("i:0#.f|membership|ricardo.fernando@aneas.org.br");
    var listItemAta = web
                .get_lists()
                .getByTitle('Problemas');

    for (var i = 0; i < 1; i++) {
        items_ata[i] = listItemAta.addItem(new SP.ListItemCreationInformation());
        items_ata[i].set_item('Title', "Titulo");
        items_ata[i].set_item('Owner', dono);
        items_ata[i].set_item('AssignedTo', atribuido);
        items_ata[i].set_item('Status', "(1) Fechadas");
        items_ata[i].set_item('Category', "Custo");
        items_ata[i].set_item('Priority', "(1) Alta");
        items_ata[i].set_item('DueDate', data);
        items_ata[i].set_item('Discussion', "bla bla bla");
        items_ata[i].update();
    }


    // create a new item on the list
    //var itemAta = listItemAta.addItem(new SP.ListItemCreationInformation());
    // You may even leave out the ListItemCreationInformation, 
    // if you don't set any of its properties:
    // var contact = list.addItem();

   // itemAta.set_item("Title", "Titulo de insert pelo app"); // 'Title' is the internal name for 'Last Name'
    //itemAta.set_item("Data", data);
    //itemAta.set_item("Proprietario", 10);
    //itemAta.set_item("Respons",$('#txt_responsavel').val());

    // ensure that contact is saved during the query
    //itemAta.update();
    
    

    clientContext.executeQueryAsync(function () {
        //console.log("Id of new Item de ata: ", itemAta.get_id());
        for (var i = 0; i < 1; i++) {
            console.log("Id of new Item de ata: ", items_ata[i].get_id());
        }

    }, function (sender, args) {
        alert('Error: ' + args.get_message());
        console.log("Erro item de ata");
    });
}

function updateItemAta() { }

function updateProblema() { }

function deletaProblema() { }

function insereItem() {
    //criar div e inputs hidden para a passagem de dados vinda da pagina filha.
    // console.log("Inserindo item");
    
    //var cont_itemAta = $('#hidden_variaveis').children('div').length +1;
    cont_itemAta++;    

    var itemata = document.createElement('div');
    itemata.className = "itemAta";
    itemata.id = "itemAta" + cont_itemAta;
    itemata.setAttribute('itemAta', cont_itemAta);
    $("#hidden_variaveis").append(itemata);
    
    var html = '<tr class="item_ata'+cont_itemAta+'">' +
        '<td rowspan="2" id="seletorLinha'+cont_itemAta+'"></td>' +
        '<td rowspan="2" id="descr'+cont_itemAta+'"></td>' +
        '<td colspan="2" id="imgBtnAdd' + cont_itemAta + '" class="imgBtnAdd"></td>' +
        '<td rowspan="2" id="status'+cont_itemAta+'"></td>' +
        '</tr>' +
        '<tr class="item_ata'+cont_itemAta+'">' +
            '<td id="problemas'+cont_itemAta+'"></td>' +
            '<td id="imgBtnDel' + cont_itemAta + '" class="imgBtnDel"></td>' +
        '</tr>';

    $('#conteiner_problemas_table').append(html);
    
    var chkitemAta = document.createElement('input');
    chkitemAta.type = 'checkbox';
    chkitemAta.id = 'chk_itemAta+' + cont_itemAta;
    chkitemAta.className = 'chk_itemAta';
    chkitemAta.setAttribute ('itemAta',cont_itemAta);
    $('#seletorLinha' + cont_itemAta).append(chkitemAta);
    
    var txtDescItemAta = document.createElement('textarea');
    txtDescItemAta.id = 'txt_descricao.' + cont_itemAta;
    txtDescItemAta.setAttribute('rows','4');
    txtDescItemAta.setAttribute('cols', '55');
    $('#descr' + cont_itemAta).append(txtDescItemAta);
    
    var imgBtnAddProblema = document.createElement('img');
    imgBtnAddProblema.src = "../Images/add_icon.png";
    imgBtnAddProblema.className = "btnProblemas";
    imgBtnAddProblema.width = '15';
    imgBtnAddProblema.height = '15';
    imgBtnAddProblema.setAttribute("onclick","openPopupNewProblema(" + cont_itemAta + ")");
    $('#imgBtnAdd' + cont_itemAta).append(imgBtnAddProblema);
        
    // criação da div de item de ata
    var div_conteiner_pai = document.createElement('div');
    div_conteiner_pai.id = cont_itemAta
    div_conteiner_pai.className = 'item_ata';
    div_conteiner_pai.setAttribute('itemAta', cont_itemAta);
    
    
    $('#hidden_conteiners').append(div_conteiner_pai);
    console.log("Item inserido");
}

function excluiItem() {
    //pega a o item selecionado, pega o id do <tr> dele
    //remove ele , remove a sua referencia na div Hidden_variaveis
    //remove da div hidden_conteiners o item e seus problemas.
    //se o formulario foi aberto no modo edição exluir os problmeas também.
    var selecionados = [];
    $(":checkbox.chk_itemAta").each(function (index) {        
        if ($(this).is(":checked"))
            selecionados[index] = $(this).attr('itemAta');                
    });

    for (var i = 0; i < selecionados.length; i++) {
        $("#hidden_variaveis").children("[itemAta="+selecionados[i]+"]").remove();
        $("#hidden_conteiners").children("[itemAta=" + selecionados[i] + "]").remove();
        $("tr.item_ata" + selecionados[i]).remove();
    }
    //reindexando e reorganizando os elementos após 
    $('#table_conteiner_itensAta').children('tr').each(function (index) {
        $(this).attr('class') = 'item_ata' + index;
        //$(this)
    });
}

function openPopupNewProblema(id_itemAta) {
   // console.log("openPopupNewProblema - id_itemAta: " + (id_itemAta - 1));
   // console.log("openPopupNewProblema - cont_itemProb[(id_itemAta - 1)]: "+cont_itemProb[(id_itemAta - 1)]);
    var janelaliberada = true;
    if (janelaliberada) {

        //cont_itemProb[(id_itemAta - 1)]++; //gerenciar incremento deste contador, pois só deve incrementar quando salvar

        //como neste momento, apenas uma janela de inserção de problema pode ser aberta, este valor não sera alterado por outro.
        var itemprob = document.createElement('input');
        itemprob.type = 'hidden';
        itemprob.className = 'itemProb';
        //itemprob.value = $("div.itemata#itemAta" + id_itemAta).children('div').length + 1;

        $("div.itemAta#itemAta" + id_itemAta).append(itemprob);


    //$('#cont_itemProb').val(cont_itemProb[(id_itemAta - 1)]);
    //$('#id_itemAta').val(id_itemAta);

   // console.log('Valor do contador ' + cont_itemProb[(id_itemAta - 1)]);
        var ramdomPage = Math.floor((Math.random() * 100) + 1);
        if (msieversion()) {
            window.showModalDialog('Page1.aspx', 'Pagina1');
            console.log("abrindo showModalDialog");
        } else {
            var window_prob = window.open('Page1.aspx', 'Pagina' + ramdomPage, 'STATUS=NO, TOOLBAR=NO, LOCATION=NO, DIRECTORIES=NO, RESISABLE=NO, SCROLLBARS=YES, TOP=10, LEFT=10, WIDTH=500, HEIGHT=650');
            console.log(window_prob.document);
           //window_prob.document.$('#id_itemAta').val(id_itemAta);
            $(window_prob).load(function () {
                this.$('#id_itemAta').val(id_itemAta);
            });
        }
    } else {
        //enquuanto não fechar a janela do problema atual, o usuário não consegue abrir outra.
    }

}
//criar mecanismo para saber se esta sendo aberto pela primeira vez, ou está sendo editado.
function openPopupProb(id) {
    var url = '.https://jesuitasbrcnet.sharepoint.com/sites/pwa_at/Projeto_Ata/Lists/Issues/DispForm.aspx?ID=1&Source=https%3A%2F%2Fjesuitasbrcnet%2Esharepoint%2Ecom%2Fsites%2Fpwa_at%2FProjeto_Ata%2FLists%2FIssues%2FAllItems%2Easpx&ContentTypeId=0x0100E9C60707D063BC4EAD8EB6FD5DDC8B19'
    window.open(url,id,'STATUS=NO, TOOLBAR=NO, LOCATION=NO, DIRECTORIES=NO, RESISABLE=NO, SCROLLBARS=YES, TOP=10, LEFT=10, WIDTH=770, HEIGHT=500');
}

function getInfoFromPeoplePickers(callback) {
   
    var ownerKey = getUserInfoOwner();
    var owner = SP.FieldUserValue.fromUser(ownerKey[0].Key);

    var participantesKeys = getUserInfoParticipantes();
    var participantes = new Array(participantesKeys.length);

    for (var i = 0; i < participantesKeys.length; i++) {
        participantes[i] = SP.FieldUserValue.fromUser(participantesKeys[i].Key);
    }
    callback(owner,participantes);
       
}

function salvarPeoplePickers() {
    if (validacoes()) {
        getInfoFromPeoplePickers(function (owner, participantes) {
            console.log($('#txt_assunto').val());
            console.log(owner);
            console.log(participantes);
            console.log($('#dt_ata').val() + " 00:00");
            //pega os campos e abastece num array;
            var dadosItemsAta = organizaItemsAta();

            var listAtaDeReuniao = web
                       .get_lists()
                       .getByTitle('Ata de Reunião');

            var ata = listAtaDeReuniao.addItem(new SP.ListItemCreationInformation());
            ata.set_item("Title", $('#txt_assunto').val()); // 'Title' is the internal name for 'Last Name'
            ata.set_item("Data", $('#dt_ata').val() + " 00:00"); //configurar a hora correta da gravação
            ata.set_item("Proprietario", owner);
            ata.set_item("Participantes", participantes);
            ata.update();

            clientContext.executeQueryAsync(function () { //Ata de reunião Salva
                console.log("Id da nova ata: " + ata.get_id());
                var idAta = ata.get_id();
                var itemAta = new Array(dadosItemsAta.length);
                var listItemAta = web
                    .get_lists()
                    .getByTitle('Items de Ata');

                for (var i = 0; i < dadosItemsAta.length; i++) {
                    itemAta[i] = listItemAta.addItem(new SP.ListItemCreationInformation());
                    itemAta[i].set_item('Assunto', $('#txt_descricao\\.' + (i + 1)).val());
                    itemAta[i].set_item('id_ata', idAta);
                    itemAta[i].update();
                }
                clientContext.executeQueryAsync(function () {// Items da Ata Salvos

                    for (var x = 0 ; x < itemAta.length; x++) {
                        console.log("Id do novo Item de Ata criado: " + itemAta[x].get_id());
                    }
                    var listProblemas = web
                        .get_lists()
                        .getByTitle('Problemas');

                    var itemProblema = [];//new Array(dadosItemsAta.length);
                    for (var j = 0; j < dadosItemsAta.length; j++) {//item de ata
                        itemProblema[j] = [];//new Array(dadosItemsAta[j].length);
                        for (var k = 0; k < dadosItemsAta[j].length; k++) {//item de problema
                            console.log(dadosItemsAta[j][k][0]);
                            console.log(dadosItemsAta[j][k][1]);
                            console.log(dadosItemsAta[j][k][2]);
                            console.log(dadosItemsAta[j][k][3]);
                            console.log(dadosItemsAta[j][k][4]);
                            console.log(dadosItemsAta[j][k][5]);
                            console.log(dadosItemsAta[j][k][6]);
                            console.log(dadosItemsAta[j][k][7]);
                            console.log(dadosItemsAta[j][k][8]);

                            itemProblema[j][k] = listProblemas.addItem(new SP.ListItemCreationInformation());
                            itemProblema[j][k].set_item('Title', dadosItemsAta[j][k][0]);
                            itemProblema[j][k].set_item('Owner', dadosItemsAta[j][k][1]);
                            itemProblema[j][k].set_item('AssignedTo', dadosItemsAta[j][k][2]);
                            itemProblema[j][k].set_item('Status', dadosItemsAta[j][k][3]);
                            itemProblema[j][k].set_item('Category', dadosItemsAta[j][k][4]);
                            itemProblema[j][k].set_item('Priority', dadosItemsAta[j][k][5]);
                            itemProblema[j][k].set_item('DueDate', dadosItemsAta[j][k][6]);
                            itemProblema[j][k].set_item('Discussion', dadosItemsAta[j][k][7]);
                            //itemProblema[j][k].set_item('Resolution', dadosItemsAta[j][k][8]);
                            itemProblema[j][k].set_item('id_item_ata', itemAta[j]);
                            itemProblema[j][k].update();

                        }
                    }
                    clientContext.executeQueryAsync(function () {
                        console.log("Gravação terminada com sucesso !!!");
                        alert("Ata gravada com sucesso!");
                    }, function (sender, args) {
                        alert('Erro no Insert de Problemas: ' + args.get_message());
                    });
                }, function (sender, args) {
                    alert('Erro no Insert de Item de Ata: ' + args.get_message());
                });
            }, function (sender, args) {
                alert('Erro no Insert de Ata de reunião: ' + args.get_message());
            });
        })
    } else {
        //alert("Existem campos que devem ser preenchidos e estão vazios.");
    }
}

function organizaItemsAta(){
    console.log("Dentro do organiza: ");
    var indexHc = $("div.item_ata").length;
    var itemsAta = new Array(indexHc);    

    $("#hidden_conteiners").children('div').each(function (indexItemAta){//hiddenconteiner ou item de ata
        var indexIp = $("div.itemProblema" + $(this).attr('id')).length;//quantos items de problema este item_ata tem
        
        if (indexIp) {//Verifica se o item_ata atual tem item_problemas, se não tiver ele não precisa incluir no array.
            itemsAta[indexItemAta] = new Array(indexIp);
            $(this).children('div').each(function (indexItemProblema) {//div item problema
                itemsAta[indexItemAta][indexItemProblema] = new Array(10);

                $(this).children('input').each(function (indexInputs) {//inputs
                    switch (indexInputs) {
                        case 1:
                            //faz o parse da string que veio da div HTML de volta para objeto SP.FieldUserValue
                            itemsAta[indexItemAta][indexItemProblema][indexInputs] = SP.FieldUserValue.fromUser($(this).val());
                            break;
                        case 2:
                            itemsAta[indexItemAta][indexItemProblema][indexInputs] = SP.FieldUserValue.fromUser($(this).val());
                            break;
                        default:
                            itemsAta[indexItemAta][indexItemProblema][indexInputs] = $(this).val();

                    }
                    console.log(itemsAta[indexItemAta][indexItemProblema][indexInputs]);
                });
            });
        }else {
            itemsAta[indexItemAta] = 0;
        }
        
        
    });
    return itemsAta;
}

function validacoes() {
    var valida = true;
    if ($("#txt_assunto").val()=="") {
        alert("Assunto vazio");
        valida = false;
    }
    if ($("#peoplePickerOwner_TopSpan_HiddenInput").val() == "") {
        alert("Insira um proprietario");
        valida = false;
    }
    if ($("#peoplePickerParticipantes_TopSpan_HiddenInput").val() == "") {
        alert("Insira um atribuido");
        valida = false;
    }
    
    if ($("#dt_ata").val() == "") {
        alert("Insira uma data de vencimento");
        valida = false;
    }
    
    return valida;
}

function msieversion() {

    var ua = window.navigator.userAgent;
    var msie = ua.indexOf("MSIE ");

    if (msie > 0 || !!navigator.userAgent.match(/Trident.*rv\:11\./))  // If Internet Explorer, return version number
    {
       // alert(parseInt(ua.substring(msie + 5, ua.indexOf(".", msie))));
        return true;
    }
    else  // If another browser, return 0
    {
        //alert('otherbrowser');
    }

    return false;
}

function salvarv2() {
    if (validacoes()) {
        getInfoFromPeoplePickers(function (owner, participantes) {
            console.log($('#txt_assunto').val());
            console.log(owner);
            console.log(participantes);
            console.log($('#dt_ata').val() + " 00:00");
           
            var listAtaDeReuniao = web
                       .get_lists()
                       .getByTitle('Ata de Reunião');

            var ata = listAtaDeReuniao.addItem(new SP.ListItemCreationInformation());
            ata.set_item("Title", $('#txt_assunto').val()); // 'Title' is the internal name for 'Last Name'
            ata.set_item("Data", $('#dt_ata').val() + " 00:00"); //configurar a hora correta da gravação
            ata.set_item("Proprietario", owner);
            ata.set_item("Participantes", participantes);
            ata.update();

            clientContext.executeQueryAsync(function () { //Ata de reunião Salva
                console.log("Id da nova ata: " + ata.get_id());
                var itemAtaComItemProblema = [];
                var idAta = ata.get_id();
                var itemAta = new Array($("div.item_ata").length);
                var listItemAta = web
                    .get_lists()
                    .getByTitle('Items de Ata');

                $("#hidden_conteiners").children('div').each(function (i) {
                    itemAta[i] = listItemAta.addItem(new SP.ListItemCreationInformation());
                    itemAta[i].set_item('Assunto', $('#txt_descricao\\.' + $(this).attr('id')).val());
                    itemAta[i].set_item('id_ata', idAta);
                    itemAta[i].update();

                    if($(this).children('div').length){
                        itemAtaComItemProblema.push(i);
                    }
                });                    
                
                clientContext.executeQueryAsync(function () {// Items da Ata Salvos
                    for (var x = 0 ; x < itemAta.length; x++) {
                        console.log("Id do novo Item de Ata" + itemAta[x].get_id());
                    }
                    for (var x = 0 ; x < itemAtaComItemProblema.length; x++) {
                        console.log("Id do novo Item de Ata criado com problema atribuidos: " + itemAtaComItemProblema[x]);
                    }

                    var listProblemas = web
                        .get_lists()
                        .getByTitle('Problemas');

                    var itemProblema = [];//new Array(dadosItemsAta.length);
                    
                    $("#hidden_conteiners").children('div').each(function (indexItemAta) {
                        itemProblema[indexItemAta] = new Array($(this).children('div').length);
                        $(this).children('div').each(function (indexItemProblema) {
                            //f
                            console.log("Item de ata : " + indexItemAta);
                            console.log(($($(this).children('input')[0]).val()));
                            console.log(SP.FieldUserValue.fromUser($($(this).children('input')[1]).val()));
                            console.log(SP.FieldUserValue.fromUser($($(this).children('input')[2]).val()));
                            console.log(($($(this).children('input')[3]).val()));
                            console.log(($($(this).children('input')[4]).val()));
                            console.log(($($(this).children('input')[5]).val()));
                            console.log(($($(this).children('input')[6]).val()));
                            console.log(($($(this).children('input')[7]).val()));
                            console.log(($($(this).children('input')[9]).val()));


                            itemProblema[indexItemAta][indexItemProblema] = listProblemas.addItem(new SP.ListItemCreationInformation());
                            itemProblema[indexItemAta][indexItemProblema].set_item('Title', ($($(this).children('input')[0]).val()));
                            itemProblema[indexItemAta][indexItemProblema].set_item('Owner', SP.FieldUserValue.fromUser($($(this).children('input')[1]).val()));
                            itemProblema[indexItemAta][indexItemProblema].set_item('AssignedTo', SP.FieldUserValue.fromUser($($(this).children('input')[2]).val()));
                            itemProblema[indexItemAta][indexItemProblema].set_item('Status', $($(this).children('input')[3]).val());
                            itemProblema[indexItemAta][indexItemProblema].set_item('Category', $($(this).children('input')[4]).val());
                            itemProblema[indexItemAta][indexItemProblema].set_item('Priority', $($(this).children('input')[5]).val());
                            itemProblema[indexItemAta][indexItemProblema].set_item('DueDate', $($(this).children('input')[6]).val());
                            itemProblema[indexItemAta][indexItemProblema].set_item('Discussion', $($(this).children('input')[7]).val());
                            //itemProblema[indexItemAta][indexItemProblema].set_item('Resolution', $($(this).children('input)[8]).val());
                            itemProblema[indexItemAta][indexItemProblema].set_item('id_item_ata', itemAta[indexItemAta].get_id());
                            itemProblema[indexItemAta][indexItemProblema].update();
                        });
                    });
                    
                    clientContext.executeQueryAsync(function () {
                        console.log("Gravação terminada com sucesso !!!");
                        alert("Ata gravada com sucesso!");
                    }, function (sender, args) {
                        alert('Erro no Insert de Problemas: ' + args.get_message());
                    });
                }, function (sender, args) {
                    alert('Erro no Insert de Item de Ata: ' + args.get_message());
                });
            }, function (sender, args) {
                alert('Erro no Insert de Ata de reunião: ' + args.get_message());
            });
        })
    } else {
        //alert("Existem campos que devem ser preenchidos e estão vazios.");
    }
}


//apagar o <br> junto a exclusão de um problema.