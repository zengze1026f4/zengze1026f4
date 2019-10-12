(function () {
    //判断用户名是否存在，存在给注册，不在不给注册
    //失去焦点验证信息，检查用户是否存在
    let uname = document.getElementById('user');
    let psw = document.getElementById('psw');
    let phone = document.getElementById('phone');
    let email = document.getElementById('email');
    let submit = document.getElementById('baocun');
    let inf1 = document.getElementsByClassName('inf1')[0];
    let inf2 = document.getElementsByClassName('inf2')[0];
    let inf3 = document.getElementsByClassName('inf3')[0];
    let inf4 = document.getElementsByClassName('inf4')[0];
    let inf5 = document.getElementsByClassName('inf5')[0];
    let isok = false;
    let isok2 = false;
    let isok3 = false;
    let isok4 = false;
    uname.onblur = () => {
        let username = uname.value.trim();
        // console.log(username.length);
        if (username) {
            if (checkReg.name(username)) {
                ajax({
                    type: 'post',
                    url: '../api/reg.php',
                    data: {
                        name: username,
                    },
                    success: str => {
                        // console.log(str);
                        if (str == 'yes') {
                            inf1.innerHTML = '通过';
                            inf1.style.color = '#58bc58';
                            isok = true;
                        } else if (str == 'no') {
                            inf1.innerHTML = '该用户名太受欢迎，已经被注册过了哦';
                            uname.value = '';
                            uname.focus();
                            inf1.style.color = 'red';
                            isok = false;
                        }
                    }
                });
            } else {
                uname.value = '';
                uname.focus();
                inf1.innerHTML = '账号字母开头,6-20位';
                inf1.style.color = 'red';
                isok = false;
            }
        } else {
            inf1.innerHTML = '用户名不能为空'
            inf1.style.color = 'red';
            isok = false;
        }

    }
    //正则验证密码
    psw.onblur = function () {
        if (psw.value.trim()) {
            if (checkReg.psweasy(psw.value)) {
                inf2.innerHTML = '通过';
                inf2.style.color = '#58bc58';
                isok2 = true;
            } else {
                inf2.innerHTML = '6-18位首字母开头';
                inf2.style.color = 'red';
                isok2 = false;
            }
        } else {
            inf2.innerHTML = '密码不能为空'
            inf2.style.color = 'red';
            isok2 = false;
        }
    }
    //邮箱
    email.onblur = function () {
        if (email.value.trim()) {
            if (checkReg.email(email.value)) {
                inf3.innerHTML = '通过';
                inf3.style.color = '#58bc58';
                isok3 = true;
            } else {
                inf3.innerHTML = '邮箱格式错误';
                inf3.style.color = 'red';
                isok3 = false;
            }
        } else {
            inf3.innerHTML = '邮箱不能为空'
            inf3.style.color = 'red';
            isok3 = false;
        }
    }
    //电话
    phone.onblur = function () {
        if (phone.value.trim()) {
            if (checkReg.tel(phone.value)) {
                inf4.innerHTML = '通过';
                inf4.style.color = '#58bc58';
                isok4 = true;
            } else {
                inf4.innerHTML = '电话格式错误';
                inf4.style.color = 'red';
                isok4 = false;
            }
        } else {
            inf4.innerHTML = '电话不能为空'
            inf4.style.color = 'red';
            isok4 = false;
        }
    }
    // 光标聚焦清空所有标签提示信息
    uname.oninput = function () {
        var str = uname.value;
        if (str.length) {
            inf1.innerHTML = '';
        }

    }
    //密码清空
    psw.oninput = function () {
        var str = psw.value;
        if (str.length) {
            inf2.innerHTML = '';
        }
    }
    //电话清空
    phone.oninput = function () {
        var str = phone.value;
        if (str.length) {
            inf4.innerHTML = '';
        }
    }
    //邮箱清空
    email.oninput = function () {
        var str = email.value;
        if (str.length) {
            inf3.innerHTML = '';
        }
    }
    //2.不存在就可以注册：insert,拿到所有开关对应的boolean值
    //验证通过，准备注册
    submit.onclick = function () {
        console.log(isok && isok2 && isok3 && isok4);
        if (isok && isok2 && isok3 && isok4) {
            ajax({
                type: 'post',
                url: '../api/reginsert.php',
                data: {
                    name: uname.value.trim(),
                    password: psw.value.trim(),
                    email: email.value.trim(),
                    phone: phone.value.trim(),
                },
                success: str => {
                    // console.log(str);
                    if (str == 'yes') {

                        alert('注册成功');
                    } else {
                        alert('注册失败');
                    }
                }
            });
        } else {
            alert('cuowu');
        }
    }

})();