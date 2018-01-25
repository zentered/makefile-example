const log = (msg) => {
  if (process.env.NODE_ENV === 'development') {
    console.log(msg)
  }
}

exports.add = (a, b) => {
  log('add')
  return a + b
}

exports.subtract = (a, b) => {
  log('subtract')
  return a - b
}

if (process.env.NODE_ENV === 'production') {
  console.log('Hello World')
}
