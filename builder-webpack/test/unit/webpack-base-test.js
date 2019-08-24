const assert = require('assert')

describe('webpack.base.js test case', () => {
    const baseConfig = require('../../lib/webpack.base.js')

    console.log(baseConfig)
    it('entry', () => {
        assert.equal(baseConfig.entry.index, 'C:/Software Files/Practice/multipage-webpack/builder-webpack/test/smoke/template/src/index/index.js')
        assert.equal(baseConfig.entry.search, 'C:/Software Files/Practice/multipage-webpack/builder-webpack/test/smoke/template/src/search/index.js')
    })
})
