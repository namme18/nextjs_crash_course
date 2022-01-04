import React from 'react'
import { Typography } from '@mui/material'
import Head from 'next/head'

const about = () => {
    return (
        <div>
            <Head>
                <title>About</title>
            </Head>
            <Typography variant='h1' color='textSecondary'>About</Typography>
        </div>
    )
}

export default about
