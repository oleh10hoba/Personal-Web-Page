$(document).ready(function ()
{
  let active = window.location.pathname.split("/").pop(),
      galeria = '',
      plan = '',
      logIn = '' ,
      kontakt = '';
  if(active == 'logIn.html')
  {
    logIn = 'active';
  }
  if(active == 'plan.html')
  {
    plan = 'active';
  }
  if(active == 'galeria.html')
  {
    galeria = 'active';
  }
  if(active == 'kontakt.html')
  {
    kontakt = 'active';
  }
  $('#navbarResponsive').html(`
    <ul class="navbar-nav ml-auto">
      <li class="nav-item ${galeria}">
        <a class="nav-link" href="galeria.html">Galeria</a>
      </li>
      <li class="nav-item ${plan}">
        <a class="nav-link" href="plan.html">Plan</a>
      </li>
      <li class="nav-item ${kontakt}">
        <a class="nav-link" href="kontakt.html">Kontakt</a>
      </li>
      <li class="nav-item ${logIn}">
        <a class="nav-link" href="logIn.html">LogIn</a>
      </li>
    </ul>
    `);
});
//ilosc czasu na stronie 
let startdate = new Date();
let clockStart = startdate.getTime();
function iloscSekund() {
  let thisTime = new Date();
  return (thisTime.getTime() - clockStart)/1000;
}
function getSecs() 
{
  let ileSekund = Math.round(iloscSekund());
  let sek = ileSekund % 60;
  let min = Math.round((ileSekund-30)/60);
  let sSecs ="" + ((sek > 9) ? sek : "0" + sek);
  let sMins ="" + ((min > 9) ? min : "0" + min);
  document.getElementById("timer-counter").innerHTML = sMins+":"+sSecs;
  setTimeout('getSecs()', 1000);
}
//miganie przyciska 
let arrColor = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "a", "b", "c", "d", "e", "f"];
function mouseOut() 
{
  for (i = 0; i < 13; i++)
    setTimeout ('document.blinkbutton.button.style.background = "#'+arrColor[15-i]+'0'+arrColor[15-i]+'FFF";', i * 50);
}
function mouseOver() 
{
  for (i = 0; i < 15; i++)
    setTimeout ('document.blinkbutton.button.style.background = "#'+arrColor[i]+'0'+arrColor[i]+'F31";', i * 50);
}

//ukryty tekst
function expandit(id)
{
  obj = document.getElementById(id);
  if (obj.style.display=="none") obj.style.display="";
  else obj.style.display="none";
}
//tekst na falce 
function nextSize(i, way, length) 
{
  if (way == 1)
    return 30 * Math.abs(Math.sin(i / (length / Math.PI)));
  else
    if (way == 2)
      return 100 * Math.abs(Math.cos(i / (length / Math.PI)));
}
function sizeCycle(text, way, d) 
{
  let out = "";
  for (i = 0; i < text.length; i++) 
  {
    size = parseInt(nextSize(i + d, way, text.length));
    out += "<span style='font-size: "+ size +"pt'>" +text.substring(i, i + 1)+ "</span>";
  }
  document.getElementById("wave").innerHTML = out;
}
function doWave(text, n) 
{
  sizeCycle(text, 1, n);
  if (n > text.length) n = 0;
  setTimeout("doWave(\"" + text + "\", " + (n + 1) + ")", 50);
}
//zdjęcie na falce
var amp = 50;
function nextImageSize(i, length) 
{
  return amp * Math.abs(Math.sin(i / (length / Math.PI)));
}
function sizeImageCycle(count, d) 
{
  let out = "";
  for (i = 0; i < count; i++) 
  {
    let size = parseInt(nextImageSize(i + d, count));
    out += "<img src = 'img/img2.jpg' style='width: "+ size +"px;' />";
  }
  imagewave.innerHTML = out;
}
function doImageWave(count, n) 
{
  sizeImageCycle(count, n);
  if (n > count) n = 0;
  setTimeout("doImageWave(\"" + count + "\", " + (n + 1) + ")", 80);
}
//animacja tekstu
function animateText(id, text, i) 
{
  document.getElementById(id).innerHTML = text.substring(0, i);
  i++;
  if (i > text.length) i = 0;
  setTimeout("animateText('" + id + "','" + text + "'," + i + ")", 100);
}
//dodanie do wybranych stron
let url = active = window.location.pathname.split("/").pop(); 
let title = active = window.location.pathname.split("/").pop(); 
function addFavorite(a) 
{
  try 
  {
    window.external.AddFavorite(url, title);
  }
  catch (e) 
  {
    try 
    {
      window.sidebar.addPanel (title, url, "");
    }
    catch (e) 
    {
      if (typeof(opera)=="object") 
      {
        a.rel = "sidebar";
        a.title = title;
        a.url = url;
        return true;
      }
      else 
      {
        alert("Wciśnij Ctrl+D dla dodania w wybrane");
      }
    }
  }
  return false;
}