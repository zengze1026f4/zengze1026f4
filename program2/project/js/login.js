(function () {
    //选项卡
    $('.login-tab li').click(function () {
        $(this).attr('class', 'login-on').siblings().attr('class', '');
        $('.login-body .login-style').eq($(this).index()).css('display', 'block').siblings().css('display', 'none');
    });
    //找节点，点击登录框进行判断，

    $('#logbtn').click(function () {
        let issave = document.getElementById('issave');
        let usn = getcookie('username');//获取cookie里面存在的用户名，
        if (usn) {//登录
            alert('您已经登录过了噢');
        } else {//未登录
            if ($('#txtUser').val() && $('#Userpwd').val()) {
                $.ajax({
                    type: 'post',
                    url: '../api/login.php',
                    data: {
                        username: $('#txtUser').val(),
                        password: $('#Userpwd').val()
                    },
                    success: str => {
                        // console.log(str);
                        if (str == 'yes') {
                            alert('登录成功');

                            if (issave.checked) {//选中才七天登录
                                setcookie('username', $('#txtUser').val(), 7);
                                let url = getcookie('url');
                                // console.log(url);
                                if (url) { //查找，证明是有上一页，登陆成功一律回到上一页
                                    location.href = url;
                                } else {
                                    //注册页、首页、登陆页跳到登陆页的，登陆成功一律回到首页
                                    location.href = 'main.html'
                                }
                            } else {
                                setcookie('username', $('#txtUser').val(), -7);
                                let url = getcookie('url');
                                if (url) { //查找，证明是有上一页，登陆成功一律回到上一页
                                    location.href = url;
                                } else {
                                    //注册页、首页、登陆页跳到登陆页的，登陆成功一律回到首页
                                    location.href = 'main.html'
                                }
                            }

                        } else if (str == 'error') {
                            // alert('密码错误');
                            $('.pswinf').html('密码错误').css('color', 'red');
                        } else {
                            // alert('用户名不存在');
                            $('.usinf').html('不存在该用户名').css('color', 'red');
                        }
                    }

                });
            } else {
                alert('用户或密码不能为空');
            }

        }
    });
    //聚焦时清空标签信息
    let txtUser = document.getElementById('txtUser');
    let Userpwd = document.getElementById('Userpwd');
    //用户名框的信息清空
    txtUser.oninput = function () {
        if (txtUser.value.trim()) {
            $('.usinf').html('');
        }
    };
    //秘密的标注框清空
    Userpwd.oninput = function () {
        if (Userpwd.value.trim()) {
            $('.pswinf').html('');
        }
    };

})();