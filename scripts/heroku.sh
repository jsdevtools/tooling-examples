#!/bin/sh -e

cd ${BUILD_ENV} && npm install
  
if [ "$BUILD_ENV" = "html-14" ]; then
  npm install github:JSDevtools/es6-template-renderer-cli#dev
fi

npm run prestart
