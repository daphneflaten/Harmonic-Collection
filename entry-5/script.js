var imageElements = document.querySelectorAll(".clickable-image");

imageElements.forEach(function(imageElement) {
    imageElement.addEventListener("click", function() {
        var textElement = this.nextElementSibling; // Get the next sibling element (the associated text)

        if (textElement.style.display === "none" || textElement.style.display === "") {
            textElement.style.display = "block";
        } else {
            textElement.style.display = "none";
        }
    });
});

function toggleTextVisibility(img) {
    const textElement = img.nextElementSibling; // Get the next sibling, which is the text element
    if (textElement.style.display === "none" || textElement.style.display === "") {
        textElement.style.display = "block"; // Show the text
        textElement.style.zIndex = 1; // Set a higher z-index to bring it to the front
    } else {
        textElement.style.display = "none"; // Hide the text
    }
}