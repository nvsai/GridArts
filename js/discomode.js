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

        function deactivateDiscoMode() {
            discoMode = false;
            clearInterval(discoInterval);

            const gridBoxes = document.querySelectorAll(".grid-box");
            gridBoxes.forEach(box => {
                box.style.backgroundColor = "transparent";
            });
        }

        function getRandomColor() {
            const letters = "0123456789ABCDEF";
            let color = "#";
            for (let i = 0; i < 6; i++) {
                color += letters[Math.floor(Math.random() * 16)];
            }
            return color;
        }
