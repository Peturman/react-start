import React from 'react'
import Home from './home/index'
import CounterRoute from './counter/index'
import CoreLayout from './layouts/CoreLayout/index'

/*  Note: Instead of using JSX, we recommend using react-router
    PlainRoute objects to build route definitions.   */

export const createRoutes = (store) => ({
    path        : '/',
    component   : CoreLayout,
    indexRoute  : Home,
    childRoutes : [
        CounterRoute(store)
    ]
});

export default createRoutes
