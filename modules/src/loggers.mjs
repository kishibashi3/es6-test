import log4js from 'log4js'
import config from 'config'
import yaml from 'js-yaml'

log4js.configure(config.get('config.log4js'))



const error = log4js.getLogger('error')
const system = log4js.getLogger('system')

export { error, system }

const categories = function* (){
  yield 1
  yield 2
  // Object.entries(config.get('config.log4js.categories'))
  //   .forEach( ([k,v]) => yield k )
}

for( let i in categories() ) console.log(i)
