//  Parameter Defaults (varsayılan parametre değerleri)

function topla (sayi1 = 0, sayi2 = 0) {
    return sayi1 + sayi2;   //  3 + 0
}

console.log(topla());



const STATE_BASLANGICI = { yuklaniyor: false, yazilar: [] };

const reducer = (state = STATE_BASLANGICI, action) => {
    //  burada state değerine başlangıç olarak STATE_BASLANGICI değeri atadık.
    //  reducer detayları
    return state;
}