function clearColors() {
            const gridBoxes = document.querySelectorAll(".grid-box");
            gridBoxes.forEach(box => {
                box.style.backgroundColor = "transparent";
            });
            deactivateDiscoMode();
        }

        function activateDiscoMode() {
            if (!discoMode) {
                discoMode = true;
                discoInterval = setInterval(() => {
                    const gridBoxes = document.querySelectorAll(".grid-box");
                    gridBoxes.forEach(box => {
                        const randomColor = getRandomColor();
                        box.style.backgroundColor = randomColor;
                    });
                }, 500);
            } else {
                deactivateDiscoMode();
            }
        }
