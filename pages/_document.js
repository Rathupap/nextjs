import Document, { Head, Main, NextScript } from 'next/document';

class MyDocument extends Document {

    render(){
        return (
            <html lang="en">
                <Head>
                    <meta name="description" content="Portfolio App for programming dev" />
                    <meta charSet="utf-8" />
                    <meta name="robots" content="noindex, nofollow" />
                    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
                    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/nprogress/0.2.0/nprogress.min.css"/>
                </Head>
                <body>
                    <Main />
                    <NextScript />
                </body>
            </html>
        )
    }

}

export default MyDocument;