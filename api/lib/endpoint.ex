defmodule Endpoint do
  import Plug.Conn
  use Plug.Router
  use Jazz

  plug :match
  plug :dispatch

  get "/api/info" do
    response_body = JSON.encode!(%{status: "OK"})
    conn
    |> put_resp_content_type("application/json")
    |> send_resp(200, response_body)
  end

  match _ do
    response_body = JSON.encode!(%{status: "Not Found"})
    conn
    |> put_resp_content_type("application/json")
    |> send_resp(404, response_body)
  end


end
