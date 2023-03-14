
/*------------------------------------------------------------------------------------
FUNÇÃO QUE PEGA DADOS DE UMA API POR EXEMPLO E FAZ O EXPORT EM EXCEL
--------------------------------------------------------------------------------------*/


async function ExportExcel(data,nomePlanilha){
    const workbook = new ExcelJS.Workbook();
    const worksheet = workbook.addWorksheet("Sheet");
    const key = Object.keys(data[0]);
    var column = [];
    let rowindex = 0;
    
    key.forEach(col =>{        
        column.push({ header: col, key: col,   width: 20 })        
        rowindex++;
    })

    worksheet.columns = column;
    console.log(column);
    data.forEach(record => {
        worksheet.addRow(Object.values(record))
        console.log(Object.values(record));
    });

    const buffer = await workbook.xlsx.writeBuffer();
    const fileType = 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet';
    const fileExtension = '.xlsx';  
    const blob = new Blob([buffer], {type: fileType});
  
    saveAs(blob, nomePlanilha + fileExtension);
  
  };