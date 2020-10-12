import React from 'react'
import {Document,Page,pdfjs} from 'react-pdf';
import endri from './Endri_Seferi_CV.pdf'
export default function Resume(props) {
    

    pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;
    function removeTextLayerOffset() {
        const textLayers = document.querySelectorAll(".react-pdf__Page__textContent");
          textLayers.forEach(layer => {
            const { style } = layer;
            style.top = "0";
            style.left = "0";
            style.transform = "";
        });
      }
    return (
      <object data={endri} type="application/pdf" style={{minHeight:"100vh",width:"100%"}}></object>
    )
}
