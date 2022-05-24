import lang from './heb.js'

export default text => {
    if (typeof text != 'string') return ''
    return lang[text.trim()] || text
}