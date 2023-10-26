document.addEventListener('DOMContentLoaded', function() {
    const quantityButtons = document.querySelectorAll(".quantity-buttons");

    quantityButtons.forEach(function(buttons) {
        const inputNumber = buttons.querySelector("input");
        const minusButton = buttons.querySelector(".minus");
        const plusButton = buttons.querySelector(".plus");

        plusButton.addEventListener('click', function(){
            if (inputNumber.value < parseInt(inputNumber.getAttribute("max"))) {
                inputNumber.stepUp();
                if (inputNumber.value === inputNumber.getAttribute("max")) {
                    plusButton.disabled = true;
                }
                minusButton.disabled = false;
            }
            let change = new Event("change");
            inputNumber.dispatchEvent(change);
        });

        minusButton.addEventListener('click', function(){
            if (inputNumber.value > parseInt(inputNumber.getAttribute("min"))) {
                inputNumber.stepDown();
                if (inputNumber.value === inputNumber.getAttribute("min")) {
                    minusButton.disabled = true;
                }
                plusButton.disabled = false;
            }
            let change = new Event("change");
            inputNumber.dispatchEvent(change);
        });
    });
});