// 1
// moon.jpg قم بالوصول إلى الصورة وتغيرها إلى

// 2
// "قم بالوصول إلى كلمة الأرض وتحويلها إلى "القمر

// 3
// بحيث إن ضغطت على البطاقة تتغير الصورة للصورة الأخرى ويتغير الاسم onClick قم بإنشاء دالة واستخدام خاصية
// دون الحاجة إلى الخطوتين 2و1
function plant() {
    let title = document.getElementById("mno");
    let img =document.getElementById("img");
    let body = document.getElementById("body");
    if (title.innerHTML == "الشمس") {
        
   

    title.innerHTML="القمر"
    img.src ="./images/moon.jpg" 
    body.style.background= '#4d79ff'
}else{
    title.innerHTML="الشمس"
    img.src ="./images/sun.jpg" 
    body.style.background= '#e65c00'
    
}
// 4
// Night - Light Mode قم بالتعديل على الدالة بحيث تضم إليها خاصية

/*  الوضع الليلي
    يتغير لون خلفية الصفحة للرمادي
    تتغير الصورة لصورة القمر
    "يتغير الاسم أسفل الصورة ويصبح "القمر
*/

/*  الوضع النهاري
    يتغير لون خلفية الصفحة للأبيض
    تتغير الصورة لصورة الشمس
    "يتغير الاسم أسفل الصورة ويصبح "الشمس
*/
}