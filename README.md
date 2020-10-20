[![HC](https://img.shields.io/badge/zentered-consulting-333333.svg?style=for-the-badge)]()

# Makefile for test and development environment

Full article: https://zentered.co/articles/makefile-for-node-js-developers/

This is an example on how we use the Makefile to simulate different environments.

## Development
`make dev` (NODE_ENV = development)

## Test
`make test` (NODE_ENV = test)

    TAP version 13
    # add
    ok 1 1 + 1 = 2
    # subtract
    ok 2 1 - 1 = 0

    1..2
    # tests 2
    # pass  2

    # ok


## Watch
`make watch` (NODE_ENV = development)

    change:test/index.js
    TAP version 13
    # add
    add
    ok 1 1 + 1 = 2
    # subtract
    subtract
    ok 2 1 - 1 = 0

    1..2
    # tests 2
    # pass  2

    # ok
