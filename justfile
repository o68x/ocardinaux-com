export PATH := "./node_modules/.bin:" + env_var('PATH')

default:
  @echo 'Hello, world!'

start:
  run-p dev open

backup:
  duplicacy backup
