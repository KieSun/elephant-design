import React from 'react'
import { mount, render } from 'enzyme'
import Skeleton from '../index'

describe('Skeleton', () => {
  it('the element when has not props', () => {
    const wrapper = mount(<Skeleton />)

    expect(wrapper.find('.eleph-skeleton').length).toBe(1)
    expect(wrapper.find('.eleph-skeleton__avatar').length).toBe(1)
    expect(wrapper.find('.eleph-skeleton__avatar--circle').length).toBe(1)
    expect(wrapper.find('.eleph-skeleton__title').length).toBe(1)
    expect(wrapper.find('.eleph-skeleton__paragraph > div').length).toBe(3)
  })

  it('affect the element when set props', () => {
    const wrapper = mount(
      <Skeleton
        animation={false}
        avatar={false}
        paragraph={false}
        title={false}
      >
        <div className="skeleton-children">loading completed</div>
      </Skeleton>
    )

    expect(wrapper.find('.eleph-skeleton').length).toBe(1)
    expect(wrapper.find('.eleph-skeleton__avatar').length).toBe(0)
    expect(wrapper.find('.eleph-skeleton__title').length).toBe(0)
    expect(wrapper.find('.eleph-skeleton__paragraph > div').length).toBe(0)
    expect(wrapper.find('.skeleton-children').length).toBe(0)

    const customRowsWrapper = mount(
      <Skeleton paragraph={{ rows: 4 }} avatar={{ shape: 'square' }} />
    )
    expect(
      customRowsWrapper.find('.eleph-skeleton__avatar--circle').length
    ).toBe(0)
    expect(
      customRowsWrapper.find('.eleph-skeleton__paragraph > div').length
    ).toBe(4)

    const customLastRowWidthWrapper1 = mount(
      <Skeleton paragraph={{ width: '200px' }} />
    )
    const customRowStyle1 = customLastRowWidthWrapper1
      .find('.eleph-skeleton__paragraph > div')
      .last()
      .prop('style')
    expect(customRowStyle1.width).toBe('200px')

    const customLastRowWidthWrapper2 = mount(
      <Skeleton paragraph={{ width: 200 }} />
    )
    const customRowStyle2 = customLastRowWidthWrapper2
      .find('.eleph-skeleton__paragraph > div')
      .last()
      .prop('style')
    expect(customRowStyle2.width).toBe('200px')

    const customWidthWrapper = mount(
      <Skeleton
        paragraph={{ width: ['400px', undefined, 200] }}
        title="100px"
      />
    )
    const titleStyle = customWidthWrapper
      .find('.eleph-skeleton__title')
      .prop('style')
    expect(titleStyle.width).toBe('100px')
    const firstRowStyle = customWidthWrapper
      .find('.eleph-skeleton__paragraph > div')
      .first()
      .prop('style')
    const lastRowStyle = customWidthWrapper
      .find('.eleph-skeleton__paragraph > div')
      .last()
      .prop('style')
    expect(firstRowStyle.width).toBe('400px')
    expect(lastRowStyle.width).toBe('200px')

    const showChildrenWrapper = mount(
      <Skeleton loading={false}>
        <div className="skeleton-children">loading completed</div>
      </Skeleton>
    )
    expect(showChildrenWrapper.find('.eleph-skeleton').length).toBe(0)
    expect(showChildrenWrapper.find('.skeleton-children').length).toBe(1)
  })

  it("should render skeleton when it's loading", () => {
    const wrapper = render(
      <Skeleton>
        <div className="skeleton-children">loading completed</div>
      </Skeleton>
    )
    expect(wrapper).toMatchSnapshot('is-loading')
  })

  it("should render children when it's not loading", () => {
    const wrapper = render(
      <Skeleton loading={false}>
        <div className="skeleton-children">loading completed</div>
      </Skeleton>
    )
    expect(wrapper).toMatchSnapshot('not-loading')
  })
})
