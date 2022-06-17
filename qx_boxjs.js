
  {
    "id": "elmleaf",
    "name": "饿了么leaf",
    "keys": ["elmCookie", "elmOrderFlag", "elmScanTask", "elmScanConcurrency", "elmOrderAmount", "elmNotify", "elmOrderTime"],
    "descs_html": [
      "<h4 align=\"center\">获取Cookie以及脚本配置请查看<a href=\"https://raw.githubusercontent.com/leafTheFish/DeathNote/main/elm.js\">脚本注释</a></h4>"
    ],
    "settings": [{
      "id": "elmOrderFlag",
      "name": "兑换优惠券",
      "val": "",
      "type": "text",
      "placeholder": "(点击以展开说明)",
      "desc": "要抢10元无门槛券的话，设置elmOrderFlag为1，每个账号单独设置并用&隔开，如:export elmOrderFlag='1&0&0'，这样设置为账号1抢兑10元无门槛券，其他账号不抢"
    }, {
      "id": "elmCookie",
      "name": "饿了吗cookie",
      "val": "",
      "type": "text",
      "placeholder": "(点击以展开说明)",
      "desc": "饿了么app 或 支付宝饿了么小程序 或 微信饿了么小程序 -> 我的 -> 赚吃货豆h5.ele.me，把header里面的Cookie填进去elmCookie捉包里的Cookie全部内容"
    }, {
      "id": "elmScanTask",
      "name": "扫描吃货豆任务开关",
      "val": "",
      "type": "number",
      "placeholder": "(点击以展开说明)",
      "desc": "开启的话会使用账号1(不要把黑号放账号1)扫描所有吃货豆任务，但耗时较长(我机器大概需要7分钟)，关闭的话用内置任务列表完成隐藏任务。默认为关闭，要开启的话填1，关闭填0"
    }, {
      "id": "elmScanConcurrency",
      "name": "扫描吃货豆并发搜索任务数",
      "val": "",
      "type": "number",
      "placeholder": "(点击以展开说明)",
      "desc": "并发越多搜索越快。但是并发过多可能会丢包变卡，机器性能差的填少一点。默认为16"
    }, {
      "id": "elmOrderAmount",
      "name": "抢券金额",
      "val": "",
      "type": "text",
      "placeholder": "(点击以展开说明)",
      "desc": "可选，抢券金额，默认为10元。目前只支持9元和10元，每个账号独立，多账号用&隔开。例如 10&9&10 为账号1和3抢10元券，账号2抢9元券"
    }, {
      "id": "elmNotify",
      "name": "推送通知等级",
      "val": "2",
      "type": "number",
      "placeholder": "(点击以展开说明)",
      "desc": "0:只有CK失效时候会推送,1:CK失效或者抢到10元券才会推送,2:正常推送,默认为2"
    }, {
      "id": "elmOrderTime",
      "name": "延迟",
      "val": "9:59:59:850",
      "type": "text",
      "placeholder": "(点击以展开说明)",
      "desc": "需要在设置的抢券时间提前1分钟跑，默认9:59:59:950开始抢，连续抢50次(大约0.5秒)可以自己配置开始抢券的时间，把elmOrderTime设置成开始的时间，格式(小时:分钟:秒:毫秒)，注意要用英文冒号，如export elmOrderTime=9:59:59:950"
    }],
    "script": "https://raw.githubusercontent.com/leafTheFish/DeathNote/main/elm.js",
    "author": "@cjf0423",
    "repo": "https://raw.githubusercontent.com/leafTheFish/DeathNote/main/elm.js",
    "icons": ["https://raw.githubusercontent.com/Orz-3/mini/master/elem.png",
        "https://raw.githubusercontent.com/Orz-3/task/master/elem.png"]
  }, 
  {
    "id": "Elm",
    "name": "饿了么吃货豆",
    "keys": ["elmck", "elmdh", "SM_STARTTIME"],
    "descs_html": [
      "<h4 align=\"center\">获取Cookie以及脚本配置请查看<a href=\"https://gitee.com/xiecoll/radish-script/raw/master/ELM/lb_elm.js\">脚本注释</a></h4>"
    ],
    "settings": [{
      "id": "elmdh",
      "name": "兑换优惠券",
      "val": false,
      "type": "boolean",
      "desc": "兑换优惠券，默认为false,开启兑换，如需开启兑换，请设置为true"
    }, {
      "id": "elmck",
      "name": "饿了吗cookie",
      "val": "",
      "type": "text",
      "placeholder": "(点击以展开说明)",
      "desc": "饿了么ck"
    }, {
      "id": "SM_STARTTIME",
      "name": "延迟",
      "val": "",
      "type": "text",
      "placeholder": "",
      "desc": "默认为60，当为60时，9点59分运行脚本，10点准时开枪，如果网络慢可以设置为59，则9点59分59秒开抢"
    }],
    "script": "https://gitee.com/xiecoll/radish-script/raw/master/ELM/lb_elm.js",
    "author": "@cjf0423",
    "repo": "https://gitee.com/xiecoll/radish-script/raw/master/ELM/lb_elm.js",
    "icons": ["https://raw.githubusercontent.com/Orz-3/mini/master/elem.png",
        "https://raw.githubusercontent.com/Orz-3/task/master/elem.png"]
  }
