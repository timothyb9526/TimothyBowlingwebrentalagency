var element = document.getElementById("cabin-info");
var rentButton = document.getElementById("rent-button");
var rentalButton = document.getElementById("rental");
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
    returnButton.setAttribute("disabled", true);
}
rentButton.addEventListener("click", rent);
