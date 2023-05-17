const accInput = document.getElementById('acc-input');
const accPassword = document.getElementById('acc-password');
const nameWarning = document.getElementsByClassName('nameWarning')[0];
const passwordWarning = document.getElementsByClassName('passwordWarning')[0];
const signinWarning = document.getElementsByClassName('signinWarning')[0];
const signinBtn = document.getElementById('signin-btn');

// 账号格式验证
accInput.onblur = function () {
    if (/^([0-9a-zA-Z\u4e00-\u9fa5]{2,6})$/gi.test(accInput.value)) {
        nameWarning.style.display = 'none';
        signinWarning.style.display = 'none';
    } else {
        nameWarning.style.display = 'inline';
        signinWarning.style.display = 'none';
    }
}

// 密码格式验证
accPassword.onblur = function () {
    if (/^((?!(\d+$))(?!([a-zA-Z]+$))[a-zA-Z0-9]{6,12})$/gi.test(accPassword.value)) {
        passwordWarning.style.display = 'none';
        
    } else {
        passwordWarning.style.display = 'inline';
    }
}

// 模拟账号，密码
const accountValue = '凤凰花开';
const passwordValue = 'password123';
// 登录，账号密码验证
signinBtn.addEventListener('click', function (e) {
    if (accInput.value === accountValue && accPassword.value === passwordValue) {
        signinWarning.style.display = 'none';
        passwordWarning.style.display = 'none';
        nameWarning.style.display = 'none';
    }else{
        nameWarning.style.display = 'none';
        signinWarning.style.display = 'inline';
        e.preventDefault();
    }
}, false);