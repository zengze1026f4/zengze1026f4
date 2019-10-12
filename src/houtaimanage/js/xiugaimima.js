let username = 'zzzzzz';
let psw = document.getElementById('psw');
let pswc = document.getElementById('qpsw');
let inf1 = document.getElementsByClassName('inf1')[0];
let inf2 = document.getElementsByClassName('inf2')[0];
let submit = document.getElementsByClassName('baocun')[0];
let isok1 = false;
let isok2 = false;
//正则验证密码
psw.onblur = function () {
    if (psw.value.trim()) {
        if (checkReg.psweasy(psw.value)) {
            inf1.innerHTML = '通过';
            inf1.style.color = '#58bc58';
            isok1 = true;
        } else {
            inf1.innerHTML = '6-18位首字母开头';
            inf1.style.color = 'red';
            isok1 = false;
        }
    } else {
        inf1.innerHTML = '密码不能为空'
        inf1.style.color = 'red';
        isok1 = false;
    }
}
pswc.onblur = function () {
    if (pswc.value.trim()) {
        if (checkReg.pwwagain(psw.value, pswc.value)) {
            inf2.innerHTML = '通过';
            inf2.style.color = '#58bc58';
            isok2 = true;
        } else {
            inf2.innerHTML = '密码不一致';
            inf2.style.color = 'red';
            isok2 = false;
        }
    } else {
        inf2.innerHTML = '密码不能为空'
        inf2.style.color = 'red';
        isok2 = false;
    }
}
//密码清空
psw.oninput = function () {
    var str = psw.value;
    if (str.length) {
        inf2.innerHTML = '';
    }
}
//确认密码清空
pswc.oninput = function () {
    var str = pswc.value;
    if (str.length) {
        inf2.innerHTML = '';
    }
}
submit.onclick = function () {
    if (isok1 && isok2) {
        ajax({
            type: 'post',
            url: '../api/changepsw.php',
            data: {
                name: username,
                password: psw.value.trim(),
            },
            success: str => {
                if (str == 'yes') {
                    alert('修改成功');
                } else {
                    alert('修改失败');
                }
            }
        });
    } else {
        alert('错误');
    }
}
