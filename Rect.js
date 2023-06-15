//이미지 덮을 박스
class Rect{
    constructor(container, width, height, x, y, velX, velY){
        this.container=container;
        this.div;
        this.width=width;
        this.height=height;
        this.x=x;
        this.y=y;
        this.velX=velX;
        this.velY=velY;

        this.div=document.createElement("div");
        this.div.style.width=this.width+"px";
        this.div.style.height=this.height+"px";
        this.div.style.background="whitesmoke";
        this.div.style.border="0.5px solid silver";
        this.div.style.boxSizing="border-box";

        this.div.style.position="absolute";
        this.div.style.left=this.x+"px";
        this.div.style.top=this.y+"px";

        this.container.appendChild(this.div);
    }

    //매개변수로 넘겨진 
    showHide(){
        for(let a=0; a<rectArray.length; a++){
            for(let i=0; i< rectArray[a].length; i++){
                rectArray[a][i].div.style.opacity=1;//나머지 박스는 가리고...
            }
        }
        this.div.style.opacity=0; //선택된 박스인 나는 보이고
    }
}