import { injectReducer } from '../../store/reducers'

export default (store) => ({
  path : 'class',
  /*  Async getComponent is only invoked when route matches   */
  getComponent (nextState, cb) {
    /*  Webpack - use 'require.ensure' to create a split point
        and embed an async module loader (jsonp) when bundling   */
    require.ensure([], (require) => {
      /*  Webpack - use require callback to define
          dependencies for bundling   */
      const Class =  require('./containers/class-container').default
      const reducer = require('./modules/class').default

      /*  Add the reducer to the store on key 'counter'  */
      injectReducer(store, { key: 'class', reducer })

      /*  Return getComponent   */
      cb(null, Class)

    /* Webpack named bundle   */
  }, 'class')
  }
});
