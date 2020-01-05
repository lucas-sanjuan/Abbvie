﻿<%-- _lcid="1033" _version="16.0.4266" _dal="1" --%>
<%-- _LocalBinding --%>
<%@ Page language="C#" MasterPageFile="~masterurl/default.master"    Inherits="Microsoft.SharePoint.WebPartPages.WebPartPage,Microsoft.SharePoint,Version=16.0.0.0,Culture=neutral,PublicKeyToken=71e9bce111e9429c" meta:progid="SharePoint.WebPartPage.Document"  %>
<%@ Register Tagprefix="SharePoint" Namespace="Microsoft.SharePoint.WebControls" Assembly="Microsoft.SharePoint, Version=16.0.0.0, Culture=neutral, PublicKeyToken=71e9bce111e9429c" %> <%@ Register Tagprefix="Utilities" Namespace="Microsoft.SharePoint.Utilities" Assembly="Microsoft.SharePoint, Version=16.0.0.0, Culture=neutral, PublicKeyToken=71e9bce111e9429c" %> <%@ Import Namespace="Microsoft.SharePoint" %> <%@ Assembly Name="Microsoft.Web.CommandUI, Version=16.0.0.0, Culture=neutral, PublicKeyToken=71e9bce111e9429c" %> <%@ Register Tagprefix="WebPartPages" Namespace="Microsoft.SharePoint.WebPartPages" Assembly="Microsoft.SharePoint, Version=16.0.0.0, Culture=neutral, PublicKeyToken=71e9bce111e9429c" %>
<asp:Content ContentPlaceHolderId="PlaceHolderPageTitle" runat="server">
	<SharePoint:ListItemProperty Property="BaseName" maxlength="40" runat="server"/>
</asp:Content>
<asp:Content ContentPlaceHolderId="PlaceHolderAdditionalPageHead" runat="server">
	<meta name="GENERATOR" content="Microsoft SharePoint" />
	<meta name="ProgId" content="SharePoint.WebPartPage.Document" />
	<meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
	<meta name="CollaborationServer" content="SharePoint Team Web Site" />
	<SharePoint:ScriptBlock runat="server">
	var navBarHelpOverrideKey = &quot;WSSEndUser&quot;;
	</SharePoint:ScriptBlock>
<SharePoint:StyleBlock runat="server">
body #s4-leftpanel {
	display:none;
}
.s4-ca {
	margin-left:0px;
}
</SharePoint:StyleBlock>
</asp:Content>
<asp:Content ContentPlaceHolderId="PlaceHolderSearchArea" runat="server">
	<SharePoint:DelegateControl runat="server"
		ControlId="SmallSearchInputBox"/>
</asp:Content>
<asp:Content ContentPlaceHolderId="PlaceHolderPageDescription" runat="server">
	<SharePoint:ProjectProperty Property="Description" runat="server"/>
</asp:Content>
<asp:Content ContentPlaceHolderId="PlaceHolderMain" runat="server">
		
		<div class="clear"></div>
		<div id="anp" class="pageContainer">
			
				<div id="leftAxis">
				<div class="arrowTop">
						<img  src="../images/arrow-top.png">
				</div>
				
					<div class="cont"></div>	
				</div>
				<div id="rigthCont">
					
 					
				
					 <div id="topLC" class="anCont">
					 	<div id="topLT" class="porT">
					
					 </div>					 
					 <div class="cont">
					 
					 </div>
					 
					 
					 </div>
					 <div id="topRC" class="anCont">
					 <div id="topRT" class="porT">

					
					 </div>
					 	<div class="cont">
					 
					 </div>
					 

					 
					 </div>
					 <div class="clear"></div>			
 				

					 <div id="botLC" class="anCont">
					 		 <div id="botLT" class="porT">

					 
					 </div>
					 	<div class="cont">
					 
					 </div>
					 

					 
					 </div>
 					 <div id="botRC" class="anCont">
 					 	 <div id="botRT" class="porT">

					 
					 </div>
 					 	<div class="cont">
					 
					 </div>
					 

					 
					 </div>				
			
				</div>
				 <div class="clear" ></div>
					 <div id="botAxis">
					 		<div class="cont"></div>
					 		<div class="botArrow">					 		
					 		<img alt="" src="../images/botArrow.png"></div>
					 </div>			
				
		</div>
		 		
		<script src="../Style Library/analisisport.js"></script>

</asp:Content>
