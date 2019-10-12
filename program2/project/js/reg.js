(function () {
    var yzcode = document.getElementById('codeyz');
    var num1 = document.getElementById('yzmcode');
    var rannum = document.getElementById('yzm');
    var btn = document.getElementById('btn');
    var check = document.getElementById('jieguo');
    function checkCode(n) {
        var str = 'qazwsxedcrfvtgbyhnujmiklopQAZWSXEDCRFVTGBYHNUJMIKOLP1234567890';//随机数
        var html = '';
        for (var i = 0; i < n; i++) {
            var index = parseInt(Math.random() * str.length);
            var num = '<span>' + str[index] + '</span>';
            html += num;
        }
        return html;
    }
    rannum.innerHTML = checkCode(6);
    font(6);
    btn.onclick = function () {//点击变化字体颜色
        rannum.innerHTML = checkCode(6);
        font(6);
    }
    function font(n) {
        var x = yzcode.getElementsByTagName('span');
        for (var i = 0; i < n; i++) {
            var html = '#';
            var str1 = '123456789abcdef';
            for (var j = 0; j < 6; j++) {
                var index1 = parseInt(Math.random() * str1.length);
                html += str1[index1];//字体颜色
            }
            for (var j = 0; j < n; j++) {
                var index2 = parseInt(Math.random() * 10 + 12);//字体大小
                var fw = index2 + 'px';
                var index4 = parseInt(Math.random() * 10);
                var fp = index4 + 'px';
            }
            x[i].style = 'color:' + html + ';font-size:' + fw + 'margin-top:' + fp;
        }
    }
    num1.onfocus = function () {
        var str = num1.value;
        if (str.length) {
            check.innerHTML = '';
        }

    }
    let isokyz = false;
    num1.onblur = function () {
        var val1 = num1.value.trim();
        var val2 = rannum.innerText;
        if (val1.toLowerCase() == val2.toLowerCase()) {
            check.innerHTML = '验证码输入正确!';
            check.style.color = '#58bc58';
            isokyz = true;
        } else {
            isokyz = false;
            check.innerHTML = '验证码输入错误';
            check.style.color = 'red';
        }
        // console.log(isokyz);
    }

    //选项卡
    let regLeft = document.getElementsByClassName('reg_left')[0];
    // console.log(regLeft);
    let lis = document.querySelectorAll('.reg_left li');
    let regs = document.querySelectorAll('.reg');
    // console.log(regs);
    for (let i = 0; i < lis.length; i++) {
        lis[i].index = i;
        lis[i].onclick = function () {
            // console.log(this.index);
            for (let j = 0; j < lis.length; j++) {
                lis[j].className = '';
                regs[j].style.display = 'none';

            }
            lis[this.index].className = 'xz';
            regs[this.index].style.display = 'block';
        }
    }
    //验证加正则
    let uname = document.getElementById('userUID');
    let psw = document.getElementById('userpwd3');
    let pswc = document.getElementById('userpwd4');//确认密码
    let phone = document.getElementById('usermobile2');
    let email = document.getElementById('usermail');
    let gou = document.getElementById('mmprovision2');
    let submit = document.getElementById('regbut2');
    let inf1 = document.getElementsByClassName('inf1')[0];
    let inf2 = document.getElementsByClassName('inf2')[0];
    let inf3 = document.getElementsByClassName('inf3')[0];
    let inf4 = document.getElementsByClassName('inf4')[0];
    let inf5 = document.getElementsByClassName('inf5')[0];
    let isok = false;
    let isok1 = false;
    let isok2 = false;
    let isok3 = false;
    let isok4 = false;
    let isok5 = false;

    //失去焦点验证信息，检查用户是否存在
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
                        type: 'checkname'
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
                isok1 = true;
            } else {
                inf2.innerHTML = '6-18位首字母开头';
                inf2.style.color = 'red';
                isok1 = false;
            }
        } else {
            inf2.innerHTML = '密码不能为空'
            inf2.style.color = 'red';
            isok1 = false;
        }
    }
    //确认密码
    pswc.onblur = function () {
        if (pswc.value.trim()) {
            if (checkReg.pwwagain(psw.value, pswc.value)) {
                inf3.innerHTML = '通过';
                inf3.style.color = '#58bc58';
                isok2 = true;
            } else {
                inf3.innerHTML = '密码不一致';
                inf3.style.color = 'red';
                isok2 = false;
            }
        } else {
            inf3.innerHTML = '密码不能为空'
            inf3.style.color = 'red';
            isok2 = false;
        }
    }
    //电话
    phone.onblur = function () {
        if (phone.value.trim()) {
            if (checkReg.tel(phone.value)) {
                inf4.innerHTML = '通过';
                inf4.style.color = '#58bc58';
                isok3 = true;
            } else {
                inf4.innerHTML = '电话号码格式错误';
                inf4.style.color = 'red';
                isok3 = false;
            }
        } else {
            inf4.innerHTML = '电话号码不能为空'
            inf4.style.color = 'red';
            isok3 = false;
        }
    }
    //邮箱
    email.onblur = function () {
        if (email.value.trim()) {
            if (checkReg.email(email.value)) {
                inf5.innerHTML = '通过';
                inf5.style.color = '#58bc58';
                isok4 = true;
            } else {
                inf5.innerHTML = '邮箱格式错误';
                inf5.style.color = 'red';
                isok4 = false;
            }
        } else {
            inf5.innerHTML = '邮箱不能为空'
            inf5.style.color = 'red';
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
    //确认密码清空
    pswc.oninput = function () {
        var str = pswc.value;
        if (str.length) {
            inf3.innerHTML = '';
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
            inf5.innerHTML = '';
        }
    }
    num1.oninput = function () {
        var str = num1.value;
        if (str.length) {
            check.innerHTML = '';
        }
    }
    //2.不存在就可以注册：insert,拿到所有开关对应的boolean值
    //验证通过，准备注册

    submit.onclick = function () {
        // console.log(gou.checked);
        // console.log(isokyz);
        // console.log(isok, isok1, isok2, isok3, isok4, isokyz);
        // console.log(isok && isok1 && isok2 && isok3 && isok4 && isokyz && gou.checked);
        if (isok && isok1 && isok2 && isok3 && isok4 && isokyz && gou.checked) {
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
                    console.log(str);
                    if (str == 'yes') {
                        alert('注册成功');
                        location.href = 'login.html?username=' + uname.value.trim();
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
