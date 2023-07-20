function nhanvao(id){
    let tinhtoan=document.getElementById('pheptinh')
    if(id==='xoa'){
        id=''
        let deletes=tinhtoan.value
       tinhtoan.value=deletes.substring(0,deletes.length-1)
    }
    tinhtoan.value=tinhtoan.value+''+id
    let strings=tinhtoan.value
   if(strings.length>=3){
    if(strings.includes('+')===true){
        let index1=strings.indexOf('+')
        let sotrc1=strings.substring(0,index1)
        let sosau1=strings.substring(index1+1,strings.length)
        let b1=Number.parseInt(sotrc1)
        let c1=Number.parseInt(sosau1)
        if(id==='='){
            id=''
            let ketqua1=b1+c1
            document.querySelector('.ketqua').innerHTML=`${ketqua1}`
        }
    }
     else if(strings.includes('-')===true){
        let index2=strings.indexOf('-')
        let sotrc2=strings.substring(0,index2)
        let sosau2=strings.substring(index2+1,strings.length)
        let b2=Number.parseInt(sotrc2)
        let c2=Number.parseInt(sosau2)
        if(id==='='){
            id=''
            let ketqua2=b2-c2
            document.querySelector('.ketqua').innerHTML=`${ketqua2}`
        }
     }
     else if(strings.includes('x')===true){
        let index3=strings.indexOf('x')
        let sotrc3=strings.substring(0,index3)
        let sosau3=strings.substring(index3+1,strings.length)
        let b3=Number.parseInt(sotrc3)
        let c3=Number.parseInt(sosau3)
        if(id==='='){
            id=''
            let ketqua3=b3*c3
            document.querySelector('.ketqua').innerHTML=`${ketqua3}`
        }
     }
     else if(strings.includes('/')===true){
        let index4=strings.indexOf('/')
        console.log(index4)
        let sotrc4=strings.substring(0,index4)
        let sosau4=strings.substring(index4+1,strings.length)
        let b4=Number.parseInt(sotrc4)
        let c4=Number.parseInt(sosau4)
        if(id==='='){
            id=''
            let ketqua4=Math.floor(b4/c4)
            console.log(ketqua4)
            document.querySelector('.ketqua').innerHTML=`${ketqua4}`
        }
     }

   }
  
}
function xoabo(strings){

}
