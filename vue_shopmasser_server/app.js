const express = require('express')
const compression = require('compression')
const https = require('https')
const fs = require('fs')
const app = express()

const options = {
  cert: fs.readFileSync('./full_chain.pem'),
  key: fs.readFileSync('./private.key')
}

// 一定要把这一行代码，写到 静态资源托管之前
// compression 是使用Gzip网络传输压缩 使得请求的数据压缩更小 打开网页速度更快
app.use(compression())
app.use(express.static('./dist'))

app.listen(8080,()=>{
    console.log("server running at http://127.0.0.1:8080")
})


// https.createServer(options, app).listen(443)