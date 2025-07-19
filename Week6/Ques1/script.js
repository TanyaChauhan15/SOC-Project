let input = document.getElementById('input');
let button = document.getElementById('start');
let output = document.getElementById('output');

button.addEventListener('click',Pattern);

function Pattern(){
let n = parseInt(input.value);

let pattern = '';
for (let i = n; i >= 1; i -= 2) {
  let spaces = (n - i) / 2;
  pattern += ' '.repeat(spaces) + '*'.repeat(i) + '\n';
}
for (let i = 3; i <= n; i += 2) {
  let spaces = (n - i) / 2;
  pattern += ' '.repeat(spaces) + '*'.repeat(i) + '\n';
}

output.innerText = pattern;}
