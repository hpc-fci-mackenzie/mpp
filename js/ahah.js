function ahah(url, target, statcounter) {
  //document.getElementById(target).innerHTML = '';
  var req;
  if (window.XMLHttpRequest) {
    req = new XMLHttpRequest();
  } else if (window.ActiveXObject) {
    req = new ActiveXObject("Microsoft.XMLHTTP");
  }
  if (req != undefined) {
    req.onreadystatechange = function() { ahahDone(req, url, target, statcounter); };
    req.open("GET", url, true);
    req.send("");
  }
}

function ahahDone(resp, url, target, statcounter) {
  if (resp.readyState == 4) { // only if req is "loaded"
    if (resp.status == 200 || resp.status == 304) { // only if "OK"
      var text = resp.responseText;
      parser=new DOMParser();
      htmlDoc=parser.parseFromString(text,"text/html");
      news = htmlDoc.getElementById("news");
      if(statcounter == undefined && news != undefined) {
        // alguma coisa me diz que esses códigos deveriam estar explicitamente no HTML...
        var sc_project=10619515;
        var sc_invisible=0;
        var sc_security="ca1e0cda";
        var scJsHost = (("https:" == document.location.protocol) ?
                        "https://secure." : "http://www.");
        text += ("<center><strong>Visitor number</strong><br/>" +
                 "<img id='mycounter' src='http://c.statcounter.com/10619515/0/ca1e0cda/0/'></center>");

        text += ("<scr"+"ipt type='text/javascript' src='" + scJsHost+
                 "statcounter.com/counter/counter.js'></scr"+"ipt>");
      }
      document.getElementById(target).innerHTML = text;
    } else {
      document.getElementById(target).innerHTML="ERRO!!!";
    }
  }
}
