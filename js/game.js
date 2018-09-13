class Game {
    constructor() {
        this.sky = "";
        this.letters = [];
        this.keyBlue="";
        this.life="";
        this.integral="";
        this.body="";
        this.yes=true;
        this.win="";
    }
        /////创建字母
        createletter(){
            let div = document.createElement("div");
            div.className = "Letter";

            let asc = parseInt(Math.random()*26 + 65);
            let letter = String.fromCharCode(asc);
            /////字母去重
            do {
                asc = parseInt(Math.random()*26 + 65);
                letter = String.fromCharCode(asc);
            } while (letterRepeat(letter,this.letters));
            //
            div.style.backgroundImage = `url(img/A_Z/${letter}.png)`;
            let left = Math.random()*(7.5 - 0.53*3) + 0.53;
            ////位置去重
            do {
                left = Math.random()*(7.5 - 0.53*3) + 0.53;
            } while (leftRepeat(left,this.letters));

            let top = Math.random() * 0.5 + 1;
            div.style.left = `${left}rem`;
            div.style.top = `${top}rem`;

            let speed=Math.abs(Math.random()*0.05+0.1);

            let obj = {};
            obj.top=top;
            obj.left = left;
            obj.node = div;
            obj.name = letter;
            obj.speed = speed;

            this.letters.push(obj);
            this.sky.appendChild(div);
        }

        run(){
            this.t=setInterval(()=>{
                for(let item of this.letters){
                    // console.log(this.letters);
                    item.top+=item.speed;

                    if(item.top>=7.2){
                        this.remove(item.name);
                        continue;
                    }
                    item.node.style.top=item.top+'rem';
                }
            },100)
        }
        pause(){
            clearInterval(this.t)
        }
        remove(letter) {
            for(let item of this.letters){
                if(item.name==letter){
                    let index=this.letters.indexOf(item);
                    this.sky.removeChild(item.node);
                    this.letters.splice(index,1);
                    this.createletter();
                }
            }
        }


        Click(){

            let inNumInner=this.integral.innerHTML;
            console.log(inNumInner);
            let those=this;
            those.keyBlue.onclick=function (event) {
                inNumInner++;
                console.log(inNumInner);
                if(event.target.className!="blue"){
                    let text=event.target.innerText;
                    game.remove(text);
                }
                those.integral.innerHTML=inNumInner;
            };
        }
        Life(){
            let that=this;
            let life_num=that.life.innerHTML;
            let life_t=setInterval(()=>{
                life_num--;
                that.life.innerHTML=life_num;
                if(life_num==0){
                    clearInterval(life_t);
                    let over=document.createElement("div");
                    over.classList="over";
                    over.style.display="block";
                    let gameOver=document.createElement("div");
                    gameOver.classList="gameOver";
                    let point=document.createElement("div");
                    point.classList="point";
                    point.innerHTML=that.integral.innerHTML;
                    let Button=document.createElement("div");
                    Button.classList="Button";
                    console.log(point);
                    that.body.appendChild(over);
                    over.appendChild(gameOver);
                    gameOver.appendChild(point);
                    gameOver.appendChild(Button);
                    Button.onclick=function () {
                        over.style.display="none";
                        that.life.innerHTML="10";
                        that.integral.innerHTML="0";
                        that.Life();
                    }
                }
            },1000);
        }
}

/////////////去重
    function leftRepeat(left,letters){
        for(items of letters){
            // console.log(items);
            if(Math.abs(items.left-left)<=0.53){
                return true;
            }
        }
        return false;
    }
    function letterRepeat(letter,letters){
        for(items of letters){
            // console.log(items.name);            //
            if(items.name==letter){
                return true;
            }
        }
        return false;
    }


