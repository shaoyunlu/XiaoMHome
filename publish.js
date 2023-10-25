const { execSync } = require('child_process');
const fs = require('fs');

// 执行构建命令
execSync('npm run build');

// 提交到GitHub
execSync('git add .');
execSync('git commit -m "Release version"');
execSync('git push');

// 上传到云服务器
execSync('pscp -l root -i C:\Users\Administrator\.ssh\putty.ppk  -r F:\github\XiaoMHome\dist\* 114.116.50.8:/syl/XiaoMHome')
