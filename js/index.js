window.onscroll = function () {
    var nav = document.getElementById("nav");
    var i = document.documentElement.scrollTop || document.body.scrollTop;
    if (i >= 600) {
        nav.className = "navigation-fixed";
    } else {
        nav.className = "navigation";
    }
};

function isMobile() {
  if ((navigator.userAgent.match(/(phone|pad|pod|iPhone|iPod|ios|iPad|android|Mobile|BlackBerry|IEMobile|MQQBrowser|JUC|Fennec|wOSBrowser|BrowserNG|WebOS|Symbian|Windows Phone)/i)))
    return true;
  else
    return false;
}
window.onload = function () {

}

function ShowCountDown(year, month, day) {
    var now = new Date();
    var endDate = new Date(year, month - 1, day);
    var leftTime = endDate.getTime() - now.getTime();
    var leftsecond = parseInt(leftTime / 1000);
    var day1 = Math.floor(leftsecond / (60 * 60 * 24));
    var hour = Math.floor((leftsecond - day1 * 24 * 60 * 60) / 3600);
    var minute = Math.floor((leftsecond - day1 * 24 * 60 * 60 - hour * 3600) / 60);
    var second = Math.floor(leftsecond - day1 * 24 * 60 * 60 - hour * 3600 - minute * 60);
    var cc = document.getElementById('countdown');
    cc.innerHTML = '优惠倒计时' + day1 + "天" + hour + "小时" + minute + "分";
}

$(document).ready(function () {
    readyFn();

    $('#introduction-link').click(function () {
        $('html,body').animate({ scrollTop: $("#introduction").offset().top - 100 }, 400);
    });
    $('#speakers-link').click(function () {
        $('html,body').animate({ scrollTop: $("#speakers").offset().top - 100 }, 400);
    });
    $('#agenda-link').click(function () {
        $('html,body').animate({ scrollTop: $("#agenda").offset().top - 100 }, 400);
    });
    $('#training-link').click(function () {
        $('html,body').animate({ scrollTop: $("#training").offset().top - 100 }, 400);
    });
    $('#group-link').click(function () {
        $('html,body').animate({ scrollTop: $("#group").offset().top - 100 }, 400);
    });
    $('#tickets-link').click(function () {
        $('html,body').animate({ scrollTop: $("#tickets").offset().top - 100 }, 400);
    });
    $('#partners-link').click(function () {
        $('html,body').animate({ scrollTop: $("#partners").offset().top - 100 }, 400);
    });



    $('.buy-ticket-button, .buy-ticket-button-en').click(function () {
        window.open("/order/2016#payment")
    });
});

function readyFn() {
    var button = $(".activity-frontline-rightbutton");
    $.each(button, function (i, value) {
        if (i == 0) {
            $(this).css("backgroundColor", "#e94a23");
            $(this).css("color", "white");
        }
        $(this).mouseover(function () {
            $(".activity-content").css("display", "none");
            $(button).css("backgroundColor", "#eee");
            $(button).css("color", "#454545");
            $(this).css("backgroundColor", "#e94a23");
            $(this).css("color", "white");
            $('#' + i).css("display", "block");
        });
    });
}