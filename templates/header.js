
import store from '../lib/store.js'
import router from '../lib/router.js'

import htm from 'https://unpkg.com/htm@2.0.0/dist/htm.mjs'
var h = htm.bind(preact.h)


var index = () => {
  history.pushState(null, null, location.pathname)
  router()
}

var login = () => {
  store.redirect = location.href
  location.href = store.login
}

export default () => h`
  <div class="header">
    <a class="title" onclick=${index}><span>⋆</span> GitHub Stars</a>
    ${store.message && h`
      <div class="message">${store.message}</div>
    `}
    <div class="user">
      <div class="limit">${store.limit}</div>
      ${!store.user && h`
        <a class="login" onclick=${login}>Log In with GitHub</a>
      `}
      ${store.user && h`
        <a class="logout" onclick=${_ => store.popup = !store.popup}>
          <img src="${store.user.avatar_url}" />
        </a>
      `}
      ${store.user && h`
        <div class="info" style="${`display: ${store.popup ? 'block' : 'none'}`}">
          <a href="${`https://github.com/${store.user.login}`}" target="_blank">
            <img src="${store.user.avatar_url}" />
          </a>
          <a href="${`https://github.com/${store.user.login}`}" target="_blank" class="bold">
            ${store.user.login}
          </a>
          <div class="name">${store.user.name}</div>
          <p>${store.user.bio}</p>
          <p>${store.user.company}</p>
          <p>${store.user.location}</p>
          <a href="${store.user.blog}" target="_blank">${store.user.blog}</a>
        </div>
      `}
    </div>
  </div>
`
