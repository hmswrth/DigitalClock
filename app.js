function displayTime() {
    let date = new Date();
    //let time = date.toLocaleString('en-US' , {hour : 'numeric', minute : 'numeric', second : 'numeric', hour12 : true } );
    let hh = date.getHours();
    let mm = date.getMinutes();
    let ss = date.getSeconds();
    let session = (hh >= 12) ? 'PM' : 'AM';
    if (hh == 0) {
        hh = 12;
    }
    hh = hh > 12 ? hh - 12 : hh;
    hh = checkFormat(hh);
    mm = checkFormat(mm);
    ss = checkFormat(ss);
    document.getElementById("clock").innerHTML = hh + ":" + mm + ":" + ss + " " + session;
    // document.getElementById("clock").innerHTML = time;

    setTimeout(displayTime, 0);
}

function checkFormat(s) {
    let k = s < 10 ? s = "0" + s : s;
    return k
}

displayTime();