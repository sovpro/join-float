"use strict"
const joinNum = require ('@sovpro/join-num')
const afloat = require ('@sovpro/afloat')

module.exports = joinFloat

function joinFloat (nums) {
  if (Array.isArray (nums) === false) return 0
  const integer_nums   = nums[0]
  const floating_nums  = nums[1]
  const integer_join   = joinNum (integer_nums)
  const floating_join  = joinNum (floating_nums)
  return (
    integer_join +
    afloat (floating_join)
  )
}
