
let dropdownS=document.querySelectorAll(".dropdown select");
const btn=document.querySelector("button")
const fromCurr=document.querySelector(".from select");
const toCurr=document.querySelector(".to select");
let msg=document.querySelector(".msg");

for(let select of dropdownS){
    for (curr_code in countryList){
        let newOption=document.createElement("option");
        newOption.innerText=curr_code;
        newOption.value=curr_code;
        select.append(newOption);
        if(select.name==="from" && curr_code==="USD"){
            newOption.selected = "selected";
        }
        else if(select.name==="to" && curr_code==="INR"){
            newOption.selected = "selected";
        }
    }
    select.addEventListener("change", ()=>
        {
            updateFlag(select);
        }) 
}
const updateFlag=(element)=>{
    let countryCode=countryList[element.value];
    let Newsrc=`https://flagsapi.com/${countryCode}/flat/64.png`;
    let img=element.parentElement.querySelector("img");
    img.src=Newsrc;
}

btn.addEventListener("click",async (evt)=>{
    evt.preventDefault();
    let amt=document.querySelector(".amount input")
    let amtVal=amt.value;
    if(amtVal==="" || amtVal<0){
        amtVal=1;
        amt.value="1";
    }
    const url="";
    let response= await fetch(url);
    let data = await response.json();
    console.log(data);
    
    let fromVal= data.data[fromCurr.value].value;
    let toVal=data.data[toCurr.value].value;
    let finalResult=(amtVal/fromVal)*toVal;
    msg.innerText=`${amtVal} ${fromCurr.value} = ${finalResult} ${toCurr.value}`;
    
})





