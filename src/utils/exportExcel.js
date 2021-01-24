/**
 * 导出excel
 * @param {Object} title  标题列key-val
 * @param {Object} data   值列key-val
 * @param {Object} fileName  文件名称
 */
function JSONToExcelConvertor(title, data, fileName) {
    var CSV = '';
    var row = "";

    for (var i = 0; i < title.length; i++) {
        if (title[i].title) {
            row += title[i].title + ',';
        }
    }
    row = row.slice(0, -1);
    CSV += row + '\r\n';

    for (var i = 0; i < data.length; i++) {
        var row = "";
        for (var j = 0; j < title.length; j++) {
            if (title[j].title) {
                row += '"' + (data[i][title[j].field] ? data[i][title[j].field] : "") + '"\t,';
            }
        }
        row.slice(0, row.length - 1);
        CSV += row + '\r\n';
    }

    if (CSV == '') {
        alert("Invalid data");
        return;
    }

    var fileName = fileName;
    var uri = new Blob(['\ufeff' + CSV], { type: "text/csv" });

    if (window.navigator && window.navigator.msSaveOrOpenBlob) { // for IE
        window.navigator.msSaveOrOpenBlob(CSV, fileName + ".csv");
    } else { // for Non-IE（chrome、firefox etc.）
        var link = document.createElement("a");
        link.href = URL.createObjectURL(uri);

        link.style = "visibility:hidden";
        link.download = fileName + ".csv";
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    }
}