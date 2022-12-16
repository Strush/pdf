import React, { useContext } from "react";
import { PdfDocument } from "../components/PdfDocument";
import { PDFDownloadLink, PDFViewer } from "@react-pdf/renderer";
import { isMobile } from "react-device-detect";
import { Store } from "../Store";
import { Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

export default function Pdf() {
  const { state } = useContext(Store);
  const { allOptions } = state; // to show dynamic data
  const navigate = useNavigate();

  const toHomeHandler = () => {
    navigate("/");
  };

  return (
    <div>
      {isMobile ? (
        <PDFDownloadLink
          document={<PdfDocument allOptions={allOptions} />}
          fileName="standardsPdf.pdf"
        >
          {({ blob, url, loading, error }) =>
            loading ? (
              <Button className="render-pdf">Loading document...</Button>
            ) : (
              <div className="render-pdf">
                <Button>Download PDF</Button>
              </div>
            )
          }
        </PDFDownloadLink>
      ) : (
        <PDFViewer
          style={{
            width: "100vw",
            height: "100vh",
          }}
        >
          <PdfDocument allOptions={allOptions} />
        </PDFViewer>
      )}
    </div>
  );
}
