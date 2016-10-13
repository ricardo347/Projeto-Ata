<%@ Page language="C#" MasterPageFile="~masterurl/default.master" Inherits="Microsoft.SharePoint.WebPartPages.WebPartPage, Microsoft.SharePoint, Version=15.0.0.0, Culture=neutral, PublicKeyToken=71e9bce111e9429c" %>
<%@ Register Tagprefix="Utilities" Namespace="Microsoft.SharePoint.Utilities" Assembly="Microsoft.SharePoint, Version=15.0.0.0, Culture=neutral, PublicKeyToken=71e9bce111e9429c" %>
<%@ Register Tagprefix="WebPartPages" Namespace="Microsoft.SharePoint.WebPartPages" Assembly="Microsoft.SharePoint, Version=15.0.0.0, Culture=neutral, PublicKeyToken=71e9bce111e9429c" %>
<%@ Register Tagprefix="SharePoint" Namespace="Microsoft.SharePoint.WebControls" Assembly="Microsoft.SharePoint, Version=15.0.0.0, Culture=neutral, PublicKeyToken=71e9bce111e9429c" %>

<asp:Content ContentPlaceHolderId="PlaceHolderAdditionalPageHead" runat="server">
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
   
    <script type="text/javascript" src="../Scripts/PeoplePickerProblemaOwner.js"></script>
    <script type="text/javascript" src="../Scripts/PeoplePickerAtribuido.js"></script>
    <script type="text/javascript" src="../Scripts/popup.js"></script>
     
</asp:Content>

<asp:Content ContentPlaceHolderId="PlaceHolderMain" runat="server">
    <WebPartPages:WebPartZone runat="server" FrameType="TitleBarOnly" ID="full" Title="loc:full" />

<table>
    <tr>
        <td><h2>Problema</h2><br /></td>
    </tr>
    <tr>
        <td>Titulo</td>
        <td><input type="text" id="txt_tituloProblema" /></td>
    </tr>
    <tr>
        <td>Proprietário</td>
        <td><div id="peoplePickerProblemaOwner" ></div></td>
    </tr>
    <tr>
        <td>Atribuido a</td>
        <td><div id="peoplePickerAtribuido" ></div></td>
    </tr>
    <tr>
        <td>Status</td>
        <td><select id="status_problema">
                <option>(1) Ativas</option>
                <option>(2) Adiadas</option>
                <option>(3) Fechadas</option>
            </select>
        </td>
    </tr>
    <tr>
        <td>Categoria</td>
        <td><select id="categoria_problema">
                <option>Aquisições</option>
                <option>Comunicação</option>
                <option>Custo</option>
                <option>Escopo</option>
                <option>Integração</option>
                <option>Partes Interessadas</option>
            </select>
        </td>
    </tr>
    <tr>
        <td>Prioridade</td>
        <td><select id="prioridade_problema">
                <option>(1) Ativas</option>
                <option>(2) Adiadas</option>
                <option>(3) Fechadas</option>
            </select>
        </td>
    </tr>
    <tr>
        <td>Data de Vencimento</td>
        <td><input type="text" id="dt_venc_problema"/></td>
    </tr>
    <tr>
        <td>Discussão</td>
        <td><textarea id="discussao_problema"></textarea></td>
    </tr>
    <tr>
        <td>Resolução</td>
        <td><textarea id="resolucao_problema"></textarea></td>
    </tr>
    <tr>
        <td><br /><input id='btn_salvar' type="button" onclick="salvarPeoplePickers()" value="Salvar" /></td>
        <td><br /><input id='btn_cancelar' type="button" onclick="cancelar()" value="Cancelar" /></td>
    </tr>
</table>
    
    <input type='hidden' id="id_itemAta"> </input>
   

</asp:Content>
