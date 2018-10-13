var element = document.getElementById("cabin-info");
var rentButton = document.getElementById("rent-button");
var returnButton = document.getElementById("return-button");
function rent() {
    var source = document.getElementById("rentals").innerHTML;
    var template = Handlebars.compile(source);
    var result = "";
    for (var cabin of RENTAL_DATA.inventory.cabins) {
        var html = template({
            picture: cabin.coverImage,
            price: cabin.price,
            description: cabin.description
        });
        result += html;
    }

    element.insertAdjacentHTML("beforeend", result);
    rentButton.setAttribute("disabled", true);
    returnButton.setAttribute("disabled", true);
}
rentButton.addEventListener("click", rent);

function form() {
    var element = document.getElementById("form");
    element.style.display = "block";
    rentButton.setAttribute("disabled", true);
    returnButton.setAttribute("disabled", true);
}
returnButton.addEventListener("click", form);
