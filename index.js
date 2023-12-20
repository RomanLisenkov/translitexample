const input = document.querySelector(".translator__areaofinput__input");

const inputbutton = document.querySelector(".translator__areaofinput__button");

const dictionaryRows = document.querySelector(".translator__dictionary__rows");

const clearall = document.querySelector(".translator__clearall");

const rowInitial = document.querySelector(
  ".translator__dictionary__rows__row__initial"
);

function translit(initialstring) {
  let dictionary = {
    а: "a",
    б: "b",
    в: "v",
    г: "g",
    д: "d",
    е: "e",
    ё: "e",
    ж: "zh",
    з: "z",
    и: "i",
    й: "y",
    к: "k",
    л: "l",
    м: "m",
    н: "n",
    о: "o",
    п: "p",
    р: "r",
    с: "s",
    т: "t",
    у: "u",
    ф: "f",
    х: "h",
    ц: "c",
    ч: "ch",
    ш: "sh",
    щ: "sch",
    ь: "'",
    ы: "y",
    ъ: "",
    э: "e",
    ю: "yu",
    я: "ya",

    А: "A",
    Б: "B",
    В: "V",
    Г: "G",
    Д: "D",
    Е: "E",
    Ё: "E",
    Ж: "Zh",
    З: "Z",
    И: "I",
    Й: "Y",
    К: "K",
    Л: "L",
    М: "M",
    Н: "N",
    О: "O",
    П: "P",
    Р: "R",
    С: "S",
    Т: "T",
    У: "U",
    Ф: "F",
    Х: "H",
    Ц: "C",
    Ч: "Ch",
    Ш: "Sh",
    Щ: "Sch",
    Ь: "'",
    Ы: "Y",
    Ъ: "",
    Э: "E",
    Ю: "Yu",
    Я: "Ya",
  };
  let resultstring = "";

  for (let i = 0; i < initialstring.length; i++) {
    if (dictionary[initialstring[i]] === undefined) {
      resultstring += initialstring[i];
    } else {
      resultstring += dictionary[initialstring[i]];
    }
  }
  return resultstring;
}

dictionaryRows.addEventListener("mouseover", (event) => {
  if (
    event.target.id !== "undeletable" &&
    event.target.innerText.length > 7 &&
    (event.target.matches(
      ".translator__dictionary__rows__row__initial__text"
    ) ||
      event.target.matches(".translator__dictionary__rows__row__result__text"))
  ) {
    let hiddentext = document.createElement("div");
    hiddentext.classList.add("hidn");
    hiddentext.innerText = event.target.innerText;

    event.target.parentNode.append(hiddentext);

    hiddentext.style.left = getComputedStyle(event.target).marginLeft;
    hiddentext.style.bottom = "20px";
    if (hiddentext.getBoundingClientRect().top <
    dictionaryRows.getBoundingClientRect().top){
    
      
      hiddentext.style.fontSize =  "14px";
      
      
    }}

    
  }
);

dictionaryRows.addEventListener("mouseout", (event) => {
  let hiddentext = document.querySelector(".hidn");
  if (hiddentext) {
    hiddentext.remove();
  }
});

inputbutton.addEventListener("click", (event) => {
  createnewrow();
});

function createnewrow() {
  if (input.value != "") {
    const newRow = document.createElement("li");
    const divrow = document.createElement("div");
    divrow.classList.add("translator__dictionary__rows__row");
    const initial = document.createElement("div");
    initial.classList.add("translator__dictionary__rows__row__initial");
    const initialtext = document.createElement("div");
    initialtext.classList.add(
      "translator__dictionary__rows__row__initial__text"
    );
    initialtext.innerText = input.value;
    initial.append(initialtext);

    divrow.append(initial);

    const result = document.createElement("div");
    result.classList.add("translator__dictionary__rows__row__result");
    const resulttext = document.createElement("div");
    resulttext.classList.add("translator__dictionary__rows__row__result__text");
    resulttext.innerText = translit(input.value);
    result.append(resulttext);

    const button = document.createElement("div");
    button.classList.add("translator__dictionary__rows__row__result__button");

    const imagebutton = document.createElement("img");
    imagebutton.src = "./icons/deleticon.svg";
    button.append(imagebutton);

    result.append(button);
    divrow.append(result);
    newRow.append(divrow);
    dictionaryRows.append(newRow);
    input.value = "";
  }
}

document.addEventListener("keydown", (event) => {
  if (event.code === "Enter") {
    createnewrow();
  }
});

dictionaryRows.addEventListener("click", (event) => {
  if (event.target.matches("img")) {
    if (
      event.target.parentNode.parentNode.parentNode.parentNode.id !== "privet"
    ) {
      event.target.parentNode.parentNode.parentNode.parentNode.remove();
    }
  }
});

clearall.addEventListener("click", (event) => {
  const allrows = document.querySelectorAll("li");
  console.log(allrows);
  allrows.forEach((element) => {
    if (element.id !== "privet") {
      element.remove();
    }
  });
});
