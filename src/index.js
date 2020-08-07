import React from "react"
import ReactDOM from "react-dom"
import {ApolloClient, ApolloProvider, InMemoryCache} from "@apollo/client"

import App from "./App"

import "./styles/index.scss"
// import * as serviceWorker from "./serviceWorker"

const client = new ApolloClient({
	uri: "http://localhost:4000/",
	cache: new InMemoryCache({
		typePolicies: {
			Query: {
				fields: {
					heroes: {
						keyArgs: false,
						merge: (existing, incoming) => {
							if (!existing) return incoming

							return {
								...incoming,
								data: [
									...existing.data,
							    ...incoming.data,
								],
							}
						}
					}
				}
			}
		}
	}),
})

ReactDOM.render(
  <React.StrictMode>
  	<ApolloProvider client={client}>
	    <App />
    </ApolloProvider>
  </React.StrictMode>,
  document.getElementById("root")
)

// serviceWorker.unregister()
