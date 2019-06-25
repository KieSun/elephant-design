import React from 'react'
import { mount, render } from 'enzyme'
import Tag from '../index'

describe('Tag', () => {
  it('the element when has not props', () => {
    const cleanWrapper = mount(<Tag />)

    expect(cleanWrapper.find('.eleph-tag').length).toBe(1)
    expect(cleanWrapper.find('.eleph-tag').text()).toBe('')
    expect(cleanWrapper.find('.eleph-tag--medium').length).toBe(1)
    expect(cleanWrapper.find('.eleph-tag--round').length).toBe(0)
  })

  it('affect the element when set props', () => {
    const wrapper = mount(
      <Tag size="large" color="purple" round>
        text
      </Tag>
    )

    expect(wrapper.find('.eleph-tag--round').length).toBe(1)
    expect(wrapper.find('.eleph-tag--large').length).toBe(1)
    expect(wrapper.find('.eleph-tag--purple').length).toBe(1)
    expect(wrapper.find('.eleph-tag').text()).toBe('text')
  })

  it('the element with event', () => {
    let clickCount = 0
    const onClick = () => {
      clickCount += 1
    }
    const wrapper = mount(<Tag onClick={onClick}>text</Tag>)
    wrapper.simulate('click')
    expect(clickCount).toBe(1)
    wrapper.simulate('keyDown', { keyCode: 32 })
    expect(clickCount).toBe(2)
    wrapper.simulate('keyDown', { keyCode: 33 })
    expect(clickCount).toBe(2)
  })

  it('render a large purple tag', () => {
    const wrapper = render(
      <Tag size="large" color="purple" round>
        text
      </Tag>
    )
    expect(wrapper).toMatchSnapshot()
  })
})
