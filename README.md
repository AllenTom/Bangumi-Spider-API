## Bangumi Spider API
该项目由是对网站[Bangumi 番组计划](http://bangumi.tv/) 网站的[爬虫项目](https://github.com/AllenTom/BangumiSpider)的API数据接口

注意:并非该网站的官方接口API，需要使用API时请访问官网或Github上其他的API SDK

### 需求
1. node11以上

###  使用方法
1. 安装ts-node 与 Typescript，详见[安装说明](https://github.com/TypeStrong/ts-node)
2. 安装依赖 `npm install` 或 `yarn install`
3. 配置必要的参数具体详见下文
4. `yarn start` 启动服务
### 项目配置
项目需要依托存放爬虫数据MongoDB数据库，在使用前对数据库进行正确配置。可以修改配置文件`config.ts`或者直接配置环境变量。

环境变量:
1. `MONGO_ADDRESS` 数据库连接配置，例如`mongodb://database:27017/bangumi`
2. `MONGO_USERNAME` 用户名
3. `MONGO_PASSWORD` 密码
3. `PORT` API端口
### 接口文档
获取单个数据请加上`bangumi_id`为query string,获取列表可使用`page`与`page_size`进行分页
- `/animate` 获取动画信息
- `/animates` 获取动画列表
- `/games` 获取游戏列表
- `/game` 获取游戏
- `/characters` 获取角色列表
- `/character` 获取角色
- `/musics` 获取音乐列表
- `/music` 获取音乐
- `/book` 获取书籍
- `/books` 获取书籍列表
- `/persons` 获取人物列表
- `/person` 获取人物
### Docker
本项目可以进行Docker配置，请在`docker-compose.yml`中进行配置。

### License（MIT）
```
MIT License

Copyright (c) 2019 AllenTom aka TakayamaAren

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.

```



