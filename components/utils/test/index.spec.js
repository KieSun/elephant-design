import classNames from 'classnames'
import { bem } from '../index'

test('className', () => {
  const b = bem('loading')
  expect(classNames(b('text'))).toEqual('eleph-loading__text')
  expect(classNames(b('text', { disable: true }))).toEqual(
    'eleph-loading__text eleph-loading__text--disable'
  )
})
