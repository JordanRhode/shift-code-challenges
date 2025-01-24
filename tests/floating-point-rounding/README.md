# [Code challenge — Floating-point rounding](https://shiftparadigm.slack.com/archives/C06R174JN6P/p1736786700689029)

Floating point precision is a problem that continues to haunt many of us @here. Due to the way JavaScript and many other languages use the binary64 format for floating point arithmetic, numbers are stored with a certain level of precision that can lead to rounding or truncation of a value. A common example of this in JavaScript is `0.1 + 0.2 === 0.3` which results in `false` due to how `0.3` is actually stored which is something like `0.3000000000000004`.

This becomes especially problematic when dealing with money values. For example, when a value of `1.05` is retrieved from an external call and stored in JavaScript as `1.044444444444449`, built in precision functions, and even most third party libraries, create an off-by-one error resulting in `1.04`.

## The challenge

In JavaScript, round money values to the nearest thousandth, then hundredth and sort the value set from smallest to largest.

## Assertion

Prove your rounding logic can round the numbers `[1.07444444444449, 1.07444444444444, 0, -3.00, 1.012222222222, 1.187777777777777, 1.01]` back to their original money values resulting in the sorted set `[-3.00, 0.00, 1.01, 1.01, 1.07, 1.08, 1.19]`
