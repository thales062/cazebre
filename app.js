var modal = document.getElementById("myModal");

var btn = document.getElementById("openModalBtn");

var span = document.getElementById("close");

btn.onclick = function() {
    modal.style.display = "block";
}

span.onclick = function() {
        modal.style.display = "none";
 }


window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}

function redirecionar() {
    window.location.href = "index (2).html";
}


    

    



