/**
 * Created with JetBrains PhpStorm.
 * User: rickenbachn
 * Date: 7/26/13
 * Time: 11:18 AM
 * To change this template use File | Settings | File Templates.
 */
function FlipNumber(_type){
    var Obj;
    this.Obj = function(_set){if(_set){Obj=_set;return Obj;}else{return Obj;}};

    var numbers = [
        "img/0",
        "img/1",
        "img/2",
        "img/3",
        "img/4",
        "img/5",
        "img/6",
        "img/7",
        "img/8",
        "img/9"
        ],
        curNum,
        curNumInt,
        nextNum,
        type = _type;

    this.flipTo = function(_num){
        console.log(_num);
        if(curNumInt!=_num){
            nextNum = Obj.children(".num"+_num);

            /*for(var i=0;i<numbers.length;i++){
                Obj.children(".num"+_num).css({zIndex:(i+1)});
                Obj.children(".num"+_num).children(".topFlip").css({top:"0",height:"0px",width:"83px"});
                Obj.children(".num"+_num).children(".botFlip").css({top:"51px",height:"0px",width:"83px"});
            }
            nextNum.css({zIndex:15});
            curNum.css({zIndex:14});
            curNum.children(".topFlip").css({top:"0",height:"51px",width:"83px"});
            curNum.children(".botFlip").css({top:"51px",height:"51px",width:"83px"});

            TweenMax.to(nextNum.children(".topFlip"),0.3,{height:"51px",width:"83px",ease:"Expo.easeIn"});
            TweenMax.to(curNum.children(".topFlip"),0.3,{top:"51px",height:"0px",width:"83px",ease:"Expo.easeIn"});
            TweenMax.to(nextNum.children(".botFlip"),0.3,{height:"51px",width:"83px",delay:0.3,ease:"Expo.easeOut"});
            TweenMax.to(curNum.children(".botFlip"),0.3,{top:"102px",height:"0px",width:"83px",delay:0.3,ease:"Expo.easeOut"});*/

            for(var i=0;i<numbers.length;i++){
                Obj.children(".num"+(i)).css({zIndex:(i+1)});
                TweenMax.to(Obj.children(".num"+(i)).children(".topFlip"),0,{top:"0",rotationX:90, transformOrigin:"50% bottom",transformPerspective:200});
                TweenMax.to(Obj.children(".num"+(i)).children(".botFlip"),0,{top:"51px",rotationX:-90, transformOrigin:"50% top",transformPerspective:200});
            }
            nextNum.css({zIndex:14});
            curNum.css({zIndex:15});
            TweenMax.to(curNum.children(".topFlip"),0,{rotationX:0,transformPerspective:200});
            TweenMax.to(curNum.children(".botFlip"),0,{rotationX:0,transformPerspective:200});
            TweenMax.to(nextNum.children(".topFlip"),0,{rotationX:90,transformPerspective:200});
            TweenMax.to(nextNum.children(".botFlip"),0,{rotationX:90,transformPerspective:200});

            TweenMax.to(nextNum.children(".topFlip"),0.5,{rotationX:0,transformPerspective:200,ease:"Cubic.easeIn",onComplete:function(a,b){
                a.css({zIndex:15});
                b.css({zIndex:14});
            },onCompleteParams:[nextNum,curNum]});
            TweenMax.to(curNum.children(".topFlip"),0.5,{rotationX:-90,transformPerspective:200,ease:"Cubic.easeIn"});
            TweenMax.to(nextNum.children(".botFlip"),0.5,{rotationX:0,transformPerspective:200,delay:0.5,ease:"Cubic.easeOut"});
            TweenMax.to(curNum.children(".botFlip"),0.5,{rotationX:0,transformPerspective:200,delay:0.5,ease:"Cubic.easeOut"});

            curNumInt = _num;
            curNum = nextNum;
        }
    };
    var flipTo = this.flipTo;

    function _init(){
        Obj = $("<div class='flip_num' id='"+_type+"'/>");
        var i=0;
        for(i=0;i<numbers.length;i++){
            Obj.append("<div class='num"+(i)+"'><img class='topFlip' src='"+numbers[i]+"_t.png' /><img class='botFlip' src='"+numbers[i]+"_b.png' />");
        }
        curNumInt = -1;
        curNum = Obj.children(".num-1");
        flipTo(0);
        for(i=0;i<numbers.length;i++){
            Obj.children(".num"+(i)).css({zIndex:(i+1)});
            TweenMax.to(Obj.children(".num"+(i)).children(".topFlip"),0,{top:"0",rotationX:90, transformOrigin:"50% bottom",transformPerspective:200});
            TweenMax.to(Obj.children(".num"+(i)).children(".botFlip"),0,{top:"51px",rotationX:90, transformOrigin:"50% top",transformPerspective:200});
        }
    }
    _init();
}