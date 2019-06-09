const transformIgnorePatterns = [
  '/dist/',
  'node_modules/[^/]+?/(?!(es|node_modules)/)' // Ignore modules without es dir
]

module.exports = {
  transform: {
    '.(ts|tsx)': 'ts-jest'
  },
  testEnvironment: 'jsdom',
  moduleFileExtensions: ['ts', 'tsx', 'js'],
  collectCoverageFrom: ['components/**/.{ts,tsx}'],
  collectCoverage: true,
  transformIgnorePatterns
}
