import { Provider } from 'react-redux'
import React, { Component, PropTypes } from 'react'
import { Router } from 'react-router'
import '../styles/normalize.scss'
import '../styles/app.scss'
import '../styles/antdStyleReset.scss'
import '../styles/font.scss'
import '../styles/animations.scss'
import 'moment/locale/zh-cn'

class APP extends Component {
    static propTypes = {
        routes : PropTypes.object.isRequired,
        store  : PropTypes.object.isRequired
    }

    shouldComponentUpdate () {
        return false
    }

    render () {
        const { routes, store, history } = this.props;
        return (
            <Provider store={store}>
                <div style={{ height: '100%' }}>
                    <Router history={history} children={routes} />
                </div>
            </Provider>
        )
    }
}

export default APP
