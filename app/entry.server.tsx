import { RemixServer } from '@remix-run/react';
import { EntryContext } from '@remix-run/node';
import pkg from 'react-dom/server';
const { renderToReadableStream } = pkg;

export default async function handleRequest(
  request: Request,
  responseStatusCode: number,
  responseHeaders: Headers,
  remixContext: EntryContext
) {
  // Use renderToReadableStream to generate a readable stream of the HTML
  const body = await renderToReadableStream(
    <RemixServer context={remixContext} url={request.url} />,
    { signal: request.signal }
  );

  responseHeaders.set('Content-Type', 'text/html');

  return new Response(body, {
    headers: responseHeaders,
    status: responseStatusCode,
  });
}
