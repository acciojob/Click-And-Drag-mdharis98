// Your code here.
 const items = document.getElementById('items');
    let isDragging = false;
    let startX;
    let scrollLeft;

    items.addEventListener('mousedown', (e) => {
      isDragging = true;
      items.classList.add('active'); // Add active class to change styles
      startX = e.pageX - items.offsetLeft; // Get mouse position
      scrollLeft = items.scrollLeft; // Get current scroll position
    });

    items.addEventListener('mouseleave', () => {
      isDragging = false;
      items.classList.remove('active'); // Remove active class on mouse leave
    });

    items.addEventListener('mouseup', () => {
      isDragging = false;
      items.classList.remove('active'); // Remove active class on mouse up
    });

    items.addEventListener('mousemove', (e) => {
      if (!isDragging) return; // If not dragging, exit function
      e.preventDefault(); // Prevent default dragging behavior
      const x = e.pageX - items.offsetLeft; // Current mouse position
      const walk = (x - startX) * 2; // Calculate distance to scroll
      items.scrollLeft = scrollLeft - walk; // Scroll the items
    });