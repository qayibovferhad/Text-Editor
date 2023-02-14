let optionButtons = document.querySelectorAll(".option-button");
let advancedOptionButtons = document.querySelectorAll(".adv-option-button");
let fontName = document.querySelector("#fontName");
let fontSizeRef = document.querySelector("#fontSize");
let writingArea = document.querySelector("#text-input");
let spacingButtons = document.querySelectorAll(".spacing");
let formatButtons = document.querySelectorAll(".format");
let scriptButtons = document.querySelectorAll(".script");
let alignButtons = document.querySelectorAll(".align");
let linkButton = document.getElementById("createLink");
let fontList = [
  "Arial",
  "Verdana",
  "Times New Roman",
  "Garamond",
  "Georgia",
  "Courier New",
  "cursive",
];

const initializer = () => {
  highlighter(alignButtons, true);
  highlighter(formatButtons, true);
  highlighter(spacingButtons, true);
  highlighter(scriptButtons, true);

  fontList.map((value) => {
    let option = document.createElement("option");
    option.value = value;
    option.innerHTML = value;
    fontName.appendChild(option);
  });
  for (let i = 1; i <= 7; i++) {
    let option = document.createElement("option");
    option.value = i;
    option.innerHTML = i;
    fontSizeRef.appendChild(option);
  }
  fontSizeRef.value = 3;
  const modifyText = (command, defaultUi, value) => {
    document.execCommand(command, defaultUi, value);
  };
  optionButtons.forEach((button) => {
    button.addEventListener("click", () => {
      modifyText(button.id, false, null);
    });
  });
  advancedOptionButtons.forEach((button) => {
    button.addEventListener("change", () => {
      modifyText(button.id, false, button.value);
    });
  });
  linkButton.addEventListener("click", function () {
    let userLink = prompt("Enter a Url");
    if (/http/i.test(userLink)) {
      modifyText(linkButton.id, false, userLink);
    } else {
      userLink = "http://" + userLink;
      modifyText(linkButton.id, false, userLink);
    }
  });
};
const highlighter = (className, needsRemoval) => {
  className.forEach((button) => {
    button.addEventListener("click", function () {
      if (needsRemoval) {
        let alreadyActive = false;
        if (button.classList.contains("active")) {
          alreadyActive = true;
        }
        highlightRemover(className);
        if (!alreadyActive) {
          button.classList.add("active");
        }
      } else {
        button.classList.toggle("active");
      }
    });
  });
};
const highlightRemover = (className) => {
  className.forEach((button) => {
    button.classList.remove("active");
  });
};
window.onload = initializer();
