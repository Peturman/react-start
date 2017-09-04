import { connect } from 'react-redux'
import * as actions from './actions'
import React from 'react'
import { Link } from 'react-router'

const mapDispatchToProps = { ...actions };

const mapStateToProps = state => state;

import Counter from './view';

const Container = (props) => {
  const { children, ...others } = props;
  return React.cloneElement(children, others)
}

export default connect(mapStateToProps, mapDispatchToProps)(Container)
