import { defineConfig } from './index';
export default defineConfig({
  jwt: {
    secret: 'topSecret51',
    signOptions: { expiresIn: '5m' }, // e.g. 30s, 7d, 24h
  },
});
