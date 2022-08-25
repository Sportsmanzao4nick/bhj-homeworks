const controls = document.getElementsByClassName("product__quantity-controls"),
      products = document.getElementsByClassName("product"),
      cart = document.querySelector(".cart__products");

for (let control of controls) {
    const dec = control.querySelector(".product__quantity-control_dec"),
          inc = control.querySelector(".product__quantity-control_inc"),
          controlValue = control.querySelector(".product__quantity-value");

    inc.onclick = () => {
        controlValue.textContent = String(Number(controlValue.textContent) + 1);
    };

    dec.onclick = () => {
        if (Number(controlValue.textContent) > 1) {
            controlValue.textContent = String(Number(controlValue.textContent) - 1);
        }
    };
};

for (let product of products) {
    let buttonAdd = product.querySelector(".product__add"),
        count = product.querySelector(".product__quantity-value"),
        quantity = product.getAttribute("data-id");
    const img = product.querySelector(".product__image");
    

    buttonAdd.onclick = () => {
        let cartProducts = cart.querySelectorAll(".cart__product"),
            item = Array.from(cartProducts).find((item) => {
            if (item.getAttribute("data-id") === quantity) {
                return item;
            }
        });

        if (item) {
            let element = item.querySelector(".cart__product-count");
            element.textContent = String(Number(element.textContent) + Number(count.textContent));
            count.textContent = 1;
            return;
        }

        let div = document.createElement("div"),
            image = document.createElement("img"),
            divChild = document.createElement("div");
        div.appendChild(image);
        image.setAttribute("src", img.getAttribute("src"));
        image.classList.add("cart__product-image");
        div.classList.add("cart__product");
        div.setAttribute("data-id", quantity);
        divChild.classList.add("cart__product-count");
        divChild.textContent = count.textContent;
        count.textContent = "1";
        div.appendChild(divChild);
        cart.appendChild(div);
    };
};