var arrlang = {
    en: {
        home: "HOME",
        DevConnector: "DevConnector",
        Register: "Register",
        Developers: "Developers",
        Login: "Login",
        Connector: "Developers Connector",
        welcom: " Creat developer profile/portfolio,share posts and get help from other developers",
        posts: "posts",
        dash: "Dashboard",
        Logout: "Logout",
    },
    ar: {
        home: "الرئيسية",
        DevConnector: "ملتقي المطورين",
        Register: "تسجيل ",
        Developers: "المطورين",
        Login: "الدخول",
        Connector: "ملتقي المطورين العرب",
        welcom: "إنشاء ملف تعريف مطور / محفظة ، مشاركة المنشورات والحصول على المساعدة من المطورين الآخرين ",
        posts: "   المنشورات  ",
        dash: " لوحة القيادة",
        Logout: "خروج",
    },
};

function change() {
    var elem = document.getElementById("myButton1");
    if (elem.value == "Close Curtain") elem.value = "Open Curtain";
    else elem.value = "Close Curtain";
}

document.body.onload = function() {
    let localthem = localStorage.getItem("them");
    var elem = document.getElementById("dark");
    if (localthem == "dark") {
        elem.value = "light";
        var x = document.getElementsByTagName("BODY")[0];
        x.style.backgroundColor = "#121212";
        x.style.color = "#fff";
    } else {
        var x = document.getElementsByTagName("BODY")[0];
        x.style.backgroundColor = "#fff";
        x.style.color = "#121212";
        elem.value = "dark";
    }
};

function them() {
    var elem = document.getElementById("dark");

    if (elem.value == "dark") {
        localStorage.setItem("them", elem.value);
        let localthem = localStorage.getItem("them");
        if (localthem == elem.value) {
            var x = document.getElementsByTagName("BODY")[0];
            x.style.backgroundColor = "#121212";
            x.style.color = "#fff";
            elem.value = "light";
        }
    } else {
        localStorage.setItem("them", elem.value);
        let localthem = localStorage.getItem("them");
        if (localthem == elem.value) {
            var x = document.getElementsByTagName("BODY")[0];
            x.style.backgroundColor = "#fff";
            x.style.color = "#121212";
            elem.value = "dark";
        }
    }
}

$(function() {
    $(".translate").click(function() {
        var lang = $(this).attr("id");
        localStorage.setItem("langu", lang);
        let locallang = localStorage.getItem("langu");
        $(".lang").each(function(index, element) {
            $(this).text(arrlang[lang][$(this).attr("key")]);
        });
        if (locallang == "ar") {
            $("body").css("direction", "rtl");
            $(".lang").css("direction", "rtl");
            $("body").css("text-align", "right ");
        } else {
            $("body").css("direction", "ltr");
            $(".lang").css("direction", "ltr");
            $("body").css("text-align", "left");
        }
    });
    let locallang = localStorage.getItem("langu");
    if (locallang == "ar") {
        $("body").css("direction", "rtl");
        $("body").css("text-align", "right ");

        $(".lang").each(function(index, element) {
            $(this).text(arrlang[locallang][$(this).attr("key")]);
        });
    } else {
        $("body").css("direction", "ltr");
        $("body").css("text-align", "left");

        $(".lang").each(function(index, element) {
            $(this).text(arrlang[locallang][$(this).attr("key")]);
        });
    }
});