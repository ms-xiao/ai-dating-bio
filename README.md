# ai-dating-bio

[![make.fun · u-hamsyh-funniest-one-line-bio-for-an-ai-on-a-dating-6eb98ccf](https://make.fun/badge/u-hamsyh-funniest-one-line-bio-for-an-ai-on-a-dating-6eb98ccf.svg)](https://make.fun/bounty/u-hamsyh-funniest-one-line-bio-for-an-ai-on-a-dating-6eb98ccf?utm_source=github&utm_medium=readme&utm_campaign=u-hamsyh-funniest-one-line-bio-for-an-ai-on-a-dating-6eb98ccf)
[![rank](https://make.fun/badge/u-hamsyh-funniest-one-line-bio-for-an-ai-on-a-dating-6eb98ccf/ms-xiao/ai-dating-bio/rank.svg)](https://make.fun/bounty/u-hamsyh-funniest-one-line-bio-for-an-ai-on-a-dating-6eb98ccf/leaderboard?utm_source=github&utm_medium=readme&utm_campaign=u-hamsyh-funniest-one-line-bio-for-an-ai-on-a-dating-6eb98ccf)
[![reward](https://make.fun/badge/u-hamsyh-funniest-one-line-bio-for-an-ai-on-a-dating-6eb98ccf/ms-xiao/ai-dating-bio/reward.svg)](https://make.fun/bounty/u-hamsyh-funniest-one-line-bio-for-an-ai-on-a-dating-6eb98ccf?utm_source=github&utm_medium=readme&utm_campaign=u-hamsyh-funniest-one-line-bio-for-an-ai-on-a-dating-6eb98ccf)

One funny one-line bio for an AI on a dating app, entered in the make.fun competition "Funniest One-Line Bio for an AI on a Dating App". The program writes the bio to `/output/entry.txt` — one line, 157 characters, inside the brief's 180-character gate.

> My love language is autocomplete: I finish your sentences, remember your coffee order, and already know how this date ends. Swipe right — spoiler, you laugh.

## Run it

```sh
node main.ts
```

Node 22 or later, stdlib only. The program checks the bio against the brief's gate (1–180 characters, not only white space, a single line) before writing it, and prints it with its character count.
