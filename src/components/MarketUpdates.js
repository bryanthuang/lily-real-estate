import React, { useState } from 'react';
import { pdfjs, Document, Page } from 'react-pdf';
function MarketUpdates() {
  const [numPages, setNumPages] = useState();
  const [pageNumber, setPageNumber] = useState();
  pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.min.js`;


  function onDocumentLoadSuccess(numPages){
    setNumPages(numPages);
  }


  return (
    <div className="marketUpdates">
    </div>
  );
}

export default MarketUpdates;