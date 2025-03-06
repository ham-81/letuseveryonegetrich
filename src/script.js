// Get all the image elements
const images = document.querySelectorAll('.image');

// Add a scroll event listener
window.addEventListener('scroll', () => {
  images.forEach(image => {
    const rect = image.getBoundingClientRect();
    const windowHeight = window.innerHeight;

    // Calculate how far the image is from the center of the viewport
    const distanceFromCenter = Math.abs(rect.top + rect.height / 2 - windowHeight / 2);

    // Use distance to calculate scale (smaller distance -> larger scale)
    const scale = 1 + Math.max(0, 1 - distanceFromCenter / windowHeight);

    // Apply the zoom effect
    image.style.transform = `scale(${scale})`;
  });
});
