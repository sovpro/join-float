"use strict";
const joinFloat = require ('./../')
const assert = require ('assert')

let error_count = 0

function assertWithInfo (actual, expected, message) {
  process.stdout.write (message)
  try {
    assert (actual === expected, message)
    console.log (' ... OK')
  }
  catch (error) {
    console.log (' ... FAIL')
    console.error (error)
    error_count += 1
  }
}

process.once ('exit', function (code) {
  process.exit (Math.min (1, error_count))
})

assertWithInfo (
    joinFloat ([[], null])
  , 0
  , 'The result for a null floating digits array and empty integer digits array should be 0'
)

assertWithInfo (
    joinFloat ([null, []])
  , 0
  , 'The result for a null integer digits array and empty floating digits array should be 0'
)

assertWithInfo (
    joinFloat ([null, null])
  , 0
  , 'The result for a null integer digits array and null floating digits array should be 0'
)

assertWithInfo (
    joinFloat ()
  , 0
  , 'The result for no arguments should be 0'
)

assertWithInfo (
    joinFloat ([[1, 2, 3], [4, 5, 6]])
  , 123.456
  , 'The result for array [[1, 2, 3], [4, 5, 6]] should be 123.456'
)

assertWithInfo (
    joinFloat ([[], []])
  , 0
  , 'The result for empty arrays should be 0'
)

assertWithInfo (
    joinFloat ([[5, 6, 7], []])
  , 567
  , 'The result for a integer digits array and empty floating digits array should have the joined integer value'
)

assertWithInfo (
    joinFloat ([[], [7, 8, 9]])
  , 0.789
  , 'The result for an empty integer digits array and a floating digits array should have the joined floating value'
)

