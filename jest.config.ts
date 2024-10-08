export default {
  preset: 'ts-jest',
  testEnvironment: 'jsdom',
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx'],
  transform: {
    '^.+\\.(ts|tsx)$': 'ts-jest',
  },
  testMatch: ['**/?(*.)+(spec|test).[tj]s?(x)'],
  setupFilesAfterEnv: ['./jest.setup.ts'],
  collectCoverage: true,  // Enable coverage collection
  collectCoverageFrom: [
    'src/**/*.{ts,tsx}',   // Specify where to collect coverage from
    '!src/**/*.d.ts',      // Ignore type definition files
  ],
  coverageReporters: ['text', 'lcov'],  // Coverage report formats
  coverageDirectory: 'coverage',
  coverageThreshold: { // optional
    global: {
      branches: 80,
      functions: 80,
      lines: 80,
      statements: 80,
    },
  },
};
