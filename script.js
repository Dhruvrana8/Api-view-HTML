document.addEventListener("DOMContentLoaded", () => {
  const apiListDiv = document.getElementById("apiList");

  if (apiListDiv) {
    fetch("data.json")
      .then((response) => response.json())
      .then((apiData) => {
        apiData.data.forEach((stack) => {
          const stackHeader = document.createElement("div");
          stackHeader.classList.add("stack-header");
          stackHeader.textContent = stack.stack;
          apiListDiv.appendChild(stackHeader);

          const screenSection = document.createElement("div");
          screenSection.classList.add("screen-section");
          apiListDiv.appendChild(screenSection);

          stackHeader.addEventListener("click", () => {
            screenSection.classList.toggle("open");
          });

          stack.screen.forEach((screen) => {
            const screenHeader = document.createElement("div");
            screenHeader.classList.add("screen-header");
            screenHeader.textContent = screen.name;
            screenSection.appendChild(screenHeader);

            const apiList = document.createElement("div");
            screenSection.appendChild(apiList);

            screenHeader.addEventListener("click", () => {
              apiList.classList.toggle("open");
            });

            Object.entries(screen.API).forEach(([key, value]) => {
              const apiItem = document.createElement("div");
              apiItem.classList.add("api-item");
              apiItem.innerHTML = `<strong>${key}</strong>: <a href="${value}">${value}</a>`;
              apiList.appendChild(apiItem);
            });
          });

          // Intersection Observer to add 'visible' class and open the screen section
          const observer = new IntersectionObserver(
            (entries) => {
              entries.forEach((entry) => {
                if (entry.isIntersecting) {
                  entry.target.classList.add("visible");
                  screenSection.classList.add("open");
                  observer.unobserve(entry.target); // Stop observing once it has been revealed
                }
              });
            },
            {
              threshold: 0.1,
            }
          );

          observer.observe(stackHeader);
        });
      })
      .catch((error) => console.error("Error fetching data:", error));
  }
});
