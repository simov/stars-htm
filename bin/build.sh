#!/bin/bash

# before
mkdir -p dist

# js
npx rollup --config bin/rollup.js --input lib/app.js --silent > dist/stars.min.js

# css
npx csso --input css/stars.css --output dist/stars.min.css
