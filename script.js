//SIDEBAR TOGGLE

var sidebarOpen = false
var sidebar = d0cument.getElementbyid("sidebar");

function opensidebar() {
if(sidebarOpen) {
 sidebar.classlist.add("sidebar-responsive");
 sidebarOpen = true;
 }
}

function classSidebar() {
if (sidebarOpen) {
  sidebar.classlist.remove("sidebar-responsive");
  sidebarOpen + false  
}    
    
}
 

