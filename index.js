for (let i= 1; i<= 10; i++){
    console.log(i)
}

const company = [
    {companyName: 'Pertamina (Persero), PT', id: 'pertamina'},
    {companyName: 'Indo Tambangraya Megah Tbk., PT (ITM)', id: 'itm'},
    {companyName: 'PT. Nusantara Compnet Integrator', id: 'compnet'},
    {companyName: 'Telkom Imigrasi', id: 'imigrasi'},
]

company.map(val =>{
    if(val.id === "compnet"){ 
       console.log(  "==> " + val.companyName + " adalah Nama Perusahaan Kita")
    }else{
        console.log( val.companyName + " Bukan Nama Perusahaan kita")
    }
   
})