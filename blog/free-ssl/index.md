# Free SSL


免費的SSL: Let’s encrypt https://letsencrypt.org/
免費，而且營運開支也是有大公司去做backup的。而公司的目的是要SSL不用錢就可以用到，從而建立安全的網上世界。
 
試想想大部份人都係用同一個 password login 十幾個 website。Facebook又用佢，網上不知名forum又用佢。如果不知名forum唔用SSL，個 可以用來login 佢 facebook 既 password 就好大機會落係hacker 手上）。我諗這個就是大公司support 佢既理由。
 
唯一的壞處是張證書只有3個月有效期，過了期要續。如果沒有以下法寶我可能不會用的。
 
自動 renew cert robot: CertBot https://certbot.eff.org
 
不用錢，對各大OS都有 Support，令到你只要打email 就可以申請到cert, 令你只要掛一個command 上cron job 就可以自動renew.
 
在此介紹如何在digital ocean VPS 安裝 let’s encrypt SSL. (自己server 都apply 到）
https://www.digitalocean.com/community/tutorials/how-to-secure-nginx-with-let-s-encrypt-on-ubuntu-16-04
張cert 可以同時比nginx 同 apache 用，唔駛抄。（一抄你叫cert bot 點一次過 update 2 張 cert).
