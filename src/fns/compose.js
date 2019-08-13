const compose = (...fns) => {
  return (...arg) =>
    fns.reduceRight(
      (result, fn, index) =>
        index + 1 === fns.length ? fn(...result) : fn(result),
      arg,
    )
}

module.exports = { compose }
