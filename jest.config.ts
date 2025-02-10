export default {
    preset: 'ts-jest',
    testEnvironment: 'node',
    verbose: true,
    testMatch: ['**/tests/**/*.test.ts'],
    setupFiles: ['dotenv/config']
  };
  