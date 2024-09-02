const server = Bun.serve({
    port: 3000,
    fetch(req) {
        return new Response("Hello World! Are you learning Bun, dude?")
    }
})

console.log("Listening on PORT http://localhost:${server.port}")