//import "@chrisjohnsoct/rolodex" 
//import "@chrisjohnsoct/core-css"

import "./style.scss"

const buttonGridColumnFlow = document.getElementById("grid-column-row")
const buttonGridRowFlow = document.getElementById("grid-row-flow")
const sandboxEl = document.getElementById("sandbox")

function generateGridFlowRowColumns() {
    for (let i = 1; i <= 40; i++) {
        const column = document.createElement("div")
        const fragment = new DocumentFragment()
        const grid = document.createElement("div")
        const label = document.createElement("label")

        column.classList.add("flex-column")
        grid.classList.add("grid", "grid-template-columns", "grid-template-rows", "gap", "footer-column", `footer-column--${i}`, "border")
        //grid.classList.add("grid", "grid-flow-column", "grid-template-columns", "grid-template-rows", "gap", "footer-column", `footer-column--${i}`, "border")
        grid.id = "injecthere"
        sandboxEl.classList.add("flex", "flex-wrap", "gap")

        label.textContent = `${i} items`

        column.append(label, grid)

        fragment.append(column)
        
        for (let ii = 1; ii <= i; ii++) {
            const anchor = document.createElement("a")

            anchor.textContent = "1st Class Boat and RV Storage"

            fragment.getElementById("injecthere").appendChild(anchor)
        }

        sandboxEl.appendChild(fragment)
    }
}

buttonGridRowFlow.addEventListener("click", generateGridFlowRowColumns)

