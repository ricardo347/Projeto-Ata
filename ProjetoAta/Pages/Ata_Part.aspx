<%@ Page Language="C#" Inherits="Microsoft.SharePoint.WebPartPages.WebPartPage, Microsoft.SharePoint, Version=15.0.0.0, Culture=neutral, PublicKeyToken=71e9bce111e9429c" %>

<%@ Register TagPrefix="SharePoint" Namespace="Microsoft.SharePoint.WebControls" Assembly="Microsoft.SharePoint, Version=15.0.0.0, Culture=neutral, PublicKeyToken=71e9bce111e9429c" %>
<%@ Register TagPrefix="Utilities" Namespace="Microsoft.SharePoint.Utilities" Assembly="Microsoft.SharePoint, Version=15.0.0.0, Culture=neutral, PublicKeyToken=71e9bce111e9429c" %>
<%@ Register TagPrefix="WebPartPages" Namespace="Microsoft.SharePoint.WebPartPages" Assembly="Microsoft.SharePoint, Version=15.0.0.0, Culture=neutral, PublicKeyToken=71e9bce111e9429c" %>


<WebPartPages:AllowFraming ID="AllowFraming1" runat="server" />

<html>
<head>
    <title></title>

    <link rel="stylesheet" href="//code.jquery.com/ui/1.12.1/themes/base/jquery-ui.css">
    <script src="https://code.jquery.com/jquery-1.12.4.js"></script>
    <script src="https://code.jquery.com/ui/1.12.1/jquery-ui.js"></script>
    <script type="text/javascript" src="/_layouts/15/MicrosoftAjax.js"></script>
    <SharePoint:ScriptLink Name="init.js" runat="server" LoadAfterUI="true" Localizable="false" />
    <SharePoint:ScriptLink Name="clienttemplates.js" runat="server" LoadAfterUI="true" Localizable="false" />
    <SharePoint:ScriptLink Name="clientforms.js" runat="server" LoadAfterUI="true" Localizable="false" />
    <SharePoint:ScriptLink Name="clientpeoplepicker.js" runat="server" LoadAfterUI="true" Localizable="false" />
    <SharePoint:ScriptLink Name="autofill.js" runat="server" LoadAfterUI="true" Localizable="false" />
    <SharePoint:ScriptLink Name="sp.js" runat="server" LoadAfterUI="true" Localizable="false" />
    <SharePoint:ScriptLink Name="sp.runtime.js" runat="server" LoadAfterUI="true" Localizable="false" />
    <SharePoint:ScriptLink Name="sp.core.js" runat="server" LoadAfterUI="true" Localizable="false" />
    <script type="text/javascript" src="../Scripts/PeoplePickerOwner.js"></script>
    <script type="text/javascript" src="../Scripts/PeoplePickerParticipantes.js"></script>
    <script type="text/javascript" src="../Scripts/App.js"></script>
    <link rel="Stylesheet" type="text/css" href="../Content/App.css" />
     
    

    <script type="text/javascript">
        // Set the style of the client web part page to be consistent with the host web.
        (function () {
            'use strict';

            var hostUrl = '';
            var link = document.createElement('link');
            link.setAttribute('rel', 'stylesheet');
            if (document.URL.indexOf('?') != -1) {
                var params = document.URL.split('?')[1].split('&');
                for (var i = 0; i < params.length; i++) {
                    var p = decodeURIComponent(params[i]);
                    if (/^SPHostUrl=/i.test(p)) {
                        hostUrl = p.split('=')[1];
                        link.setAttribute('href', hostUrl + '/_layouts/15/defaultcss.ashx');
                        break;
                    }
                }
            }
            if (hostUrl == '') {
                link.setAttribute('href', '/_layouts/15/1033/styles/themable/corev15.css');
            }
            document.head.appendChild(link);
        })();
    </script>
</head>

<body>
      
    <table>
        <tr>
            <th>Ata de Reunião</th>
        </tr>
        <tr>
            <td>Projeto : Projeto Ata</td>

        </tr>
    </table>
    <br />
    <table>    
        <tr>
            <td>Assunto: </td>
            <td id="td_assunto">
                <input width='500' id='txt_assunto' value='' type="text" />
            </td>
        </tr>
        <tr>
            <td>Proprietário: </td>
            <td id="td_proprietario">
                <div id="peoplePickerOwner">
                </div>
            </td>
        </tr>
        <tr>
            <td>Data </td>
            <td id="td_data">
                <input type="text" id="dt_ata" />
            </td>
        </tr>
        <tr>
            <td>Participantes: </td>
            <td id="td_proprietário">
                <div id="peoplePickerParticipantes"></div>
            </td>
        </tr>
    </table>
    <br />
    <br />
    <table border="1" id="table_conteiner_itensAta">
        <br />
        <tr>
            <td>Lista de tópicos da reunião</td>
        </tr>
        <tr>
            <td>
                <div id="conteiner_problemas">
                    <table id="conteiner_problemas_table">
                        <tr id="conteiner_problemas_header">
                            <th>
                                <input id='chk_itemAta_all' class="chk_itemAta" type="checkbox" />

                            </th>
                            <th id="th_descricao">Descrição</th>
                            <th id="th_problema" colspan="2">Problema</th>
                            <th id="th_status">Status</th>
                        </tr>
                    </table>
                </div>
            </td>
        </tr>
    </table>
    <br />    
    <table width="640">
        <tr>
            <td><input id='btn_insereItem' type="button" value="Inserir Item" onclick="insereItem()" /></td>
            <td><input id='btn_excluiItem' type="button" value="Excluir Item" onclick="excluiItem()" /></td>
                        
        </tr>
        <tr><br />
            <td >
                <input id='btn_Salvar' type="button" value="Salvar" onclick="newItemAta()" /></td>
            <td align="right">
                <input id='btn_Distribuir' type="button" value="Distribuir" onclick="salvarv2()" />

            </td>
        </tr>

    </table>
    <div id="hidden_variaveis">
        
        
    </div>
    <div id="hidden_conteiners">
    </div>
        
</body>

</html>

