
function sfq(opt) {


    defaultdata = {//可选参数
        ele: 'box',
        nav1: ['体育', '新闻', '娱乐'],//标题元素
        nav2: [
            ['体育1', '体育2'],
            ['新闻1', '新闻2', '新闻3'],
            ['娱乐1', '娱乐2', '娱乐3', '娱乐4']
        ],
        liheight: 50,//nav2的高度
        width: 180
    }
    Object.assign(defaultdata, opt);
    let h1 = defaultdata.nav1;
    let alis = defaultdata.nav2;
    let h = defaultdata.liheight;
    let w = defaultdata.width;

    //找元素
    var box = document.getElementById(defaultdata.ele);//大盒子

    // 渲染标题标签
    var html = '';
    for (var i = 0; i < h1.length; i++) {
        html += `<h1>${h1[i]}</h1>
                    <ul></ul>`  ;
    }
    box.innerHTML = html;

    // 渲染后重新取节点
    var btns = box.getElementsByTagName('h1');
    var cons = box.getElementsByTagName('ul');//ul


    //渲染标题里面内容
    for (let j = 0; j < alis.length; j++) {
        for (let k = 0; k < alis[j].length; k++) {
            // console.log(nav2[j][k]);
            cons[j].innerHTML += `<li>${alis[j][k]}</li>`;
        }
    }
    var lis = document.getElementsByTagName('li');//取出所有的li
    var num = lis.length;
    for (let i = 0; i < lis.length; i++) {
        lis[i].style.width = w;
        lis[i].style.width = h;
    }

    /*
        需求：点击版手风琴效果
            * 点击的时候，让对应的ul显示：高度恢复
    */
    // var istrue = true;//不能用一个开关控制所有
    for (var i = 0; i < btns.length; i++) {
        // btns[i].index = i;
        btns[i].istrue = true;//btns[0].istrue = true btns[1].istrue = true btns[2].istrue = true
        btns[i].width = w;
        btns[i].onclick = function () {
            var now = this.nextElementSibling;//ul
            var alis = now.getElementsByTagName('li');
            var sub = this.nextElementSibling.nextElementSibling;
            if (this.istrue) {//多个开关才能实现手风琴效果
                now.style.height = (h * alis.length) + 'px';//给ul加高度
                now.className = 'active';
                for (let a = 0; a < alis.length; a++) {
                    alis[a].style.height = h + 'px';//给ul加高度
                }
                // console.log(h * alis.length);
            } else {
                now.style.height = '0';
                now.className = '';
            }
            this.istrue = !this.istrue;
        }
    }

}

