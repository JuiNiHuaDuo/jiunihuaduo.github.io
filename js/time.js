     //绘制时钟的刻度 动态创建60个li标签。
     function li() {
        let ul = document.getElementById("kedu");//先获取到ul，因为要在ul下创建li。
        let css;//用来存li的style样式中的CSS设置。
        for (let i = 0; i < 60; i++) {
            css += `#kedu li:nth-of-type(${i + 1}){transform:rotate(${i * 6}deg)}`//循环设置ul下的第i+1个li的旋转角度，要在css中设置了li的旋转中心
            ul.innerHTML += `<li></li>`;//这里要用+=，如果直接用=，只会创建一个li，因为会覆盖前面的li，为了不出现覆盖就用+=。
        }
        let sty = document.getElementById("style")//这里获取到style标签。
        sty.innerHTML += css //把ul下的li标签的css样式写入到style里。
    }
    li();//这里结束就把刻度画好了。
    function getNowFormatDate() {
        let date = new Date()
        // seperator1 = '-'//格式分隔符
        year = date.getFullYear() //获取完整的年份(4位)
        month = date.getMonth() + 1//获取当前月份(0-11,0代表1月)
        strDate = date.getDate() // 获取当前日(1-31)
        if (month >= 1 && month <= 9) month = '0' + month // 如果月份是个位数，在前面补0
        if (strDate >= 0 && strDate <= 9) strDate = '0' + strDate // 如果日是个位数，在前面补0

        var a = new Array("日", "一", "二", "三", "四", "五", "六");
        var week = date.getDay();
        var str = "星期" + a[week];

        let currentdate = year + '年 ' + month + '月 ' + strDate + '日 ' + str


        return currentdate
    }
    function time() {
        let s = document.getElementById("second");//获取到时分秒的三个指针，后面用来动态让它们旋转起来。
        let m = document.getElementById("min");
        let h = document.getElementById("hour");
        let ymd = document.getElementById('ymd')
        let hms = document.getElementById('hms')
        //获取时间。
        let date = new Date();
        let snum = date.getSeconds();//获取现在是多少秒。
        let mnum = date.getMinutes() + snum / 60;//获取现在是多少分，不能忘记加上 秒数/60。
        let hnum = date.getHours() + mnum / 60; //获取现在是多少时，不能忘记加上 分钟数/60。
        let gs = function (second) {
            if (second < 10) {
                return "0" + second
            }
            return second
        }
        hms.innerText = (gs(date.getHours())) + ":" + (gs(date.getMinutes())) + ":" + (gs(date.getSeconds()))
        //获取当前日期函数

        ymd.innerText = getNowFormatDate()
        s.style.transform = `rotate(${snum * 6}deg)`;//设置的trasnform就可以让它们旋转起来，秒针时一秒旋转6度。
        m.style.transform = `rotate(${mnum * 6}deg)`//分针也是一分钟旋转6度。
        h.style.transform = `rotate(${hnum * 30}deg)`//这里时小时，一小时旋转30度，所以*30.
    }
    setInterval(time, 100)//用计时器每100ms运行这个time函数。