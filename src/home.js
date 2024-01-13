const createHome = () => {
  const content = document.querySelector("#content");
  const mainContainer = document.createElement("div");
  const mainContent = document.createElement("div");
  const cakeContainer = document.createElement("div");
  const historyContainer = document.createElement("div");
  const historyText = document.createElement("div");
  const sinceText = document.createElement("h2");
  const cakeImg = document.createElement("img");
  const welcomeTextOne = document.createElement("p");
  const welcomeTextTwo = document.createElement("p");
  const welcomeTextThree = document.createElement("p");

  cakeImg.src = "./img/cake.jpg";
  cakeImg.classList.add("cake");
  cakeContainer.alt = "A strawberry cake picture";
  mainContainer.classList.add("main");
  mainContent.classList.add("main-content");
  cakeContainer.classList.add("cake-container");
  historyContainer.classList.add("history-container");
  historyText.classList.add("history-text");
  sinceText.classList.add("since");
  welcomeTextOne.classList.add("text-1");
  welcomeTextTwo.classList.add("text-2");
  welcomeTextThree.classList.add("text-3");
  mainContainer.appendChild(mainContent);
  mainContent.appendChild(cakeContainer);
  mainContent.appendChild(historyContainer);
  cakeContainer.appendChild(cakeImg);
  historyContainer.appendChild(sinceText);
  historyContainer.appendChild(historyText)
  sinceText.textContent = "Cooking Since 1978";
  welcomeTextOne.textContent =
    "We have been at your service for more than 40 years.";
  welcomeTextTwo.textContent =
    "We always work with the best qualities of meat, pasta and fish.";
  welcomeTextThree.textContent =
    "We have been chosen this year as the best local Mediterranean food restaurant.";
    historyText.appendChild(welcomeTextOne);
    historyText.appendChild(welcomeTextTwo);
    historyText.appendChild(welcomeTextThree);
  return mainContainer;
};

export default createHome;
