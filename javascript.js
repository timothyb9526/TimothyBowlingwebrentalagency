var cabinInfo = document.getElementById("cabin-info");
var rental = document.getElementById("rental");
var message = document.getElementById("message");

function rent() {
    var source = document.getElementById("rentals").innerHTML;
    var template = Handlebars.compile(source);
    var result = "";
    for (var cabin in RENTAL_DATA.cabins) {
        var obj = RENTAL_DATA.cabins[cabin];
        var image = obj.coverImage;
        var price = obj.price;
        var description = obj.description;
        var location = obj.location;
        var html = template({
            picture: image,
            price: price,
            description: description,
            location: location
            // index: i
        });
        result += html;
    }
    cabinInfo.insertAdjacentHTML("beforeend", result);
}
// rent();

var form = document.getElementById("form");

form.addEventListener("submit", function(event) {
    event.preventDefault();
    rentItem();
});

function rentalButtonLoad() {
    // var button = document.getElementsByClassName("rental");
    var rentalButton = document.querySelectorAll(".rental");
    console.log(rentalButton);
    for (var i in rentalButton) {
        var button = rentalButton[i];
        let index = i;
        button.addEventListener("click", function() {
            var input = document.querySelector("#form-index");
            input.value = index;
            form.style.display = "block";
            cabinInfo.style.display = "none";
        });
    }
}

function rentItem() {
    var input = document.querySelector("#form-index");
    var index = input.value;
    console.warn(index);
    var item = RENTAL_DATA.cabins[index];
    var price = item.price;
    console.log(item);
    var priceSpan = document.querySelector("#price");
    priceSpan.innerHTML += price;
    rental.style.display = "none";
    message.classList.add("special-class");
}

function reset() {
    document.querySelector("form").reset();
}

function startUp() {
    rent();
    rentalButtonLoad();
    reset();
}

window.addEventListener("load", startUp);
