let cookies =["Your life is a blank void, fill it.", "If you look back, you will soon be going that way.", "When someone shows you who they are, believe them", "The fortune you seek is in another cookie.","A conclusion is simply the place where you got tired of thinking.","A fanatic is one who can't change his mind, and won't change the subject."];


function generateRandom(){
    
        return Math.floor(Math.random() * 5);
    
     }

function fortuneCookies(){

var number  = generateRandom();
document.getElementById('fortune').innerHTML =(cookies[number]); 

console.log(number);


}