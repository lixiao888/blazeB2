/*
 * @Author: Harry
 * @Date: 2022-07-05 16:36:36
 * @LastEditors: harry
 * @Github: https://github.com/rr210
 * @LastEditTime: 2022-07-12 16:53:21
 * @FilePath: \dev\src\registerServiceWorker.js
 */
/* eslint-disable no-console */

import { register } from 'register-service-worker'

register(`${process.env.BASE_URL}sw.js`, {
  ready() {
    console.log(
      'App is being served from cache by a service worker.\n' +
      'For more details, visit https://goo.gl/AFskqB'
    )
  },
  registered() {
    console.log('Service worker has been registered.')
  },
  cached() {
    console.log('Content has been cached for offline use.')
  },
  updatefound() {
    console.log('New content is downloading.')
  },
  updated() {
    console.log('New content is available; please refresh.')
  },
  offline() {
    console.log('No internet connection found. App is running in offline mode.')
  },
  error(error) {
    console.error('Error during service worker registration:', error)
  }
})