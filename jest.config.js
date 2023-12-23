const nextJest = require("next/jest.js");

/**
 * @typedef {import("jest").Config} JestConfig
 */

/**
 * Creates Jest configuration for Next.js app.
 *
 * @param {Object} options - Options for configuring Jest for Next.js.
 * @param {string} options.dir - The path to the Next.js app to load next.config.js and .env files in the test environment.
 * @returns {JestConfig} Jest configuration object.
 */
const createJestConfig = nextJest({
  dir: "./",
});

/**
 * Jest configuration object.
 *
 * @type {JestConfig}
 */
const config = {
  coverageProvider: "v8",
  testEnvironment: "jsdom",
  setupFilesAfterEnv: ["<rootDir>/jest.setup.ts"],
  preset: "ts-jest",
};

// Exporting createJestConfig to ensure next/jest can load the Next.js config which is async
module.exports = createJestConfig(config);
