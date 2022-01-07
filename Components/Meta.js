import Head from "next/head"

const Meta = ({keywords, description, title}) => {
    return (
        <Head>
            <meta name='viewport' content='width=device-width, initail-scale=1' />
            <meta name='keywords' content={keywords} />
            <meta name='description' content={description} />
            <meta charSet='utf-8' />
            <link rel='ico' href='/favico.ico' />
            <title>{title}</title>
        </Head>
    )
}

Meta.defaultProps = {
    title: 'Webdev Newz',
    keywords: 'web development, programming',
    description: 'get the latest news in web dev'
}

export default Meta
