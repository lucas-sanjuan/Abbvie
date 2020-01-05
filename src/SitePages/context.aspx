<%-- _lcid="1033" _version="16.0.4266" _dal="1" --%><%-- _LocalBinding --%><%@ Page language="C#" MasterPageFile="~masterurl/default.master"    Inherits="Microsoft.SharePoint.WebPartPages.WebPartPage,Microsoft.SharePoint,Version=16.0.0.0,Culture=neutral,PublicKeyToken=71e9bce111e9429c" meta:progid="SharePoint.WebPartPage.Document"  %><%@ Register Tagprefix="SharePoint" Namespace="Microsoft.SharePoint.WebControls" Assembly="Microsoft.SharePoint, Version=16.0.0.0, Culture=neutral, PublicKeyToken=71e9bce111e9429c" %><%@ Register Tagprefix="Utilities" Namespace="Microsoft.SharePoint.Utilities" Assembly="Microsoft.SharePoint, Version=16.0.0.0, Culture=neutral, PublicKeyToken=71e9bce111e9429c" %><%@ Import Namespace="Microsoft.SharePoint" %><%@ Assembly Name="Microsoft.Web.CommandUI, Version=16.0.0.0, Culture=neutral, PublicKeyToken=71e9bce111e9429c" %><%@ Register Tagprefix="WebPartPages" Namespace="Microsoft.SharePoint.WebPartPages" Assembly="Microsoft.SharePoint, Version=16.0.0.0, Culture=neutral, PublicKeyToken=71e9bce111e9429c" %><asp:Content ContentPlaceHolderId="PlaceHolderPageTitle" runat="server">
	<SharePoint:listitemproperty Property="BaseName" maxlength="40" runat="server"/>
</asp:Content>
<asp:Content ContentPlaceHolderId="PlaceHolderAdditionalPageHead" runat="server">
	<meta name="GENERATOR" content="Microsoft SharePoint" />
	<meta name="ProgId" content="SharePoint.WebPartPage.Document" />
	<meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
	<meta name="CollaborationServer" content="SharePoint Team Web Site" />
	<SharePoint:scriptblock runat="server">
	var navBarHelpOverrideKey = &quot;WSSEndUser&quot;;
	</SharePoint:ScriptBlock>
<SharePoint:styleblock runat="server">
	body #s4-leftpanel {
	display:none;
}
.s4-ca {
	margin-left:0px;
}
	</SharePoint:StyleBlock>
</asp:Content>
<asp:Content ContentPlaceHolderId="PlaceHolderSearchArea" runat="server">
	<SharePoint:delegatecontrol runat="server"
		ControlId="SmallSearchInputBox"/>
</asp:Content>
<asp:Content ContentPlaceHolderId="PlaceHolderPageDescription" runat="server">
	<SharePoint:projectproperty Property="Description" runat="server"/>
</asp:Content>
<asp:Content ContentPlaceHolderId="PlaceHolderMain" runat="server">
		<div id="contexto" class="pageContainer">
				<!--<h1 id="titulo"></h1>-->
				<div class="clear" ></div>
				<div id="contColL">
						<div class="context" id="cont1">
			 		<h2 id="t1"></h2>
			 		<p class="contenido"></p>
	 		
			 		</div>
				
				</div>
			 	<div id="contColR">
			 		<div class="context" id="cont3">
				 		<h2 id="t3"></h2>
		 		 			<p class="contenido"></p>

			 		</div>			 		
			 		
			 		<div class="context" id="cont4">
				 		<h2 id="t4"></h2>
				 			<p class="contenido"></p>
		
			 		</div>
			 		<div class="clear"> </div>
			 		<div class="context" id="cont2">
				 		<h2 id="t2"></h2>
		 		 		<p class="contenido"></p>	
			 		</div>
	    	 		
			 	</div>
			 	<div class="clear"> </div>	
		</div>
		<script src="../Style Library/contexto.js"></script>
</asp:Content>
