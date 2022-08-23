const text = [
    ' 人要有毅力，否则将一事无成。——居里夫人',
    ' 为学须刚与恒，不刚则隋隳，不恒则退。——冯子咸',
    ' 每一个不曾起舞的日子，都是对生命的辜负。——尼采',
    ' 成大事不在于力量的大小，而在于能坚持多久。——约翰生',
    ' 当一个女子看天空的时候，她并不想寻找什么，她只是寂寞。——安妮宝贝',
    ' 如果说我有什么贡献的话，那不是我的才能的结果，完全是勤勉的毅力的结果。——道尔顿',
    ' 即使慢，驰而不息，纵会落后，纵会失败，但必须能够到达他所向的目标。——鲁迅',
]

const url = [
    'https://www.w3school.com.cn/html/html5_intro.asp',
    'http://caibaojian.com/javascript/',
    'https://www.w3school.com.cn/css/index.asp',
    'https://www.w3school.com.cn/bootstrap5/index.asp',
    'https://www.runoob.com/nodejs/nodejs-tutorial.html',
    'https://cn.vuejs.org/',
]
// console.log($('#text'));
let t = $('#text')
let i = 0
const inter = setInterval(() => {
    if (i > text.length - 1) {
        i = 0
    }
    t.innerText = text[i]
    t.style.animation = 'move  1s ';
    i++
}, 8000)

// console.log($('.but img',1));
const img = $('.but img', 1)
const ys = $('.top2 .ys', 1)
for (let i = 0; i < img.length; i++) {
    img[i].onmouseover = function () {
        ys[i].style.display = 'block'
    }
    img[i].onmouseout = function () {
        ys[i].style.display = 'none'
    }
}

let pf = ['../img/11.jpg', '../img/22.png', '../img/33.jpg']
for (let j = 0; j < pf.length; j++) {
    $('.xx ul li', 1)[j].style.backgroundImage = 'url(' + pf[j] + ')';
}
$('.yf img').onclick = function () {
    $('.yf .xx').style.display = 'block'
    $('.yf .xx ul').className='of'
}

$('.yf .xx ul').onmouseover=function(){
    $('.yf .xx .cha').style.display='none'
}
$('.yf .xx ul').onmouseout=function(){
    $('.yf .xx .cha').style.display='block'
    $('.yf .xx .cha').onclick=function(){
        $('.yf .xx ul').className='to'
        this.style.display='none'
    }
}
const pfimg = $('.yf .xx ul li', 1)
console.log($('body'));
$('body').backgroundColor = 'red'
pfimg.forEach((element, index) => {
    element.onclick = function () {
        $('body').style.backgroundImage = "url(" + pf[index] + ")"
        $('.yf .xx ul').className='to'
    }
});

$('.ouer', 1).forEach((element, index) => {
    element.onclick = function () {
        console.log(index);
        window.location.href=url[index]
    }
})