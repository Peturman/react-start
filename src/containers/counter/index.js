import { injectReducer } from '../../store/reducers'

export default (store) => ({
  path : 'counter',
  indexRoute: {
    getComponent(nextState, cb) {
      require.ensure([], (require) => {
        cb(null, require('./view').default)
      }, 'counter')
    },
  },

  getComponent (location, cb) {
    require.ensure([], (require) => {
      const container = require('./container').default
      const reducer = require('./reducer').default

      injectReducer(store, { key: 'counter', reducer })
      cb(null, container)
    }, 'counter')
  },

  getChildRoutes (partialNextState, cb) {
    require.ensure([], (require) => {
      cb(null, require('./childRoutes').default)
    }, 'counter')
  }
})
