import { axiosExportTabe } from '@/api/manage'

/**
 * 导出excel
 * @param {Object} title  标题列key-val
 * @param {Object} data   值列key-val
 * @param {Object} fileName  文件名称
 */
export function JSONToExcelConvertor(title, data, fileName) {
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

export function createDownHref(blob, fileName) {
    const a = document.createElement('a')
    a.href = URL.createObjectURL(blob)
    a.download = fileName || '未命名文件'
    a.click()
    URL.revokeObjectURL(a.href)
    a.remove()
}

export async function exportAndDownExcel(params, fileName) {
    axiosExportTabe(params, { responseType: 'blob' }).then(async (blob) => {
        console.log(blob)
        let fileHead = await new Promise(resolve => {
            let reader = new FileReader()
            reader.addEventListener('loadend', () => {
                let tmpArr = Array.from(new Uint8Array(reader.result.slice(0, 8)))
                resolve(tmpArr.map(d => d.toString(16)).join(''))
            })
            reader.readAsArrayBuffer(blob)
        })
        if (fileHead.toUpperCase() !== 'D0CF11E0A1B11AE1') {
            let str = await new Promise(resolve => {
                let reader = new FileReader()
                reader.addEventListener('loadend', () => resolve(reader.result))
                reader.readAsText(blob)
            }) || '{}'
            console.log(str)
            let res = JSON.parse(str)
            this.$message.error(res.msg || '获取导出文件错误')
            return
        }
        createDownHref(blob, `${fileName}.xls`)
    })
}
