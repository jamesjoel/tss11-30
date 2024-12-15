const fs = require('fs');
const PDFDocument = require('pdfkit');

/**
 * Creates a receipt PDF.
 * 
 * @param {string} outputFilePath - Path to write the PDF file.
 * @param {object} res - Express.js response object.
 */
function createPdf(outputFilePath, res) {
  const receiptData = {
    receiptNumber: '12345',
  date: '2024-12-03',
  customerName: 'John Doe',
  billingAddress: '123 Main St, Anytown, USA',
  phoneNumber: '123-456-7890',
  email: 'johndoe@example.com',
    items: [
      { name: 'Item A', quantity: 2, price: 15.99 },
      { name: 'Item B', quantity: 1, price: 25.5 },
      { name: 'Item C', quantity: 3, price: 8.75 },
    ],
    total: 83.49,
  };

  const doc = new PDFDocument();

  // If outputFilePath is provided, write to file
  if (outputFilePath) {
    doc.pipe(fs.createWriteStream(outputFilePath));
  }

  // If response object is provided, send to client
  if (res) {
    res.setHeader('Content-Disposition', 'attachment; filename=receipt.pdf');
    res.setHeader('Content-Type', 'application/pdf');
    doc.pipe(res);
  }

  // PDF Content
  doc.fontSize(20).text('Company Name', 50, 50).fill('blue');
/*   doc.fontSize(20).text('Invoice', { align: 'top-left'  }).fill('blue');
 */
  // Add horizontal line
/*   doc.moveTo(50, 50).lineTo(550, 50).stroke();
 */  doc.moveTo(50, 100).lineTo(550, 100).stroke();


  // If outputFilePath is provided, write to file
  if (outputFilePath) {
    doc.pipe(fs.createWriteStream(outputFilePath));
  }

  // If response object is provided, send to client
  if (res) {
    res.setHeader('Content-Disposition', 'attachment; filename=receipt.pdf');
    res.setHeader('Content-Type', 'application/pdf');
    doc.pipe(res);
  }

  // PDF Content
  doc.fontSize(20).text('Invoice', 10, 50, { align: 'right' }).fill('blue');

 
  // Add horizontal line

  doc.moveTo(50, 100).lineTo(550, 100).stroke();


 

  

  // Add receipt details
  doc.fontSize(12)
    .text(`Receipt Number: ${receiptData.receiptNumber}`, 50, 120)
    .text(`Date: ${receiptData.date}`, 50, 140)
    .text(`Customer Name: ${receiptData.customerName}`, 50, 160);

  // Add receipt details
doc.fontSize(12)
.text(`Receipt Number: ${receiptData.receiptNumber}`, 50, 120)
.text(`Date: ${receiptData.date}`, 50, 140)
.text(`Customer Name: ${receiptData.customerName}`, 50, 160)
.text(`Billing Address: ${receiptData.billingAddress}`, 300, 120, { align: 'right' })
.text(`Phone Number: ${receiptData.phoneNumber}`, 300, 140, { align: 'right' })
.text(`Email: ${receiptData.email}`, 300, 160, { align: 'right' });

  // Add table header
  doc.moveTo(50, 200).lineTo(550, 200).stroke();
  doc.text('Item', 50, 210, { bold: true });
  doc.text('Quantity', 250, 210, { bold: true });
  doc.text('Price', 400, 210, { bold: true });
  doc.moveTo(50, 230).lineTo(550, 230).stroke();

  // Add table content
  let y = 240;
  receiptData.items.forEach((item) => {
    doc.text(item.name, 50, y);
    doc.text(item.quantity.toString(), 250, y);
    doc.text(`$${item.price.toFixed(2)}`, 400, y);
    y += 20;
  });

  // Add total
  doc.moveTo(50, y + 10).lineTo(550, y + 10).stroke();
  doc.fontSize(14).text(`Total: $${receiptData.total.toFixed(2)}`, 400, y + 20);

  // Finalize the PDF
  doc.end();
}

// Example usage:
createPdf('output.pdf');
// createPdf(null, res); // in Express.js