export default {
	coveragePathIgnorePatterns: [
		'<rootDir>/.jest',
		'<rootDir>/test/doubles',
		'<rootDir>/test/fixtures',
	],
	coverageReporters: ['clover', 'text'],
	coverageThreshold: {
		global: {
			branches: 90,
			functions: 90,
			lines: 90,
			statements: 90,
		},
	},
	moduleNameMapper: {
		'@app/(.*)': '<rootDir>/src/$1',
		'@dist/(.*)': '<rootDir>/dist/$1',
		'@test/(.*)': '<rootDir>/test/$1',
	},
	preset: 'ts-jest',
	setupFilesAfterEnv: ['<rootDir>/.jest/setupPaths.ts', '<rootDir>/.jest/setupFunctions.ts'],
	testEnvironment: 'node',
	testPathIgnorePatterns: ['<rootDir>/node_modules/'],
	transform: {
		'^.+.tsx?$': ['ts-jest', {}],
	},
};
