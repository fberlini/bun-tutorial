const server = Bun.serve({
    port: 3000,
    fetch(req) {
        const url = new URL(req.url)

        if (url.pathname === '/') {
            return new Response("Hello World! Are you learning Bun, dude?")    
        }
        
        if (url.pathname === '/about') {
            return new Response("About me")    
        }

        // Handle error
        if (url.pathname === '/feed') {
            throw new Error('Could not fetch')
        }

        // Access text file
        if (url.pathname === '/greet') {
            return new Response(Bun.file('./greet.txt'))
        }

        return new Response('404!')
    },
    error(error) {
        return new Response(`<pre> ${error} \n ${error.stack} </pre>`, {
            headers: {
                'Content-Type': 'text/html'
            }
        })
    }
})

console.log("Listening on PORT http://localhost:${server.port}")