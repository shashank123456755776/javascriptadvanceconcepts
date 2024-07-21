// Questions 1
// when callback passed inside  another function then it is also closures and closures always holds
// their references of variables
// output  always print  6 by n or how many times loops goins on,so call back function always holds the refrence of i 
//  again 5s it camees in call stack print final value 6 repeat it again and agian
function x(){
    for(var i=1;i<=5;i++){
        setTimeout(() => {
            console.log(i);
            
        }, i*1000);
    }
    console.log("Namastey javascript:")
}
x()
// But this code will run, when we will use let in place of i
// because let variables has block scope  so each time here newlu i variable i created so it will console each time 1,2,3........
// in case of var in qusetion no copise has been maked ,in case of let ecah time copise maked
// so ecah time refernce has been changeg in case of let but happen in case of var
