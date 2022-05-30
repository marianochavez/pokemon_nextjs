import Document, { Html, Head, Main, NextScript, DocumentContext, DocumentInitialProps } from 'next/document';
import { CssBaseline } from '@nextui-org/react';
import { ReactElement } from 'react';


class MyDocument extends Document{
  static async getInitialProps(ctx:DocumentContext) : Promise<any> {
    const initialProps = await Document.getInitialProps(ctx);

    return {
      ...initialProps,
      styles: <>{initialProps.styles}</>
    };
  }

  render(): ReactElement {
    return (
      <Html lang="en">
        <Head>{CssBaseline.flush()}</Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;