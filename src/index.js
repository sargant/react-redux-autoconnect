import { connect } from 'react-redux'

export default (Component, options) =>
  connect(
    Component.mapStateToProps,
    Component.mapDispatchToProps,
    Component.mergeProps,
    options
  )(Component)
