var element = document.getElementById("cabin-info");
var rentButton = document.getElementById("rent-button");
var rentalButton = document.getElementById("rental");
var rental = document.getElementById("hide");
var message = document.getElementById("show");
var input = document.querySelectorAll("input");

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
    element.insertAdjacentHTML("afterbegin", result);
    rentButton.setAttribute("disabled", true);
}
rentButton.addEventListener("click", rent);

var form = document.getElementById("form");

form.addEventListener("submit", function() {
    rental.style.display = "none";
    message.style.fontSize = "5rem";
    message.style.color = "black";
    message.style.fontWeight = "bolder";
});
