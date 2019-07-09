import { injectReducer } from '../../store/reducers'

export default (store) => ({
  path : 'marks',
  /*  Async getComponent is only invoked when route matches   */
  getComponent (nextState, cb) {
    /*  Webpack - use 'require.ensure' to create a split point
        and embed an async module loader (jsonp) when bundling   */
    require.ensure([], (require) => {
      /*  Webpack - use require callback to define
          dependencies for bundling   */
      const Marks =  require('./containers/marksContainer').default
      const reducer = require('./modules/marks').default

      /*  Add the reducer to the store on key 'counter'  */
      injectReducer(store, { key: 'marks', reducer })

      /*  Return getComponent   */
      cb(null, Marks)

    /* Webpack named bundle   */
  }, 'marks')
  }
});
