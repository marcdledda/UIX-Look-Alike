"use strict";

function getCookieData() {
    $.ajax({
        url: "../cookies.JSON"
    }).done((cookieData) => {
        console.log(cookieData);
   });
}
 
getCookieData();