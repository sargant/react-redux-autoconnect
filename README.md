# react-redux-autoconnect

Convention over configuration for [react-redux](https://github.com/reactjs/react-redux)'s `connect()`

[![Travis](https://img.shields.io/travis/sargant/react-redux-autoconnect.svg?style=flat-square)](https://travis-ci.org/sargant/react-redux-autoconnect)
[![npm](https://img.shields.io/npm/v/react-redux-autoconnect.svg?style=flat-square)](https://www.npmjs.com/package/realm-redux-snapshot-middleware)

## Usage

```
autoConnect(Component, [options])
```

Like `connect()`, but looks for static methods called `mapStateToProps`,
`mapDispatchToProps`, and `mergeProps` on the passed `Component`, instead of
passing them manually.

For how to use `mapStateToProps`, `mapDispatchToProps`, and `mergeProps`, read
the [react-redux documentation](https://github.com/reactjs/react-redux/blob/master/docs/api.md#connectmapstatetoprops-mapdispatchtoprops-mergeprops-options)

The optional `options` argument is also passed to `connect()` as the fourth argument.

## Why?

So you can now keep everything wrapped up in a single class:

```
import autoConnect from 'react-redux-autoconnect'

class Foo extends React.Compoment {
  render () {
    return (
      <div>Hello {this.props.name}!</div>
    )
  }

  static mapStateToProps = (state) => ({
    name: state.name
  })
}

export default autoConnect(Foo)
```

## This is stupidly simple code and you should be ashamed

I know, but I was fed up of writing the same utility function over and over.
