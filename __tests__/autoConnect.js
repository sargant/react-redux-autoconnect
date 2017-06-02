import autoConnect from '../src/autoConnect'
import { connect } from 'react-redux'

jest.mock('react-redux')

beforeEach(() => {
  connect.mockClear()
})

it('does not explode with an undefined component', () => {
  const wrappedComponent = autoConnect(undefined)
})

it('calls connect with a plain component', () => {
  const simpleComponent = {}
  const wrappedComponent = autoConnect(simpleComponent)
  expect(connect).toHaveBeenCalledTimes(1)
  expect(connect).toHaveBeenLastCalledWith(undefined, undefined, undefined, undefined)
  expect(wrappedComponent).toBe(simpleComponent)
})

it('calls connect and passes mapStateToProps', () => {
  const component = { mapStateToProps: Symbol() }
  const wrappedComponent = autoConnect(component)
  expect(connect).toHaveBeenCalledTimes(1)
  expect(connect).toHaveBeenLastCalledWith(component.mapStateToProps, undefined, undefined, undefined)
  expect(wrappedComponent).toBe(component)
})

it('calls connect and passes mapDispatchToProps', () => {
  const component = { mapDispatchToProps: Symbol() }
  const wrappedComponent = autoConnect(component)
  expect(connect).toHaveBeenCalledTimes(1)
  expect(connect).toHaveBeenLastCalledWith(undefined, component.mapDispatchToProps, undefined, undefined)
  expect(wrappedComponent).toBe(component)
})

it('calls connect and passes mergeProps', () => {
  const component = { mergeProps: Symbol() }
  const wrappedComponent = autoConnect(component)
  expect(connect).toHaveBeenCalledTimes(1)
  expect(connect).toHaveBeenLastCalledWith(undefined, undefined, component.mergeProps, undefined)
  expect(wrappedComponent).toBe(component)
})

it('calls connect and passes all three prop mappers', () => {
  const component = {
    mapStateToProps: Symbol(),
    mapDispatchToProps: Symbol(),
    mergeProps: Symbol()
  }
  const wrappedComponent = autoConnect(component)
  expect(connect).toHaveBeenCalledTimes(1)
  expect(connect).toHaveBeenLastCalledWith(
    component.mapStateToProps,
    component.mapDispatchToProps,
    component.mergeProps,
    undefined)
  expect(wrappedComponent).toBe(component)
})

it('calls connect and passes options', () => {
  const component = {}
  const options = Symbol()
  const wrappedComponent = autoConnect(component, options)
  expect(connect).toHaveBeenCalledTimes(1)
  expect(connect).toHaveBeenLastCalledWith(undefined, undefined, undefined, options)
  expect(wrappedComponent).toBe(component)
})

it('calls connect and passes all three prop mappers and options', () => {
  const component = {
    mapStateToProps: Symbol(),
    mapDispatchToProps: Symbol(),
    mergeProps: Symbol()
  }
  const options = Symbol()
  const wrappedComponent = autoConnect(component, options)
  expect(connect).toHaveBeenCalledTimes(1)
  expect(connect).toHaveBeenLastCalledWith(
    component.mapStateToProps,
    component.mapDispatchToProps,
    component.mergeProps,
    options)
  expect(wrappedComponent).toBe(component)
})
