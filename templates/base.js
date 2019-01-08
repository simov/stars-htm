
module.exports = (h, meta, path) => h`
  <html>
    <head>
      ${meta.map((_, index) => `
        <meta ${Object.keys(meta[index]).map((attr) => `${attr}="${meta[index][attr]}"`).join(' ')} />
      `).join('')}

      <title>GitHub Star History and Stats</title>

      <link rel="shortcut icon" href="${path.favicon}" />

      ${path.css.map((file) => h`
        <link rel="stylesheet" type="text/css" href="${file}" />
      `)}

      ${path.js.map((file) => h`
        <script type="text/javascript" src="${file}"></script>
      `)}

      ${path.mjs && path.mjs.map((file) => h`
        <script type="module" src="${file}"></script>
      `)}
    </head>
    <body>
      <div id="wrapper">
        <div id="stars"></div>
        <div id="footer-push"></div>
      </div>
      <div class="footer">
        <p>
          <small>
            made with 🔨 by <a href="https://github.com/simov/stars-htm" target="_blank">simov</a>
          </small>
        </p>
      </div>
    </body>
  </html>
`
