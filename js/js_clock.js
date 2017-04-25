// clock
function date_time(id) {
  date = new Date;
  year = date.getFullYear();
  month = date.getMonth();
  months = new Array('january','february','march','april','may','june','july','august','september','october','november','december');
  d = date.getDate();
  if(d < 10) {
    d = "0" + d;
  }
  day = date.getDay();
  days = new Array('sunday','monday','tuesday','wednesday','thursday','friday','saturday');
  h = date.getHours();
  if(h < 10) {
    h = "0" + h;
  }
  m = date.getMinutes();
  if(m < 10) {
    m = "0" + m;
  }
  s = date.getSeconds();
  if(s < 10) {
    s = "0" + s;
  }
  result = days[day] + ', ' + d + ' ' + months[month] + ' '  + year + '  ' + h + ':' + m + ':' + s;
  document.getElementById(id).innerHTML = result;
  setTimeout('date_time("' + id + '");','1000');
  return true;
}
