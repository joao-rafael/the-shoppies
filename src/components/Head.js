import React from 'react';
import { Helmet } from 'react-helmet';

const Head = () => (
    <Helmet>
        <meta charSet="utf-8"/>
        <meta http-equiv="Content-Language" content="en"/>
        <title>The Shoppies</title>
        <link rel="canonical" href="https://the-shoppies-challenge.netlify.app/" />
    </Helmet>
);

export default Head;