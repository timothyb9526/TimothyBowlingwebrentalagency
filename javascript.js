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
    var num = document.getElementById("number").value;
    var name = document.getElementById("name").value;
    var zip = document.getElementById("zip").value;
    var city = document.getElementById("city").value;
    var email = document.getElementById("email").value;
    var phone = document.getElementById("phone").value;
    var address = document.getElementById("address").value;
    var state = document.getElementById("state").value;
    var product = document.getElementById("product");
    var input = document.querySelector("#form-index");
    var index = input.value;
    var item = RENTAL_DATA.cabins[index];
    var price = item.price;
    var productInfo = document.getElementById("product-info");
    var priceSpan = document.querySelector("#u-price");
    var nameSpan = document.querySelector("#u-name");
    product.setAttribute("class", "text-left");
    product.innerHTML +=
        "email adrress: " +
        email +
        "<br />" +
        "Phone number: " +
        phone +
        "<br />" +
        "Mailing adrress: " +
        address +
        " " +
        city +
        " " +
        state +
        " " +
        zip;
    nameSpan.innerHTML += name;
    productInfo.setAttribute("class", "product-border");
    priceSpan.innerHTML +=
        "Your total for renting for " + num + " days will be $" + price * num;
    rental.style.display = "none";
    message.classList.add("special-class");
}

function reset() {
    document.querySelectorAll("form").reset();
}

function startUp() {
    rent();
    rentalButtonLoad();
    reset();
}

window.addEventListener("load", startUp);
