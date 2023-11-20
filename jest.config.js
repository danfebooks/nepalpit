/** @type {import('ts-jest').JestConfigWithTsJest} */
/**
 * For a detailed explanation regarding each configuration property, visit:
 * https://jestjs.io/docs/configuration
 */

const config = {
  // An array of file extensions your modules use
  moduleFileExtensions: [
    "js",
    "mjs",
    "cjs",
    "jsx",
    "ts",
    "tsx",
    "json",
    "node"
  ],

  // A preset that is used as a base for Jest's configuration
  preset: 'ts-jest',

  // A list of paths to directories that Jest should use to search for files in
  roots: [
    "<rootDir>"
  ],

  // The test environment that will be used for testing
  testEnvironment: "node",

  // The glob patterns Jest uses to detect test files
  testMatch: [
    "**/tests/**/*.[jt]s?(x)",
    "**/?(*.)+(spec|test).[tj]s?(x)"
  ],

  // A map from regular expressions to paths to transformers
  transform: {
    '^.+\\.[tj]sx?$': [
      'ts-jest',
      {
        // ts-jest configuration goes here
      },
    ],
  },
};

module.exports = config;
