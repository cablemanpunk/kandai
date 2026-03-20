import { defineStudioCMSConfig } from 'studiocms/config';

export default defineStudioCMSConfig({
  dbStartPage: true,
  db: {
    dialect: "libsql"
  },
  verbose: true,
  logLevel: "Info"
});
