function init() {
    let xuanran = new Promise(function (resolve) {
        $.ajax({
            type: 'post',
            url: '../api/goods.php',
            success: str => {
                resolve(str);
            }
        });

    });
    xuanran.then(function (str) {
        let arr = JSON.parse(str);
        let html = '';
        for (let obj of arr) {
            html += `<tr data-id="${obj.gid}" ">
                        <td><input type="checkbox" name="" id="xuhao"">
                        </td>
                        <td class="gid" contentEditable="true" >${obj.gid}</td>
                        <td class="title" contentEditable="true" >${obj.title}</td>
                        <td contentEditable="true" class="price">${obj.price}</td>
                        <td contentEditable="true" class="kucun">${obj.kucun}</td>
                        <td contentEditable="true" class="bigimg">${obj.bigimg}</td>
                        <td>
                            <input type="button" value="保存修改" id="usave">
                            <input type="button" value="删除" id="del">
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
        let gid = $(this).parent().parent().data('id');
        //登录删除数据库
        let del = new Promise(function (resolve) {
            $.ajax({
                type: 'post',
                url: '../api/managedel.php',
                data: {
                    gid
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
        let gid = $(this).parent().parent().find('.gid').html();
        let title = $(this).parent().parent().find('.title').html();
        let price = $(this).parent().parent().find('.price').html();
        let kucun = $(this).parent().parent().find('.kucun').html();
        let bigimg = $(this).parent().parent().find('.bigimg').html();
        console.log(title, price, kucun, bigimg);
        //登录保存修改数据
        let baocun = new Promise(function (resolve) {
            $.ajax({
                type: 'post',
                url: '../api/manafuzhi.php',
                data: {
                    gid,
                    title,
                    price,
                    kucun,
                    bigimg
                },
                success: str => {
                    console.log(str);
                    resolve(str);
                }
            });
        });
    }
});

