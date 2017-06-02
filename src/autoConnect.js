import { connect } from 'react-redux'

export default (Component, options) =>
  connect(
    Component && Component.mapStateToProps,
    Component && Component.mapDispatchToProps,
    Component && Component.mergeProps,
    options
  )(Component)
