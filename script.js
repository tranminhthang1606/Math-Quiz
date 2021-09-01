
add();

function add() {
  let container = document.querySelector(".container");

  function addQuestion() {
    let n1 = Math.floor(Math.random() * 100 + 1),
      n2 = Math.floor(Math.random() * 100 + 1),
      c = document.createElement("div"),
      t = document.createElement("p"),
      buttons = [],
      e,
      i,
      answered = false;

    c.className = "Question";
    t.className = "QQ";
    t.innerHTML = `<span class="n1">${n1}</span> <span class="dau">+</span> <span class="n2">${n2}</span> <span class="bang">=</span> <span class="dA">?</span>`;
    container.appendChild(c);
    c.appendChild(t);

    function checkAnswer() {
      let a = n1 + n2,
        i,
        e;
      if (!answered) {
        answered = true;
        for (i = 0; i < buttons.length; i++) {
          if (buttons[i].answer === a) {
            buttons[i].style.color = "#080";
            buttons[i].style.fontWeight = "bold";
            e = document.createElement("p");
            e.className = "QA";
            c.appendChild(e);
            if (buttons[i] === this) {
              e.innerHTML = "CORRECT";
              e.style.color = "#080";
            } else {
              e.innerHTML = "INCORRECT";
              e.style.color = "#f00";
            }
          } else if (buttons[i] === this) {
            buttons[i].style.color = "#f00";
          } else {
            buttons[i].style.color = "#888";
          }
        }

        (() => {
          setTimeout(() => {
            $(".Question").remove();
            addQuestion();
          }, 1000);
        })(4);
      }
    }

    for (i = 0; i < 4; i++) {
      e = document.createElement("button");
      e.innerHTML = e.answer = i
        ? n1 + (n2 + (Math.random() > 0.5 || i >= n2 ? i : -i))
        : n1 + n2;
      e.onclick = checkAnswer;
      buttons[Math.random() > 0.5 ? "push" : "unshift"](e);
    }
    for (i = 0; i < buttons.length; i++) {
      c.appendChild(buttons[i]);
    }
  }
  if ($(".Question").length > 0) {
    $(".Question").remove();
  }
  addQuestion();
}

function sub() {
  let container = document.querySelector(".container");

  function subQuestion() {
    let n1 = Math.floor(Math.random() * 100 + 1),
      n2 = Math.floor(Math.random() * 100 + 1),
      c = document.createElement("div"),
      t = document.createElement("p"),
      buttons = [],
      e,
      i,
      answered = false;

    c.className = "Question";
    t.className = "QQ";
    t.innerHTML = `<span class="n1">${n1}</span> <span class="dau">-</span> <span class="n2">${n2}</span> <span class="bang">=</span> <span class="dA">?</span>`;
    container.appendChild(c);
    c.appendChild(t);

    function checkAnswer() {
      let a = n1 - n2,
        i,
        e;
      if (!answered) {
        answered = true;
        for (i = 0; i < buttons.length; i++) {
          if (buttons[i].answer === a) {
            buttons[i].style.color = "#080";
            buttons[i].style.fontWeight = "bold";
            e = document.createElement("p");
            e.className = "QA";
            c.appendChild(e);
            if (buttons[i] === this) {
              e.innerHTML = "CORRECT";
              e.style.color = "#080";
            } else {
              e.innerHTML = "INCORRECT";
              e.style.color = "#f00";
            }
          } else if (buttons[i] === this) {
            buttons[i].style.color = "#f00";
          } else {
            buttons[i].style.color = "#888";
          }
        }

        (() => {
          setTimeout(() => {
            $(".Question").remove();
            subQuestion();
          }, 1000);
        })(4);
      }
    }

    for (i = 0; i < 4; i++) {
      e = document.createElement("button");
      e.innerHTML = e.answer = i
        ? n1 - (n2 - (Math.random() > 0.5 || i >= n2 ? i : -i))
        : n1 - n2;
      e.onclick = checkAnswer;
      buttons[Math.random() > 0.5 ? "push" : "unshift"](e);
    }
    for (i = 0; i < buttons.length; i++) {
      c.appendChild(buttons[i]);
    }
  }

  if ($(".Question").length > 0) {
    $(".Question").remove();
  }

  subQuestion();
}

function mul() {
  let container = document.querySelector(".container");

  function mulQuestion() {
    let n1 = Math.floor(Math.random() * 10 + 1),
      n2 = Math.floor(Math.random() * 10 + 1),
      c = document.createElement("div"),
      t = document.createElement("p"),
      buttons = [],
      e,
      i,
      answered = false;

    c.className = "Question";
    t.className = "QQ";
    t.innerHTML = `<span class="n1">${n1}</span> <span class="dau">x</span> <span class="n2">${n2}</span> <span class="bang">=</span> <span class="dA">?</span>`;
    container.appendChild(c);
    c.appendChild(t);

    function checkAnswer() {
      let a = n1 * n2,
        i,
        e;
      if (!answered) {
        answered = true;
        for (i = 0; i < buttons.length; i++) {
          if (buttons[i].answer === a) {
            buttons[i].style.color = "#080";
            buttons[i].style.fontWeight = "bold";
            e = document.createElement("p");
            e.className = "QA";
            c.appendChild(e);
            if (buttons[i] === this) {
              e.innerHTML = "CORRECT";
              e.style.color = "#080";
            } else {
              e.innerHTML = "INCORRECT";
              e.style.color = "#f00";
            }
          } else if (buttons[i] === this) {
            buttons[i].style.color = "#f00";
          } else {
            buttons[i].style.color = "#888";
          }
        }

        (() => {
          setTimeout(() => {
            $(".Question").remove();
            mulQuestion();
          }, 1000);
        })(4);
      }
    }

    for (i = 0; i < 4; i++) {
      e = document.createElement("button");
      e.innerHTML = e.answer = i
        ? n1 * (n2 + (Math.random() > 0.5 || i >= n2 ? i : ++i))
        : n1 * n2;
      e.onclick = checkAnswer;
      buttons[Math.random() > 0.5 ? "push" : "unshift"](e);
    }
    for (i = 0; i < buttons.length; i++) {
      c.appendChild(buttons[i]);
    }
  }

  if ($(".Question").length > 0) {
    $(".Question").remove();
  }

  mulQuestion();
}

function div() {
  let container = document.querySelector(".container");

  function divQuestion() {
    let n1 = Math.floor(Math.random() * 100 + 1),
      n2 = Math.floor(Math.random() * 10 + 1),
      c = document.createElement("div"),
      t = document.createElement("p"),
      buttons = [],
      e,
      i,
      answered = false;

    c.className = "Question";
    t.className = "QQ";
    t.innerHTML = `<span class="n1">${n1}</span> <span class="dau">:</span> <span class="n2">${n2}</span> <span class="bang">=</span> <span class="dA">?</span>`;
    container.appendChild(c);
    c.appendChild(t);

    function checkAnswer() {
      let a = Math.round((n1 / n2) * 100) / 100,
        i,
        e;
      if (!answered) {
        answered = true;
        for (i = 0; i < buttons.length; i++) {
          if (buttons[i].answer === a) {
            buttons[i].style.color = "#080";
            buttons[i].style.fontWeight = "bold";
            e = document.createElement("p");
            e.className = "QA";
            c.appendChild(e);
            if (buttons[i] === this) {
              e.innerHTML = "CORRECT";
              e.style.color = "#080";
            } else {
              e.innerHTML = "INCORRECT";
              e.style.color = "#f00";
            }
          } else if (buttons[i] === this) {
            buttons[i].style.color = "#f00";
          } else {
            buttons[i].style.color = "#888";
          }
        }

        (() => {
          setTimeout(() => {
            $(".Question").remove();
            divQuestion();
          }, 1000);
        })(4);
      }
    }

    for (i = 0; i < 4; i++) {
      e = document.createElement("button");
      e.innerHTML = e.answer =
        Math.round(
          (i
            ? n1 / (n2 + (Math.random() > 0.5 || i >= n2 ? i : -i))
            : n1 / n2) * 100
        ) / 100;
      e.onclick = checkAnswer;
      buttons[Math.random() > 0.5 ? "push" : "unshift"](e);
    }
    for (i = 0; i < buttons.length; i++) {
      c.appendChild(buttons[i]);
    }
  }

  if ($(".Question").length > 0) {
    $(".Question").remove();
  }

  divQuestion();
}
    