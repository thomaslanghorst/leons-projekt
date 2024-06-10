function setActivePage(id) {

    // set content
    const allConentDivs = document.getElementsByClassName('content');
    for (let i = 0; i < allConentDivs.length; i++) {
        allConentDivs[i].style.display = "none";
    }
    document.getElementById(id).style.display = "block";

    // set sidebar-item active
    const allSidebarItems = document.getElementsByClassName('sidebar-item');
    for (let i = 0; i < allSidebarItems.length; i++) {
        allSidebarItems[i].classList.remove('sidebar-item-active');
    }
    document.getElementById('nav-'+id).classList.add('sidebar-item-active');
}