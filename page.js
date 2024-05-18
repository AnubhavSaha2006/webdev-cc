const URL="https://coding-week-2024-api.onrender.com/api/data";
   
async function getimg()
    {
        console.log("here");
        let res= await fetch(URL);
        console.log(res);
         let data=await res.json();
        //section 1
         for( let i=0;i<=3;i++)
             {
                 let simg="img";
                 let stag="tag";
                 let stopic="img-topic";
                 let sauthor="img-author";
                 let sdate="img-date";
                 simg=simg+((i+1).toString());
                 stag=stag+((i+1).toString());
                 stopic=stopic+((i+1).toString());
                 sauthor=sauthor+((i+1).toString());
                 sdate=sdate+((i+1).toString());
                 let tag=document.getElementById(stag);
                 let img= document.getElementById(simg);
                 let topic=document.getElementById(stopic);
                 let author=document.getElementById(sauthor);
                 let date=document.getElementById(sdate)
                img.src=data[i].image;
                tag.innerHTML=data[i].type;
                topic.innerHTML=data[i].headline;
                author.innerHTML=data[i].author;
                date.innerHTML=data[i].date;
                
         }
         const newsstack=document.getElementById("newsstack");
         let i;
         for(i in data)
            {
                let ln=document.createElement("div");
                ln.className="latestnews";
                let sid="ln";
                sid=sid+((parseInt(i)+1).toString());
                ln.id=sid;

                let imgln=document.createElement("div");
                imgln.className="lnimg-block";

                let img=document.createElement("img")
                img.className="lnimg";
                img.src=data[i].image;

                let textln=document.createElement("div");
                textln.className="lntext";

                let p1text=document.createElement("p")
                p1text.className="p1";
                p1text.innerHTML=data[i].headline;

                let p2text=document.createElement("p")
                p2text.className="p2";

                let svg=document.createElement("img")
                svg.src="calendersvg.svg";

                let date=document.createElement("span")
                date.innerHTML=data[i].date;
                console.log("hi");
                imgln.appendChild(img);
                p2text.appendChild(svg);
                p2text.appendChild(date);
                textln.appendChild(p1text);
                textln.appendChild(p2text);
                ln.appendChild(imgln);
                ln.appendChild(textln);
                //ln.onclick=displaynews(sid);
                ln.onclick = () => displaynews(sid);
                newsstack.appendChild(ln);
            }
    }
 getimg();
async function gettodaydate()
 {
    let d=new Date();
    let date=d.getDate();
    let Month=d.getMonth();
    let monthname=["January","February","March","April","May","June","July","August","September","October","November","December"];
    let year=d.getFullYear();
    let sdate=monthname[Month]+" "+date.toString()+","+year.toString()+" "+"IN";
    document.getElementById("today-date").innerHTML=sdate;
 
 }
 gettodaydate();
 let val=0;
 let expval=0;
 async function displaynews(idn)
 {
    let j=1;
    while(((idn.toString()).charAt(((idn.toString()).length)-j)).charCodeAt(0)-'0'.charCodeAt(0)>=0 && ((idn.toString()).charAt(((idn.toString()).length)-j)).charCodeAt(0)-'0'.charCodeAt(0)<=9)
        {j++;}
    console.log(j);
    console.log((idn.toString()).substring(((idn.toString()).length)-(j-1),((idn.toString()).length)));
    let i=parseInt((idn.toString()).substring(((idn.toString()).length)-(j-1),((idn.toString()).length)));
    i=i-1;
    console.log(i);
    if(val==0)
    {
         let res= await fetch(URL);
         let data=await res.json();
         let popup=document.createElement("div");
         popup.id="popup";

         let l1=document.createElement("p");
         l1.id="l1";

         let img1=document.createElement("img");
         img1.src="expand.svg";
         img1.className="expand";
         img1.id="exp";
         img1.onclick=() => expand();

         let img2=document.createElement("img");
         img2.src="exit.svg";
         img2.className="exit";
         //img2.onclick=exit();
         img2.onclick= () => exit();

         let popcontent=document.createElement("div");
         popcontent.className="pop-content";

         let headline=document.createElement("div")
         headline.innerHTML=data[i].headline;
         headline.id="headline";

         let content_box=document.createElement("div");
         content_box.className="content-box";

         let popimg=document.createElement("img");
         popimg.src=data[i].image;
         popimg.className="popimg";

         let content=document.createElement("div");
         content.className="content";

         let pp1=document.createElement("p");
         pp1.innerHTML="<b>Tags</b>: Featured"+"  ,  "+data[i].type;

         let pp2=document.createElement("p");
         pp2.innerHTML="<b>Date:</b>  "+data[i].date;

         let pp3=document.createElement("p");
         pp3.innerHTML="<b>Author:</b>  "+data[i].author;

         let pp4=document.createElement("div");
         pp4.innerHTML=data[i].content;

         content.appendChild(pp1);
         content.appendChild(pp2);
         content.appendChild(pp3);
         content.appendChild(pp4);

         content_box.appendChild(popimg);
         content_box.appendChild(content);

         popcontent.appendChild(headline);
         popcontent.appendChild(content_box);

         l1.appendChild(img1);
         l1.appendChild(img2);

         popup.appendChild(l1);
         popup.appendChild(popcontent);

         let bod=document.getElementById("body");
        // bod.style.filter="brightness(10%)";
         bod.appendChild(popup);
         val=1;
    }
    else
    {
        alert("close previous");
    }
 }
 function exit()
 {
    let pop= document.getElementById("popup");
    pop.style.display="none"
    pop.remove();
    val=0;
    expval=0;
 }
 function expand()
 {
   
    let popup=document.getElementById("popup");
    if(expval==0)
        {
             popup.className="expanded";
             let exp=document.getElementById("exp");
             exp.src="contract.svg";
             expval=1;
        }
    else
        {
            popup.classList.remove("expanded");
            let exp=document.getElementById("exp");
            exp.src="expand.svg";
            expval=0;
        }
 }

 let prev=document.getElementById("home");
function select(ele)
{
     console.log("abcd");
     prev.classList.remove("selected");
     ele.className="selected";
    
     prev=ele;
}
let prev2=document.getElementById("latestid");
function select2(elem)
{
     console.log("abcd");
     prev2.classList.remove("selected2");
     elem.classList.add("selected2");
     prev2=elem;
}
 let drop=0; 
function dropdown(event)
{
    //console.log("a");
    event.stopPropagation();
    let menu=document.getElementById("menu");
    let dropimg=document.getElementById("down");
    if(drop==0)
        {
            menu.classList.remove("dropup");
            menu.className="dropdown-menu";
            dropimg.src="up.svg";
            drop=1;
        }
    else
    {
        menu.classList.remove("dropdown-menu");
        menu.className="dropup";
        dropimg.src="down.svg";
        drop=0;
    }
}

