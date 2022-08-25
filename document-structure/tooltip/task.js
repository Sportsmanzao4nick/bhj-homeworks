const hasTooltip = Array.from(document.getElementsByClassName("has-tooltip"));
hasTooltip.forEach(element => element.addEventListener("click", hasTooltipClick));

function hasTooltipClick(event) {
    event.preventDefault();

    const tooltip = document.querySelector(".tooltip");
    if (tooltip) {

        if (tooltip === event.target.nextElementSibling) {
            tooltip.remove();
            return;
        } else {
            tooltip.remove();
        }
    }

    const titleTooltip = this.title,
          elementRect = this.getBoundingClientRect(),
          leftTooltip = elementRect.left,
          topTooltip = elementRect.top + elementRect.height;

    this.insertAdjacentHTML("afterEnd", `<div class="tooltip tooltip_active" style="left: ${leftTooltip}px; top: ${topTooltip}px">${titleTooltip}</div>`);
}