const rmtj0Label = document.getElementsByClassName('rmtj0-label')[0];
const rmtj0Desc = document.getElementsByClassName('rmtj0-desc')[0];
const rmtj0Price = document.getElementsByClassName('rmtj0-price')[0];
const back = document.getElementsByClassName('back')[0];


// 从本地获取数据
const rmtj0 = JSON.parse(localStorage.getItem(0));

rmtj0Label.innerHTML = rmtj0.label;
rmtj0Desc.innerHTML = rmtj0.title;
rmtj0Price.innerHTML = rmtj0.price;

// 返回
back.addEventListener('click',()=>{
    history.back(-1);
},false);