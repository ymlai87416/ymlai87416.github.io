# 股票期權分析


之前去investology 聽黃sir 講座, 佢提到港股期權市場其實係一個大戶市場. 入面既數據可以比較好地預測股票走勢.

佢仲話自己聰明絶頂, 自己揾人去幫自己起左個website 去幫人揾入市訊號.

雖然佢講到佢系統好勁, 但係我唔係好信. 所以我無俾錢, 反而自己寫左個website 幫自己揾黃sir 所講既入市信號.

個website 係: http://stockoption.ymlai87416.com

佢個入市訊號係唔係好勁我唔知. 不過我就分享一下我個呢個website 既心得.

資料:

資料係來自港交所, 每一個交易日佢都價發佈期權收市資訊.
個網址係: http://www.hkex.com.hk/eng/stat/dmstat/dayrpt/dqeYYMMDD.zip
個crawler 用 java/spring/hibernate 去寫, 之後試用都幾食RAM 同理runtime 都唔係好快. 因為我無特別做任何tuning.

網站:

個網站我用左 scala 去寫, 用anorm SQL 因為想比較簡單既ORM試下玩下. 用bootstrap 去layout UI. 我想將個website 轉 web service + angular 去寫, 不過為左趕得切朋友生日, 所以都係用左plain HTML + javascript 起貨.


 
大家如個對呢個system 有興趣可以去呢個repo 睇下:  https://github.com/ymlai87416/investmentProject
