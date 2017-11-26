

function displayMessage(divName: string, name: string) {
    let elt = document.getElementById(divName);
    elt.innerText = name;
}

//DataType
function showDialog(message:string){
    alert("Message: "+message);   
}
function showErrorDialog(errorCode:number){
    alert("Error code: "+errorCode);   
}
showDialog("Hello"); 
//showDialog(true);//Compile error   
//showDialog(123);//Compile error      
 

//Interface
interface Message{
   errorCode:string;    
}
function showMessageDialog(message:Message){
    alert("Error code:"+message.errorCode);   
}
showMessageDialog({errorCode:"400"});//Pass
//showMessageDialog(true);//Fail
//showMessageDialog("Text");//Fail
//showMessageDialog(123);//Fail


//Class
//TypeScript
interface Msg{
    display():void;
 }

class ErrorMsg implements Msg{
     display(): void {
        alert("This is an error")
     }
     
 }
 class WarnMsg implements Msg{ 
    display(): void {
       alert("This is a warning")
    }
    
}
function showMsg(message:Msg){
    message.display(); 
}
showMsg(new ErrorMsg());
showMsg(new WarnMsg());


