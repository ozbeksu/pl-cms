import express from 'express';
import payload from 'payload';

// import {Tenant} from 'payload/generated-types';

require('dotenv').config();
const app = express();

// Redirect root to Admin panel
app.get('/', (_, res) => {
  res.redirect('/admin');
});

const start = async () => {
  // Initialize Payload
  await payload.init({
    secret: process.env.PAYLOAD_SECRET,
    mongoURL: process.env.MONGODB_URI,
    express: app,
    onInit: async () => {
      payload.logger.info(`Payload Admin URL: ${payload.getAdminURL()}`);
      // const tenant: Tenant = await payload.create({
      //   collection: 'tenants',
      //   data: {
      //     parent: null,
      //     name: 'Acme Corp.',
      //     slug: 'acme-corp',
      //     domains: [{domain: 'acme-corp.com'}],
      //   },
      // });
      //
      // await payload.create({
      //   collection: 'users',
      //   data: {
      //     email: 'admin@acme-corp.com',
      //     password: 'secret',
      //     tenant: tenant.id,
      //     roles: ['editor', 'manager', 'admin', 'master'],
      //   },
      // });
    },
  });

  // Add your own express routes here

  app.listen(3000);
};

start().catch(err => console.error(err));
