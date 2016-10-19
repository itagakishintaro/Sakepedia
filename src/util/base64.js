const b64encode = str => new Buffer(str).toString('base64')
const b64decode = encodedStr => new Buffer(encodedStr, 'base64').toString()
export { b64encode, b64decode }
