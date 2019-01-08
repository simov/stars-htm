
import store from '../lib/store.js'
import router from '../lib/router.js'

import htm from 'https://unpkg.com/htm@2.0.0/dist/htm.mjs'
var h = htm.bind(preact.h)


var repo

var onkey = (e) => {
  if (e.keyCode === 13) {
    change(e)
    add()
  }
}

var change = (e) => {
  repo = e.target.value
}

var add = () => {
  if (!repo) {
    return
  }
  if (store.repos.indexOf(repo) !== -1) {
    store.message = 'Repository already added!'
    return
  }
  var url = `${location.pathname}?r=${store.repos.concat(repo).join('&r=')}`
  history.pushState(null, null, url)
  router()
}

export default () => h`
  <div class="form">
    <input type="text" placeholder="user/repo" onchange=${change} onkeyup=${onkey} />
    <button onclick=${add}>add</button>
  </div>
`
