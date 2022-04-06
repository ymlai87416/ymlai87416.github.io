# My OSCP Journey


I am a software engineer working in HK for 7 years, no much security background. I did work on machine code debugging to get what I want, you know when playing game and submitting homework assignment.

I know OSCP for long, when Kali was still named as BackTrack. I thought that getting OSCP was hard and somehow I was worrying if I can complete the whole course.

I have read BackTrack and play with Metasploit when I was studying Mphil. date back to 2010. Just 300-400 bytes of machine code allows you to exploit almost everything you can imagine. I felt so overpowered, so glad I don’t do anything silly at that time. You know, when you get a hammer, everything is just like nails.

In previous year, a friend of mine passed OSCP. He recommend me to take OSCP course. He said this is totally worth it. He was not lying. OSCP seems like an expensive game to play, but the lesson learnt is so valuable.

### OSCP training from Oct to Jan
I start on Oct, 2018 and signed up for 30 days. The lab contains 4 network segments, and 50+ machines. 30+ machines on Public network and 3-6 machines on other networks. I have a full time job and other thing to do, so I was working at 1 machine per day.

If you start now, I would suggest you to exploit a few machines first and come up with you note style. This is very important!!! or you have to redo all the machine just to find the key to get into other machine.


 
My note is like that, you can come up with your style.
P.S. I love markdown, it does its job and does it right! Github, Visual code all supporting markdown. I am using Visual code as a note taking software.

```
# Summary
# Information Gathering 
## Port scanning
### TCP port 3389 (Default port for Remote desktop) 
## Service SMB 

# Limited Shell

# Privilege escalation 
## Information gathering
## Administrative shell

# Post Exploitation 
## Shell 
## Hash and Password 
## Network Connection 
## Network traffic 
## Database 
## User folder 
## GUI  
## System information 
## Loot
```

# Reentrance of this machine
I use Metasploit and metrepreter a lot, Yes, you cannot use it in exam, and also forum hints. I think it is better to have the mindset instead of focus on technical stuff. My friend said that you cannot learn much if you use them. I don’t know, I think I am kind of goal oriented, and I think if I learn a skill which I cannot use it to earn money, it is pretty a waste of time. By tying your hand without Metasploit and work on all lab machines. errr… Not for me.

Of course, my mindset is how to put what I have learnt in practice and how to pass to exam, so I do redo some machines when I think doing so can help me pass the exam.


 
My friend said that a guy who cannot pass because he always use Metasploit and forum hints. Haha, not me. (From forum, I know that some people use eternal blue for every Windows machine instead of the intended way. At my time, this issue was fixed, no more cheesing.)

I do say OSCP bring you to the other side of the web, and ask you to use malicious code against others, mostly using publicly known exploit. The technique is a bit old I can say. AFAIK, you will not learn pwning WordPress in the course. Haha. Most of the time, you are working on Win XP, 7, 2008 and Linux kernel version 2.4 up to 3.x, or some softwares which are ceased to exist.

As a software engineer, I know MNC and bank should already replaced these old OS. I remembered that at late 2014, when I working for a bank, I received an email from security team about Shell-shock. Impressive work done. For other small and medium companies, or companies which does not give a shit about IT should be able to present you these opportunities. (They are in way over their heads.)

I think that in real world, the machine is either very easy to pwn, or impossible, because it is either being taken care of or the staff maintaining the machine is gone and gone forever.


 
To sum up, 30 days is not for novice with full time job, there are too many thing you have to learnt to pull things off. I end up using 90 days to complete all the lab machines.

Things to learnt:

Writing exploit
Using Metasploit
Using msfvenom to generate payload
Study of famous exploit technique
SSH tunneling
Active directory and SMB
SSH using cert
Learn the instinct for Linux and Windows environment to get the passwords and valuable information.
Except for 6, You can learn them in HackTheBox and Vulnhub for free before OSCP, but if money is not on the line, pretty sure some people, including me, won’t take it seriously.

### Exam on Feb 6
I start working the exam on 05:00. Mac book is totally worth it, because my Logitech webcam just couldn’t focus and I was ask to present my ID to examiner. I finished 4 machines around 20:00, ended up earning 80 points which I should be able to pass, and start doing the report, you know, to secure what I have got.

I think that Dirb, Nmap, Nikto can give you points on an easy machine, and practice buffer overflow should allow you to secure 20+ points, and the rest, you have to use your instinct, and I can say you have little time to master new concept in this 24 hour. I am glad I do my all my lab machines and I am nosy enough to find the way up to privilege escalation


 
The plan is that: (For those who uses Metasploit and forum hints extensively)

Do full scan of all machine on the first 2 hours
Switch machine every 2 hours, and got familiar to all machines. By now, you should have half your notes fill with information.
Do buffer overflow at the 6th-8th hours.
Go back to the rest, If 2 hours cannot make it, work on other machine.
Get enough marks and start doing the report, and read the exam requirement carefully.
There are unforeseen contingency when I took the exam and had to email to support a couple of time.

### Passed!!
I have received an email on 10 Feb (Sunday) 06:00 saying that I have passed the exam. I am so happy! They are going to ship me the certification via DHL.

### Certificate
Got my certificate today!! 23 Feb.
