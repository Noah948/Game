let d=document.querySelectorAll(".box");
let h2=document.querySelector("h2");
let body=document.querySelector("body");
let gamseq=[];
let comseq=[];
let k=0;
let level=0;
let p=0;
let btn=document.querySelector("button");
btn.addEventListener("click",start,{once:true});
function levelUp(){
    gamseq=[];
    k=0;
    let x=Math.floor(Math.random()*4);
    comseq[level]=d[x];
    level++;
    h2.innerText=`Level ${level}`;
   traverse();
} 
function start(){
    levelUp();
       d[0].addEventListener("click",function(){
            gamseq[k]=d[0];
            d[0].classList.add("flash");
            setTimeout(function(){
                d[0].classList.remove("flash");
            },100);
            if(comseq[k]==d[0])
                {
                k++;
            }
            else
               {
                lost();
                p=-1;
               }
            if(k==level && k!=0){
                k=0;
                levelUp();
            }
        })
        d[1].addEventListener("click",function(){
            d[1].classList.add("flash");
            setTimeout(function(){
                d[1].classList.remove("flash");
            },100);
            gamseq[k]=d[1];
            if(comseq[k]==d[1])
                {
                k++;}
            else
               {
                lost();
                p=-1;
               }
            if(k==level && k!=0){
                k=0;
                levelUp();
            }
        })
        d[2].addEventListener("click",function(){
            d[2].classList.add("flash");
            setTimeout(function(){
                d[2].classList.remove("flash");
            },100);
            gamseq[k]=d[2];
            if(comseq[k]==d[2])
                {
                k++;
                }
            else
              {
                p=-1;
                lost();
              }
              if(k==level && k!=0)
                {
                levelUp();
                }
           
        })
        d[3].addEventListener("click",function(){
            d[3].classList.add("flash");
            setTimeout(function(){
                d[3].classList.remove("flash");
            },100);
            gamseq[k]=d[3];
            if(comseq[k]==d[3])
                {
                k++;}
            else
               {
                p=-1;
                lost();
               }
            if(k==level && k!=0)
                {
                levelUp();
                }
        }
        
)
if(p==-1)
    return;
}
function lost(){
    
    h2.innerText=`You Lost,Your score was ${level-1}`;
    level=0;
    btn.innerText="If you wanna play again just refresh the page";
    body.classList.add("lost");
    setTimeout(function(){
        body.classList.remove("lost");
    },100);
}   
function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
 }
 async function traverse()
 {
    for(j of comseq)
        {
            await sleep(300);
                j.classList.add("flash");
    setTimeout(function(){
        j.classList.remove("flash");
    },250);
    await sleep(300);
        }
 }