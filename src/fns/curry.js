const curry = (fn, ...presetArgs) => {
  const caller = (...prevArgs) => (...args) =>
    prevArgs.length + args.length >= fn.length
      ? fn(...prevArgs, ...args)
      : caller(...prevArgs, ...args)

  return caller(...presetArgs)
}

module.exports = { curry }
