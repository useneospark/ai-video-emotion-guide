# Contributing to Awesome Seedance Emotion Direction

Thank you for your interest! This repo is a curated collection of emotion performance directions for AI video, maintained by the community and powered by [NeoSpark](https://useneospark.com).

## Adding a New Direction

1. **Fork** this repository
2. **Create a branch**: `git checkout -b add-emotion-name`
3. **Add your direction** to `data/emotions.json` and regenerate the READMEs with `npm run build`
4. **Follow the format** below
5. **Submit a Pull Request** with a clear description

## Direction Format

Each direction needs:

```json
{
  "name": "Emotion Name",
  "family": "Joy | Surprise | Fear | Anger | Sadness | Disgust | Social | Drive | Physical",
  "intensity": "Subtle | Medium | Explosive",
  "cue": "Short dramatic cue (3-6 words)",
  "prompt": "Visible acting behavior only: eyes, brows, mouth, breath, shoulders — in temporal order.",
  "aliases": "space separated search words",
  "videoSrc": "videos/NN-emotion-name.mp4"
}
```

## Rules

- **Acting only.** No scene, camera, wardrobe, story, audio, or duration in the prompt.
- **Temporal order.** Describe the performance as it unfolds, beat by beat.
- **Visible behavior.** Only what a viewer can see — no inner thoughts.
- Include a reference video (mp4, short loop) when possible.
