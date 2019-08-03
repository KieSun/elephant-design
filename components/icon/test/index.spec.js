import { mount } from 'enzyme'
import React from 'react'
import Check from '../check'
import LeftArrow from '../leftArrow'
import UpArrow from '../upArrow'
import RightArrow from '../rightArrow'
import DownArrow from '../downArrow'
import CheckCircle from '../checkCircle'
import CheckCircleOutline from '../checkCircleOutline'
import Close from '../close'
import CloseCircle from '../closeCircle'
import CloseCircleOutline from '../closeCircleOutline'
import More from '../more'

describe('LeftArrow', () => {
  it('the element when has not props', () => {
    const wrapper = mount(<LeftArrow />)
    const style = wrapper.find('.eleph-icon').prop('style')
    expect(style).toStrictEqual({ height: '2rem', width: '2rem' })
  })
  it('affect the element when set props', () => {
    class Wrapper extends React.Component {
      state = {
        style: {},
        color: '',
        size: 0
      }

      handleClick = () => {
        this.setState({
          style: { margin: '10px' },
          color: 'red',
          size: 20
        })
      }

      render() {
        const { style, color, size } = this.state
        return (
          <LeftArrow
            color={color}
            size={size}
            style={style}
            onClick={this.handleClick}
          />
        )
      }
    }
    const wrapper = mount(<Wrapper />)
    wrapper.simulate('click')
    const style = wrapper.find('.eleph-icon').prop('style')
    expect(style.color).toBe('red')
    expect(style.width).toBe('20px')
    expect(style.margin).toBe('10px')
    expect(wrapper).toMatchSnapshot()
  })
})
describe('UpArrow', () => {
  it('the element when has not props', () => {
    const wrapper = mount(<UpArrow />)
    const style = wrapper.find('.eleph-icon').prop('style')
    expect(style).toStrictEqual({ height: '2rem', width: '2rem' })
  })
  it('affect the element when set props', () => {
    // eslint-disable-next-line react/no-multi-comp
    class Wrapper extends React.Component {
      state = {
        style: {},
        color: '',
        size: 0
      }

      handleClick = () => {
        this.setState({
          style: { margin: '10px' },
          color: 'red',
          size: 20
        })
      }

      render() {
        const { style, color, size } = this.state
        return (
          <UpArrow
            color={color}
            size={size}
            style={style}
            onClick={this.handleClick}
          />
        )
      }
    }
    const wrapper = mount(<Wrapper />)
    wrapper.simulate('click')
    const style = wrapper.find('.eleph-icon').prop('style')

    expect(style.color).toBe('red')
    expect(style.width).toBe('20px')
    expect(style.margin).toBe('10px')
    expect(wrapper).toMatchSnapshot()
  })
})
describe('RightArrow', () => {
  it('the element when has not props', () => {
    const wrapper = mount(<RightArrow />)
    const style = wrapper.find('.eleph-icon').prop('style')
    expect(style).toStrictEqual({ height: '2rem', width: '2rem' })
  })
  it('affect the element when set props', () => {
    // eslint-disable-next-line react/no-multi-comp
    class Wrapper extends React.Component {
      state = {
        style: {},
        color: '',
        size: 0
      }

      handleClick = () => {
        this.setState({
          style: { margin: '10px' },
          color: 'red',
          size: 20
        })
      }

      render() {
        const { style, color, size } = this.state
        return (
          <RightArrow
            color={color}
            size={size}
            style={style}
            onClick={this.handleClick}
          />
        )
      }
    }
    const wrapper = mount(<Wrapper />)
    wrapper.simulate('click')
    const style = wrapper.find('.eleph-icon').prop('style')

    expect(style.color).toBe('red')
    expect(style.width).toBe('20px')
    expect(style.margin).toBe('10px')
    expect(wrapper).toMatchSnapshot()
  })
})
describe('DownArrow', () => {
  it('the element when has not props', () => {
    const wrapper = mount(<DownArrow />)
    const style = wrapper.find('.eleph-icon').prop('style')
    expect(style).toStrictEqual({ height: '2rem', width: '2rem' })
  })
  it('affect the element when set props', () => {
    // eslint-disable-next-line react/no-multi-comp
    class Wrapper extends React.Component {
      state = {
        style: {},
        color: '',
        size: 0
      }

      handleClick = () => {
        this.setState({
          style: { margin: '10px' },
          color: 'red',
          size: 20
        })
      }

      render() {
        const { style, color, size } = this.state
        return (
          <DownArrow
            color={color}
            size={size}
            style={style}
            onClick={this.handleClick}
          />
        )
      }
    }
    const wrapper = mount(<Wrapper />)
    wrapper.simulate('click')
    const style = wrapper.find('.eleph-icon').prop('style')

    expect(style.color).toBe('red')
    expect(style.width).toBe('20px')
    expect(style.margin).toBe('10px')
    expect(wrapper).toMatchSnapshot()
  })
})
describe('Check', () => {
  it('the element when has not props', () => {
    const wrapper = mount(<Check />)
    const style = wrapper.find('.eleph-icon').prop('style')
    expect(style).toStrictEqual({ height: '2rem', width: '2rem' })
  })
  it('affect the element when set props', () => {
    // eslint-disable-next-line react/no-multi-comp
    class Wrapper extends React.Component {
      state = {
        style: {},
        color: '',
        size: 0
      }

      handleClick = () => {
        this.setState({
          style: { margin: '10px' },
          color: 'red',
          size: 20
        })
      }

      render() {
        const { style, color, size } = this.state
        return (
          <Check
            color={color}
            size={size}
            style={style}
            onClick={this.handleClick}
          />
        )
      }
    }
    const wrapper = mount(<Wrapper />)
    wrapper.simulate('click')
    const style = wrapper.find('.eleph-icon').prop('style')

    expect(style.color).toBe('red')
    expect(style.width).toBe('20px')
    expect(style.margin).toBe('10px')
    expect(wrapper).toMatchSnapshot()
  })
})
describe('CheckCircle', () => {
  it('the element when has not props', () => {
    const wrapper = mount(<CheckCircle />)
    const style = wrapper.find('.eleph-icon').prop('style')
    expect(style).toStrictEqual({ height: '2rem', width: '2rem' })
  })
  it('affect the element when set props', () => {
    // eslint-disable-next-line react/no-multi-comp
    class Wrapper extends React.Component {
      state = {
        style: {},
        color: '',
        size: 0
      }

      handleClick = () => {
        this.setState({
          style: { margin: '10px' },
          color: 'red',
          size: 20
        })
      }

      render() {
        const { style, color, size } = this.state
        return (
          <CheckCircle
            color={color}
            size={size}
            style={style}
            onClick={this.handleClick}
          />
        )
      }
    }
    const wrapper = mount(<Wrapper />)
    wrapper.simulate('click')
    const style = wrapper.find('.eleph-icon').prop('style')

    expect(style.color).toBe('red')
    expect(style.width).toBe('20px')
    expect(style.margin).toBe('10px')
    expect(wrapper).toMatchSnapshot()
  })
})
describe('CheckCircleOutline', () => {
  it('the element when has not props', () => {
    const wrapper = mount(<CheckCircleOutline />)
    const style = wrapper.find('.eleph-icon').prop('style')
    expect(style).toStrictEqual({ height: '2rem', width: '2rem' })
  })
  it('affect the element when set props', () => {
    // eslint-disable-next-line react/no-multi-comp
    class Wrapper extends React.Component {
      state = {
        style: {},
        color: '',
        size: 0
      }

      handleClick = () => {
        this.setState({
          style: { margin: '10px' },
          color: 'red',
          size: 20
        })
      }

      render() {
        const { style, color, size } = this.state
        return (
          <CheckCircleOutline
            color={color}
            size={size}
            style={style}
            onClick={this.handleClick}
          />
        )
      }
    }
    const wrapper = mount(<Wrapper />)
    wrapper.simulate('click')
    const style = wrapper.find('.eleph-icon').prop('style')

    expect(style.color).toBe('red')
    expect(style.width).toBe('20px')
    expect(style.margin).toBe('10px')
    expect(wrapper).toMatchSnapshot()
  })
})
describe('Close', () => {
  it('the element when has not props', () => {
    const wrapper = mount(<Close />)
    const style = wrapper.find('.eleph-icon').prop('style')
    expect(style).toStrictEqual({ height: '2rem', width: '2rem' })
  })
  it('affect the element when set props', () => {
    // eslint-disable-next-line react/no-multi-comp
    class Wrapper extends React.Component {
      state = {
        style: {},
        color: '',
        size: 0
      }

      handleClick = () => {
        this.setState({
          style: { margin: '10px' },
          color: 'red',
          size: 20
        })
      }

      render() {
        const { style, color, size } = this.state
        return (
          <Close
            color={color}
            size={size}
            style={style}
            onClick={this.handleClick}
          />
        )
      }
    }
    const wrapper = mount(<Wrapper />)
    wrapper.simulate('click')
    const style = wrapper.find('.eleph-icon').prop('style')

    expect(style.color).toBe('red')
    expect(style.width).toBe('20px')
    expect(style.margin).toBe('10px')
    expect(wrapper).toMatchSnapshot()
  })
})
describe('CloseCircle', () => {
  it('the element when has not props', () => {
    const wrapper = mount(<CloseCircle />)
    const style = wrapper.find('.eleph-icon').prop('style')
    expect(style).toStrictEqual({ height: '2rem', width: '2rem' })
  })
  it('affect the element when set props', () => {
    // eslint-disable-next-line react/no-multi-comp
    class Wrapper extends React.Component {
      state = {
        style: {},
        color: '',
        size: 0
      }

      handleClick = () => {
        this.setState({
          style: { margin: '10px' },
          color: 'red',
          size: 20
        })
      }

      render() {
        const { style, color, size } = this.state
        return (
          <CloseCircle
            color={color}
            size={size}
            style={style}
            onClick={this.handleClick}
          />
        )
      }
    }
    const wrapper = mount(<Wrapper />)
    wrapper.simulate('click')
    const style = wrapper.find('.eleph-icon').prop('style')

    expect(style.color).toBe('red')
    expect(style.width).toBe('20px')
    expect(style.margin).toBe('10px')
    expect(wrapper).toMatchSnapshot()
  })
})
describe('CloseCircleOutline', () => {
  it('the element when has not props', () => {
    const wrapper = mount(<CloseCircleOutline />)
    const style = wrapper.find('.eleph-icon').prop('style')
    expect(style).toStrictEqual({ height: '2rem', width: '2rem' })
  })
  it('affect the element when set props', () => {
    // eslint-disable-next-line react/no-multi-comp
    class Wrapper extends React.Component {
      state = {
        style: {},
        color: '',
        size: 0
      }

      handleClick = () => {
        this.setState({
          style: { margin: '10px' },
          color: 'red',
          size: 20
        })
      }

      render() {
        const { style, color, size } = this.state
        return (
          <CloseCircleOutline
            color={color}
            size={size}
            style={style}
            onClick={this.handleClick}
          />
        )
      }
    }
    const wrapper = mount(<Wrapper />)
    wrapper.simulate('click')
    const style = wrapper.find('.eleph-icon').prop('style')

    expect(style.color).toBe('red')
    expect(style.width).toBe('20px')
    expect(style.margin).toBe('10px')
    expect(wrapper).toMatchSnapshot()
  })
})
describe('More', () => {
  it('the element when has not props', () => {
    const wrapper = mount(<More />)
    const style = wrapper.find('.eleph-icon').prop('style')
    expect(style).toStrictEqual({ height: '2rem', width: '2rem' })
  })
  it('affect the element when set props', () => {
    // eslint-disable-next-line react/no-multi-comp
    class Wrapper extends React.Component {
      state = {
        style: {},
        color: '',
        size: 0
      }

      handleClick = () => {
        this.setState({
          style: { margin: '10px' },
          color: 'red',
          size: 20
        })
      }

      render() {
        const { style, color, size } = this.state
        return (
          <More
            color={color}
            size={size}
            style={style}
            onClick={this.handleClick}
          />
        )
      }
    }
    const wrapper = mount(<Wrapper />)
    wrapper.simulate('click')
    const style = wrapper.find('.eleph-icon').prop('style')

    expect(style.color).toBe('red')
    expect(style.width).toBe('20px')
    expect(style.margin).toBe('10px')
    expect(wrapper).toMatchSnapshot()
  })
})
