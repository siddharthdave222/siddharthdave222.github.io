//$('.carousel').carousel({
//    interval: 5000
//})

var toolDiv = $("#toolwrap");

function createSkillBar() {
    $('.skill-bar').each(function () {
        var element = $(this).find('.skill-percent');
        element.css("width", "0%");
        element.html("");
        var percentValue = $(this).attr('data-percent');
        element.animate({
            width: percentValue
        }, 750, function () {
            var elementHTML = "<span style='color:white; font-size:75%;'>" + percentValue + "</span>"
            element.html(elementHTML);
        });

    });
}

$(document).ready(function () {
    createSkillBar();
    checkReturnToTop();
});


toolDiv.mouseenter(function () {
    createSkillBar();
});

function checkNullUndefinedOrEmpty(value) {
    if (value == undefined || value == null || value == "") {
        return true;
    }
    return false;
}

function moveToElement(goToElementName) {
    var elementId = "#" + goToElementName;
    var offset = $(elementId).offset();
    var currentTopValue = document.scrollingElement.scrollTop;
    var navMenuHeight = $("#navmenuwrap").children().css("height");
    offset = offset.top - parseFloat(navMenuHeight.substring(0, navMenuHeight.lastIndexOf("px")));
    $('html, body').animate({ scrollTop: offset }, 1000);
    $("#navbarSupportedContent").children().find('.active').removeClass('active');
    $(elementId).addClass('active');
    if (elementId == "#tooltech") {
        createSkillBar();
    }
    return false;
};

function initMap() {
    var myGradLocation = { lat: 32.985625, lng: -96.750838 };
    var mapGrad = new google.maps.Map(document.getElementById('map-grad'), {
        zoom: 12,
        center: myGradLocation
    });
    var markerGrad = new google.maps.Marker({
        position: myGradLocation,
        animation: google.maps.Animation.DROP,
        map: mapGrad
    });

    var myUGradLocation = { lat: 23.129832, lng: 72.541336 };
    var mapUGrad = new google.maps.Map(document.getElementById('map-ugrad'), {
        zoom: 15,
        center: myUGradLocation
    });
    var markerUGrad = new google.maps.Marker({
        position: myUGradLocation,
        animation: google.maps.Animation.DROP,
        map: mapUGrad
    });
};

function mobilecheck() {
    if (window.innerWidth <= 800 && window.innerHeight <= 600) {
        return true;
    }
    return false;
}

function checkReturnToTop() {
    var currentTop = document.scrollingElement.scrollTop;
    if (currentTop > 100) {
        if ($("#move-top").css("visibility") == "hidden") {
            $("#move-top").css("visibility", "visible");
        }
    }
    else {
        if ($("#move-top").css("visibility") == "visible") {
            $("#move-top").css("visibility", "hidden");
        }
    }
}

function isNavBarOpen() {
    var clickover = $(event.target);
    var _opened = $(".navbar-collapse").hasClass("show");
    if (_opened === true && !clickover.hasClass("navbar-toggle")) {
        $("#navMenuToggleIcon").click();
    }
}

document.addEventListener('scroll', function () {
    checkReturnToTop();
    isNavBarOpen();
});

document.addEventListener('click', function () {
    isNavBarOpen();
});