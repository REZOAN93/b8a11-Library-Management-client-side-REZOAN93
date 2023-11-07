import React, { useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import Header from '../Header/Header';
import { PDFViewer } from '@react-pdf/renderer';
import { Document, Page } from 'react-pdf'

const ReadBookPage = () => {
    const data = useLoaderData()
    const [numPages, setNumPages] = useState(null);
    const [pageNumber, setPageNumber] = useState(1);
    function onDocumentLoadSuccess({ numPages }) {
        setNumPages(numPages);
        setPageNumber(1);
    }

    function changePage(offSet) {
        setPageNumber(prevPageNumber => prevPageNumber + offSet);
    }

    function changePageBack() {
        changePage(-1)
    }

    function changePageNext() {
        changePage(+1)
    }
    return (
        <div>
            <Header></Header>

            <div className=' py-10'>
                <center>
                    <div>
                        <Document file="https://simontechnology.org/ourpages/auto/2013/1/23/53406450/Catcher%20in%20the%20Rye%20Text.pdf" onLoadSuccess={onDocumentLoadSuccess}>
                            
                        </Document>
                    </div>
                </center>
            </div>
        </div>
    );
};

export default ReadBookPage;