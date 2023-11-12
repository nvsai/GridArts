function exportGrid() {
            const gridContainer = document.getElementById("grid-container");
            const canvas = document.createElement("canvas");
            const rows = parseInt(getComputedStyle(gridContainer).getPropertyValue("--rows"));
            const cols = parseInt(getComputedStyle(gridContainer).getPropertyValue("--cols"));

            canvas.width = gridContainer.offsetWidth;
            canvas.height = gridContainer.offsetHeight;

            const ctx = canvas.getContext("2d");
            const gridBoxes = document.querySelectorAll(".grid-box");

            gridBoxes.forEach((box, index) => {
                const row = Math.floor(index / cols);
                const col = index % cols;
                const color = box.style.backgroundColor;

                ctx.fillStyle = color;
                ctx.fillRect((canvas.width / cols) * col, (canvas.height / rows) * row, canvas.width / cols, canvas.height / rows);
            });

            const link = document.createElement("a");
            link.href = canvas.toDataURL("image/png");
            link.download = "grid.png";
            link.click();
        }
