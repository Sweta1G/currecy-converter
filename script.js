const dropList= document.querySelectorAll(".drop-list select"),
getButton= document.querySelector("form button");

for(let i=0; i<dropList.length; i++){
    let selected;
    if(i==0){
        // Selecting INR by default as FROM currency and NPR as To currency
        selected= currency_code== "INR"? "selected" : "";
    }else if(i==1){
        selected= currency_code== "NPR"? "selected" : "";
    }
    for(currency_code in country_code){
        // Creating option tag with passing currency_code as text and value
        let optionTag =`<option value="${currency_code}" ${selected}>${currency_code}</option>`;
        // Inserting options tag inside select tag
        dropList[i].insertAdjacentHTML("beforeend", optionTag);
    }
}

getButton.addEventListener("click", e =>{
    e.preventDefault(); // Preventing form from submitting
    getExchangeRate();
});
function getExchangeRate(){
    const amount= document.querySelector(".amount input");
    let amountVal= amount.value;
    if(amountVal=="" || amountVal=="0"){
        amount.value= "1";
        amountVal= amount.value;
    }
}