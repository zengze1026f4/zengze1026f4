(function () {
    //登录注册
    //登录退出判断
    let welcome = document.getElementById('welcome');
    function undate() {
        let data = getcookie('username');
        if (data) {
            //登陆的
            welcome.innerHTML = data + ',欢迎你访问我们的网站。<a href="" class="quit">退出</a>';

        } else {
            welcome.innerHTML = '欢迎你访问我们的网站。<a href="###" class="denglu">登陆</a>';
        }
    }
    undate();
    welcome.onclick = ev => {
        if (ev.target.innerHTML == '退出') {
            //退出
            alert('退出成功');
            removecookie('username');
        } else if (ev.target.innerHTML == '登陆') {
            location.href = 'login.html';
            setcookie('url', location.href, 7);

        }
        undate();
    }
    //数据渲染
    //假设用户名为zzzzzz
    // let username = 'zzzzzz';
    let html = '';
    let str1 = '';
    function isdenglu() {
        let username = getcookie('username');
        return username;
    };
    if (isdenglu()) {
        if (getcookie('gid')) {
            let goodlist = getcookie('gid');//字符串 3&2&1
            let data = goodlist.split(',');//[3,2,1]
            let gnumlist = getcookie('gnum');
            let newnum = gnumlist.split(',');//对应数量替换
            for (let item in data) {
                let churu = new Promise(function (resolve) {
                    $.ajax({
                        type: 'post',
                        url: '../api/unaddshop.php',
                        data: {
                            username: getcookie('username'),
                            gnum: newnum[item],
                            gid: data[item]
                        },
                        success: str => {
                        }
                    });
                });

            };
        }
        let xuanran = new Promise(function (resolve) {
            $.ajax({
                type: 'post',
                url: '../api/gwc.php',
                data: {
                    username: getcookie('username')
                },
                success: str => {
                    let str1 = JSON.parse(str);
                    resolve(str1);
                }
            });
        });

        xuanran.then(function (arr) {
            // console.log(arr);
            html = arr.map(function (item, index) {
                return ` <li class="goods" data-gid="${item.gid}" data-username="${item.username}">
                    <p class="good_check"><input type="checkbox" name="good" id="" value="" /></p>
                    <p class="good_img"><img src="${item.img}" alt=""></p>
                    <p class="good_name">${item.title}</p>
                    <p class="good_price" data-price=${item.price}>￥&nbsp;${item.price}</p>
                    <p class="youhui">0</p>
                    <p class="num" data-kucun="${item.kucun}">
                        <input type="button" value="-" id="cut">
                        <input class="nownum" type="text"
                            value="${item.gnum}"/>     
                    <input type="button" value="+" id="add">
                    </p>
                    <p class="good_total" data-total=${item.total}>￥&nbsp;${item.total}</p>
                    <p class="good_del">
                        <a href="javascript:;">删除</a>
                    </p>
                </li>`;
            }).join('');
            $('#cart').html(html);
        });


    } else {
        // alert('登陆后加入购物车才会被保存奥~');
        let goodlist = getcookie('gid');//字符串 3&2&1
        let gnumlist = getcookie('gnum');
        if (goodlist && gnumlist) {
            let newnum = gnumlist.split(',');//对应数量替换
            let data = goodlist.split(',');//[3,2,1]
            for (let item in data) { //
                let xuanran = new Promise(function (resolve) {
                    $.ajax({
                        type: 'get',
                        url: '../api/xiangqing.php',
                        data: {
                            gid: data[item]
                        },
                        success: str => {
                            let str1 = JSON.parse(str);
                            resolve(str1);
                        }
                    });

                });
                xuanran.then(function (arr) {
                    $('.nownum').eq(item).val(newnum[item] * 1);
                    for (let obj of arr) {
                        if (data[item] * 1 == obj.gid * 1) {
                            html += ` <li class="goods" data-gid="${obj.gid}">
                                    <p class="good_check"><input type="checkbox" name="good" id="" value="" /></p>
                                    <p class="good_img"><img src="${obj.bigimg}" alt=""></p>
                                    <p class="good_name">${obj.title}</p>
                                    <p class="good_price" data-price=${obj.price}>￥&nbsp;${obj.price}</p>
                                    <p class="youhui">0</p>
                                    <p class="num" data-kucun="${obj.kucun}">
                                        <input type="button" value="-" id="cut">
                                        <input class="nownum" type="text"
                                            value="${newnum[item]}" />     
                                    <input type="button" value="+" id="add">
                                    </p>
                                    <p class="good_total">￥&nbsp;${obj.price}</p>
                                    <p class="good_del">
                                        <a href="javascript:;">删除</a>
                                    </p>
                         </li>`;

                        }
                    };

                    $('#cart').html(html);
                })

            }
        }

    }
    //加减数量，删除，面向对象写
    class Car {
        constructor(id) {
            this.carBox = $(id);
            this.init();
        }
        init() {
            //查找节点，绑定事件
            this.addNum();
            this.subNum();
            this.manual();//手动修改数量
            this.removeRow();//删除某行
            this.allCheck();//全选
            this.checkRow();//勾选某一行复选框
            this.allRemove();//全删
        };

        //数量变化
        total(now, num) {
            let kucun = $(now).parent().data('kucun');
            // console.log(kucun);
            if (num < 1) {
                num = 1;
            } else if (num > kucun) {
                num = kucun;
            }
            $(now).parent().find('.nownum').val(num);
            let gnum = $(now).parent().find('.nownum').val();
            let gid = $(now).parent().parent().data('gid') * 1;
            let price = $(now).parent().parent().find('.good_price').data('price');//单价
            let total = gnum * price;//小计
            $(now).parent().next().html('￥ ' + total);//小计渲染
            this.allNum();
            if (isdenglu()) {//登录，数据库数量更改
                let update = new Promise(function (resolve) {
                    $.ajax({
                        type: 'post',
                        url: '../api/delete.php',
                        data: {
                            username: isdenglu(),
                            gid,
                            gnum,
                            total
                        },
                        success: str => {
                            resolve(str);
                        }
                    });
                });
            } else {//未登录，cookie里面num替换
                let goodlist = getcookie('gid');//字符串 3&2&1
                let gnumlist = getcookie('gnum');
                let newarr = goodlist.split(',');//[3,2,1]
                let newnum = gnumlist.split(',');//对应数量删除
                gid = String(gid);
                let newindex = newarr.indexOf(gid);
                // console.log(newindex, goodlist, newarr, gid, newnum);
                if (newindex >= 0) {
                    newnum.splice(newindex, 1, gnum);
                    newnum.join(',');
                }
                setcookie('gnum', newnum, 30);
            }

        };
        addNum() {
            //点击加添加数量
            let _this = this;
            this.carBox.on('click', '#add', function () {
                let num = $(this).prev().val();
                num++;
                _this.total($(this), num);//修改数量和单价

            });
        }
        subNum() {
            let _this = this;
            this.carBox.on('click', '#cut', function () {
                let num = $(this).next().val();
                num--;
                _this.total($(this), num);
            });

        }
        manual() {
            let _this = this;
            this.carBox.on('input', '.nownum', function () {
                let num = $(this).val();
                _this.total($(this), num);
            });
        }
        removeRow() {
            let _this = this;
            this.carBox.on('click', '.good_del', function () {
                let gid = $(this).parent().data('gid');
                // console.log(gid);
                let ok = confirm('您确定要删我吗？');
                if (ok) {
                    $(this).parent().remove();
                    if (isdenglu()) {//登录删除数据库
                        let update = new Promise(function (resolve) {
                            $.ajax({
                                type: 'post',
                                url: '../api/delete.php',
                                data: {
                                    username: isdenglu(),
                                    gid: gid,
                                    del: 1
                                },
                                success: str => {
                                    resolve(str);
                                }
                            });
                        });
                        delcooks();

                    } else {//未登录删除cookie

                        delcooks();
                    }
                    function delcooks() {
                        let goodlist = getcookie('gid');//字符串 3&2&1
                        let gnumlist = getcookie('gnum');
                        let newarr = goodlist.split(',');//[3,2,1]
                        let newnum = gnumlist.split(',');//对应数量删除
                        gid = String(gid);
                        let newindex = newarr.indexOf(gid);
                        // console.log(newindex, goodlist, newarr, gid, newnum);
                        if (newindex >= 0) {
                            newarr.splice(newindex, 1);
                            newnum.splice(newindex, 1);
                            newarr.join(',');
                            newnum.join(',');
                        }
                        setcookie('gid', newarr, 30);
                        setcookie('gnum', newnum, 30);
                    }
                }
                if ($('#cart .addnum').size() == 0) {
                    //已经没有数据
                    $('#del').css('display', 'none');
                } else {
                    $('#del').css('display', 'block');
                }
                _this.allNum();
            });

        }
        //全选控制小的复选框
        allCheck() {
            let _this = this;
            $('.allchecked input').click(function () {
                let isok = $('.allchecked input').prop('checked');
                $('.good_check input').prop('checked', isok);
                if (isok) {
                    $('.jiesuan').addClass('jsactive');
                    _this.allNum();
                } else {
                    $('.jiesuan').removeClass('jsactive');
                }

            });

        }
        checkArr() {
            let arr = [];//存放勾选复选框的下标
            $('.good_check input').each(function (index, item) {
                if ($(item).prop('checked')) {
                    //被勾选了
                    arr.push(index);
                }
            });
            return arr;
        }
        allNum() {
            // console.log(arr);
            let checkall = this.checkArr();//被勾选的行的下标，存在数组里面
            //计算总数量和总价格
            let zongnum = 0;//放商品总数量
            let zongji = 0;//放总价
            checkall.forEach(function (item, index) {
                zongnum += $('#cart .nownum').eq(checkall[index]).val() * 1;//累加
                zongji += $('#cart .good_total').eq(checkall[index]).text().slice(2) * 1;

            });
            $('.allnum').html(`已选 ${zongnum} 件商品`);
            $('#zongji').html(`${zongji}`);
        }
        checkRow() {
            let _this = this;
            this.carBox.on('click', '.good_check input', function () {
                let len = $('.good_check input').length;//本事复选框的个数
                let achecknum = $('.good_check input:checked').length;
                // console.log(achecknum);
                if (achecknum > 0) {
                    $('.jiesuan').addClass('jsactive');
                } else if (achecknum <= 0) {
                    $('.jiesuan').removeClass('jsactive');
                }
                if (len == achecknum) {
                    //已经全选
                    $('.allchecked input').prop('checked', true);
                } else {
                    $('.allchecked input').prop('checked', false);
                }
                _this.allNum();
            });
        }
        allRemove() {
            $('#del').click(function () {
                let checkall = this.checkArr().reverse();//被勾选的行的下标，存在数组里面
                let ok = confirm('您确定要删除我们？');
                let goodlist = getcookie('gid');//字符串 3&2&1
                let gnumlist = getcookie('gnum');
                let newarr = goodlist.split(',');//[3,2,1]
                let newnum = gnumlist.split(',');//对应数量删除
                if (ok) {
                    checkall.forEach(function (item, index) {
                        if (isdenglu()) {
                            let update = new Promise(function (resolve) {
                                $.ajax({
                                    type: 'post',
                                    url: '../api/delete.php',
                                    data: {
                                        username: isdenglu(),
                                        gid: $('#cart .goods').eq(checkall[index]).data('gid'),
                                        del: 1
                                    },
                                    success: str => {
                                        console.log(str);
                                        // resolve(str);
                                    }
                                });
                            });
                            delcook();
                        } else {
                            delcook();
                        }
                        function delcook() {
                            let gid = $('#cart .goods').eq(checkall[index]).data('gid');
                            gid = String(gid);
                            let newindex = newarr.indexOf(gid);
                            if (newindex >= 0) {
                                newarr.splice(newindex, 1);
                                newnum.splice(newindex, 1);
                                newarr.join(',');
                                newnum.join(',');
                            }
                            setcookie('gid', newarr, 30);
                            setcookie('gnum', newnum, 30);

                        }

                        $('#cart .goods').eq(checkall[index]).remove();
                    });
                    $('.allchecked input').prop('checked', false);
                    this.allNum();
                }

            }.bind(this));

        }
    }
    new Car('#cart');//调用，事件委托的方式

})();
