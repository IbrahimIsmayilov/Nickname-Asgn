let nameList = [
  "Crusher",
  "the Scientist",
  "Twinkle-toes",
  "the Coder",
  "the Jester",
  "the Sloth",
  "Quick-Silver",
];

let outputEl = document.getElementById("output");
let randomNicknameBtn = document.getElementById("random-nickname");
let allNicknamesBtn = document.getElementById("all-nicknames");

randomNicknameBtn.addEventListener("click", randomNickname);
allNicknamesBtn.addEventListener("click", allNicknames);

function randomNickname() {
  let firstName = document.getElementById("first-name").value;
  let lastName = document.getElementById("last-name").value;
  let nickname = randomElement(nameList);
  output.innerHTML = `${firstName} ${nickname} ${lastName}`;
}
function allNicknames() {
  for (i = 0; i < nameList.length; i++) {
    output.innerHTML += ` ${nameList[i]}`;
  }
}
