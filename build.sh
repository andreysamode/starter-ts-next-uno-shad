#!/bin/bash
if [ -d 'src-orig' ]; then
  echo 'ERROR: Last build did not clean up successfully. Please replace "src" with "src-orig"'
else
  cp -r src src-orig
  unocss -c uno.config.ts -o src/app/uno-cli.css 'src/**/*.tsx' --write-transformed
  next build
  rm -rf src
  mv src-orig src
  echo 'DONE!'
  echo 'IMPORTANT: Flip away and back from the currently opened tab if it has variant groups.'
fi