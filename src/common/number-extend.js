import BigNumber from 'bignumber.js'

Number.prototype.asBigNumber = function() {
  return new BigNumber(this.toString())
}

Number.prototype.roundDown = function(precision = 2) {
  precision = Math.pow(10, precision)
  const num = this
  return parseInt(
    '' +
      num
        .asBigNumber()
        .times(precision)
        .toNumber(),
    10
  )
    .asBigNumber()
    .div(precision)
    .toNumber()
}

Number.prototype.roundUp = function(precision = 2) {
  precision = Math.pow(10, precision)
  const num = this
  return Math.ceil(
    num
      .asBigNumber()
      .times(precision)
      .toNumber()
  )
    .asBigNumber()
    .div(precision)
    .toNumber()
}

Number.prototype.round = function(precision = 2) {
  return +this.toFixed(precision)
}

Number.prototype.strip = function(precision = 12) {
  return +parseFloat(this.toString()).toPrecision(12)
}

// 0.5 is 50%
Number.prototype.toPercentage = function(precision = 2) {
  return this.asBigNumber()
    .multipliedBy(100)
    .toNumber()
    .roundUp(precision)
}

// 50% is 0.5
Number.prototype.fromPercentage = function(precision = 4) {
  return this.asBigNumber()
    .dividedBy(100)
    .toNumber()
    .roundUp(precision)
}

// 500 is 5 RMB
Number.prototype.toRMB = function(precision = 2) {
  return +this.asBigNumber()
    .dividedBy(100)
    .toNumber()
    .roundUp(precision)
    .toFixed(2)
}

// 5 RMB is 500
Number.prototype.fromRMB = function(precision = 2) {
  return this.asBigNumber()
    .multipliedBy(100)
    .toNumber()
    .roundUp(precision)
}

// 1234567.89 is show ¥123,4567.89
Number.prototype.showCurrency = function(opts) {
  const x = this.asBigNumber()
  let fmt = {
    prefix: '¥',
    decimalSeparator: '.',
    groupSeparator: ',',
    groupSize: 4
  }
  if (opts === 0 || Number(opts)) {
    return x.toFormat(Number(opts), fmt)
  } else if (typeof opts === 'object') {
    fmt = { ...fmt, ...opts }
    if (opts.precision === 0 || Number(opts.precision)) {
      return x.toFormat(Number(opts.precision), fmt)
    }
  }
  return x.toFormat(fmt)
}

// 1234 is 1.23k,   123456 is show 12.34w
Number.prototype.shortNum = function() {
  const x = this.asBigNumber()
  let n = Number(x)
  if (!n) return x.toString()
  if (n >= 10000) return (n / 10000).toFixed(1) + 'w'
  if (n >= 1000) return (n / 1000).toFixed(1) + 'k'
  return n.toString()
}

// 0.85 is 8.5
Number.prototype.toDiscount = function(precision = 2) {
  return +this.asBigNumber()
    .multipliedBy(10)
    .toNumber()
    .roundUp(precision)
}
