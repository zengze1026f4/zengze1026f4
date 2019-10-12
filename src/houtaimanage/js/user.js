(function () {
    function init() {
        let xuanran = new Promise(function (resolve) {
            $.ajax({
                type: 'post',
                url: '../api/userift.php',
                success: str => {
                    resolve(str);
                }
            });

        });
        xuanran.then(function (str) {
            let arr = JSON.parse(str);
            let html = '';
            for (let obj of arr) {
                html += `<tr data-id="${obj.id}" data-username="${obj.username}">
                            <td><input type="checkbox" name="" id="xuhao" data-id="${obj.id}">
                            </td>
                            <td class="uid" contentEditable="true" >${obj.uid}</td>
                            <td class="username" contentEditable="true" >${obj.username}</td>
                            <td contentEditable="true" class="psw">${obj.psw}</td>
                            <td contentEditable="true" class="phone">${obj.phone}</td>
                            <td contentEditable="true" class="email">${obj.email}</td>
                            <td>
                                <input type="button" value="保存修改" id="usave">
                                <input type="button" value="删除" id="del">
                                <input type="button" value="复制" id="edit">
                            </td>
                        </tr>`;
            }
            $('tbody').append(html);
        });
    }
    init();
    //删除
    $('tbody').on('click', '#del', function () {
        let res = confirm('确定删除我吗');
        if (res) {
            let id = $(this).parent().parent().data('id');
            let username = $(this).parent().parent().data('username');
            //登录删除数据库
            let del = new Promise(function (resolve) {
                $.ajax({
                    type: 'post',
                    url: '../api/del.php',
                    data: {
                        username,
                        id
                    },
                    success: str => {
                        console.log(str);
                        resolve(str);
                    }
                });
            });

            $(this).parent().parent().remove();
        }
    });
    //保存修改
    $('tbody').on('click', '#usave', function () {
        let res = confirm('确定修该内容并保存吗');
        if (res) {
            let uid = $(this).parent().parent().find('.uid').html();
            let username = $(this).parent().parent().find('.username').html();
            let psw = $(this).parent().parent().find('.psw').html();
            let phone = $(this).parent().parent().find('.phone').html();
            let email = $(this).parent().parent().find('.email').html();
            //登录保存修改数据
            let baocun = new Promise(function (resolve) {
                $.ajax({
                    type: 'post',
                    url: '../api/fuzhi.php',
                    data: {
                        uid,
                        username,
                        psw,
                        email,
                        phone
                    },
                    success: str => {
                        console.log(str);
                        resolve(str);
                    }
                });
            });
        }
    });

    //复制
    $('tbody').on('click', '#edit', function () {
        let newrows = $(this).parent().parent().clone(true);
        $('tbody').append(newrows);

    });


})();