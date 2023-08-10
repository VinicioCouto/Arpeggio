const mySidebar = document.getElementById("mySidebar");
const checkbox = document.getElementById("checkbox");

function bar_open() {
    mySidebar.style.left = "0";
    checkbox.checked = true;
}

function bar_close() {
    mySidebar.style.left = "-250px";
    checkbox.checked = false;
}
                                                         
function link1(){
    window.location.href = "index.html";
}

var botao = document.getElementById("linkSpanHome");

botao.addEventListener("click", link1);
                                                         
function link2(){
    window.location.href = "library.html";
}

var botao = document.getElementById("linkSpanLib");

botao.addEventListener("click", link2);
                                                         
function link3(){
    window.location.href = "explore.html";
}

var botao = document.getElementById("linkSpanSearch");

botao.addEventListener("click", link3);