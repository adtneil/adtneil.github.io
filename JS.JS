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


let n
let m
let o
let pp

let startime1 = 0
let latertime1 = ''
let nowTime1 = 1800000
let mintime1 = ''
let sectime1 = ''
let stopp = ''
let audio = new Audio('./01.mp3');

let startime2 = 0
let latertime2 = ''
let nowTime2 = 85000
let mintime2 = ''
let sectime2 = ''
let stopp2 = ''
let audio2 = new Audio('./02.mp3');

let startime3 = 0
let latertime3 = ''
let nowTime3 = 900000
let mintime3 = ''
let sectime3 = ''
let stopp3 = ''
let audio3 = new Audio('./03.mp3');

let startime4 = 0
let latertime4 = ''
let nowTime4 = 430000
let mintime4 = ''
let sectime4 = ''
let stopp4 = ''
let audio4 = new Audio('./04.mp3');

function timedown() {
    startime1 = new Date().getTime()
    latertime1 = startime1 + nowTime1
    n = setInterval(function backtime() {
        

        nowTime1 = Math.round((latertime1 - new Date().getTime()) / 1000 )      
    
        
        mintime1 = Math.floor(nowTime1 / 60)
        sectime1 = nowTime1 % 3600 % 60

        mintime1 < 10 ? mintime1 = '0' + mintime1 : mintime1 = mintime1
        sectime1 < 10 ? sectime1 = '0' + sectime1 : sectime1 = sectime1
        p1.innerHTML = `半小時 現在時間 00:${mintime1}:${sectime1}`
        if (nowTime1 === 0) {
            clearInterval(n)
            btn1.disabled = false
            btn1.innerHTML = "star"
            stop1.style.display = 'none'
            p1.innerHTML = `半小時`
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
        }

    }, 1000)
}
function timedown2() {
    startime2 = new Date().getTime()
    latertime2 = startime2 + nowTime2
    m = setInterval(function backtime() {
        
        nowTime2 = Math.round((latertime2 - new Date().getTime()) / 1000 )

        
        mintime2 = Math.floor(nowTime2 / 60)
        sectime2 = nowTime2 % 3600 % 60

        mintime2 < 10 ? mintime2 = '0' + mintime2 : mintime2 = mintime2
        sectime2 < 10 ? sectime2 = '0' + sectime2 : sectime2 = sectime2
        p2.innerHTML = `15分鐘 現在時間 00:${mintime2}:${sectime2}`
        if (nowTime2 === 0) {
            clearInterval(m)
            btn2.disabled = false
            btn2.innerHTML = "star"
            audio2.play();
            stop2.style.display = 'none'
            p2.innerHTML = `15分鐘`
            

        }

    }, 1000)
}
function timedown3() {
    startime3 = new Date().getTime()
    latertime3 = startime3 + nowTime3
    o = setInterval(function backtime() {
        
        nowTime3 = Math.round((latertime3 - new Date().getTime()) / 1000 )

        mintime3 = Math.floor(nowTime3 / 60)
        sectime3 = nowTime3 % 3600 % 60

        mintime3 < 10 ? mintime3 = '0' + mintime3 : mintime3 = mintime3
        sectime3 < 10 ? sectime3 = '0' + sectime3 : sectime3 = sectime3
        p3.innerHTML = `1分25秒  現在時間 00:${mintime3}:${sectime3}`
        if (nowTime3 === 0) {
            clearInterval(o)
            btn3.disabled = false
            btn3.innerHTML = "star"
            audio3.play();
            stop3.style.display = 'none'
            p3.innerHTML = `1分25秒`
        }

    }, 1000)
}
function timedown4() {
    startime4 = new Date().getTime()
    latertime4 = startime4 + nowTime4
    pp = setInterval(function backtime() {
        
        nowTime4 = Math.round((latertime4 - new Date().getTime()) / 1000 )

        mintime4 = Math.floor(nowTime4 / 60)
        sectime4 = nowTime4 % 3600 % 60

        mintime4 < 10 ? mintime4 = '0' + mintime4 : mintime4 = mintime4
        sectime4 < 10 ? sectime4 = '0' + sectime4 : sectime4 = sectime4
        p4.innerHTML = `碧海  現在時間 00:${mintime4}:${sectime4}`
        if (nowTime4 === 0) {
            clearInterval(pp)
            btn4.disabled = false
            btn4.innerHTML = "star"
            audio4.play()
            console.log('第一次播放')
            stop4.style.display = 'none'
            p4.innerHTML = `碧海`
            setTimeout(function () {
                audio4.play()
                console.log('第二次播放')
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
    stopp = nowTime1 * 1000
    gogo.style.display = 'block'
    stop1.style.display = 'none'
    clearInterval(n)
    console.log(nowTime1);

}
function gogogo() {
    nowTime1 = stopp
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
    stopp2 = nowTime2 * 1000
    gogo2.style.display = 'block'
    stop2.style.display = 'none'
    clearInterval(m)

}
function gogogo2() {
    nowTime2 = stopp2
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
    stopp3 = nowTime3 * 1000
    gogo3.style.display = 'block'
    stop3.style.display = 'none'
    clearInterval(o)

}
function gogogo3() {
    nowTime3 = stopp3
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
    stopp4 = nowTime4 * 1000
    gogo4.style.display = 'block'
    stop4.style.display = 'none'
    clearInterval(pp)

}
function gogogo4() {
    nowTime4 = stopp4
    gogo4.style.display = 'none'
    stop4.style.display = 'block'
    timedown4()


}
