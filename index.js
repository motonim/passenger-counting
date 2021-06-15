var count = 0;
var countEl = document.getElementById('count')

function increment() {
    count = count + 1;
    countEl.innerText = count
}