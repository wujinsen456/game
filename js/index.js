    let game=new Game();
    game.sky=document.querySelector(".sky");
        for(let i=1;i<=5;i++){
            game.createletter();
        }
    game.run();
    game.keyBlue=document.querySelector(".blue");
    game.integral=document.querySelector(".integral");

    game.Click();
    game.life=document.querySelector(".life");
    game.Life();
    game.body=document.querySelector("body");


    /////////变换的兔子
    let rabbit=document.querySelector(".rabbit");
    console.log(rabbit);
    setInterval(fn,100);
    let num1=0;
    function fn(){
        num1++;
        if(num1==16){
            num1=1;
        }
        rabbit.style.backgroundImage=`url("img/rabbit/rabbit${num1}.png")`;
    }


    ///////////点击按钮 暂停
    // let play=document.querySelector(".play");
    // let sky=document.querySelector(".sky");
    //
    // function gameStart(){
    //     play.onclick=function (){
    //         game.pause();
    //         let suspend=document.createElement("div");
    //         suspend.classList="suspend";
    //         sky.appendChild(suspend);
    //         suspend.onclick=function(){
    //             game.run();
    //             let play=document.createElement("div");
    //             play.classList="play";
    //             sky.appendChild(play);
    //             gameStart();
    //         };
    //     };
    // }
    // gameStart();

    let play=document.querySelector(".play");
    let pause=document.querySelector(".pause");


    pause.onclick=function () {
        game.pause();
        pause.style.zIndex="10";
        play.style.zIndex="20";

        // game.click=false;
    };
    play.onclick=function () {
        game.run();
        play.style.zIndex="10";
        pause.style.zIndex="20";

        // game.click=true;
    };


    //////////声音开关
    // let music=document.querySelector(".music");
    // game.win=document.querySelector(".win");
    // let voice=document.querySelector(".voice");
    // voice.onclick=function () {
    //     game.yes=false;
    //     music.setAttribute("bgsrc",music.getAttribute("src"));
    //     music.src="";
    //     game.win.src="";
    //     let Apause=document.createElement("div");
    //     Apause.classList="Apause";
    //     sky.appendChild(Apause);
    //     Apause.onclick=function () {
    //         let voice=document.createElement("div");
    //         voice.classList="voice";
    //         sky.appendChild(voice);
    //         game.yes=true;
    //         music.setAttribute("src",music.getAttribute("bgsrc"));
    //     }
    // };

    /////////声音开关
    let music=document.querySelector(".music");
    let voice=document.querySelector(".voice");
    let Apause=document.querySelector(".Apause");
    game.win=document.querySelector(".win");
    voice.onclick=function () {
        game.yes=false;
        voice.style.zIndex="10";
        Apause.style.zIndex="20";
        music.setAttribute("bgsrc",music.getAttribute("src"));
        music.src="";
        game.win.src="";
    };
    Apause.onclick=function () {
        game.yes=true;
        voice.style.zIndex="20";
        Apause.style.zIndex="10";
        music.setAttribute("src",music.getAttribute("bgsrc"));
    };



