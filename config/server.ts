export default ({ env }) => ({
  host: env('HOST', '0.0.0.0'), // Listen on all network interfaces
  port: env.int('PORT', 1337),   // Default port 1337
  app: {
    keys: env.array('APP_KEYS'),
  },
  url: env('SERVER_URL', 'https://portfolio-backend-311n.onrender.com'), // Add this line to set your public URL
});
