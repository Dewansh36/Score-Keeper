// alert('Pick A value!');
let p1button = document.querySelector('#p1');
let p2button = document.querySelector('#p2');
let rstbutton = document.querySelector('#rst');
let p1d = document.querySelector('#p1score');
let p2d = document.querySelector('#p2score');
let p1s = 0, p2s = 0, ws = 0;
let form = document.querySelector('#form');
let stat = true;
let select = document.querySelector('#drop');
p1button.addEventListener('click', function () {
    if (ws == 0) {
        alert('Pick the total no of points!');
    }
    else {
        if (stat == true) {
            p1s += 1;
        }
        if (p1s == ws) {
            stat = false;

            p1d.classList.add('winner');
            p2d.classList.add('loser');
        }
        p1d.textContent = p1s;
    }
});
p2button.addEventListener('click', function () {
    if (ws == 0) {
        alert('Pick the total no of points!');
    }
    else {
        if (stat == true) {
            p2s += 1;
        }
        if (p2s == ws) {
            stat = false;

            p1d.classList.add('loser');
            p2d.classList.add('winner');
        }
        p2d.textContent = p2s;
    }

});
rstbutton.addEventListener('click', reset);
function reset() {
    stat = true;
    p1s = 0, p2s = 0;
    p1d.classList.remove('winner', 'loser');
    p2d.classList.remove('winner', 'loser');
    p1d.textContent = p1s;
    p2d.textContent = p2s;
}
select.addEventListener('change', function () {
    ws = parseInt(this.value);
    reset();
})
form.addEventListener('submit', function (evt) {
    evt.preventDefault();
})