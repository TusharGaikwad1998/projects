/*let form = document.querySelector("form");

form.addEventListener('submit',function(e){
    e.preventDefault();

    let weight = parseInt(document.querySelector("#Weight").value);
    let height = parseInt(document.querySelector("#Height").value);
    
    let result = document.querySelector("#result");
    
    

if( height===""|| height<25||height>200||isNaN(height)){
        result.innerHTML="Please give me valid height";
}
else if( weight ===""|| weight<25||weight>200||isNaN(height)){
    result.innerHTML="Please give me valid weight";
}else{
    const calculate = (weight/(height*height)*10000).toFixed(2);
    
    // show the result

    result.innerHTML=`<span> Your BMI is ${calculate} </span>`;
    
}

});


let input_value = ("submit", () => {

})

*/










let form = document.querySelector("form");

 
   document.querySelector("#calculate").addEventListener('click',function(e){

       e.preventDefault();
    let weight = parseInt(document.querySelector("#Weight").value);
    let height = parseInt(document.querySelector("#Height").value);

    let result = document.querySelector("#result");
    

if( height<25||height>200||isNaN(height)){
    result.innerHTML="Please give me valid height";
}
else if( weight<25||weight>200 || isNaN(height)){
result.innerHTML="Please give me valid weight";
}else{
let calc = (weight/(height*height)*10000).toFixed(2);

result.innerHTML = `<span> Your BMI is ${calc} </span>`;

}

});






// document.getElementById('calculateBtn').addEventListener('click', function() {
//     const weight = parseFloat(document.getElementById('weight').value);
//     const height = parseFloat(document.getElementById('height').value);

//     if (weight > 0 && height > 0) {
//         const bmi = weight / (height * height);
//         document.getElementById('result').innerText = `Your BMI is: ${bmi.toFixed(2)}`;
//     } else {
//         document.getElementById('result').innerText = 'Please enter valid weight and height.';
//     }
// });
