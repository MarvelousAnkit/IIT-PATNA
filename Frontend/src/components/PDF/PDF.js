import React from 'react'
import {
    Page,
    Text,
    View,
    StyleSheet,
} from '@react-pdf/renderer'

import Header from './Header'
import Footer from './Footer'
import Main from './Main'
import Table from './Table'

const PDF = (props) => {
    return (
        <Page {...props} className="flex flex-col justify-center items-center" style={styles.page}>
            <Text className="text-red-500"
                render={({ pageNumber, totalPages }) => `Page ${pageNumber} of ${totalPages}`} fixed />
            <Header className="" />
            <hr className="" />

            <Main className="" />

            <Table className="" />

            <hr className="" />
            <Footer className="" />
        </Page>
    )
}

export default PDF

const styles = StyleSheet.create({
    page: {
        backgroundColor: '#ffffff',
        padding: 30,
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
    },
    pageNumber: {
        color: 'grey',
        position: 'absolute',
        fontSize: 12,
        bottom: 30,
        left: 0,
        right: 0,
        textAlign: 'center',
        fontFamily: 'Lato Bold',
    },
})
