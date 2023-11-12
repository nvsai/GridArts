function drawIndiaFlag() {
            clearColors();

            const gridBoxes = document.querySelectorAll(".grid-box");
            const totalRows = document.getElementById("rows").value;
            const totalCols = document.getElementById("cols").value;

            const saffronRows = Math.floor(totalRows / 3);
            const whiteRows = totalRows - saffronRows * 2;

            // Draw Saffron
            for (let i = 0; i < saffronRows * totalCols; i++) {
                gridBoxes[i].style.backgroundColor = "#FF9933"; // Saffron Color
            }

            // Draw White
            for (let i = saffronRows * totalCols; i < (saffronRows + whiteRows) * totalCols; i++) {
                gridBoxes[i].style.backgroundColor = "#FFFFFF"; // White Color
            }

            // Draw Green
            for (let i = (saffronRows + whiteRows) * totalCols; i < totalRows * totalCols; i++) {
                gridBoxes[i].style.backgroundColor = "#138808"; // Green Color
            }

            // Draw Ashoka Chakra (Blue Circle in the Center)
            const centerX = Math.floor(totalCols / 2);
            const centerY = Math.floor(totalRows / 2);

            const radius = Math.min(totalCols, totalRows) / 6;

            for (let i = 0; i < totalRows; i++) {
                for (let j = 0; j < totalCols; j++) {
                    const distance = Math.sqrt(Math.pow(centerX - j, 2) + Math.pow(centerY - i, 2));

                    if (distance < radius) {
                        gridBoxes[i * totalCols + j].style.backgroundColor = "#000080"; // Navy Blue Color
                    }
                }
            }
        }
