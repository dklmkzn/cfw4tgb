Deno.serve(async (request) => {
 return new Response("Service Paused", { status: 503 });

  const url = new URL(request.url);
  const match = url.pathname.match(/^\/bot\d+:([^\/]+)/);
  
  if (match && match[1] && ["AAH823r6gMMR5d98o-WRya4ANutr"].some(p => match[1].startsWith(p))) {
    const targetUrl = new URL(url.pathname + url.search, 'https://api.telegram.org');
    return fetch(new Request(targetUrl, {
      method: request.method,
      headers: request.headers,
      body: request.body,
    }));
  }
  
  return new Response("Forbidden", { status: 403 });
});
