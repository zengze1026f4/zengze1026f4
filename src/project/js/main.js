(function () {
    let welcome = document.getElementById('welcome');
    let welcome1 = document.getElementById('welcome1');
    let exit = document.getElementById('exit');
    function undate() {
        let data = getcookie('username');
        if (data) {
            //登陆的
            welcome.innerHTML = data + ',欢迎你访问我们的网站。<a href="" class="quit">退出</a>';
            welcome1.innerHTML = data;
            exit.innerHTML = '退出';

        } else {
            welcome.innerHTML = '欢迎你访问我们的网站。<a href="###" class="denglu">登陆</a>';
            welcome1.innerHTML = '<a href="login.html" class="denglu">请登录</a>,<a href="reg.html" class="quit1">注册</a>';
            exit.innerHTML = '';
        }
    }

    undate();
    welcome.onclick = ev => {
        if (ev.target.innerHTML == '退出') {
            //退出
            alert('退出成功');
            removecookie('username');
            removecookie('url');
        } else if (ev.target.innerHTML == '登陆') {
            // console.log(88);
            location.href = 'login.html';
        }
        undate();
    }
    exit.onclick = function () {
        //退出
        alert('退出成功');
        removecookie('username');
        removecookie('url');
        undate();
    }

    imgCarousel({//配置参数
        ele: 'slideshow',//id
        datalist: ['../css/img/ban1.jpg', '../css/img/ban2.jpg', '../css/img/ban3.jpg', '../css/img/ban4.jpg', '../css/img/ban5.jpg', '../css/img/ban6.jpg'],//图片
        iw: 760, //宽度 (可选)
        ih: 480,//高度 (可选)
        time: 3,//图片切换时间(可选)
        btnType: false // 按钮是否一开始就显示：true(显示，默认效果)  false:隐藏(可选)
    });
    //显示隐藏，导航栏
    $('.header-top3 .sanjiao3').mouseover(function () {
        $('.sanjiao4').css('transform', 'rotate(180deg)');
        $('.header-top5').css('display', 'block')
            .mouseover(function () {
                $('.header-top5').css('display', 'block')
                $('.sanjiao4').css('transform', 'rotate(180deg)');
            })
    })
    $('.header-top3 .sanjiao3').mouseout(function () {
        $('.sanjiao4').css('transform', '');
        $('.header-top5').css('display', 'none')
            .mouseout(function () {
                $('.header-top5').css('display', 'none')
                $('.sanjiao4').css('transform', '');
            })
    });
    //数据渲染
    let arr = [{
        color: '#4FB99F',
        id: 1,
        imglist: ['../img/l1.jpg', '../img/l2.jpg', '../img/l3.jpg', '../img/l4.jpg',
            '../img/l5.jpg', '../img/l6.jpg', '../img/l7.jpg', '../img/l8.jpg',
            '../img/l9.jpg', '../img/l10.jpg', '../img/l11.jpg', '../img/l12.jpg'],
        img: '../css/img/1l.png',
        imgbig: '../img/6l.jpg',
        titles: ['快速充电', '拍照神器', ' 全面屏', '面部解锁']
    },
    {
        id: 2,
        color: '#F29600',
        imglist: ['../img/n1.jpg', '../img/n2.jpg', '../img/n3.jpg', '../img/n4.jpg',
            '../img/n5.jpg', '../img/n6.jpg', '../img/n7.png', '../img/n8.jpg',
            '../img/n13.png', '../img/n10.jpg', '../img/n11.jpg', '../img/n14.jpg'],
        img: '../css/img/2l.png',
        imgbig: '../img/2l.jpg',
        titles: ['保护壳', '保护膜', '移动电源', '数据线'],

    },
    {
        color: '#E73828',
        id: 3,
        imglist: ['../img/m1.jpg', '../img/m2.jpg', '../img/m3.jpg', '../img/m4.jpg',
            '../img/m5.jpg', '../img/m6.jpg', '../img/m7.jpg', '../img/m8.jpg',
            '../img/m9.jpg', '../img/m10.jpg', '../img/m11.jpg', '../img/m12.jpg'],
        img: '../css/img/3l.png',
        imgbig: '../img/3l.png',
        titles: ['平板电脑', '苹果电脑', ' 办公设备', '电脑外设']
    },
    {
        id: 4,
        color: '#C43D7E',
        imglist: ['../img/v1.jpg', '../img/v2.jpg', '../img/v3.jpg', '../img/v4.jpg',
            '../img/v5.png', '../img/v6.png', '../img/v7.jpg', '../img/v8.jpg',
            '../img/v9.jpg', '../img/v10.jpg', '../img/v11.jpg', '../img/v12.jpg'],
        img: '../css/img/4l.png',
        imgbig: '../img/4l.jpg',
        titles: ['耳机耳麦', '音箱音响', '无人机', '益智早教'],
    },
    {
        id: 5,
        color: '#6D55BD',
        imglist: ['../img/x1.jpg', '../img/x2.jpg', '../img/x3.jpg', '../img/x4.jpg',
            '../img/x5.jpg', '../img/x6.jpg', '../img/x7.jpg', '../img/x8.jpg',
            '../img/x9.jpg', '../img/x10.jpg', '../img/x11.jpg', '../img/x12.jpg'],
        img: '../css/img/5l.png',
        imgbig: '../img/5l.jpg',
        titles: ['智能电视', '创意生活', '个人护理', '智能插座'],
    },
    {
        id: 6,
        color: '#325BB5',
        imglist: ['../img/z1.jpg', '../img/z2.jpg', '../img/z3.png', '../img/z4.jpg',
            '../img/z5.jpg', '../img/z6.jpg', '../img/z7.jpg', '../img/z8.jpg',
            '../img/z9.jpg', '../img/z10.jpg', '../img/z11.jpg', '../img/m12.jpg'],
        img: '../css/img/6l.png',
        imgbig: '../img/1l.jpg',
        titles: ['智能手环', '儿童手表', '蓝牙耳机', '平衡车'],

    }];
    let html = '';
    for (let key in arr) {

        html += `
                    <div class="floor_monitor" id="go_floor${arr[key].id}">
                       
                        <div class="floor_title">
                            <img src="${arr[key].img}" alt="">
                        </div>
                        
                        <div class="floor_main">
                            <div class="floor_main1">
                                <a href="" class="topAD">
                                    <img class="get-src" src="${arr[key].imgbig}">
                                    <div class="diy-tip">
                                        <h3 style="color:${arr[key].color}">华为 P30 Pro 全网通版</h3>
                                        <p>海思麒麟980 后置四摄</p>
                                    </div>
                                </a>
                                <div class="bottomAD" style="background:${arr[key].color}">
                                    <a href="" class="textAD ellipsis" style="font-size: 12px; background:${arr[key].color}">华为 P30 Pro
                                        全网通版<em style="float: right">&gt;</em></a>
                                    <dl>
                                        <dt>热销榜</dt>
                                        <dd class="spans">
                                        <span>
                                        ${arr[key].titles[0]}
                                     </span>
                                     <span>
                                     ${arr[key].titles[1]}
                                     </span>
                                     <span>
                                     ${arr[key].titles[2]}
                                     </span>
                                     <span>
                                     ${arr[key].titles[3]}
                                     </span>
                                        </dd>
                                    </dl>
                                </div>
                            </div>
                            <div class="floor_main2">
                                <ul class="ul1">
                                    <li>
                                        <a href="" class="anim">
                                            <img class="get-src" src="${arr[key].imglist[0]}">
                                            <div class="diy-tip" style="color:${arr[key].color}">
                                                <h3>iPhone 11 Pro Max 全网通版</h3>
                                                <p>iPhone 新品</p>
                                                <div class="get-price" style="color:${arr[key].color}">￥10899.00</div>
                                            </div>
                                        </a>
                                    </li>
    
                                    <li>
                                        <a href="" class="anim">
                                            <img class="get-src" src="${arr[key].imglist[1]}">
                                            <div class="diy-tip" style="color:${arr[key].color}">
                                                <h3>华为 荣耀9X 全网通版</h3>
                                                <p>快由芯生 超能旗舰</p>
                                                <div class="get-price" style="color:${arr[key].color}">￥1899.00</div>
                                            </div>
                                        </a>
                                    </li>
    
                                    <li>
                                        <a href="" class="anim">
                                            <img class="get-src" src="${arr[key].imglist[2]}">
                                            <div class="diy-tip" style="color:${arr[key].color}">
                                                <h3>vivo iQOO Pro 5G版</h3>
                                                <p>全速进化 生而强悍</p>
                                                <div class="get-price" style="color:${arr[key].color}">￥3798.00</div>
                                            </div>
                                        </a>
                                    </li>
    
                                    <li>
                                        <a href="" class="anim">
                                            <img class="get-src" src="${arr[key].imglist[3]}">
                                            <div class="diy-tip" style="color:${arr[key].color}">
                                                <h3>三星 Galaxy Note 10+ 5G版</h3>
                                                <p>绽放艺术之美</p>
                                                <div class="get-price" style="color:${arr[key].color}">￥7999.00</div>
                                            </div>
                                        </a>
                                    </li>
    
                                    <li>
                                        <a href="" class="anim">
                                            <img class="get-src" src="${arr[key].imglist[4]}">
                                            <div class="diy-tip" style="color:${arr[key].color}">
                                                <h3>一加手机7 Pro 全网通版</h3>
                                                <p>前所未见的屏幕</p>
                                                <div class="get-price" style="color:${arr[key].color}">￥4299.00</div>
                                            </div>
                                        </a>
                                    </li>
    
                                    <li>
                                        <a href="" class="anim">
                                            <img class="get-src" src="${arr[key].imglist[5]}">
                                            <div class="diy-tip"style="color:${arr[key].color}">
                                                <h3>华为 荣耀 20S 全网通版</h3>
                                                <p style="color: #555">3200万AI自拍</p>
                                                <div class="get-price" style="color:${arr[key].color}">￥2199.00</div>
                                            </div>
                                        </a>
                                    </li>
    
                                    <li>
                                        <a href="" class="anim">
                                            <img class="get-src" src="${arr[key].imglist[6]}">
                                            <div class="diy-tip" style="color:${arr[key].color}">
                                                <h3>realme Q 全网通版</h3>
                                                <p>四摄迅猛龙 真我手机</p>
                                                <div class="get-price" style="color:${arr[key].color}">￥1198.00
                                                </div>
                                            </div>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="" class="anim">
                                            <img class="get-src" src="${arr[key].imglist[7]}">
                                            <div class="diy-tip" style="color:${arr[key].color}">
                                                <h3>华为 nova 5 Pro 全网通版</h3>
                                                <p>你比夜色更美</p>
                                                <div class="get-price" style="color:${arr[key].color}">￥2999.00</div>
                                            </div>
                                        </a>
                                    </li>
    
                                </ul>
    
                            </div>
                            <div class="floor_main3">
                                <a href="" class="anim1">
                                    <img class="get-src" src="${arr[key].imglist[8]}">
                                    <div class="diy-tip" style="color:${arr[key].color}">
                                        <h3>红米 Redmi Note 8 全网通版</h3>
                                        <p>4800万四摄</p>
                                    </div>
                                </a>
    
                                <a href="" class="anim1">
                                    <img class="get-src" src="${arr[key].imglist[9]}">
                                    <div class="diy-tip" style="color:${arr[key].color}">
                                        <h3>华为 畅享9e 全网通版</h3>
                                        <p>千元珍珠屏</p>
                                    </div>
                                </a>
    
                                <a href="" class="anim1">
                                    <img class="get-src" src="${arr[key].imglist[10]}">
                                    <div class="diy-tip" style="color:${arr[key].color}">
                                        <h3>OPPO A11x全网通版</h3>
                                        <p>8GB+128GB四摄</p>
                                    </div>
                                </a>
    
                                <a href="" class="anim1">
                                    <img class="get-src" src="${arr[key].imglist[11]}">
                                    <div class="diy-tip" style="color:${arr[key].color}">
                                        <h3>iPhone XR全网通版</h3>
                                        <p>超视网膜显示屏</p>
                                    </div>
                                </a>
    
    
                            </div>
                        </div>
                       
                        <div class="floor_link">
                            <div class="link_list">
                                <span style="color:${arr[key].color}">品质推荐</span>
                                <a href="###" style="color:${arr[key].color}">苹果</a>
                                <a href="###" style="color:${arr[key].color}">华为</a>
                                <a href="###" style="color:${arr[key].color}">荣耀</a>
                                <a href="###" style="color:${arr[key].color}">小米</a>
                                <a href="###" style="color:${arr[key].color}">三星</a>
                                <a href="###" style="color:${arr[key].color}">oppo</a>
                                <a href="###" style="color:${arr[key].color}">vivo</a>
                                <a href="###" style="color:${arr[key].color}">魅族</a>
                                <a href="###" style="color:${arr[key].color}">一加</a>
                            </div>
                            <div class="link_bg" style="background:${arr[key].color}"></div>
                        </div>
                    </div> `;

    };
    $('.main_wrapper .xuan').html(html);

    //导航栏显示隐藏
    $('.header-top3 .sanjiao1').mouseover(function () {
        $('.sanjiao2').css('transform', 'rotate(180deg)');
        $('.header-top4').css('display', 'block')
            .mouseover(function () {
                $('.header-top4').css('display', 'block');
                $('.sanjiao2').css('transform', 'rotate(180deg)');
            })
    })
    $('.header-top3 .sanjiao1').mouseout(function () {
        $('.header-top4').css('display', 'none')
            .mouseout(function () {
                $('.header-top4').css('display', 'none');
                $('.sanjiao2').css('transform', '');
            })
    })

    //楼层跳跃
    //1、找到所有楼层跟按钮
    $('#yyw .floor_monitor').each(function (item, index) {
        $(item).css('height', window.innerHeight + 'px');
    });
    $('.diy-elevator a').click(function () {
        $(this).attr('class', 'active').siblings().attr('class', '');
        var isscroll = window.innerHeight * $(this).index();
        window.scrollTo(0, isscroll);
    });
    //3.滚动滑轮，如果滚动到了相应的楼层，对应按钮也要高亮
    let floors = document.getElementsByClassName('floor_monitor');
    let abtns = document.querySelectorAll('.diy-elevator a')
    window.onscroll = function () {
        var scrollTop = window.scrollY;//垂直滚动距离
        // console.log(scrollTop);
        if (scrollTop > 650) {
            $('.jump').css('display', 'block');
        } else {
            $('.jump').css('display', 'none');
        }
        for (var i = 0; i < floors.length; i++) {
            if (scrollTop >= floors[i].offsetTop) {
                // console.log('到达临界点' + i);
                for (var j = 0; j < abtns.length; j++) {
                    abtns[j].className = '';
                }
                abtns[i].className = 'active';
            }
        }
        // if (scrollTop >= $('.floor_monitor').eq(i).offset().top) {
        //     $('.diy-elevator a').eq(i).attr('class', 'active').siblings().attr('class', '');
        // };
    }

    //回到顶部
    $('#gotop').click(function () {
        var scrollTop = window.scrollY;//获取垂直方向的滚动距离
        var boxTop = $('#gotop').offset().top;
        var timer = setInterval(function () {
            var speed = parseInt(scrollTop / 6);
            var speed1 = parseInt(boxTop / 6);
            boxTop -= speed1;
            scrollTop -= speed;
            if (speed <= 0 || speed1 <= 0) {
                clearInterval(timer);
            }
            window.scrollTo(0, scrollTop);//scrollTo(x, y) //指定滚动位置 :回到顶部 *scrollBy(xnum, ynum) //设置基于当前位置滚动的距离，可以为负数
            gtp.style.top = boxTop + 'px';
        }, 30);
    });

    //底部上下轮播图
    let lis = document.querySelectorAll('.zilunbo ul li');
    // console.log(lis)
    itop = 40;
    for (var i = 0; i < lis.length; i++) {
        lis[i].style.top = itop + 'px';
    }
    lis[0].style.top = 0;//第一张图显示在最前面
    now = 0;
    function next() {//下一张
        startMove(lis[now], { 'top': -itop });
        now++;
        if (now > lis.length - 1) {
            now = 0;
        }
        lis[now].style.top = itop + 'px';//候场
        startMove(lis[now], { 'top': 0 });
    }
    timer = setInterval(next, 3000);//每隔两秒切换一个图片
    //顶部广告
    $('#close').click(function () {
        $('.gg').css('display', 'none');
    });


})();
