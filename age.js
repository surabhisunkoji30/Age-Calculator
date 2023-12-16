var dob= document.querySelector("#dob")
dob.max=new Date().toISOString().split("T")[0];
console.log(dob)

function calculateAge(){
    console.log(dob.value + "dob.value")
    let birthDate=new Date(dob.value)
    console.log(birthDate+ "birthdate")
   
    let today=new Date()
    let y1,m1,d1;
    y1=today.getFullYear()
    console.log(y1)
    m1=today.getMonth()+1
    console.log(m1)
    d1=today.getDate()
    console.log(d1)
    console.log(d1+"/"+m1+"/" +y1)

    let y2,m2,d2;
    y2=birthDate.getFullYear()
    console.log(y2)
    m2=birthDate.getMonth()+1 
    console.log(m2)
    d2=birthDate.getDate()
    console.log(d2)
    console.log(d2+"/"+m2+"/" +y2)

    let y3,m3,d3
    y3=y1-y2

    if(m1>=m2){
        m3=m1-m2
    }
    else{
        y3--
        m3=12+(m1-m2)
    }

    if(d1>=d2){
        d3=d1-d2
    }else{
        m3--;
        d3=getDaysFromMonth(y3,m3)+(d1-d2)
        // console.log(d3,"d33333333333333")
    }
    result=document.querySelectorAll(".action h2")
    result[0].innerText=y3+ "years"
    result[1].innerText=m3+ "months"
    result[2].innerText=d3+ "days"
}

function getDaysFromMonth(years,month){
    return new Date(years,month,0).getDate()
}