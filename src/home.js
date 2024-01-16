import { createImg, createSimpleElement, createText } from "./htmlFactory";
const createHome = () => {
  const homeContainer = createSimpleElement("div", ".home-container");
  const imgContainer = createSimpleElement("div", ".cake-container");
  const historyContainer = createSimpleElement("div", ".history-container");
  const historyTitle = createText("h2", ".history-title", "Cooking Since 1978");
  const historyItems = [
    createText(
      "p",
      ".history-item",
      "More than 40 years at your service. We know how you prefer things and that's why we do them as always."
    ),
    createText(
      "p",
      ".history-item",
      "We offer you the best quality and the freshest products in the environment so that you can enjoy an unforgettable moment."
    ),
    createText(
      "p",
      ".history-item",
      "Go ahead, come try our best recipes and enjoy the tranquility and our sea views."
    ),
  ];
  const cakeImg = createImg(
    "img",
    ".cake",
    "./img/cake.jpg",
    "A picture of a cake"
  );
  imgContainer.appendChild(cakeImg);

  homeContainer.appendChild(imgContainer);
  historyContainer.appendChild(historyTitle);
  for (let i = 0; i < historyItems.length; i++) {
    historyContainer.appendChild(historyItems[i]);
  }
  homeContainer.appendChild(historyContainer);
  return homeContainer;
};

export default createHome;
