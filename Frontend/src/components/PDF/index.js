import React from 'react'
import {
    Document,
    Font,
    Page,
    StyleSheet,
    Text,
    View,
    PDFViewer
} from '@react-pdf/renderer'



import PDF from './PDF'

const metadata = {
    author: 'IITP AIS',
    keywords: 'AIS,IITP',
    subject: 'This is the pdf you are looking for',
    title: 'AIS PDF Generator',
}

Font.register({
    family: 'Lato',
    fonts: [
        {
            src: 'https://fonts.gstatic.com/s/lato/v17/S6uyw4BMUTPHjx4wWw.ttf',
            fontWeight: 300,
        },
        {
            src: 'https://fonts.gstatic.com/s/lato/v17/S6u9w4BMUTPHh6UVSwiPHA.ttf',
            fontWeight: 'bold',
        },
    ],
})


export default () => {
    return (
            <Document
                title={metadata.title}
                author={metadata.author}
                subject={metadata.subject}
                keywords={metadata.keywords}
            >
                <PDF size="A4" />
                {/* <PDF orientation="landscape" size="A4" /> */}
                {/* <PDF size={[380, 1250]} /> */}
            </Document>
    )
}

