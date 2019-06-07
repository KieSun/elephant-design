module.exports = {
  transform: {
    '.(ts|tsx)': 'ts-jest'
  },
  testEnvironment: 'jsdom',
  testRegex: '/tests/.*\\.(test|spec)\\.(ts|tsx|js)$',
  moduleFileExtensions: ['ts', 'tsx', 'js'],
  coveragePathIgnorePatterns: ['/node_modules/', '/test/'],
  collectCoverageFrom: ['components/*.{js,ts}', 'components/**/*.{js,ts}'],
  collectCoverage: true
}
