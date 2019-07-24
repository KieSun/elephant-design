import React from 'react'
import { mount, render } from 'enzyme'
import Progress from '../index'

describe('Progress', () => {
  it('no props', () => {
    const wrapper = mount(<Progress />)
    expect(wrapper.find('.eleph-progress').length).toBe(1)
    expect(wrapper.find('.eleph-progress__percent').length).toBe(1)
    expect(wrapper.find('.eleph-progress__text').length).toBe(1)
  })

  it('affect the element when set props', function() {
    const wrapper = mount(
      <Progress
        percentage={30}
        showText={false}
        color={'red'}
        style={{ marginTop: '10px' }}
      >
        <span>2</span>
      </Progress>
    )
    expect(wrapper.find('.eleph-progress').prop('style').marginTop).toBe('10px')
    expect(wrapper.find('.eleph-progress__percent').prop('style').width).toBe(
      '30%'
    )
    expect(wrapper.find('.eleph-progress__text').length).toBe(0)

    const textWrapper = mount(
      <Progress
        percentage={30}
        color={'red'}
        text={'text'}
        textColor={'black'}
        textStyle={{ background: 'red' }}
      >
        <span>2</span>
      </Progress>
    )

    expect(
      textWrapper.find('.eleph-progress .eleph-progress__text').length
    ).toBe(1)
    expect(
      textWrapper.find('.eleph-progress .eleph-progress__text').text()
    ).toBe('text')
    expect(
      textWrapper.find('.eleph-progress .eleph-progress__text').prop('style')
        .color
    ).toBe('black')
    expect(
      textWrapper.find('.eleph-progress .eleph-progress__text').prop('style')
        .background
    ).toBe('red')
    expect(textWrapper).toMatchSnapshot()
  })
})
