function changeColor(event) {
            if (event.target.classList.contains("grid-box")) {
                const box = event.target;
                const currentColor = box.style.backgroundColor;

                if (currentColor === "" || currentColor === "transparent") {
                    const selectedColor = document.getElementById("color-picker").value;
                    box.style.backgroundColor = selectedColor;
                } else {
                    box.style.backgroundColor = "transparent";
                }
            }
        }
