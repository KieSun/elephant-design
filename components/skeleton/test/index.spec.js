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

    const fourRowsWrapper = mount(
      <Skeleton paragraph={{ rows: 4 }} avatar={{ shape: 'square' }} />
    )
    expect(wrapper.find('.eleph-skeleton__avatar--circle').length).toBe(0)
    expect(
      fourRowsWrapper.find('.eleph-skeleton__paragraph > div').length
    ).toBe(4)

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
