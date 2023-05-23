document.addEventListener("DOMContentLoaded", function () {
    var tooltipElements = document.getElementsByClassName("tooltip");

    Array.prototype.forEach.call(tooltipElements, function (element) {
        var tooltipText = element.getAttribute("data-tooltip");
        var tooltip = element.getElementsByClassName("tooltiptext")[0];
        tooltip.textContent = tooltipText;

        element.addEventListener("mousemove", function (event) {
            tooltip.style.top = (event.clientY + 10) + "px";
            tooltip.style.left = (event.clientX + 10) + "px";
        });
    });
});