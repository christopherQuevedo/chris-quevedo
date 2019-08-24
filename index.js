document.getElementById("home").onclick = clickHome;
document.getElementById("projects").onclick = clickProjects;
document.getElementById("resume").onclick = clickResume;

document.getElementById("homeScreen").style.display = "";
document.getElementById("projectsScreen").style.display = "none";
document.getElementById("resumeScreen").style.display = "none";


/**
 * Function to open side nav bar when clicking on the hamburger
 */
function openSideMenu(){
    let sideMenu = document.getElementById("side-menu");
    sideMenu.style.width = '250px';
}

/**
 * Function to close side nav bar when clicking on the 'X'
 */
function closeSideMenu(){
    let sideMenu = document.getElementById("side-menu");
    sideMenu.style.width = '0';
}

function clickHome(){
    closeSideMenu();
    document.getElementById("homeScreen").style.display = "";
    document.getElementById("projectsScreen").style.display = "none";
    document.getElementById("resumeScreen").style.display = "none";
}

function clickProjects(){
    closeSideMenu();
    document.getElementById("homeScreen").style.display = "none";
    document.getElementById("projectsScreen").style.display = "";
    document.getElementById("resumeScreen").style.display = "none";
}

function clickResume(){
    closeSideMenu();
    document.getElementById("homeScreen").style.display = "none";
    document.getElementById("projectsScreen").style.display = "none";
    document.getElementById("resumeScreen").style.display = "";
    console.log("bruh");
}


