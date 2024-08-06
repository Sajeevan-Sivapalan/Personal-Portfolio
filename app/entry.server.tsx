import { renderToReadableStream } from 'react-dom/server';
import { RemixServer } from '@remix-run/react';
import { EntryContext } from '@remix-run/node';

export default async function handleRequest(
  request: Request,
  responseStatusCode: number,
  responseHeaders: Headers,
  remixContext: EntryContext
) {
  try {
    // Generate a readable stream of the HTML
    const body = await renderToReadableStream(
      <RemixServer context={remixContext} url={request.url} />,
      {
        signal: request.signal,
        onError(error) {
          console.error('Rendering error:', error);
          responseStatusCode = 500; // Ensure status code reflects error
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
    return new Response('Internal Server Error', { status: 500 });
  }
}
