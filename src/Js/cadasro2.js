let icons = document.querySelectorAll(".musicage");
let clicked = 0;

icons.forEach (item => {
    item.addEventListener("click", (event) => {
        if (clicked === 0){
            item.style.backgroundColor = "#dc5df3";
            clicked = 1;
        }
        else{
            item.style.backgroundColor = "";
            clicked = 0;
        }
    })
})

function validarFormulario() {
    window.location.href = "explore.html";
        return false;
}