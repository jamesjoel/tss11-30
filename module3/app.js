let x = require("string-random")

let y = x(15, { numbers : false });

let pdf = require("pdfkit");
let fs = require("fs");
let doc = new pdf();

doc.pipe(fs.createWriteStream("resume.pdf"));

doc.fontSize(30).text("JAMES JOEL", 100, 10)

doc.end();