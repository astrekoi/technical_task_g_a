document.getElementById('container').addEventListener('click', toggleSelected);

function toggleSelected(event) {
    if (event.target.classList.contains('item')) {
        event.target.classList.toggle('selected');
    }
}
