/** @type {import('next').NextConfig} */
const withMarkdoc = require('@markdoc/next.js');

const path = require('path')

const markdocConfig = {
  mode: 'static',
  schemaPath:'./src/app/blog'
}
module.exports = withMarkdoc(markdocConfig)(
  {
    sassOptions: {
      includePaths: [path.join(__dirname, 'styles')],
    },
    pageExtensions: ['md', 'mdoc', 'js', 'jsx', 'ts', 'tsx']
  }
);

