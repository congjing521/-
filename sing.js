const fs = require('fs')
const path = require('path')
//转码 第三方库 iconv 
const iconv = require('iconv-lite')
 
 //读取文件

 const target = path.join(process.cwd(),process.argv[2])

 const content =fs.readFileSync(target)//读取内容
 //node 只认识 uft-8 编码 gbk  编码不认识但utf-8 返回文字报错

 const sing =iconv.decode(content,'gbk')

  const lines = sing.split('\n')
  //遍历
  lines.forEach(line => {
    const reg =/\[(\d{2})\:(\d{2})\.(\d{2})\](\s.+)/
    const matches = reg.exec(line)
    if(matches){
        const m = parseInt(matches[1])
        const s = parseInt(matches[2])
        const f = parseInt(matches[3])
        setTimeout(() => {
            console.log(matches[4])
        },m*60*1000 + s*1000 + f)
    }else{
        console.log(line)
    }
  })

