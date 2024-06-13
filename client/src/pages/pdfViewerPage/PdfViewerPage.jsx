import React from 'react';
import { useLocation } from 'react-router-dom';
import './PdfViewerpage.css';

function PdfViewerPage() {
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const fileUrl = queryParams.get('file');

  return (
    <div className="pdf-viewer-container">
      {fileUrl ? (
        <iframe
          src={fileUrl}
          title="PDF Viewer"
          className="pdf-viewer"
        />
      ) : (
        <p>No PDF file specified</p>
      )}
    </div>
  );
}

export default PdfViewerPage;
