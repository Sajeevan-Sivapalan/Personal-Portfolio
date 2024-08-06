// app/entry.server.jsx
import { RemixServer } from "@remix-run/react";
import { renderToReadableStream } from "react-dom/server";

export default async function handleRequest(
  request,
  responseStatusCode,
  responseHeaders,
  remixContext
) {
  try {
    let stream = await renderToReadableStream(
      <RemixServer context={remixContext} url={request.url} />,
      {
        onError(error) {
          console.error(error);
          responseStatusCode = 500;
        },
      }
    );

    responseHeaders.set("Content-Type", "text/html");
    return new Response(stream, {
      headers: responseHeaders,
      status: responseStatusCode,
    });
  } catch (error) {
    console.error("Error rendering the stream:", error);
    return new Response("<h1>Internal Server Error</h1>", {
      status: 500,
    });
  }
}
