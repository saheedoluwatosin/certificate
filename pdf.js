



const PDF = require("pdfkit")
const fs = require("fs")

const Cert = (name) => {{
   
    const filepath = `${name}_certificate.pdf`;
    //doc.pipe(fs.createWriteStream(filePath));
  

    const doc = new PDF({
        size: 'A4',
        layout: 'landscape',
        margin: 50,
      });
      doc.pipe(fs.createWriteStream(filepath));

      

      doc.font('Helvetica-Bold')
      .fontSize(40)
      .text('Certificate of Completion', { align: 'center' });

      doc.moveDown(2);

      
      doc.font('Helvetica')
        .fontSize(30)
        .text(`This is to certify that`, { align: 'center' });
    
     
      doc.moveDown();
      doc.font('Helvetica-Bold')
        .fontSize(50)
        .text(`${name}`, { align: 'center' });
    
     
      doc.moveDown();
      doc.font('Helvetica')
        .fontSize(30)
        .text(`has successfully completed the course`, { align: 'center' });

    doc.end()
    
    return filepath

}}








module.exports = {
    Cert
}
