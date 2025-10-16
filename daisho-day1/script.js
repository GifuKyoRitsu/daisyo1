const helloBtn=document.getElementById("helloBtn");
const message=document.getelementbyId("message");

helloBtn.addeventlistener("click",()=>{
    const hour=newDate().getHours();
    let greeting="こんにちは！";
    if (hour<12){
        greeting="おはようございます！";
    }else if(hour>=18){
        greeting="こんばんは！";
    }
    message.textcontent=`${greeting}GitHub Pages の公開に成功しました！`;
});