import Document, { Html, Head, Main, NextScript } from 'next/document'
import fetch from "node-fetch";

class MyDocument extends Document {
    static async getInitialProps(ctx) {
        const initialProps = await Document.getInitialProps(ctx);
        const res = await fetch('http://localhost:3000/api/token');
        const json = await res.json();
        return { data: json.data, ...initialProps }
    }

    getToken() {
        const { data } = this.props;
        return `window.token=${JSON.stringify(data)}`;
    };

    render() {
        const script = this.getToken();
        return (
            <Html>
                <Head>
                    <script src="https://code.jquery.com/jquery-3.4.1.min.js" type="text/javascript" />
                    <script src="https://app-rsrc.getbee.io/plugin/BeePlugin.js" type="text/javascript" />
                    <script dangerouslySetInnerHTML={{__html: script}}/>
                </Head>
                <body>
                    <Main />
                    <NextScript />
                </body>
            </Html>
        )
    }
}

export default MyDocument