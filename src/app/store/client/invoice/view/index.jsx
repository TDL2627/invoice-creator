"use client"
import React from 'react';
import { PDFRenderer, Document, Page, View, Text, StyleSheet } from '@react-pdf/renderer';
import { createWriteStream } from 'fs';
const styles = StyleSheet.create({
  page: {
    flexDirection: 'row',
    backgroundColor: '#E4E4E4',
  },
  section: {
    margin: 10,
    padding: 10,
    flexGrow: 1,
  },
});

const renderPDF = () => {
  const doc = (
    <Document>
      <Page size="A4" style={styles.page}>
        <View style={styles.section}>
          <Text>Section #1</Text>
        </View>
        <View style={styles.section}>
          <Text>Section #2</Text>
        </View>
      </Page>
    </Document>
  );

  const pdfStream = PDFRenderer.renderToStream(doc);

  pdfStream.pipe(createWriteStream('invoice.pdf')); // Replace 'invoice.pdf' with the desired file name
};

const DownloadPDF = () => {
  const handleDownload = () => {
    renderPDF();
  };

  return (
    <div>
      <h1>Download PDF</h1>
      <button onClick={()=>{handleDownload}}>Download PDF</button>
    </div>
  );
};

export default DownloadPDF;