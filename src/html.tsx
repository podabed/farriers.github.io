import * as React from 'react';

import { IHTML } from './interfaces';

const HTML = (props: IHTML): React.ReactElement => {
  const {
    body,
    bodyAttributes,
    headComponents,
    htmlAttributes,
    postBodyComponents,
    preBodyComponents,
  } = props;

  return (
    // tslint:disable-next-line: react-a11y-lang
    <html {...htmlAttributes}>
      <head>
        {headComponents}
        <meta content={'width=device-width, initial-scale=1, shrink-to-fit=no'} name={'viewport'} />
      </head>
      <body {...bodyAttributes}>
        {preBodyComponents}
        <noscript id={'gatsby-noscript'} key={'noscript'}>
          This app works best with JavaScript enabled.
        </noscript>
        <div dangerouslySetInnerHTML={{ __html: body }} id={'___gatsby'} key={'body'} />
        {postBodyComponents}
      </body>
    </html>
  );
};

export default HTML;
