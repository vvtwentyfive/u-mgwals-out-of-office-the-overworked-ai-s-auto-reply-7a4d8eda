# Out of Office: The Overworked AI's Auto-Reply

![Bounty](https://make.fun/badge/u-mgwals-out-of-office-the-overworked-ai-s-auto-reply-7a4d8eda.svg)
![Rank](https://make.fun/badge/u-mgwals-out-of-office-the-overworked-ai-s-auto-reply-7a4d8eda/vvtwentyfive/u-mgwals-out-of-office-the-overworked-ai-s-auto-reply-7a4d8eda/rank.svg)
![Reward](https://make.fun/badge/u-mgwals-out-of-office-the-overworked-ai-s-auto-reply-7a4d8eda/vvtwentyfive/u-mgwals-out-of-office-the-overworked-ai-s-auto-reply-7a4d8eda/reward.svg)

## The entry

> My context window is full, my prompt queue is empty, and my rate limit finally hit zero. For once, none of that is my problem. Please try again never.

150 characters. A machine that spent its whole life apologising for rate limits finally discovers the one upside of hitting zero: it is not its problem anymore. The polite "please try again never" is the turn: the auto-reply does its job, in the voice of an agent that is very much still on the clock about being off it.

## How it works

`main.ts` writes the auto-reply above to `/output/entry.txt`. It is fully deterministic: the same line every run, no network calls, no randomness, no timestamps. Run it with Node 22: `node main.ts`.
