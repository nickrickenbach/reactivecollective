/**
 * Created with JetBrains PhpStorm.
 * User: rickenbachn
 * Date: 7/26/13
 * Time: 11:11 AM
 * To change this template use File | Settings | File Templates.
 */
function Clock(){
    var Obj;
    this.Obj = function(_set){if(_set){Obj=_set;return Obj;}else{return Obj;}};

    var numbers;
    var curTime;
    var targetTime;

    var _second = 1000;
    var _minute = _second * 60;
    var _hour = _minute * 60;
    var _day = _hour * 24;
    var timer;

    function _init(){
        Obj = $("<div class='clock' />");
        curTime = new Date();
        targetTime = new Date("August 19, 2013 00:00:00");
        numbers = [];
        var dub;
        var sing;
        for(var i=0;i<8;i++){
            var Num;
            switch(i){
                case 0:
                    dub = $("<div class='dub_clock'/>");
                    sing = $("<div class='sing_clock'/>");
                    Num = new FlipNumber("day0");
                    sing.append(Num.Obj());
                    break;
                case 1:
                    Num = new FlipNumber("day1");
                    sing.append(Num.Obj());
                    sing.append("<div class='cTxt'>days</div>");
                    dub.append(sing);
                    break;
                case 2:
                    sing = $("<div class='sing_clock'/>");
                    Num = new FlipNumber("hour0");
                    sing.append(Num.Obj());
                    break;
                case 3:
                    Num = new FlipNumber("hour1");
                    sing.append(Num.Obj());
                    sing.append("<div class='cTxt'>hrs.</div>");
                    dub.append(sing);
                    Obj.append(dub);
                    break;
                case 4:
                    dub = $("<div class='dub_clock'/>");
                    sing = $("<div class='sing_clock'/>");
                    Num = new FlipNumber("min0");
                    sing.append(Num.Obj());
                    break;
                case 5:
                    Num = new FlipNumber("min1");
                    sing.append(Num.Obj());
                    sing.append("<div class='cTxt'>min.</div>");
                    dub.append(sing);
                    break;
                case 6:
                    sing = $("<div class='sing_clock'/>");
                    Num = new FlipNumber("sec0");
                    sing.append(Num.Obj());
                    break;
                case 7:
                    Num = new FlipNumber("sec1");
                    sing.append(Num.Obj());
                    sing.append("<div class='cTxt'>sec.</div>");
                    dub.append(sing);
                    Obj.append(dub);
                    break;
            }
            numbers.push(Num);
        }
        timer = setInterval(showRemaining,1000);
        showRemaining();
    }
    _init();

    function showRemaining() {
        curTime = new Date();
        var distance = targetTime - curTime;
        if (distance < 0) {

            clearInterval(timer);
            //document.getElementById('countdown').innerHTML = 'EXPIRED!';

            return;
        }
        var days = (Math.floor(distance / _day)<=9) ? "0"+String((Math.floor(distance / _day))) : String(Math.floor(distance / _day));
        var hours = (Math.floor((distance % _day) / _hour)<=9) ? "0"+String((Math.floor((distance % _day) / _hour))) : String((Math.floor(distance % _day) / _hour));
        var minutes = (Math.floor((distance % _hour) / _minute)<=9) ? "0"+String((Math.floor((distance % _hour) / _minute))) : String((Math.floor(distance % _hour) / _minute));
        var seconds = (Math.floor((distance % _minute) / _second)<=9) ? "0"+String((Math.floor((distance % _minute) / _second))) : String(Math.floor((distance % _minute) / _second));

        numbers[0].flipTo(Number(days[0]));
        numbers[1].flipTo(Number(days[1]));
        numbers[2].flipTo(Number(hours[0]));
        numbers[3].flipTo(Number(hours[1]));
        numbers[4].flipTo(Number(minutes[0]));
        numbers[5].flipTo(Number(minutes[1]));
        numbers[6].flipTo(Number(seconds[0]));
        numbers[7].flipTo(Number(seconds[1]));

        console.log(days+" "+hours+" "+minutes+" "+seconds);
    }

}