var element = document.getElementById("cabin-info");
var rental = document.getElementById("hide");
var message = document.getElementById("show");

function rent() {
    var source = document.getElementById("rentals").innerHTML;
    var template = Handlebars.compile(source);
    var result = "";
    for (var cabin of RENTAL_DATA.inventory.cabins) {
        var html = template({
            picture: cabin.coverImage,
            price: cabin.price,
            description: cabin.description,
            location: cabin.location
        });
        result += html;
    }
    element.insertAdjacentHTML("beforeend", result);
}
// rent();

var form = document.getElementById("form");

form.addEventListener("submit", function(event) {
    event.preventDefault();
    rental.style.display = "none";
    message.style.fontSize = "5rem";
    message.style.color = "black";
    message.style.fontWeight = "bolder";
});

function rentalButtonLoad() {
    var button = document.getElementsByClassName("rental");
    var rentalButton = document.querySelectorAll(".rental");
    console.log(rentalButton);
    for (var i of rentalButton) {
        i.addEventListener("click", function() {
            form.style.display = "block";
            for (var b of button) {
                b.style.display = "none";
            }
        });
    }
}

function startUp() {
    rent();
    rentalButtonLoad();
}

window.addEventListener("load", startUp);
