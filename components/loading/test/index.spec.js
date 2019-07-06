import React from 'react'
import { mount, render } from 'enzyme'
import Loading from '../index'

describe('Loading', () => {
  it('affect the element when set props', () => {
    const wrapper = mount(
      <Loading text="Loading" indicatorColor="red" vertical size={20} />
    )
    const indicatorStyle = wrapper
      .find('.eleph-loading__indicator')
      .prop('style')
    expect(wrapper.find('.eleph-loading__text').text()).toBe('Loading')
    expect(indicatorStyle.borderColor).toBe('red')
    expect(indicatorStyle.width).toBe('20px')
  })

  it('should set the width props by number or string type', function() {
    const wrapper = mount(<Loading size="20px" />)
    const indicatorStyle = wrapper
      .find('.eleph-loading__indicator')
      .prop('style')
    expect(indicatorStyle.width).toBe('20px')
  })

  it("should render custom indicator when it's set", () => {
    const customIndicator = <div className="custom-indicator" />
    const wrapper = render(
      <Loading indicator={customIndicator} text="Loading" />
    )
    expect(wrapper).toMatchSnapshot()
  })
})
