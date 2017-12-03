// http://teppeis.hatenablog.com/entry/2017/08/es-modules-in-nodejs
import yaml from 'js-yaml'
import fs from 'fs'
import mustache from 'mustache'
import { error as log } from './loggers.mjs'

export const errors = yaml
      .safeLoad(fs.readFileSync('./resources/errors.yml','utf8'))
      .errors;

export default class MyError extends Error{
  constructor(error, props){
    super()
    if(!error) throw new Error('needs error property.')
    if(!error.message) throw new Error('needs error.message property.')
    Object.assign(this, error);
    this.message = mustache.to_html(this.message, props)
  }
}

// var e = new MyError(errors.core.FileIOError, { file:'filename' } )
