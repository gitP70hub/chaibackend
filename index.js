require('dotenv').config()
const express = require('express')
const app = express()
const port = 4000

const githubData = {
  "login": "gitP70hub",
  "id": 112148969,
  "node_id": "U_kgDOBq9B6Q",
  "avatar_url": "https://avatars.githubusercontent.com/u/112148969?v=4",
  "gravatar_id": "",
  "url": "https://api.github.com/users/gitP70hub",
  "html_url": "https://github.com/gitP70hub",
  "followers_url": "https://api.github.com/users/gitP70hub/followers",
  "following_url": "https://api.github.com/users/gitP70hub/following{/other_user}",
  "gists_url": "https://api.github.com/users/gitP70hub/gists{/gist_id}",
  "starred_url": "https://api.github.com/users/gitP70hub/starred{/owner}{/repo}",
  "subscriptions_url": "https://api.github.com/users/gitP70hub/subscriptions",
  "organizations_url": "https://api.github.com/users/gitP70hub/orgs",
  "repos_url": "https://api.github.com/users/gitP70hub/repos",
  "events_url": "https://api.github.com/users/gitP70hub/events{/privacy}",
  "received_events_url": "https://api.github.com/users/gitP70hub/received_events",
  "type": "User",
  "user_view_type": "public",
  "site_admin": false,
  "name": "Pranali_Khonde",
  "company": null,
  "blog": "",
  "location": null,
  "email": null,
  "hireable": null,
  "bio": null,
  "twitter_username": null,
  "public_repos": 5,
  "public_gists": 0,
  "followers": 2,
  "following": 30,
  "created_at": "2022-08-26T04:25:22Z",
  "updated_at": "2025-02-15T16:21:42Z"
}

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/twitter',(req, res) => {
    res.send('Recuzha')
})

app.get('/login', (req, res) => {
    res.send('<h1> please login at chai aur code</h1>')
})

app.get('/youtube', (req, res) => {
    res.send("<h2> Chai aur code </h2>")
})

app.get('/github', (req, res) => {
    res.json(githubData)
})
app.listen(process.env.PORT, () => {
  console.log(`Example app listening on port ${port}`)
})