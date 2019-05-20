var happy = ["https://www.mirror.co.uk/incoming/article7621416.ece/ALTERNATES/s510b/Johan-Cruyff-dead_0370.jpg", "https://gq-images.condecdn.net/image/g1q42NB8Vo3/crop/1620", "https://i.eurosport.com/2016/06/06/1870771-39412413-2560-1440.jpg?w=1050"];

var excited = ["https://i.pinimg.com/236x/19/ba/8d/19ba8d1515e6b1982d477d3fd1d7caf3.jpg","http://sport.bt.com/images/cristiano-ronaldo-136405124015803901-160411094917.jpg","https://i2-prod.manchestereveningnews.co.uk/incoming/article11442112.ece/ALTERNATES/s615/Untitled-design-34.jpg"];

var sad =["https://www.rap-up.com/app/uploads/2018/04/jcole-hbo.jpg","https://cbsaustin.com/resources/media/a044dc89-4162-4c35-a194-8f2b3e4f518e-large16x9_CopaAmericaCentenar_King.jpg?1467056987814","https://cdni.rt.com/files/2018.06/article/5b2c1030fc7e93e81c8b4612.jpg"];
 
$('button').click(function(){
    var input = $('input').val();
    $(".images").html("");
    if(input === "happy"){
     happyImages();   
    } else if(input==="excited"){
     excitedImages();
    }else if(input==="sad"){
     sadImages();  
    }else{
     alert("Please enter comedy, romance, or horror!");   
    }
});


function  happyImages(){
    changeBackground("https://fsb.zobj.net/crop.php?r=3-lqh4eJQwRm8G0AMByF2swV-hs_4vjk38LQ6FiVs1h7nzBnD-3JRqnVFOMxqbE4hdWgqETcdqZZJlxMmx2MFborBbKrOccpfHAIzMmuNZsZsqqszWqJX7e6CmqahiKzXXtHe1znIAD9MW9s93dW709IoV9WKIQsD4CrYDx4VaeEkqpdouj9x6MTGRg");
    changeTextColor("red");
    displayImage(happy[0]);
    displayImage(happy[1]);
    displayImage(happy[2]);
}
function excitedImages(){
    changeBackground("https://www.solidbackgrounds.com/images/2048x1536/2048x1536-medium-blue-solid-color-background.jpg");
    changeTextColor();
    displayImage(excited[0]);
    displayImage(excited[1]);
    displayImage(excited[2]);
}
function sadImages(){
    changeBackground("https://i.pinimg.com/originals/48/a7/04/48a704e726dbaabbcbe998827cd613db.jpg");
    changeTextColor();
    displayImage(sad[0]);
    displayImage(sad[1]);
    displayImage(sad[2]);
}


function changeBackground(backgroundImage){
    $('body').css('background-image', "url("+backgroundImage+")");
}

function changeTextColor(color){
    $('body').css('color', color);
}

function displayImage(image){
    $('.images').append('<img src ='+ image + '>');

}