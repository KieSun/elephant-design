import classNames from 'classnames'
import { bem } from '../index'
import { formatSize } from '../style'

test('className', () => {
  const b = bem('loading')
  expect(classNames(b('text'))).toEqual('eleph-loading__text')
  expect(classNames(b(['disable']))).toEqual(
    'eleph-loading eleph-loading--disable'
  )
  expect(classNames(b('text', { disable: true }))).toEqual(
    'eleph-loading__text eleph-loading__text--disable'
  )
})

test('formatSize', () => {
  expect(formatSize(20)).toEqual('20px')
  expect(formatSize('20px')).toEqual('20px')
})
