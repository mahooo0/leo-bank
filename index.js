const obj={
    balans:0,
    plusfuc: function(m){
        this.balans+=m
    },
    minusfuc:function (m) {
        this.balans-=m 
    },
    opiration:[]

}


const plusbtn=document.querySelector("#plusbtn")
const minusbtn=document.querySelector("#minusbtn")
const replenishment=document.querySelector("#replenishment")
const money_transfer=document.querySelector("#money_transfer")
const summa1=document.querySelector("#summa1")
const replenishmentbtn=document.querySelector("#replenishmentbtn")
const money_transferbtn=document.querySelector("#money_transferbtn")
const money=document.querySelector("#money")
const otmena=document.querySelector("#otmena")
const operations=document.querySelector("#operations")
const ccn=document.querySelector("#ccn")
const transfer_money=document.querySelector("#transfer_money")
const A=document.querySelector("#A")
const own=document.querySelector("#own")

plusbtn.addEventListener("click",()=>{
    replenishment.classList.remove("d-none")
})
minusbtn.addEventListener("click",()=>{
    money_transfer.classList.remove("d-none")
})
let m=0

replenishmentbtn.addEventListener("click",()=>{
    let inputvalue=summa1.value
    obj.plusfuc(+inputvalue)
    let bal=obj.balans
    money.innerHTML= `${bal}.00`
    own.innerHTML=`own money:${bal}`
    let el =`
    <li class="d-flex flex-row ">
                  <div class="plus " >+</div>
                  <h3 class="">пополнение</h3>
                  <h3 class="ms-auto p-2 text-success">+${parseFloat(inputvalue)}.00</h3>
                </li>
    `
    obj.opiration.push(el)
    let list= obj.opiration.reverse().join(",")
    operations.innerHTML=list
    summa1.value=""
})
otmena.addEventListener("click",()=>{
    replenishment.classList.add("d-none")
})

money_transferbtn.addEventListener("click",()=>{
    let cardValue=ccn.value
    let list=cardValue.split("")
    console.log(list);
    if(list.length!=16){
        alert('введите номер карты правилно')
        return NaN
    }
    
    let transfer_money_value=transfer_money.value
    
    if(transfer_money_value>obj.balans){
        alert('на вашем счету нет достаточно денег')
        ccn.value=""
        return NaN
    }
    m+=+transfer_money_value
    A.innerHTML=`траты за сегодня:${m}`
    let ll=cardValue.toString()
    let card_numbers=ll[0]+ll[1]+ll[2]+ll[3]+"-"+ll[4]+ll[5]+ll[6]+ll[7]+"-"+ll[8]+ll[9]+ll[10]+ll[11]+"-"+ll[12]+ll[13]+ll[14]+ll[15]
    console.log(card_numbers);
   obj.minusfuc(transfer_money_value)
   let bal=obj.balans
   money.innerHTML= `${bal}.00` 
   own.innerHTML= `own money ${bal}` 
    let el =`
    <li>
                  <div class="plus ">></div>
                  <section class="d-flex flex-column">
                    <h3 class="">перевод</h3>
                    <p>на:${card_numbers}</p>
                  </section>
                  <h3 class="ms-auto p-2 text-danger">-${transfer_money_value}.00</h3>

                </li>
    `
    obj.opiration.push(el)
    let lisst= obj.opiration.reverse().join(",")
    operations.innerHTML=lisst
    money_transfer.classList.add("d-none")
})
console.log(summa1);