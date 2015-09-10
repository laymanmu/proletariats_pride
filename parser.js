
var Parser = {
  getLines: function(string) {
    return string.split(/\n/);
  },

  addLineNumbers: function(text) {
    var lines    = this.getLines(text);
    var numbered = [];
    var digits   = lines.length.toString().length;
    for (var i=1; i<=lines.length; i++) {
      var pads = digits - i.toString().length;
      var num  = new Array(pads+1).join('0') + i;
      numbered.push(num + ". " + lines[i]);
    }
    return numbered.join('\n');
  },

  newlinesToBreaks: function(text) {
    return text.replace(/\n/g, '<br />');
  },

  breaksToNewlines: function(html) {
    return html.replace(/<br \/>/g, '\n');
  },

  escapeHTML: function(str) {
    var div = document.createElement('div');
    div.appendChild(document.createTextNode(str));
    return div.innerHTML;
  },

  parseTime: function(timeString) {
    if (timeString == '') return null;
    var time = timeString.match(/(\d+)(:(\d\d))?\s*(p?)/i);
    if (time == null) return null;
    var hours = parseInt(time[1],10);
    var date  =  new Date();
    date.setHours(hours);
    date.setMinutes(parseInt(time[3],10) || 0);
    date.setSeconds(0, 0);
    return date;
  },

  dateTo24HourTimeString: function(time) {
    function zpad(num) {
      if (num.toString().length < 2) {
        return "0" + num;
      }
      return num;
    }
    var hours = time.getHours();
    var mins  = time.getMinutes();
    return zpad(hours) +":"+ zpad(mins);
  }


}
