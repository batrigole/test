
const PDFDocument = require("pdfkit");
const fs = require("fs");

function generateReport(data) {
  const doc = new PDFDocument();
  const filename = `report-${Date.now()}.pdf`;
  doc.pipe(fs.createWriteStream(`./${filename}`));

  doc.fontSize(20).text("Infra-Insight Report");
  doc.moveDown();
  doc.text(`Total Devices: ${data.totalDevices}`);
  doc.text(`Active Alerts: ${data.activeAlerts}`);
  doc.end();

  return filename;
}

module.exports = { generateReport };
