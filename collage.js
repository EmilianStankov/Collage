var collages = [
  getJsonFromXML("https://raw.githubusercontent.com/EmilianStankov/Collage/master/data/collage1.xml"),
  getJsonFromXML("https://raw.githubusercontent.com/EmilianStankov/Collage/master/data/collage2.xml"),
  getJsonFromXML("https://raw.githubusercontent.com/EmilianStankov/Collage/master/data/collage3.xml")
]

var sources = [];

function getJsonFromXML(xml) {
  var request = new XMLHttpRequest();
  var text = null;
  request.open("GET", xml, false);
  request.send()
  text = request.responseText;
  return JSON.parse(xml2json(parseXml(text)).replace("undefined", ""));
}


function parseXml(xml) {
   var dom = null;
   if (window.DOMParser) {
      try { 
         dom = (new DOMParser()).parseFromString(xml, "text/xml"); 
      } 
      catch (e) { dom = null; }
   }
   else if (window.ActiveXObject) {
      try {
         dom = new ActiveXObject('Microsoft.XMLDOM');
         dom.async = false;
         if (!dom.loadXML(xml)) // parse error ..

            window.alert(dom.parseError.reason + dom.parseError.srcText);
      } 
      catch (e) { dom = null; }
   }
   else
      alert("cannot parse xml string!");
   return dom;
}

function getData(collage) {
  var images = collage["collage"]["image"];
  for (var i = 0; i < images.length; i++) {
    posX = parseInt(images[i]["position-x"]);
    posY = parseInt(images[i]["position-y"]);
    width = parseInt(images[i]["width"]);
    height = parseInt(images[i]["height"]);
    rotation = parseInt(images[i]["rotation"]);
    alpha = parseInt(images[i]["alpha"]);
    title = images[i]["title"]
    source = images[i]["source"]
    sources.push([source, posX, posY, width, height, rotation, alpha, title]);
  }
}

function draw(collage) {
  sources = [];
  getData(collage);
  for (var i = 0; i < sources.length; i++) {
    img = document.createElement("img");
    title = sources[i][7]
    img.src = sources[i][0];
    img.id = title
    img.width = sources[i][3];
    img.height = sources[i][4];
    document.body.appendChild(img);
    $("#"+title).css('left', ""+sources[i][1]);
    $("#"+title).css('top', ""+sources[i][2]);
    $("#"+title).css('opacity', ""+sources[i][6]/100);
    $("#"+title).css("-webkit-transform",  'rotate(' + sources[i][5] + 'deg)');
  }
}

draw(collages[2]);

$("#generate").click(function(){
  $("img").remove();
  draw(collages[Math.floor(Math.random() * 3)]);
});