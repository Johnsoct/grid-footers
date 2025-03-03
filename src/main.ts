//import "@chrisjohnsoct/rolodex" 
//import "@chrisjohnsoct/core-css"

import "./style.scss"

const sandboxEl = document.getElementById("sandbox")

for (let i = 1; i <= 40; i++) {
    const column = document.createElement("div")
    const fragment = new DocumentFragment()
    const grid = document.createElement("div")
    const label = document.createElement("label")

    column.classList.add("flex-column")
    grid.classList.add("grid", "grid-template-columns", "grid-template-rows", "gap", "footer-column", `footer-column--${i}`, "border")
    //grid.classList.add("grid", "grid-flow-column", "grid-template-columns", "grid-template-rows", "gap", "footer-column", `footer-column--${i}`, "border")
    grid.id = "injecthere"

    label.textContent = `Grid with row flow - single container - ${i} items`

    column.append(label, grid)

    fragment.append(column)
    
    for (let ii = 1; ii <= i; ii++) {
        const anchor = document.createElement("anchor")

        anchor.textContent = "I am a long anchor tag"

        fragment.getElementById("injecthere").appendChild(anchor)
    }

    sandboxEl.appendChild(fragment)
}
