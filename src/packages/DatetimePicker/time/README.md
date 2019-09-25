## 流程
栗子：type=datetime。1-2：初始化，3-4：联动

1. 创建部分数据。例如：年，部分get 值要根据年数据设置。相关js：time.js
2. 创建后续月日时分数据。相关js：create.js
3. 每次滚动的时候对比下日期时间。相关js：diff
4. 通过对比新旧values，联动又可能重新产生新的日期时间，通过picker.movePor重新触发计算，刷新values