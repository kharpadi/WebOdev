<?php
 $kullaniciadi="g191210092@sakarya.edu.tr";
 $sifre="g191210092";
error_reporting(0);
if (isset($_POST['kullaniciadi'], $_POST['sifre'] )
&& ($_POST['kullaniciadi']!='')
&& ($_POST['sifre']!='') && ($_POST['kullaniciadi']==$kullaniciadi) && ($_POST['sifre']==$sifre)) {

    echo "<h1>Hoşgeldiniz G191210092</h1>";
    header("Refresh:2 , url=index.html");
}
else{
    echo "<h2> Bilgilerinizi Kontrol Edip Tekrar Giriş Yapın.<br>
    Eksik Bilgi Girdiniz... <br>
    Giriş Sayfasına Yönlendiriliyorsunuz...</h2>";
    header("Refresh:2 , url=login.html"); 
}
?>