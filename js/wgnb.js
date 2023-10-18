$(document).ready(function(){
    //  wgnb 스타일
    for (let i = 0; i < 6; i++) {
        $("#top .wsub:eq("+i+")").hover(
            function(){
                $(this).css("background", "rgba(1, 27, 245, .4)");
                $(this).children("h2").children("a").css("color", "#31ffe9");
                $(this).children("h2").children("a").children("span").css("border-top", "1px solid #31ffe9");
            },
            function(){
                $(this).css("background", "");
                $(this).children("h2").children("a").css("color", "");
                $(this).children("h2").children("a").children("span").css("border-top", "");
            }
        );
    }
    // wgnb2 스타일
    for (let i = 0; i < 3; i++) {
        $("#top .wsub2:eq("+i+")").hover(
            function(){
                $(this).css("background", "rgba(1, 27, 245, .4)");
                $(this).children("h2").children("a").css("color", "#31ffe9");
                $(this).children("h2").children("a").children("span").css("border-top", "1px solid #31ffe9");
            },
            function(){
                $(this).css("background", "");
                $(this).children("h2").children("a").css("color", "");
                $(this).children("h2").children("a").children("span").css("border-top", "");
            }
        );
    }
    // wgnb3 스타일
    for (let i = 0; i < 6; i++) {
        $("#top .wsub3:eq("+i+")").hover(
            function(){
                $(this).css("background", "rgba(1, 27, 245, .4)");
                $(this).children("h2").children("a").css("color", "#31ffe9");
                $(this).children("h2").children("a").children("span").css("border-top", "1px solid #31ffe9");
            },
            function(){
                $(this).css("background", "");
                $(this).children("h2").children("a").css("color", "");
                $(this).children("h2").children("a").children("span").css("border-top", "");
            }
        );
    }
    // wgnb4 스타일
    for (let i = 0; i < 2; i++) {
        $("#top .wsub4 div:eq("+i+")").hover(
            function(){
                $(this).css("background", "rgba(1, 27, 245, .4)");
                $(this).children("h2").children("a").css("color", "#31ffe9");
                $(this).children("h2").children("a").children("span").css("border-top", "1px solid #31ffe9");
            },
            function(){
                $(this).css("background", "");
                $(this).children("h2").children("a").css("color", "");
                $(this).children("h2").children("a").children("span").css("border-top", "");
            }
        );
    }
    // wgnb 토글 슬라이드
    $("#top .wgnb").hide();
    $("#top .wgnb2").hide();
    $("#top .wgnb3").hide();
    $("#top .wgnb4").hide();
    $("header .wrap nav ul.gnb .company").hover(function(){
        $("#top .wgnb").stop().slideToggle(300);
    });
    $("header .wrap nav ul.gnb .social").hover(function(){
        $("#top .wgnb2").stop().slideToggle(300);
    });
    $("header .wrap nav ul.gnb .esg").hover(function(){
        $("#top .wgnb3").stop().slideToggle(300);
    });
    $("header .wrap nav ul.gnb .customer").hover(function(){
        $("#top .wgnb4").stop().slideToggle(300);
    });
    // language hover시 list 보이기
    $("header .wrap nav ul.enb .language").hover(
        function () {
            $("header .wrap nav ul.enb li .langbox").show();
        },
        function () {
            $("header .wrap nav ul.enb li .langbox").hide();
        }
    );
    // gnb li hover시 span 스타일링
    $("header .wrap nav ul.gnb li").hover(
        function () {
            $(this).find("a .spanhover").css("border-bottom", "2px solid #2f90ff");
        },
        function () {
            $(this).find("a .spanhover").css("border-bottom", "none");
        }
    );
});