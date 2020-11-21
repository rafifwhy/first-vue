function openNav() {
    document.getElementById("nav").style.width = "100%";
}

function closeNav() {
    document.getElementById("nav").style.width = "0%";
}

function change() {
    const randomColor = Math.floor(Math.random()*16777215).toString(16);
    document.body.style.backgroundColor = "#" + randomColor;
    document.getElementById("btnnewbg").style.color = "#" + randomColor;
    newcolor.innerHTML = "#" + randomColor;
}

function warn() {
    alert("Back to home again!")
    window.location="index.html"
}

var count = 0;

function plus_count(){
    count = count + 1;
    counter(count)
}

function min_count(){
    count = count - 1;
    counter(count)
}

function counter(count){
    document.getElementById("result").innerHTML = count;
    if(count == 0){
        document.getElementById("result").style.backgroundColor = "lightgrey";
    }
    if(count > 0){
        if(count < 5){
            document.getElementById("result").style.backgroundColor = "lightgrey";
        }
        if(count >= 5){
            document.getElementById("result").style.backgroundColor = "#29ff62";
        }
    }
    else if(count < 0){
        if(count >= -5){
            document.getElementById("result").style.backgroundColor = "#83f57d";
        }
        if(count < -5){
            document.getElementById("result").style.backgroundColor = "#686bbd";
        }
    }
    if(count > 9 || count < -9){
        warn()
    }
}

function openig(){
    window.open("https://www.instagram.com/rafifwahyuh/")
}

function openyt() {
    window.open("https://www.youtube.com/channel/UCsxpMR-v8-8v5TuHkzcz4jA?view_as=subscriber")
}

function openfb(){
    window.open("https://www.facebook.com/rapip.wahyu/")
}

function opennavdown(){
    document.getElementById("navdown").style.height = "100%";
}

function closenavdown(){
    document.getElementById("navdown").style.height = "0%";
}

function opentrans(){
    window.open("https://css-tricks.com/almanac/properties/t/transition/")
}

function openhex(){
    window.open("https://css-tricks.com/snippets/javascript/random-hex-color/")
}

function openoverlay(){
    window.open("https://www.w3schools.com/howto/howto_js_fullscreen_overlay.asp")
}

function openicon(){
    window.open("https://www.w3schools.com/howto/howto_css_social_media_buttons.asp")
}

function openstyle(){
    window.open("https://www.w3schools.com/jsref/prop_style_color.asp")
}

function openwindow(){
    window.open("https://www.w3schools.com/jsref/met_win_open.asp")
}

function openhome(){
    window.open("https://stackoverflow.com/questions/13158786/how-to-return-to-home-page-using-javascript/13158910")
}