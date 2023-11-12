function drawGrid() {
            const rows = document.getElementById("rows").value;
            const cols = document.getElementById("cols").value;
            const gridContainer = document.getElementById("grid-container");

            // Set custom properties to be used in CSS
            gridContainer.style.setProperty("--rows", rows);
            gridContainer.style.setProperty("--cols", cols);

            // Generate grid boxes
            gridContainer.innerHTML = "";
            for (let i = 0; i < rows * cols; i++) {
                const box = document.createElement("div");
                box.className = "grid-box";
                const rowIdx = i < cols ? i + 1 : null;
                const colIdx = i % cols === 0 ? Math.floor(i / cols) + 1 : null;

                if (rowIdx !== null) {
                    const rowIndex = document.createElement("span");
                    rowIndex.className = "row-index";
                    rowIndex.textContent = rowIdx;
                    box.appendChild(rowIndex);
                }

                if (colIdx !== null) {
                    const colIndex = document.createElement("span");
                    colIndex.className = "col-index";
                    colIndex.textContent = colIdx;
                    box.appendChild(colIndex);
                }

                gridContainer.appendChild(box);
            }
        }
