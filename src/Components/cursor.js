document.addEventListener("DOMContentLoaded", () => {
    // Create cursor elements
    const cursorDot = document.createElement("div");
    const cursorOutline = document.createElement("div");
  
    cursorDot.classList.add("cursor-dot");
    cursorOutline.classList.add("cursor-outline");
  
    document.body.appendChild(cursorDot);
    document.body.appendChild(cursorOutline);
  
    document.addEventListener("mousemove", (e) => {
      const { clientX: x, clientY: y } = e;
  
      cursorDot.style.transform = `translate(${x}px, ${y}px)`;
      cursorOutline.style.transform = `translate(${x - 10}px, ${y - 10}px)`;
    });
  });
  