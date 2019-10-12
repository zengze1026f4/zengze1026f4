(function () {
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
    let istrue = true;
    $('.allgoods').click(function () {
        if (istrue) {
            $('.nav_menu').css('display', 'block');
        }
        else {
            $('.nav_menu').css('display', 'none');
        }
        istrue = !istrue;
    });
    //列表页数据渲染
    let ipage = 1;//获取第一页
    let num = 2;//每页5条数据
    let paixu = '';
    let tex1 = 0;
    let tex2 = 9999999;
    function ax() {
        let xuanran = new Promise(function (resolve) {
            $.ajax({
                type: 'get',
                url: '../api/list.php',
                data: {
                    ipage,
                    num,
                    paixu,
                    tex1,
                    tex2,
                },
                success: str => {
                    let str1 = JSON.parse(str);
                    resolve(str1);

                }
            });
        });
        xuanran.then(function (arr) {
            let html = '';
            let str = arr.list;
            for (let i = 0; i < str.length; i++) {
                let str2 = str[i].imgs.split(',');
                let str1 = ` <a href="javascript:" class="acts">
                <img src="${str2[0]}" class="">
            </a>`;
                for (let j = 0; j < str2.length - 1; j++) {
                    str1 += ` <a href="javascript:" class="">
                    <img src="${str2[j + 1]}" class="">
                </a>`;
                };
                html += `<li>
                    <a href="###" class="bigimg" data-id="${str[i].gid}">
                        <img src="${str[i].bigimg}" class="">
                    </a>
                    <div class="smallimg">
                    ${str1}
                    </div>
                    <a href="###" class="phonetitle">
                     ${str[i].title}
                    </a>
                    <div class="phoneprice">
                        <span>
                            <b class="">${str[i].price}</b>
                        </span>
    
                    </div>
                    <p class="">已有
                        <a href="">${str[i].comments}</a>
                        人评价
                    </p>
                    <a href="" class="phonepaiming">
                        <span>${str[i].paiming}</span>
                        <i class="iconfont icon-jiantouxiangyou
                        "></i>
                    </a>
                    <div class="tool">
                        <a href="javascript:">对比</a>
                        <a href="javascript:">收藏</a>
                    </div>`;

            };
            $('.main-bottom23 ul').html(html);
            let str3 = '';
            for (let k = 0; k < arr.yeshu; k++) {
                str3 += ` <li>${k + 1}</li>`;
            }
            let html1 = ` <span>共 ${arr.total} 条</span>
            <button class="btn-prev">
                <i class="iconfont icon-left_thin"></i>
            </button>
            <ul class="el-pager">
               ${str3}
            </ul>
            <button class="btn-next">
                <i class="iconfont icon-jiantouxiangyou"></i>
            </button>`;
            $('.main-bottom241').html(html1);

        });

    }

    ax();
    $('#desc').click(function () {//升序
        paixu = 'desc';
        ax();
    });
    $('#asc').click(function () {//降序
        paixu = 'asc';
        ax();
    });
    $('#confirm').click(function () {//价格区间
        tex1 = $('#text1').val().trim() * 1;
        tex2 = $('#text2').val().trim() * 1;
        if (tex1 > 0 && tex2 > 0) {
            ax();
        };

    });
    //下面页码跳转到相应的页面，得到相应的数据
    $('.main-bottom241').on('click', '.el-pager li', function () {
        ipage = ($(this).index() + 1) * 1;
        ax();
    });
    $('.main-bottom23 ul').on('click', '.bigimg', function () {
        let goodgid = $(this).data('id') * 1;
        window.open('shoppage.html?' + goodgid);
    });
    //点击哪个哪个高亮
    $('.main-bottom23 ul').on('click', '.smallimg a', function () {
        $(this).attr('class', 'acts').siblings().attr('class', '');
    });
    //小图切换大图
    $('.main-bottom23').on('click', '.smallimg a img', function () {
        $(this).parent().parent().prev().children().attr('src', $(this).attr('src'));
    });
    //点击一次获取一次足迹，委托
    $('.main-bottom23 ul').on('click', '.bigimg', function () {
        let gid = $(this).data('id');
        zuji(gid);
    });

    //足迹，点击一个商品就保存
    let zujib = '';
    function zuji(gid) {
        let zujilist = localStorage.zujilist;//把有记录，就把记录放到goodlist存起来，没有就是undfined
        if (zujilist) {//有值就要吧字符串切割成数组，遍历去重，然后在拼接在最后
            let arr = zujilist.split(',');
            gid = String(gid);
            let index = arr.indexOf(gid);//-1没有，直接把id拼接在后面；非-1,有，去掉旧的id，再把新的id放到末尾
            let str = '';
            console.log(index);
            if (index >= 0) {//有就替换
                arr.splice(index, 1);
                arr.push(gid);
                str = arr.join(',');
            } else {//没有
                str = zujilist + ',' + gid;
            }
            localStorage.zujilist = str;//把这个字符串赋值给localStorage.goodlist
        } else {//没有足迹，就把id直接给localstorage
            localStorage.zujilist = gid;
        }
    }
    if (getcookie('username')) {//登录就从表格获取，
        let zujiy = localStorage.zujilist;
        if (zujiy) {
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
                    zujib += `<a href="###" class="zujiya" data-id="${obj.gid}">
                     <img src="${obj.img}" alt="">
                     <div>
                         <p>${obj.title}</p>
                         <p>${obj.price}</p>
                     </div>
                    </a>`;
                }
                $('.zujiy').html(zujib);
            });

        }
    } else {
        //足迹渲染
        let zujiy = localStorage.zujilist;
        if (zujiy) {
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
                        zujib += `<a href="###" class="zujiya" data-id="${obj.gid}">
                         <img src="${obj.bigimg}" alt="">
                         <div>
                             <p>${obj.title}</p>
                             <p>${obj.price}</p>
                         </div>
                        </a>`;
                    }
                    $('.zujiy').html(zujib);
                });
                // 点击一次获取一次足迹
                $('.zujiy').on('click', '.zujiya', function () {
                    let zujigid = $(this).data('id') * 1;
                    // console.log(zujigid);
                    window.open('shoppage.html?' + zujigid);
                });

            }
        }


    }



})();



