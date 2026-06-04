function doGet(e) {
  var ss = SpreadsheetApp.openById('1XhORgZD4vYFYOwIzUh9Zj2VxH2I58bhtcQC9DrO6Qtg');
  var sheets = ['Inventory','Ebay Sales','Mercari Sales','Cashouts','TikTok Shop','InPerson Sales'];
  var result = {};
  sheets.forEach(function(name) {
    try {
      var sheet = ss.getSheetByName(name);
      if (sheet) {
        var data = sheet.getDataRange().getValues();
        result[name] = data.filter(function(row, i) {
          return i === 0 || (row[0] && String(row[0]).trim() !== '');
        });
      }
    } catch(err) {}
  });
  var json = JSON.stringify(result);
  var callback = e.parameter.callback;
  if (callback) {
    return ContentService.createTextOutput(callback + '(' + json + ')').setMimeType(ContentService.MimeType.JAVASCRIPT);
  }
  return ContentService.createTextOutput(json).setMimeType(ContentService.MimeType.JSON);
}