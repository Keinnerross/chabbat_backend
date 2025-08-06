export default ({ env }) => ({
  host: env('HOST', '0.0.0.0'),
  port: env.int('PORT', 1439),
  app: {
    keys: env.array('APP_KEYS'),
  },
  // Optimizaciones para desarrollo
  webhooks: {
    populateRelations: env.bool('WEBHOOKS_POPULATE_RELATIONS', false),
  },
  settings: {
    cors: {
      enabled: true,
      origin: ['http://localhost:3000', 'http://localhost:3001', 'http://localhost:5173', 'https://212.85.22.57', 'https://212.85.22.57/chabbat', 'https://212.85.22.57/chabbat_city'],
    },
  },
  url: env('PUBLIC_URL', 'https://212.85.22.57/chabbat_city'),
});
