(function () {
    //数据渲染
    let gid = decodeURI(location.search).slice(1) * 1;
    // console.log(gid);
    //登录退出
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

    //发送ajax
    let xuanran = new Promise(function (resolve) {
        $.ajax({
            type: 'get',
            url: '../api/xiangqing.php',
            data: {
                gid
            },
            success: str => {
                let str1 = JSON.parse(str);
                resolve(str1);
            }
        });

    });
    xuanran.then(function (arr) {
        // console.log(arr);
        let imglist = arr[0].imgs.split(',');
        //放大镜
        magniglass({
            ele: 'wrap',//最外层盒子的id(必填)
            imglist//图片数据(必填)
        });
        //标题
        let str2 = `<div>${arr[0].title}</div>`;
        $('.title').html(str2);
        //一首二手价格
        let str3 = `<div>¥<b>${arr[0].price}</b></div>`;
        $('.rightc21').html(str3);
        //价格
        let str4 = `<h4>低价选择:</h4>
        <a href="">一手优品：${arr[0].price}.00</a>
        <a href="">二手良品：${arr[0].erprice}.00</a>`;
        $('.right-cen1').html(str4);
        //颜色
        let colorimg = arr[0].colorimg.split(',');
        let color = arr[0].color.split(',');
        let str5 = '';
        for (let i = 0; i < colorimg.length; i++) {
            str5 += `<a href="###" class="">
            <div>
                <img src="${colorimg[i]}" alt="">
                <span>${color[i]}</span>
            </div>
             </a>`;
        }
        $('.color').html(str5);
        $('.color a:first').addClass('activing');
        $('.color a').click(function () {
            $(this).attr('class', 'activing').siblings().attr('class', '');
        });
        //评价,好评率
        let str6 = `  <li>
        <a href="">用户评价</a>
        <span>${arr[0].comments}</span>
    </li>
    <li>
        <a href="">商品咨询</a>
        <span>${arr[0].zixun}</span>
    </li>
    <li>
        <a href="">好评率</a>
        <span>${arr[0].haoping}</span>
    </li>`;
        $('.comment').html(str6);

    });

    //底部选项卡

    $('.xiding a').click(function () {
        $(this).attr('class', 'xi-active').siblings().attr('class', '');
        $('.xidi').eq($(this).index()).css('display', 'block').siblings().css('display', 'none');
    });
    //吸顶菜单
    let iTop = $('.mainbuttomr').offset().top;
    // console.log(iTop);
    window.onscroll = function () {
        let scrollTop = window.scrollY;//滚动距离
        if (scrollTop >= iTop) {
            $('#xiding').attr('class', 'fix');
        } else {
            $('#xiding').attr('class', '');
        }
    }
    //右边品牌轮播
    let ul = document.querySelector('.paizi ul');
    let lis = document.querySelectorAll('.paizi ul li');
    let ih = ul.children[0].offsetHeight;
    now = 0;
    ul.style.height = ul.children.length * ih + 'px';
    function next() {//下一张
        now++;
        if (now > lis.length - 5) {
            now = 1;
            ul.style.top = 0;
            startMove(ul, { 'top': 0 });
        }
        if (now < 0) {
            now = ul.children.length - 2;
            ul.style.top = (ul.children.length - 1) * -ih + 'px';
        }
        startMove(ul, { 'top': now * -ih });
    }
    timer = setInterval(next, 2000);//每隔两秒切换一个li
    //加入购物车
    let username = getcookie('username');

    if (username) {
        $('.jiaru21 .jwc').click(function () {
            let xuanran = new Promise(function (resolve) {
                $.ajax({
                    type: 'post',
                    url: '../api/addshopcar.php',
                    data: {
                        username,
                        gid,
                    },
                    success: str => {
                        let str1 = JSON.parse(str);
                        resolve(str1);
                        if (str1 == '更新成功') {
                            alert('更新成功');
                        }
                        if (str1 == '插入成功') {
                            alert('插入成功');
                        }
                        if (str1 == '超出库存') {
                            alert('您选择的商品超出库存奥~');
                        }
                    }
                });
            });
        });
    } else {
        let storygid = '';
        $('.jiaru21 .jwc').click(function () {
            let gid = decodeURI(location.search).slice(1);
            if (storygid == gid) {
                alert('该商品已经加入过购物车啦，请前往购物车查看');
            } else {
                // alert('未登录');从cookie里面读取数据
                jiagou(gid);
                storygid = gid;
            }
        });
    }

    function jiagou(gid) {
        let gidlist = getcookie('gid');
        let gnumlist = getcookie('gnum');
        if (gidlist && gnumlist) {//去重值后在修改
            let arr = gidlist.split(',');
            // console.log(arr);
            let index = arr.indexOf(gid);//-1没有，直接把id拼接在后面；非-1,有，去掉旧的id，再把新的id放到末尾
            let str = '';//拼接id
            let str1 = '';//拼接数量
            // console.log(index);
            if (index >= 0) {//有就替换
                // arr.splice(index, 1);
                // arr.push(gid);
                str = gidlist;
            } else {//没有
                str = gidlist + ',' + gid;
                str1 = gnumlist + ',' + 1;
            }
            setcookie('gid', str, 30);
            setcookie('gnum', str1, 30);
        } else {
            setcookie('gid', gid, 30);
            setcookie('gnum', 1, 30);
        }
    }
    //右侧浏览历史
    let zujib = '';
    if (getcookie('username')) {
        let zujiy = localStorage.zujilist;
        let arrs = zujiy.split(',').reverse();
        // console.log(arrs);
        for (let items in arrs) {
            console.log(arrs[items]);
            let xuanzu = new Promise(function (resolve) {
                $.ajax({
                    type: 'post',
                    url: '../api/zuji.php',
                    data: {
                        gid: arrs[items],
                        username: getcookie('username')
                    },
                    success: str => {
                        // let str2 = JSON.parse(str);
                        // resolve(str2);
                    }
                });
            });
        }
        let zujixuanran = new Promise(function (resolve) {
            $.ajax({
                type: 'post',
                url: '../api/zujixuanran.php',
                data: {
                    username: getcookie('username'),
                },
                success: str => {
                    // console.log(str);
                    let str1 = JSON.parse(str);
                    resolve(str1);
                }
            });
        });
        zujixuanran.then(function (arr) {
            for (let obj of arr) {
                zujib += `<li>
                <a href="###" class="zujiya" data-id="${obj.gid}">
                    <img src="${obj.img}" alt="">
                    <div>
                        <p>
                          ${obj.title}
                        </p>
                        <p>
                            <span>丫丫价：</span>
                            <span>${obj.price}</span>
                        </p>
                        <span class="guanzhu">
                            已有0人关注
                        </span>
                    </div>
                </a>
            </li>`;
            }
            $('.peis22 ul').html(zujib);
        });

    } else {
        //足迹渲染
        let zujiy = localStorage.zujilist;
        let arrs = zujiy.split(',').reverse();
        for (let items in arrs) {
            let xuanzu = new Promise(function (resolve) {
                $.ajax({
                    type: 'get',
                    url: '../api/xiangqing.php',
                    data: {
                        gid: arrs[items]
                    },
                    success: str => {
                        let str2 = JSON.parse(str);
                        resolve(str2);
                    }
                });
            });
            xuanzu.then(function (arr) {
                for (let obj of arr) {
                    zujib += `<li>
                    <a href="###" class="zujiya" data-id="${obj.gid}">
                        <img src="${obj.bigimg}" alt="">
                        <div>
                            <p>
                              ${obj.title}
                            </p>
                            <p>
                                <span>丫丫价：</span>
                                <span>${obj.price}</span>
                            </p>
                            <span class="guanzhu">
                                已有0人关注
                            </span>
                        </div>
                    </a>
                </li>`;
                }
                $('.peis22 ul').html(zujib);
            });
            // 点击一次获取一次足迹
            $('.peis22 ul').on('click', '.zujiya', function () {
                let zujigid = $(this).data('id') * 1;
                window.open('shoppage.html?' + zujigid);
            });

        }

    }


})();
