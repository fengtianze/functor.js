const { defaults } = require('jest-config')

module.exports = {
  moduleFileExtensions: [...defaults.moduleFileExtensions, 'ts'],
  testRegex: '(/tests/.*|(\\.|/)(test|spec))\\.ts$',
  transform: {
    '^.+\\.ts?$': 'ts-jest',
  },
}
