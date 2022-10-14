import { Hono } from 'hono'
import { poweredBy } from 'hono/powered-by'

const app = new Hono()

app.use('*', poweredBy())

app.get('/', (c) => {
  return Response.redirect('https://github.com')
})

app.get('/hono', (c) => {
  return c.redirect('https://github.com', 302)
})

export default app
