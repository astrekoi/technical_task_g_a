const colors = ['red', 'orange', 'yellow', 'green', 'blue', 'purple'];
document.getElementById("btn").addEventListener("click", changeBackgroundColor);

function changeBackgroundColor() {
    const randomColor = colors[Math.floor(Math.random() * colors.length)];
    document.body.style.backgroundColor = randomColor;
}
