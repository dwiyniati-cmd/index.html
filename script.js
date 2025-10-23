// 1. pilih tombol berdasarkan ID-nya 
const tombolSapa = document.getElementById(`sapaButton`); 
//2.tambahkan `eventlistener`untuk aksi `click`
tombolSapa.addeventListener(`click`,function(){
  //3.jalankan kode ini ketika tombol ini di-klik
                            alert(`halo!terimakasih sudah berkunjung!`);
});
