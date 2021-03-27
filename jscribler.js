 // sign in
        var modal = document.getElementById("myModal");

        var btn = document.getElementById("myBtn");

        var span = document.getElementsByClassName("close")[0];

        btn.onclick = function () {
            modal.style.display = "block";
        }
        span.onclick = function () {
            modal.style.display = "none";
        }
        window.onclick = function (event) {
            if (event.target == modal) {
                modal.style.display = "none";
            }
}

//sgn up
var modal1 = document.getElementById("sModal");

var btn1 = document.getElementById("Btn");

var span1 = document.getElementsByClassName("cross")[0];

btn1.onclick = function () {
    modal1.style.display = "block";
}
span1.onclick = function () {
    modal1.style.display = "none";
}


window.onclick = function (event) {
    if (event.target == modal1) {
        modal1.style.display = "none";
    }
}


// Create Post
var txt = document.getElementById("modal-context");

var create = document.getElementById("createPost");

var c = document.getElementsByClassName("closed")[0];

create.onclick = function () {
    txt.style.display = "block";
}

c.onclick = function () {
    txt.style.display = "none";
}

window.onclick = function (event) {
    if (event.target == txt) {
        txt.style.display = "none";
    }
}