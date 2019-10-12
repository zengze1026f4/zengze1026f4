(function () {
    $('#login').click(function () {
        if ($('#name').val() && $('#psw').val()) {
            // console.log($('#psw').val());
            $.ajax({
                type: 'post',
                url: '../api/login.php',
                data: {
                    username: $('#name').val(),
                    password: $('#psw').val()
                },
                success: str => {
                    // console.log(str);
                    if (str == 'yes') {
                        setCookie('username', $('#name').val(), 7);
                        alert('登录成功');
                        //注册页、首页、登陆页跳到登陆页的，登陆成功一律回到首页
                        window.open('main.html');
                    } else if (str == 'error') {
                        alert('密码错误');
                    } else {
                        alert('用户名不存在');
                    }
                }
            });
        } else {
            alert('用户或密码不能为空');
        }
    });
})();
