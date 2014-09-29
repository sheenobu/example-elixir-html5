static: sh -c 'cd ./web/ && exec node lib/server.js'
api: sh -c 'cd ./api/ && exec elixir -S mix run --no-halt'
proxy: sh -c 'cd ./dev/ && exec node server.js'
