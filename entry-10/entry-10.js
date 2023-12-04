document.addEventListener('DOMContentLoaded', function () {
    // Show the popup right away
    showPopup();
});

function showPopup() {
    var popupContainer = document.getElementById('popup-container');
    popupContainer.style.display = 'block';
}

function closePopup() {
    var popupContainer = document.getElementById('popup-container');
    popupContainer.style.display = 'none';
}

const draggables = document.querySelectorAll('.draggable');

draggables.forEach(draggable => {
  let offsetX, offsetY;

  draggable.addEventListener('mousedown', e => {
    e.preventDefault();

    offsetX = e.clientX - draggable.getBoundingClientRect().left;
    offsetY = e.clientY - draggable.getBoundingClientRect().top;

    draggable.classList.add('dragging');

    document.addEventListener('mousemove', onMouseDrag);
    document.addEventListener('mouseup', () => {
      draggable.classList.remove('dragging');
      document.removeEventListener('mousemove', onMouseDrag);
    });
  });

  function onMouseDrag(e) {
    const x = e.clientX - offsetX;
    const y = e.clientY - offsetY;

    draggable.style.left = `${x}px`;
    draggable.style.top = `${y}px`;
  }
});
