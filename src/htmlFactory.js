const setIdentifier = (element, indentifier) => {
  if (indentifier.charAt(0) === ".") {
    element.classList.add(indentifier.substr(1, indentifier.length));
  }

  if (indentifier.charAt(0) === "#") {
    element.setAttribute("id", indentifier.substr(1, indentifier.length));
  }
};

const createSimpleElement = (tagName, indentifier) => {
  const element = document.createElement(tagName);
  setIdentifier(element, indentifier);
  return element;
};

const createImg = (tagName, indentifier, mySrc, myAlt) => {
  const element = document.createElement(tagName);
  setIdentifier(element, indentifier);
  element.src = mySrc;
  element.alt = myAlt;
  return element;
};

const createText = (tagName, indentifier, text) => {
  const element = document.createElement(tagName);
  setIdentifier(element, indentifier);
  element.textContent = text;
  return element;
};

const createLink = (tagName, indentifier, myTarget, myHref, text) => {
  const element = document.createElement(tagName);
  setIdentifier(element, indentifier);
  element.target = myTarget;
  element.href = myHref;
  element.textContent = text;
  return element;
};

const createForm = (tagName, indentifier, action, method) => {
  const element = document.createElement(tagName);
  setIdentifier(element, indentifier);
  element.action = action;
  element.method = method;
  return element;
};

export {
  createSimpleElement,
  createImg,
  createText,
  createLink,
  createForm,
};
