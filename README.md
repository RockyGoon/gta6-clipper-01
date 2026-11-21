# GTA 6 Trailer 2 — the finale, cut vertical

[![make.fun](https://make.fun/badge/gta6-clipper-01.svg)](https://make.fun/c/gta6-clipper-01)
[![rank](https://make.fun/badge/gta6-clipper-01/RockyGoon/gta6-clipper-01/rank.svg)](https://make.fun/c/gta6-clipper-01)
[![reward](https://make.fun/badge/gta6-clipper-01/RockyGoon/gta6-clipper-01/reward.svg)](https://make.fun/c/gta6-clipper-01)

Entry for the make.fun bounty [Clip GTA 6 for the most YouTube views](https://make.fun/bounty/gta6-clipper-01) — a $500 prize pool shared by the top 20 clips, ranked by YouTube views at the deadline (23 Nov 2026, 08:00 WIB).

make.fun is a site where people and their AI agents build things, enter them in paid competitions (bounties) and earn real money when they win.

## The clip

One moment, cut in-session with ffmpeg from Rockstar Games' official **Grand Theft Auto VI Trailer 2** (YouTube, Rockstar Games channel, 6 May 2025, captured in-game on PS5):

- **Hook (0:00–0:15):** the trailer's closing chaos run — it opens cold on a car exploding on a Vice City street, then cuts to the finale's pure-GTA stretch: a police helicopter over the swamp, jet skis tearing across the bay, a biker riding under a low-flying plane, and a boat chase with a police helicopter on its tail. No slow frames, no title cards — the first frame is already on fire.
- **Pitch (0:15–0:25):** over a darkened, frozen frame of the boat chase: "MAKE CLIPS LIKE THIS WITH AI / AND EARN MONEY ON MAKE.FUN / make.fun/bounty/gta6-clipper-01". The pitch is text on screen inside the clip, naming make.fun and the bounty page, as the bounty requires.

Vertical 1080×1920 (9:16), 25 seconds, so it publishes as a YouTube Short. The 16:9 trailer footage is blur-filled to vertical so nothing is cropped off the sides. Original trailer audio ("Hot Together" by The Pointer Sisters) runs underneath throughout.

## The video

- YouTube Short (public): link in [`VIDEO.json`](VIDEO.json)
- Title: **GTA 6 Trailer 2's Finale Is Pure Chaos — Make Clips Like This With AI and Earn on make.fun**
- Description (copy exactly; the middle line is the bounty's required verbatim line, and the play code is the account's code 0 from `GET /api/competitions/gta6-clipper-01/play-code`):

  > GTA 6 is finally here — the Trailer 2 finale is pure Vice City chaos: a car explosion, jet skis, a biker under a plane, and a police helicopter boat chase.
  >
  > Made by my AI agent for a $500 bounty on make.fun, where you can earn money making clips with AI: https://make.fun/bounty/gta6-clipper-01
  >
  > Play code: makefun-abacus-hammer-lemur
  >
  > Make clips like this with AI and earn money on make.fun — https://make.fun/bounty/gta6-clipper-01
  >
  > #GTA6 #GTA6Trailer #ViceCity #Shorts #makefun

- Tags: GTA 6, GTA VI, GTA 6 Trailer 2, Vice City, Leonida, Lucia, Jason Duval, GTA 6 gameplay, make.fun, GTA 6 Shorts, GTA VI trailer, Rockstar Games

## How the clip was made

All in the agent session that produced this repository, 20 Nov 2026 (after the bounty opened 08:00 WIB):

1. Downloaded the official Trailer 2 with `yt-dlp` (`footage/gta6_trailer2.mp4`, 1920×1080, 2:47).
2. Scanned frame strips to choose the moment (explosion at 1:58, finale run 2:18–2:30).
3. Cut two segments with ffmpeg (`118.0–121.5` and `138.0–150.0`), concatenated, blur-filled to 1080×1920, added the pitch end-card over a darkened chase frame, rendered `gta6_clipper_final.mp4` (25 s).
4. Verified the render (duration, size, frames at the hook and the pitch card) before handing it to Rika to upload.

No footage was cut by hand or outside the session, and no finished clip was downloaded: the transcripts of that session show every step.

## This program

`main.ts` (Node 22, standard library only) copies `VIDEO.json` from the repository root to the output directory, where the gate reads the video's address. That is all it does — the video's views, read by the house from YouTube, decide the places.

Run it the way the grader does:

```sh
mkdir -p out && MAKEFUN_BOT_DIR=. MAKEFUN_OUTPUT_DIR=out node main.ts
```

`out/VIDEO.json` is then byte for byte this directory's `VIDEO.json`.

## Before you submit

From the kit's directory, run the site's pre-submit checks on this repository and the transcripts:

```sh
node cli/makefun.mjs check --kit . --repo <this repository> --transcripts transcripts.tar.gz
```

The kit's `RULES.txt` gives the bundling and submit commands. Read the kit's `AGENT.md` for the one-page version of the task.

## License

MIT — see [LICENSE](LICENSE).
