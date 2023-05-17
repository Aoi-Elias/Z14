// 图片懒加载
const imgs = [...document.getElementsByClassName('rmtj-lazyload')];
// console.log(imgs);

lazyload();
window.addEventListener('scroll', debounce(lazyload), false);

function lazyload() {
    for (let i = 0; i < imgs.length; i++) {
        const $img = imgs[i];
        if (isVisiBleArea($img)) {
            $img.src = $img.dataset.src;
            imgs.splice(i--, 1);
        }
    }
}

function isVisiBleArea($el) {
    const rect = $el.getBoundingClientRect();
    // console.log(rect);

    return (
        rect.bottom >= 0 &&
        rect.top <= window.innerHeight &&
        rect.right >= 0 &&
        rect.left <= window.innerWidth
    );
}

// 防抖 debounce
function debounce(fn, miliseconds = 250, context) {
    let timer = null;

    return function (...args) {
        const that = context || this;

        if (timer) {
            clearTimeout(timer);
        }

        timer = setTimeout(() => {
            fn.apply(that, args);
            timer = null;
        }, miliseconds)
    }
}


import { ajax, get, post, getJSON } from '../../api/ajax/index.js';
// const rmtjItem = document.getElementsByClassName('rmtj-item');


const url = '../../analogData/index_data.json';
const p = getJSON(url);
p.then(response => {
    // 获取
    const data = response.data
    // console.log(data);
    for (let i = 0; i < data.length; i++) {
        for (const [keys, values] of Object.entries(data)) {
            localStorage.setItem(keys, JSON.stringify(values));
        }       
    }


}).catch(err => {
    console.log(err);
});