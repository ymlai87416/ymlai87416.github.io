# Dynamic Dns


因為 Godaddy 買的東西不能掛 wordpress (五年前最平的套餐 ），所以我也有看看有沒有方法可以令到我用屋企IP 去建設網站，用過了 dynamic dns, no-ip, changeip, duckdns. 這是我一路來的感覺。
不用錢的東西不可靠
不可靠有兩個途徑解決。

付錢
設立1或者多個備用方案。
說一說我對各大DDNS 的感覺吧。

DuckDNS (http://www.duckdns.org)
這個是我唯人欣賞的，他的營運目標就是免費，而他不是空口說白話。
營運方針：http://www.duckdns.org/about.jsp
營運籌款：https://www.patreon.com/user?u=3209735而且亦有過住的記錄，希望他能夠繼續營運下去，直到永遠。阿門。
如果你們用過滿意的話，可以捐錢支持一下他們。
Dynamic DNS (www.dyn.com)
用了一陣，現在他不再提供免費 plan 了。 2016十月
NoIP (www.noip.com)
免費的 plan 很麻煩，他會每個月寄你一封信。說你不按link 就把你的 domain 給刪掉，很不人性化。我不想付錢，所以不買他，他亦不能作備用方案。因為我不管他，他會自動刪掉我的domain.
ChangeIP (https://www.changeip.com/)
可以作為備用方案，但網上有人投訢他有downtime 6個小時長, 我不知道，但作為備用，也有點用吧。
現在我是用 duck dns（主要） + change ip（備用） 來設定 ddns, 當然向 DDNS update IP 的不是我家的router, 而是我家的舊電腦兼server.
