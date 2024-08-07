import { RemixServer } from '@remix-run/react';
import { EntryContext } from '@remix-run/node';
import pkg from 'react-dom/server.browser';

const { renderToReadableStream } = pkg;

export default async function handleRequest(
  request: Request,
  responseStatusCode: number,
  responseHeaders: Headers,
  remixContext: EntryContext
) {
  try {
    const body = await renderToReadableStream(
      <RemixServer context={remixContext} url={request.url} />,
      {
        signal: request.signal,
        onError(error) {
          console.error('Rendering error:', error);
          responseStatusCode = 500;
        }
      }
    );

    responseHeaders.set('Content-Type', 'text/html');

    return new Response(body, {
      headers: responseHeaders,
      status: responseStatusCode,
    });
  } catch (error) {
    console.error('Error during rendering:', error);
    console.error("Request:", request);
    console.error("Response Status Code:", responseStatusCode);
    console.error("Response Headers:", responseHeaders);
    console.error("Remix Context:", remixContext);

    return new Response('Internal Server Error', { status: 500 });
  }
}
