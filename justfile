export PATH := "./node_modules/.bin:" + env_var('PATH')

_default:
  @just --list

# Start the dev server with browser
start:
  run-p dev open

# Start the dev server (no browser)
dev:
  astro dev

# Make a backup with Duplicacy
backup:
  duplicacy backup
