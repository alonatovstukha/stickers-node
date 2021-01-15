const addSticker = document.getElementById('new-sticker');
const checkIcon = document.getElementById('check-icon');
const xIcon = document.getElementById('x-icon');
const stickers = document.getElementsByClassName('sticker');

let i = 0;

xIcon.addEventListener('click', () => {
  typeNote();
})

function typeNote() {
  addSticker.classList.toggle('display-block');
}

Array.prototype.forEach.call(stickers, function (sticker) {
  sticker.style.margin = margin();
  sticker.style.transform = rotate();
  sticker.style.background = color();

  sticker.addEventListener('mouseenter', () => {
    sticker.style.transform = 'scale(1.1)';
  });

  sticker.addEventListener('mouseleave', () => {
    sticker.style.transform = 'scale(1)';
  });

})


function margin() {
  const randomMargin = ['-5px', '1px', '10px', '15px', '20px'];
  return randomMargin[Math.floor(Math.random() * randomMargin.length)];
}

function rotate() {
  const randomRotate = ['rotate(3deg)', 'rotate(1deg)', 'rotate(-1deg)', 'rotate(-3deg)', 'rotate(-5deg)', 'rotate(-10deg)'];
  return randomRotate[Math.floor(Math.random() * randomRotate.length)];
}

function color() {
  const randomColor = ['#f0f4c3', '#e8f5e9', '#d7ccc8', '#80deea', '#d1c4e9', '#ffcdd2'];
  if (i > randomColor.length - 1) {
    i = 0;
  }
  return randomColor[i++];
}