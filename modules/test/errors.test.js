import { default as MyError, errors } from '../src/errors.mjs'
import { error } from '../src/loggers.mjs'
import { should,assert } from 'chai'
should()

describe('error', () => {
  it('constractor needs error property.', () => {
    (() => new MyError(null, {})).should.throw
  })
  it('constractor needs error.message property.', () => {
    (() => new MyError({} ,{})).should.throw
  })
  it('error equality.', () => {
    const e = {
      code: 500,
      status: 400,
      message: 'test message: {{template}}'
    }
    var er = new MyError(e, { template: 'filename' } )
    er.message.should.equal('test message: filename')
    er.code.should.equal(500)
    er.status.should.equal(400)
  })
})
