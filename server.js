const express = require('express');
const next = require('next');
const ngrok = require('@ngrok/ngrok');

const dev = process.env.NODE_ENV !== 'production';
const app = next({ dev });
const handle = app.getRequestHandler();

app.prepare().then(() => {
  const server = express();

  // Define your custom routes here

  // Default catch-all handler to allow Next.js to handle all other routes
  server.all('*', (req, res) => {
    return handle(req, res);
  });

  const port = process.env.PORT || 3000;
  server.listen(port, async (err) => {
    if (err) throw err;
    console.log(`> Ready on http://localhost:${port}`);

    // Start ngrok when the server starts
    try {
      const url = await ngrok.connect({
        addr: port,
        authtoken: process.env.NGROK_AUTHTOKEN, // Ensure you've set your ngrok authtoken in environment variables
      });
      console.log(`> ngrok tunnel established at ${url}`);
    } catch (error) {
      console.error('Error starting ngrok:', error);
    }
  });
});
