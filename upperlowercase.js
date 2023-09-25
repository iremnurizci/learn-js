let isim = "irem Nur";
let soyisim = " İzci";

let tam_isim = "Kişinin tam ismi: "+isim+soyisim;


console.log(tam_isim.length)

// BÜYÜK HARFE ÇEVİR
let büyük_çevirici = tam_isim;
console.log(tam_isim.toUpperCase())

// KÜÇÜK HARFE ÇEVİR
console.log(tam_isim.toLocaleLowerCase())

// İNDEX OF 
console.log(tam_isim.toLocaleUpperCase().indexOf("N"))