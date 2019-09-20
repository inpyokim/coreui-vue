import { mount } from '@vue/test-utils'
import Component from '../CJumbotron'

const ComponentName = 'CJumbotron'
const defaultWrapper = mount(Component)
const customWrapper = mount(Component, {
  propsData: {
    fluid: true,
    header: 'header',
    lead: 'lead',
    variant: 'success',
    borderVariant: 'secondary',
    textVariant: 'dark'
  },
  slots: {
    default: 'content'
  }
})

describe(ComponentName, () => {
  it('has a name', () => {
    expect(Component.name).toMatch(ComponentName)
  })
  it('renders correctly', () => {
    expect(defaultWrapper.element).toMatchSnapshot()
  })
  it('renders correctly', () => {
    expect(customWrapper.element).toMatchSnapshot()
  })
})