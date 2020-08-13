function doSomeTime() {
    console.log(222);
}

// setTimeout system 1
setTimeout(function () {
    console.log('laze and waiting');
}, 1000)

// setTimeout system 2

setTimeout(() => {
    console.log('See You later');
},2000)

// setInterval system 1
setInterval(() => {
    console.log('doing it aging...');
}, 1000);
console.log(111);

// setTimeout system 3
setTimeout(doSomeTime,3000)
console.log(333);