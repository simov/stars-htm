
import store from '../lib/store.js'

import htm from 'https://unpkg.com/htm@2.0.0/dist/htm.mjs'
var h = htm.bind(preact.h)


export default () => h`
  <div class="stats">
    ${store.repos.map((repo) => h`
      <table>
        <tr>
          <th colspan="2">${repo}</th>
        </tr>
        ${!store.stats[repo] && h`
          <tr class="stars">
            <td colspan="2"><span>⋆</span>${store.stars[repo]}</td>
          </tr>
        `}
        ${store.stats[repo] === false && h`
          <tr class="limit">
            <td>Limited to 40k stars!</td>
          </tr>
        `}
        ${store.stats[repo] && store.stats[repo].map(({title, value}) => h`
          <tr>
            <td>${title}</td>
            <td>${value}</td>
          </tr>
        `)}
      </table>
    `)}
  </div>
`
