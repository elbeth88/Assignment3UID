/* Toggle between adding and removing the "responsive" class to topnav when the user clicks on the icon */
function myFunction() {
    var x = document.getElementById("myTopnav");
    if (x.className === "topnav") {
        x.className += " responsive";
    } else {
        x.className = "topnav";
    }
}

function toggleSidebar() {
    const sidebar = document.getElementById("mySidebar");
    sidebar.classList.toggle("sidebar-open");
}

function closeSidebar() {
    const sidebar = document.getElementById("mySidebar");
    sidebar.classList.remove("sidebar-open");
}

setInterval(slide, 3000);

var value = 0;

function slide(){
    if(value == 3){
        value = 0;
        console.log(value);
        document.getElementById('slider').style.transform = 'translateX(0)';
    } else {
        value += 1;
        console.log(value);
        document.getElementById('slider').style.transform = 'translateX(-'+ 25*value +'%)';
    }
}