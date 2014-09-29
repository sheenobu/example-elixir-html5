defmodule Api do
  use Application

  def start(_a,_b) do
    IO.puts "Running MyPlug with Cowboy on http://localhost:4000"
    Plug.Adapters.Cowboy.http Endpoint, []
    {:ok, self()}
  end

end
