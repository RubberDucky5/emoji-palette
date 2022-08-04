// CORS makes me sad sometimes :(
let emoji = {
    emoji: ["❤️","👍","😎","💥","⭐","🔥","✔️","❗","❌","🚀","🌈","🐞"]
};
// fetch("data/emoji.json")
// .then(response => {
//    emoji = response.json();
// });

let ea = emoji.emoji;
let emojiButtonList = [];

for(let i = 0; i < ea.length; i++){
  let temp = document.createElement("button");
  temp.classList.add("copy-button");
  temp.innerHTML = ea[i];
  emojiButtonList.push(temp);
  temp.addEventListener('mousedown', (e) => {
    if(e.button != 0)
      return;

    navigator.clipboard.writeText(ea[i]);
  });
  document.body.appendChild(emojiButtonList[i]);
}
