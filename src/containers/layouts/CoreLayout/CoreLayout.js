import React from 'react'
import Header from '../../../components/Header'
import style from './CoreLayout.scss'

export const CoreLayout = ({ children }) => (
  <div className='container text-center'>
    <Header />
    <div className={style.viewport}>
      {children}
    </div>
  </div>
)

CoreLayout.propTypes = {
  children : React.PropTypes.element.isRequired
}

export default CoreLayout
