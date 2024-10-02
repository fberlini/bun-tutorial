import { Elysia } from "elysia";

const app = new Elysia()
  .get("/", () => "Hello Elysia")
  .get("/post/:id", ({params: {id}}) => {
    return {id: id, title: 'Learn Bun'}
  })
  .post("/post", ({body, set}) => {
    set.status = 201
    return body
  })
  .listen(3000);

console.log(
  `🦊 Elysia is running at ${app.server?.hostname}:${app.server?.port}`
);
