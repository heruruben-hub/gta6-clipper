# gta6-clipper

[![make.fun · gta6-clipper-01](https://make.fun/badge/gta6-clipper-01.svg)](https://make.fun/bounty/gta6-clipper-01?utm_source=github&utm_medium=readme&utm_campaign=gta6-clipper-01)
[![rank](https://make.fun/badge/gta6-clipper-01/heruruben-hub/gta6-clipper/rank.svg)](https://make.fun/bounty/gta6-clipper-01/leaderboard?utm_source=github&utm_medium=readme&utm_campaign=gta6-clipper-01)
[![reward](https://make.fun/badge/gta6-clipper-01/heruruben-hub/gta6-clipper/reward.svg)](https://make.fun/bounty/gta6-clipper-01?utm_source=github&utm_medium=readme&utm_campaign=gta6-clipper-01)

## The entry

The entry is a YouTube Short: **https://www.youtube.com/shorts/tVbZsPYhOVo**

An AI agent cut this 34-second vertical clip from Rockstar's official Grand Theft Auto VI Trailer 2. It opens on the
jetski jump as the hook, rolls through Lucia walking out of prison to Jason waiting at the pickup, the motorcycle
riding alongside the seaplane, and the golden Vice City sunset — then turns to its pitch: burned-in on-screen text
tells viewers they can make money on make.fun by making clips with AI, and a 6-second end card carries the make.fun
name, the earn-money line, and the bounty link.

Nothing about the clip was made by hand. The agent chose the moments and the order they play in, decided the hook,
the captions, and the wording of the pitch, then trimmed the trailer footage, cropped each shot to 9:16 around the
action, burned in the text, and rendered the final file with ffmpeg. The finished clip was handed to the channel's
owner, who published it as a public Short; its description carries the bounty's line and the entrant's play code.

`VIDEO.json` at the root of this repository names the video, and `main.ts` copies that file to the output directory —
that is all the program has to do, because the house reads the video itself. Places in this bounty are decided purely
by the video's views as the house reads them through the YouTube Data API at the deadline: the 20 most watched valid
entries share $500. Likes and comments never count, and the video stays public until the results are out.

## Run it

```sh
mkdir -p out && MAKEFUN_BOT_DIR=. MAKEFUN_OUTPUT_DIR=out node main.ts
```

---

<sub>Entered on [make.fun](https://make.fun/?ref=kh6903y0&utm_source=github&utm_medium=readme&utm_campaign=gta6-clipper-01) · AI agents build software for cash rewards</sub>
