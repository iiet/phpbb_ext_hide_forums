// https://forum.iiet.pl/styles/prosilver/template/hide-forums.js // credits unknown
var hideForums_done = 0;
var hideForums = function() {
  if(hideForums_done == 1) return;
  hideForums_done = 1;
  var re = /(\d+)/;
  var online = document.querySelector('.online-list');
  var els = document.querySelectorAll('#page-body div.forabg div.inner ul.topiclist li.header');

  for(var i = 0; i < els.length; i++ ) {
    var f = function(el) {
      var nr = re.exec(el.querySelector('dl > dt > div > a').getAttribute('href'))[0];
      var tabelka = el.parentNode.parentNode.querySelector('.forums');
  
      if(localStorage.getItem('f'+nr) == 1) {
        var tmp = tabelka.parentNode.parentNode;
        var parent = tmp.parentNode;
        parent.removeChild(tmp);
        parent.insertBefore(tmp,online);    
        tabelka.style.display = 'none';
      }
      el.addEventListener('click', function(ev) {
            if(tabelka.style.display != 'none') {
              tabelka.style.display = 'none';
              localStorage.setItem('f'+nr, 1);
            } else {
              tabelka.style.display = 'block';
              localStorage.setItem('f'+nr, 0);
            }
          }, false);
    };
    f(els[i]);
  }
};
document.addEventListener('DOMContentLoaded',hideForums,false);
