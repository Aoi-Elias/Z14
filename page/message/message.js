// 刷新
// const message = document.getElementsByClassName('message')[0];
const messageLayout = document.getElementsByClassName('message-layout')[0];
const refresh = document.getElementsByClassName('refresh')[0];
const searchbox = document.getElementsByClassName('searchbox')[0];
const shifang = document.getElementsByClassName('shifang')[0];

// 手指滑动距离，默认 0
let distance = 0;
// 手指按下初始位置， 默认 0
let startPosition = 0;

messageLayout.addEventListener('touchstart', touchstartHandler, false);
messageLayout.addEventListener('touchmove', touchmoveHandler, false);
messageLayout.addEventListener('touchend', touchendHandler, false);

function touchstartHandler(e) {
    refresh.classList.remove('none');

    startPosition = e.touches[0].pageY;
    searchbox.style.marginTop = '60px'
}
function touchmoveHandler(e) {
    // 当前手指按下位置
    const currentPosition = e.touches[0].pageY;
    // 手指滑动距离
    distance = currentPosition - startPosition;

    if (distance > 30) {
        refresh.style.height = `${distance}px`;
        refresh.style.lineHeight = `${distance}px`;
        shifang.classList.remove('none');
    }

    // 限制下滑
    if (distance > 300){
        refresh.style.lineHeight = `300px`;
    }
}
function touchendHandler() {
    // 回弹过渡
    this.style.transition = 'all 1s';
    if (distance > 0 && distance <= 100) {
        // this.style.transition = 'all 1s';
        refresh.style.height = `0px`;
        shifang.classList.add('none');
        searchbox.style.marginTop = '60px'
        return;
    }
    if (distance > 100) {
        refresh.style.height = `100px`;
        refresh.style.lineHeight = `100px`;
        const promise = new Promise((resolve, reject) => {
            resolve();
        }).then(() => {
            setTimeout(() => {
                location.reload();
            }, 500);
        });
    }
    distance = 0
}

// tabbar角标
const messageCount = document.getElementsByClassName('message-count')[0];
const messageNum = document.getElementsByClassName('message-num');

let sum = 0;
// 遍历所有消息的num值
for (let i = 0; i < messageNum.length; i++) {
    // 对num值求和
    sum += parseInt(messageNum[i].textContent);
}
// tabbar消息角标数字
messageCount.innerHTML = sum;