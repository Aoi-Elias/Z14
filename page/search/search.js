// const searchInput = document.getElementById('search-input');
const searchInput = document.getElementsByClassName('search-input')[0];
const proName = document.getElementsByClassName('pro-name');
const show = document.getElementsByClassName('show')[0];

// console.log(proName[0])
// console.log(proName[0].textContent)

let str = '';

const arr = ['冰霜果冻奶茶', '红豆巧克力冰淇淋', '红糖果冻珍珠奶茶', '至尊白巧克力香樽冰淇淋'];


searchInput.onkeyup = function (e) {
    // 每次获取清除原有的
    str = '';
    show.style.display = 'block';
    // 获取数据
    let value = searchInput.value.trim();
    // 遍历arr
    arr.forEach((item) => {
        if (value.length == 0) {
            return show.style.display = 'none';
        }
        const result = item.indexOf(value);
        if (result != -1) {
            str += `<p>${item}</p>`;
        }
    });
    // 搜索不匹配
    if (!searchInput.value || !str) {
        show.innerHTML = '<p>暂无结果</p>'
    } else {
        show.innerHTML = str;
    }

    console.log(show.textContent)
    // 按下回车，执行
    if (e.keyCode === 13) {
        console.log('搜索');

    }
}


const imgs = [...document.getElementsByClassName('rmss-lazyload')];
// console.log(imgs);

lazyload();
window.addEventListener('scroll', debounce(lazyload), false);

function lazyload() {
    for (let i = 0; i < imgs.length; i++) {
        const $img = imgs[i];
        if (isVisiBleArea($img)) {
            $img.src = $img.dataset.src;
            imgs.splice(i--,1);
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
