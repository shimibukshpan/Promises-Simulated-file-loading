let div1 = document.getElementById('div-1');
let div2 = document.getElementById('div-2');
let div3 = document.getElementById('div-3');

let promise1 = new Promise((res, rej) => {
   let set1 =  setTimeout(() => {
        res("rsolve!");
        rej("not rsolve!");
        div1.innerHTML = '!!קובץ נטען'
    }, 2000);
});

let promise2 = new Promise((res, rej) => {
    let set2 = setTimeout(() => {
        res("rsolve!");
        rej("not rsolve!");
        div2.innerHTML = '!!קובץ נטען'
    }, 4000);
});

let promise3 = new Promise((res, rej) => {
    let set3 = setTimeout(() => {
        res("rsolve!");
        rej("not rsolve!");
        div3.innerHTML = '!!קובץ נטען'
    }, 6000);
});

Promise.all([promise1, promise2, promise3]).then((values) => {
    console.log(values);
}).catch((reason) => {
    console.log(reason);
});

setInterval(function () {
   Promise.race([promise1, promise2, promise3]).then((value) => {
     console.log(value);
 })
}, 1000);
