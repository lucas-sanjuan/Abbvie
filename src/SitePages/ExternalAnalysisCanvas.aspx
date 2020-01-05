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
		<div id="canvas" class="pageContainer">
				<!--<h1 id="titulo"></h1>-->
				<div class="clear" ></div>
				<div id="canvaScn" >
					<div class="linea">
						<select id="chooseSc">
						
						</select>
						<div class="clear" ></div>
						<div id="hcont">
							<div id="tendencias" class="canvasCont" >	
								<div class="canTitle2">
										<span>Scenario:</span>
										<span id="sti" ></span>
								</div>
								<div class="ucont2" >
									<ul></ul>
								</div>
							</div>
							<div class="clear"> </div>
							<div id="container2" class="cont30 canvasCont" >
								<div class="canTitle"></div>
								<div class="ucont" ></div>
								
								</div>
							<div id="container3" class="cont30 canvasCont" >
								<div class="canTitle"></div>
								<div class="ucont" ></div>
								
								</div>
							<div id="container4" class="cont30 canvasCont" >
								<div class="canTitle"></div>							
								<div class="ucont" ></div>
							</div>
						
							<div class="clear"> </div>
							<div id="linea2" class="oculto" >
								<div id="container5" class="cont30 canvasCont" >
								<div class="canTitle"></div>								
								<div class="ucont" ></div>
							
							</div>
							<div id="container6" class="cont30 canvasCont" >
								<div class="canTitle"></div>
								<div class="ucont" ></div>								
								</div>
							<div id="container7" class="cont30 canvasCont" >
								<div class="canTitle"></div>
								<div class="ucont" ></div>							
							</div>
							
							
							</div>
							

							
						</div>
						
						<div id="vcont">
							<div id="container1"  class="canvasCont"  >
								<div class="canTitle"></div>
								<div class="ucont"></div>
							</div>
						
						</div>					
					</div>
				
						
				
				
				
				</div>
			 	<div class="clear"> </div>	
	</div>
		<script src="../Style Library/canvas.js"></script>
</asp:Content>
