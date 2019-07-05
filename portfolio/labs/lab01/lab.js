/*

*/


function start(e) {
 var name =[
            {
                char:'郭',
                big5:'B3A2',
                cns:'1-5D66',
                unicode:'90ED'
            },
            {
                char:'秉',
                big5:'AAC3',
                cns:'1-4F26',
                unicode:'79C9'
            },
            {
                char:'鈞',
                big5:'B676',
                cns:'1-625D',
                unicode:'921E'
            }
            ];


 var ele =document.getElementById("div1");

  for (var i= 0;i<3;i++) {
   ele.innerHTML += name[i].char;
    ele.innerHTML += 'big5=';
    ele.innerHTML += name[i].big5;
    ele.innerHTML +='cns=';
    ele.innerHTML +=name[i].cns
    ele.innerHTML +='unicode=';
    ele.innerHTML +=name[i].unicode;
    ele.innerHTML +='<br>';
  }
}

/*
https://www.w3schools.com/jsref/met_document_addeventlistener.asp

document.addEventListener(event, function, useCapture)

true - The event handler is executed in the capturing phase
false- Default. The event handler is executed in the bubbling phase
*/
window.addEventListener( "load", start, false );
