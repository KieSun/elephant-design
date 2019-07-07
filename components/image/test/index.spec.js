import React from 'react'
import { shallow, mount } from 'enzyme'
import Image from '../index'

describe('Image', () => {
  const disconnect = jest.fn()
  const observe = jest.fn()
  const imgSrc =
    'http://www.tianya999.com/uploads/allimg/190423/2313-1Z423140328.gif'
  const errorImgSrc = 'http://xx.png'
  beforeAll(() => {
    window.IntersectionObserver = jest.fn(function() {
      this.observe = observe
      this.disconnect = disconnect
    })
  })
  it('set src and other normal params', () => {
    // set  correct src
    const props = {
      src: imgSrc,
      onClick: jest.fn(),
      onLoadSuccess: jest.fn(),
      onLoadError: jest.fn()
    }
    const wrapper = mount(<Image {...props} />)
    expect(wrapper.find('.eleph-image__loading')).not.toBeNull()
    expect(wrapper.find('.eleph-image__image').prop('src')).toEqual(props.src)
    wrapper.find('.eleph-image__image').simulate('load')
    expect(props.onLoadSuccess).toHaveBeenCalled()
    wrapper.find('.eleph-image__image').simulate('click')
    expect(props.onClick).toHaveBeenCalled()

    // set error src:
    expect(
      wrapper
        .setProps({
          ...props,
          src: null
        })
        .find('.eleph-image__error')
    ).not.toBeNull()
    wrapper.find('.eleph-image__image').simulate('error')
    expect(props.onLoadError).toHaveBeenCalled()
  })

  it('set loading property and error property', () => {
    const props = {
      src: errorImgSrc,
      loading: <p className="error_tem">loading</p>,
      error: <p className="loading_tem">error</p>
    }
    const wrapper = shallow(<Image {...props} />)
    expect(wrapper.find('.error_tem')).not.toBeNull()
    expect(wrapper.find('.loading_tem')).not.toBeNull()
  })
  it('test attempt when image error', () => {
    const props = {
      src: errorImgSrc,
      alt: 'xxx',
      onLoadError: jest.fn(),
      attempt: 3
    }
    const wrapper = mount(<Image {...props} />)
    wrapper.find('.eleph-image__image').simulate('error')
    expect(props.onLoadError).not.toHaveBeenCalled()
    wrapper.find('.eleph-image__image').simulate('error')
    wrapper.find('.eleph-image__image').simulate('error')
    expect(props.onLoadError).toHaveBeenCalled()
  })
  it('set isLazyLoad property', () => {
    // 先测试在懒加载下运行了observe和disconnect方法
    const props = {
      src: imgSrc,
      alt: 'xxx',
      isLazyLoad: true
    }
    const wrapper = mount(<Image {...props} />)

    // mount时候打开对图片的监听
    expect(observe).toHaveBeenCalled()
    // 当图片不在窗口内
    const target = {
      addEventListener: () => {},
      src: null,
      removeEventListener: () => {}
    }
    const param = { intersectionRatio: 0, target }
    window.IntersectionObserver.mock.calls[0][0]([param])
    expect(wrapper.find('.eleph-image__image').prop('src')).toBeUndefined()

    // 当图片在窗口内
    window.IntersectionObserver.mock.calls[0][0]([
      { ...param, intersectionRatio: 1 }
    ])
    expect(target.src).toEqual(props.src)
    // 测试销毁时候关闭监听
    wrapper.unmount()
    expect(disconnect).toHaveBeenCalled()
  })
  it('not set onLoadSuccess , onLoadError,onClick', () => {
    // set  correct src
    const props = {
      src: imgSrc
    }
    const wrapper = shallow(<Image {...props} />)
    wrapper.find('.eleph-image__image').simulate('load')
    wrapper.setProps({
      ...props,
      src: ''
    })
    wrapper.find('.eleph-image__image').simulate('error')
    expect(wrapper).toMatchSnapshot()
  })
})
