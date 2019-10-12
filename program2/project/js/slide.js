(function () {
    //点击购物车让她出来，侧栏广告效果
    let istrue = true;
    $('.tool-cart').on('click', '#gwc1', function () {
        if (istrue) {
            $('.tool-bar').css('right', 0);
        } else {
            $('.tool-bar').css('right', -300 + 'px');
        }
        istrue = !istrue;
    });
    $('.tool-cart').on('click', '.gwc', function () {
        if (istrue) {
            $('.tool-bar').css('right', 0);
        } else {
            $('.tool-bar').css('right', -300 + 'px');
        }
        istrue = !istrue;
    });
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
    //购物车
    let username = getcookie('username');
    if (username) {
        let xuanran = new Promise(function (resolve) {
            $.ajax({
                type: 'post',
                url: '../api/gwc.php',
                data: {
                    username
                },
                success: str => {
                    let str1 = JSON.parse(str);
                    resolve(str1);
                }
            });
        });
        xuanran.then(function (arr) {
            let gwc1 = arr.map(function (item, index) {
                return `<li  data-gid="${item.gid}" data-username="${item.username}">
              <a href="" class="leftimg"><img src="${item.img}" alt=""></a>
              <div class="righttitle">
                  <a href="">
                    ${item.title}
                  </a>
                  <div class="rightprice">
                  ${item.price} <i>x</i> <i>${item.gnum}</i>
                  <span class="remove1">删除</span>
                   </div>
              </div>
          </li>`;
            }).join('');
            $('.goodsa').html(gwc1);
            let zongnum = 0;
            let zongji = 0;
            arr.forEach(function (item, index) {
                zongnum = zongnum * 1 + item.gnum * 1;//累加
                zongji = zongji * 1 + item.total * 1;
            });
            // console.log(zongnum);
            let zongjias = ` <p class="buttomgoods">
                      共 <i>${zongnum}</i> 件商品，总计￥<i class="buttomprice">${zongji}</i>
                  </p>
                  <div class="qijiesuan">去结算</div>`;
            $('.goodsb').html(zongjias);
            $('.zongnum1').html(zongnum);
        });
        $('.goodsa').on('click', '.remove1', function () {
            let ok = confirm('您确定要删我吗？');
            let gid = $(this).parent().parent().parent().data('gid');
            if (ok) {
                $(this).parent().parent().parent().remove();
                let update = new Promise(function (resolve) {
                    $.ajax({
                        type: 'post',
                        url: '../api/delete.php',
                        data: {
                            username,
                            gid,
                            del: 1
                        },
                        success: str => {
                            resolve(str);
                        }
                    });
                });
            };
        });
    } else {
        // alert('登陆后才会保留数据奥~');
        let goodlist = getcookie('gid');//字符串 3&2&1
        let gnumlist = getcookie('gnum');
        if (goodlist && gnumlist) {
            let newnum = gnumlist.split(',');//对应数量替换
            let data = goodlist.split(',');//[3,2,1]
            let gwc1 = '';
            for (let item in data) { //item
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
                    for (let obj of arr) {
                        if (data[item] * 1 == obj.gid * 1) {
                            gwc1 += `<li  data-gid="${obj.gid}" data-username="${item.username}">
                          <a href="" class="leftimg"><img src="${obj.bigimg}" alt=""></a>
                          <div class="righttitle">
                              <a href="">
                                ${obj.title}
                              </a>
                              <div class="rightprice" data-price="${obj.price}">
                              ${obj.price} <i>x</i> <i>${newnum[item]}</i>
                              <span class="remove1">删除</span>
                               </div>
                          </div>
                      </li>` ;
                        }
                    };
                    $('.goodsa').html(gwc1);
                    let zongnum = 0;
                    let zongji = 0;
                    for (let k in newnum) {
                        zongnum = zongnum + newnum[k] * 1;//累加
                        zongji = zongji * 1 + newnum[item] * $('.rightprice').eq(k).data('price');
                    }
                    let zongjias = ` <p class="buttomgoods">
                      共 <i>${zongnum}</i> 件商品，总计￥<i class="buttomprice">${zongji}</i>
                  </p>
                  <div class="qijiesuan">去结算</div>`;
                    $('.goodsb').html(zongjias);
                    $('.zongnum1').html(zongnum);
                });

            };
        } else {
            $('.zongnum1').html('').css('background', 'transparent');
            $('.wei').html('(登陆后才会保存奥~)').css('color', 'red');
            $('.car1').html('未加入任何商品').css('color', 'red');
        }

    };


})();