let result=''


//A FUNCTION TO SHOW THE RESULT ,SHOWS THE BUTTON PREVIOUS PRESSED AND 
//NEW PRESSED
//
//4 FUNCTION TO DO THE CALCULATION

let newline='';
let count=0
let resultarray= []
let cut=0
let finalresult=0
function show(event){

    
    newline=event.target.innerText;
    
    id = event.target.id;
    if (event.target.id =='clear'){
        result='';
        newline='';
        resultarray=[] ;
        count=0;
        cut=0;
        finalresult=0;
    }
    //press=document.getElementById('9').innerText
    result=result+newline;
    console.log(result);
    document.getElementById('result').innerText=result;
    
   
    if( newline=='+' || newline=='-' || newline=='/' ||newline==='+' ){
        count=count+1
        resultarray[count]=newline
        count=count+1
}

    resultarray[count]=result.slice(cut,result.length)

    // function calculate(result){
    //   ;
    //     for(let i=0 ; i< result.length ;i++ ){
    //         let k=result.length
    //         for(let j=i ; j< result.length ;j++ ){
    //             if( result[j]=='+' || result[j]=='-' ||result[j]=='/' ||result[j]=='+' ){
    //                 k=j
    //                 count=count+1
    //                 break;
    //             }}
    //         resultarray[count]=( result.slice(i,k) )
       
        
    // }
 
    console.log(resultarray,result,cut,result.length,resultarray.length)    

    if( newline=='+' || newline=='-' || newline=='/' ||newline==='+' ){
        cut=result.length
}
let i=1
while( i<resultarray.length){
    

    


    i=i+2
}
    console.log(Number(resultarray[0])+Number(10))





    
    // try {
    //     var x=Number(resultarray[i]) 
    //     switch (resultarray[i]){
            
    //         case '+':
    //             finalresult=finalresult+x
    //         case '-':
    //             finalresult=finalresult-x
    //         case '/':
    //             finalresult=finalresult/x
    //         case '*' :
    //             finalresult=finalresult*x      
    // }
    // }
    // catch{
        
    // }


            
    




}