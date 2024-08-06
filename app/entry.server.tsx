import { RemixServer } from '@remix-run/react';
import type { EntryContext } from '@remix-run/node';
import { renderToReadableStream } from 'react-dom/server';

export default async function handleRequest(
  request: Request,
  responseStatusCode: number,
  responseHeaders: Headers,
  remixContext: EntryContext
) {
  console.log('handleRequest called with:', {
    url: request.url,
    method: request.method,
    responseStatusCode,
    responseHeaders,
  });

  try {
    // Log the rendering start
    console.log('Starting to render the readable stream...');

    const body = await renderToReadableStream(
      <RemixServer context={remixContext} url={request.url} />,
      { signal: request.signal }
    );

    // Log successful rendering
    console.log('Successfully rendered to readable stream.');

    responseHeaders.set('Content-Type', 'text/html');

    return new Response(body, {
      headers: responseHeaders,
      status: responseStatusCode,
    });
  } catch (error) {
    // Log error details
    console.error('Error rendering to readable stream:', error);

    return new Response('<h1>Internal Server Error</h1>', {
      headers: { 'Content-Type': 'text/html' },
      status: 500,
    });
  }
}
