<%@ Page language="C#" MasterPageFile="~masterurl/default.master" Inherits="Microsoft.SharePoint.WebPartPages.WebPartPage, Microsoft.SharePoint, Version=15.0.0.0, Culture=neutral, PublicKeyToken=71e9bce111e9429c" %>
<%@ Register Tagprefix="Utilities" Namespace="Microsoft.SharePoint.Utilities" Assembly="Microsoft.SharePoint, Version=15.0.0.0, Culture=neutral, PublicKeyToken=71e9bce111e9429c" %>
<%@ Register Tagprefix="WebPartPages" Namespace="Microsoft.SharePoint.WebPartPages" Assembly="Microsoft.SharePoint, Version=15.0.0.0, Culture=neutral, PublicKeyToken=71e9bce111e9429c" %>
<%@ Register Tagprefix="SharePoint" Namespace="Microsoft.SharePoint.WebControls" Assembly="Microsoft.SharePoint, Version=15.0.0.0, Culture=neutral, PublicKeyToken=71e9bce111e9429c" %>

<asp:Content ContentPlaceHolderId="PlaceHolderAdditionalPageHead" runat="server">
    <SharePoint:ScriptLink name="sp.js" runat="server" OnDemand="true" LoadAfterUI="true" Localizable="false" />
</asp:Content>

<asp:Content ContentPlaceHolderId="PlaceHolderMain" runat="server">
    <WebPartPages:WebPartZone runat="server" FrameType="TitleBarOnly" ID="full" Title="loc:full" />

    <h3>Problema - Novo</h3>
    Titulo : <input type="text" id="txt_titulo" /><br />
    Proprietário : <input type="text" id="peoplePickerProblemaOwner" /><br />
    Atribuido a : <input type="text" id="peoplePickerAtribuido" /><br />
    Status: <select>
                <option>(1) Ativas</option>
                <option>(2) Adiadas</option>
                <option>(3) Fechadas</option>
            </select><br />
    Categoria: <select>
                <option>Aquisições</option>
                <option>Comunicação</option>
                <option>Custo</option>
                <option>Escopo</option>
                <option>Integração</option>
                <option>Partes Interessadas</option>
            </select><br />
    Prioridade: <select>
                <option>(1) Ativas</option>
                <option>(2) Adiadas</option>
                <option>(3) Fechadas</option>
            </select><br />
    Data de Vencimento: <input type="text" /><br />
    Discussão: <textarea></textarea><br />
    Resolução: <textarea></textarea><br /> <br />
    <input id='btn_salvar' type="button" value="Salvar" />
    <input id='btn_salvar' type="button" value="Cancelar" />


        
</asp:Content><%--  --%>