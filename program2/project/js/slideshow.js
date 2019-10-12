function imgCarousel(opt) {
    var defaultOpt = {
        //默认参数
        iw: 500, //宽度 (可选)
        ih: 300,//高度 (可选)
        time: 2,//图片切换时间(可选)
        btnType: true
    }
    //有配置用配置，没有配置用默认
    Object.assign(defaultOpt, opt);//用默认参数 ：defaultOpt
    /*
           需求：轮播图
               * 渲染生成图片列表
               * 所有的图片放在右侧，第一张图放在可视区
               * 焦点(幻灯片)动态生成（根据图片的个数来创建）
               * 开启定时器：自动轮播
               * 点击左右按钮：切换到上下张
               * 点击焦点：切换到对应的图片
    */
    var slideshow = document.getElementById(defaultOpt.ele);
    var ul = slideshow.getElementsByTagName('ul')[0];
    var prevBtn = slideshow.getElementsByClassName('prev')[0];
    var nextBtn = slideshow.getElementsByClassName('next')[0];
    //设置尺寸
    slideshow.style.width = defaultOpt.iw + 'px';
    slideshow.style.height = defaultOpt.ih + 'px';
    //渲染生成图片列表
    var strList = defaultOpt.datalist.map(function (item) {
        return `<li><img src="${item}" alt="">`;
    }).join('');
    ul.innerHTML = strList;//渲染
    //查找li节点
    var lis = slideshow.getElementsByTagName('li');//每一个li
    var smallbtn = slideshow.getElementsByClassName('smallbtn')[0];
    var iw = lis[0].offsetWidth;
    var timer = null;
    var now = 0;//可视区里面图片的下标
    //1.所有的图片放在右侧，第一张图放在可视区
    //2.焦点(幻灯片)动态生成（根据图片的个数来创建）
    var html = '';
    for (var i = 0; i < lis.length; i++) {
        lis[i].style.left = iw + 'px';
        html += `<span></span>`;
    }
    var spans = slideshow.getElementsByTagName('span');
    smallbtn.innerHTML = html;
    lis[0].style.left = 0;//第一张图显示在最前面
    smallbtn.children[0].className = 'active';

    //3.开启定时器：自动轮播
    function smallbtnMove() {
        //排他
        for (var i = 0; i < smallbtn.children.length; i++) {
            smallbtn.children[i].className = '';
        }
        smallbtn.children[now].className = 'active';
    }
    function next() {//下一张
        startMove(lis[now], { 'left': -iw });

        now++;
        // console.log(now);
        if (now > lis.length - 1) {
            now = 0;
        }
        lis[now].style.left = iw + 'px';//候场
        startMove(lis[now], { 'left': 0 });
        smallbtnMove();//焦点跟随
    }
    function prev() {//上一张
        startMove(lis[now], { 'left': iw });
        now--;
        if (now < 0) {
            now = lis.length - 1;
        }
        lis[now].style.left = -iw + 'px';//候场
        startMove(lis[now], { 'left': 0 });
        smallbtnMove();

    }
    timer = setInterval(next, defaultOpt.time * 1000);//每隔两秒切换一个图片
    //4.点击左右按钮：切换到上下张

    //鼠标移入停止，移出要继续运动
    slideshow.onmouseover = function () {
        clearInterval(timer);
        if (!defaultOpt.btnType) {
            prevBtn.style.display = 'block';
            nextBtn.style.display = 'block';
        }
    }
    slideshow.onmouseout = function () {
        clearInterval(timer);
        timer = setInterval(next, defaultOpt.time * 1000);//每隔两秒切换一个图片
        if (!defaultOpt.btnType) {
            prevBtn.style.display = 'none';
            nextBtn.style.display = 'none';
        }
    }
    //判断按钮是否一开始显示隐藏
    if (defaultOpt.btnType) {
        //true
        prevBtn.style.display = 'block';
        nextBtn.style.display = 'block';
    } else {
        prevBtn.style.display = 'none';
        nextBtn.style.display = 'none';
    }
    prevBtn.onclick = function () {
        //上一张
        prev();
    }
    nextBtn.onclick = function () {
        //下一张
        next();
    }
    //5.点击焦点：切换到对应的图片
    for (var i = 0; i < smallbtn.children.length; i++) {
        spans[i].index = i;
        spans[i].onclick = function () {
            console.log(this.index);
            if (this.index > now) {
                //新图从右边切入
                startMove(lis[now], { 'left': -iw });
                lis[this.index].style.left = iw + 'px';
                startMove(lis[this.index], { 'left': 0 });

            }
            if (this.index < now) {
                //新图从左边切入
                startMove(lis[now], { 'left': iw });
                lis[this.index].style.left = -iw + 'px';
                startMove(lis[this.index], { 'left': 0 });

            }
            now = this.index;
            smallbtnMove();//焦点跟随，高亮哪个
        }
    }
}


