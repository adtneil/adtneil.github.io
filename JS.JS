const btn1 = document.querySelector('.halfAnHourb')
const p1 = document.querySelector('.halfAnHourp')
const btn2 = document.querySelector('.minutes15b')
const p2 = document.querySelector('.minutes15p')
const btn3 = document.querySelector('.minutes125b')
const p3 = document.querySelector('.minutes125p')
const btn4 = document.querySelector('.minutes302b')
const p4 = document.querySelector('.minutes302p')
const gogo = document.querySelector('.gogogoo')
const stop1 = document.querySelector('.stopp')
const stop2 = document.querySelector('.stopp2')
const gogo2 = document.querySelector('.gogogoo2')
const stop3 = document.querySelector('.stopp3')
const gogo3 = document.querySelector('.gogogoo3')
const stop4 = document.querySelector('.stopp4')
const gogo4 = document.querySelector('.gogogoo4')
const music = document.getElementById('#audio')
let audio = new Audio('./01.mp3');
let audio2 = new Audio('./02.mp3');
let audio3 = new Audio('./03.mp3');
let audio4 = new Audio('./04.mp3');
let stopp = ''
let stopp2 = ''
let stopp3 = ''
let stopp4 = ''
let time1 = ''
let time2 = ''
let time3 = ''
let time4 = ''
let time12 = ''
let time22 = ''
let time32 = ''
let time13 = ''
let time23 = ''
let time33 = ''
let time14 = ''
let time24 = ''
let time34 = ''
let nowtime = '1800'
let nowtime2 = '900'
let nowtime3 = '85'
let nowtime4 = '430'
let n
let m
let o
let pp
function timedown() {
    n = setInterval(function backtime() {

        nowtime--
        //console.log(nowtime)
        time2 = Math.floor(nowtime / 60)
        time3 = nowtime % 3600 % 60

        time3 < 10 ? time3 = '0' + time3 : time3 = time3
        time2 < 10 ? time2 = '0' + time2 : time2 = time2
        p1.innerHTML = `半小時 現在時間 00:${time2}:${time3}`
        if (nowtime === 0) {
            clearInterval(n)
            btn1.disabled = false
            btn1.innerHTML = "star"
            stop1.style.display = 'none'
            p1.innerHTML = `半小時`
            nowtime = '1800'
            audio.play();
            setTimeout(function () {
                audio.play();
            }, 900);
            setTimeout(function () {
                audio.play();
            }, 1800);
            setTimeout(function () {
                audio.play();
            }, 2700);
            setTimeout(function () {
                audio.play();
            }, 3600);
            setTimeout(function () {
                audio.play();
            }, 4500);
            setTimeout(function () {
                audio.play();
            }, 5400);
            setTimeout(function () {
                audio.play();
            }, 6300);
            setTimeout(function () {
                audio.play();
            }, 7200);
            setTimeout(function () {
                audio.play();
            }, 8100);
            setTimeout(function () {
                audio.play();
            }, 9000);

        }

    }, 1000)
}
function timedown2() {
    m = setInterval(function backtime() {

        nowtime2--
        //console.log(nowtime2)
        time22 = Math.floor(nowtime2 / 60)
        time32 = nowtime2 % 3600 % 60

        time32 < 10 ? time32 = '0' + time32 : time32 = time32
        time22 < 10 ? time22 = '0' + time22 : time22 = time22
        p2.innerHTML = `15分鐘 現在時間 00:${time22}:${time32}`
        if (nowtime2 === 0) {
            clearInterval(m)
            btn2.disabled = false
            btn2.innerHTML = "star"
            audio2.play();
            stop2.style.display = 'none'
            p2.innerHTML = `15分鐘`
            nowtime2 = '900'

        }

    }, 1000)
}
function timedown3() {
    o = setInterval(function backtime() {

        nowtime3--
        //console.log(nowtime3)
        time23 = Math.floor(nowtime3 / 60)
        time33 = nowtime3 % 3600 % 60

        time33 < 10 ? time33 = '0' + time33 : time33 = time33
        time23 < 10 ? time23 = '0' + time23 : time23 = time23
        p3.innerHTML = `1分25秒  現在時間 00:${time23}:${time33}`
        if (nowtime3 === 0) {
            clearInterval(o)
            btn3.disabled = false
            btn3.innerHTML = "star"
            audio3.play();
            stop3.style.display = 'none'
            p3.innerHTML = `1分25秒`
            nowtime3 = '85'

        }

    }, 1000)
}
function timedown4() {
    pp = setInterval(function backtime() {

        nowtime4--
        //console.log(nowtime4)
        time24 = Math.floor(nowtime4 / 60)
        time34 = nowtime4 % 3600 % 60

        time34 < 10 ? time34 = '0' + time34 : time34 = time34
        time24 < 10 ? time24 = '0' + time24 : time24 = time24
        p4.innerHTML = `碧海  現在時間 00:${time24}:${time34}`
        if (nowtime4 === 0) {
            clearInterval(pp)
            btn4.disabled = false
            btn4.innerHTML = "star"
            audio4.play()
            console.log''第一次播放')
            stop4.style.display = 'none'
            p4.innerHTML = `碧海`
            nowtime4 = '430'
            setTimeout(function () {
            audio4.play()
            console.log''第二次播放')
            }, 4000)

        }

    }, 1000)
}
function halfAnHour() {

    btn1.innerHTML = "倒數中"
    btn1.disabled = true
    stop1.style.display = 'block'
    timedown()

}
function stopppp() {
    stopp = nowtime
    gogo.style.display = 'block'
    stop1.style.display = 'none'
    clearInterval(n)

}
function gogogo() {
    nowtime = stopp
    gogo.style.display = 'none'
    stop1.style.display = 'block'
    timedown()


}




function minutes15() {
    btn2.innerHTML = "倒數中"
    btn2.disabled = true
    stop2.style.display = 'block'
    timedown2()
}

function stopppp2() {
    stopp2 = nowtime2
    gogo2.style.display = 'block'
    stop2.style.display = 'none'
    clearInterval(m)

}
function gogogo2() {
    nowtime2 = stopp2
    gogo2.style.display = 'none'
    stop2.style.display = 'block'
    timedown2()


}

function minutes125() {
    btn3.innerHTML = "倒數中"
    btn3.disabled = true
    stop3.style.display = 'block'
    timedown3()
}

function stopppp3() {
    stopp3 = nowtime3
    gogo3.style.display = 'block'
    stop3.style.display = 'none'
    clearInterval(o)

}
function gogogo3() {
    nowtime3 = stopp3
    gogo3.style.display = 'none'
    stop3.style.display = 'block'
    timedown3()
}


function minutes302() {
    btn4.innerHTML = "倒數中"
    btn4.disabled = true
    stop4.style.display = 'block'
    timedown4()
}

function stopppp4() {
    stopp4 = nowtime4
    gogo4.style.display = 'block'
    stop4.style.display = 'none'
    clearInterval(pp)

}
function gogogo4() {
    nowtime4 = stopp4
    gogo4.style.display = 'none'
    stop4.style.display = 'block'
    timedown4()


}
