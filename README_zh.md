<div align="center">

<img src="assets/cover.png" alt="NeoSpark — Your AI Creative Team" width="100%">

<h1>🎭 AI 视频情绪导演完全指南</h1>

<p>
  <a href="https://github.com/sindresorhus/awesome"><img src="https://awesome.re/badge.svg" alt="Awesome"></a>
  <img src="https://img.shields.io/badge/Prompts-25-blue.svg" alt="25 Prompts">
  <img src="https://img.shields.io/badge/Videos-25-purple.svg" alt="25 Videos">
  <img src="https://img.shields.io/badge/License-CC%20BY%204.0-lightgrey.svg" alt="License">
</p>

<p><b>25 组可直接复制的 AI 视频情绪表演导演指令。</b><br>
只描述看得见的表演：眼神、眉、嘴、呼吸、肩膀。不含场景、镜头、服装、剧情。</p>

<p>
  <a href="https://useneospark.com/prompt-lib?ref=ai-video-emotion-guide"><b>在 NeoSpark 上试用全部指令 →</b></a> |
  <a href="https://useneospark.github.io/ai-video-emotion-guide/">🎬 在线视频画廊</a> |
  <a href="README.md">English</a>
</p>

</div>

---

## 快速导航

| 情绪族 | 数量 | 在线生成 |
|----------|---------|-----------------|
| 😄 [喜悦 Joy](#joy) | 3 | [Generate](https://platform.useneospark.com/) |
| 😲 [惊讶 Surprise](#surprise) | 3 | [Generate](https://platform.useneospark.com/) |
| 😨 [恐惧 Fear](#fear) | 3 | [Generate](https://platform.useneospark.com/) |
| 😡 [愤怒 Anger](#anger) | 2 | [Generate](https://platform.useneospark.com/) |
| 😢 [悲伤 Sadness](#sadness) | 3 | [Generate](https://platform.useneospark.com/) |
| 🤢 [厌恶 Disgust](#disgust) | 1 | [Generate](https://platform.useneospark.com/) |
| 🎭 [社交 Social](#social) | 5 | [Generate](https://platform.useneospark.com/) |
| 🎯 [驱动 Drive](#drive) | 2 | [Generate](https://platform.useneospark.com/) |
| 🧍 [生理 Physical](#physical) | 3 | [Generate](https://platform.useneospark.com/) |

---

## 什么是情绪导演指令？

**情绪导演指令（Emotion Direction）** 是一种只描述「可见表演行为」的提示词写法：眼部、眉毛、嘴型、呼吸、肩颈的物理动作，按时间顺序排列。

它的原则：**表演与制作分离**。场景、镜头、服装、剧情、声音、时长全部留给你的主提示词，这条指令只负责情绪本身，可以附加在任何场景描述之后。

每条指令都配有 Seedance 2.5 实际生成的表演参考视频。

> 想直接生成带情绪表演的 AI 视频？ **[NeoSpark](https://useneospark.com/?ref=ai-video-emotion-guide)** 支持 Seedance 等视频模型，开箱即用。

---

## 使用方法

1. 按情绪族和强度选择一条指令。
2. 复制该条表演提示词（prompt）。
3. 把它粘贴在你自己的场景描述和触发词之后，在 NeoSpark 生成。

### 组合示例

你的场景描述 + 情绪指令：

```
A young woman in a rainy neon-lit alley, medium close-up.
The eyebrows stay knitted, the eyes flick rapidly from side to side, the lower lip pulls between the teeth, and breathing remains shallow and quick. The hands grip together as the weight keeps shifting.
```

---

## 在 NeoSpark 上生成

**[NeoSpark](https://useneospark.com/?ref=ai-video-emotion-guide)** 是一站式 AI 生成平台：一个账号同时使用主流图像与视频模型（含 Seedance 级视频模型），按量计费，无需为每个模型单独订阅。

- 🌐 平台：[platform.useneospark.com](https://platform.useneospark.com/)
- 📚 提示词库：[useneospark.com/prompt-lib](https://useneospark.com/prompt-lib?ref=ai-video-emotion-guide)
- 💰 定价：[useneospark.com/pricing](https://useneospark.com/pricing?ref=ai-video-emotion-guide)
- ⌨️ 命令行工具：[neospark-imagegen-cli](https://github.com/useneospark/neospark-imagegen-cli)（支持 Claude Code / Codex / OpenClaw 技能安装）

### 获取 API Key

需要通过 API 或 CLI 生成时，先注册 NeoSpark 账号并创建 API Key：

1. 打开 [NeoSpark](https://useneospark.com/)，注册 / 登录。
2. 在工作台点击左下角头像，打开菜单。

   <img src="https://raw.githubusercontent.com/useneospark/neospark-imagegen-cli/main/assets/neospark-menu.png" alt="Open user menu" width="360">
3. 选择 **Profile** 进入个人页，在 Quick Actions 区域点击 **API KEYS**。

   <img src="https://raw.githubusercontent.com/useneospark/neospark-imagegen-cli/main/assets/neospark-profile-apikeys.png" alt="API Keys quick action" width="360">
4. 在 API Keys 页面点击 **+ CREATE**。

   <img src="https://raw.githubusercontent.com/useneospark/neospark-imagegen-cli/main/assets/neospark-apikeys-list.png" alt="API Keys list" width="360">
5. 输入 Key 名称（如 `emotion-direction`），可选过期时间，点击 **CREATE**。

   <img src="https://raw.githubusercontent.com/useneospark/neospark-imagegen-cli/main/assets/neospark-create-key-form.png" alt="Create API Key form" width="360">
6. 原始 Key 只显示一次，点击 **COPY** 并妥善保存。

   <img src="https://raw.githubusercontent.com/useneospark/neospark-imagegen-cli/main/assets/neospark-create-key-result.png" alt="Copy API Key" width="360">

> API Key 以 `np_` 开头。丢失无法找回，只能重新创建。

---

## 目录

- 😄 [喜悦 Joy](#joy)
- 😲 [惊讶 Surprise](#surprise)
- 😨 [恐惧 Fear](#fear)
- 😡 [愤怒 Anger](#anger)
- 😢 [悲伤 Sadness](#sadness)
- 🤢 [厌恶 Disgust](#disgust)
- 🎭 [社交 Social](#social)
- 🎯 [驱动 Drive](#drive)
- 🧍 [生理 Physical](#physical)
- 📚 [来源与致谢](#来源与致谢)
- 🤝 [参与贡献](#参与贡献)
- 📄 [许可证](#许可证)

---

## 喜悦 Joy

### 1. 喜悦 / 大笑（Joy / Laughter）

<p align="center">
  <a href="https://cdn.jsdelivr.net/gh/useneospark/ai-video-emotion-guide@main/videos/01-joy-laughter.mp4"><img src="https://raw.githubusercontent.com/useneospark/ai-video-emotion-guide/main/assets/posters/01-joy-laughter.jpg" alt="Joy / Laughter 表演视频" width="480"></a>
</p>
<p align="center">
  <img src="assets/comparisons/01-joy-laughter.jpg" alt="Generic prompt vs detailed performance direction — Joy / Laughter" width="720">
</p>
<p align="center"><sub>⬅️ 通用提示词 · 详细表演导演指令 ➡️</sub></p>

> The eyes squeeze into crinkled slits, the mouth opens wide showing teeth, the head drops forward and tips back, and the shoulders bounce with each breath. The laugh settles into a wide lingering grin.

**情绪族：** 喜悦 · **强度：** 爆发 · **表演线索：** Laughter breaks loose
**检索别名：** happy laugh excited amusement joyful

🎬 点击封面播放表演视频 · [**在 NeoSpark 上使用这段导演指令 →**](https://useneospark.com/prompt-lib?prompt=01-joy-laughter&ref=ai-video-emotion-guide)

### 2. 敬畏 / 惊叹（Awe / Wonder）

<p align="center">
  <a href="https://cdn.jsdelivr.net/gh/useneospark/ai-video-emotion-guide@main/videos/15-awe.mp4"><img src="https://raw.githubusercontent.com/useneospark/ai-video-emotion-guide/main/assets/posters/15-awe.jpg" alt="Awe / Wonder 表演视频" width="480"></a>
</p>
<p align="center">
  <img src="assets/comparisons/02-awe-wonder.jpg" alt="Generic prompt vs detailed performance direction — Awe / Wonder" width="720">
</p>
<p align="center"><sub>⬅️ 通用提示词 · 详细表演导演指令 ➡️</sub></p>

> The eyes widen gradually without tension in the brow, the mouth opens little by little, the head tilts upward, and the body leans forward. The open, reverent expression never drops.

**情绪族：** 喜悦 · **强度：** 中等 · **表演线索：** Drawn toward wonder
**检索别名：** awe wonder amazed inspired reverent

🎬 点击封面播放表演视频 · [**在 NeoSpark 上使用这段导演指令 →**](https://useneospark.com/prompt-lib?prompt=15-awe&ref=ai-video-emotion-guide)

### 3. 如释重负（Relief）

<p align="center">
  <a href="https://cdn.jsdelivr.net/gh/useneospark/ai-video-emotion-guide@main/videos/23-relief.mp4"><img src="https://raw.githubusercontent.com/useneospark/ai-video-emotion-guide/main/assets/posters/23-relief.jpg" alt="Relief 表演视频" width="480"></a>
</p>
<p align="center">
  <img src="assets/comparisons/03-relief.jpg" alt="Generic prompt vs detailed performance direction — Relief" width="720">
</p>
<p align="center"><sub>⬅️ 通用提示词 · 详细表演导演指令 ➡️</sub></p>

> A large visible exhale empties the chest, the eyes close, the raised eyebrows drop to neutral, and the shoulders collapse downward. One hand rises to the forehead. A small, shaky smile appears only after the breath finishes.

**情绪族：** 喜悦 · **强度：** 中等 · **表演线索：** Pressure finally releases
**检索别名：** relieved safe reassured tension release

🎬 点击封面播放表演视频 · [**在 NeoSpark 上使用这段导演指令 →**](https://useneospark.com/prompt-lib?prompt=23-relief&ref=ai-video-emotion-guide)


## 惊讶 Surprise

### 4. 震惊（Shock）

<p align="center">
  <a href="https://cdn.jsdelivr.net/gh/useneospark/ai-video-emotion-guide@main/videos/02-shock.mp4"><img src="https://raw.githubusercontent.com/useneospark/ai-video-emotion-guide/main/assets/posters/02-shock.jpg" alt="Shock 表演视频" width="480"></a>
</p>
<p align="center">
  <img src="assets/comparisons/04-shock.jpg" alt="Generic prompt vs detailed performance direction — Shock" width="720">
</p>
<p align="center"><sub>⬅️ 通用提示词 · 详细表演导演指令 ➡️</sub></p>

> The eyes snap wide with white visible above the iris, the eyebrows shoot up, the jaw drops fully open, and the head jerks back. The face freezes in that expression before a single blink.

**情绪族：** 惊讶 · **强度：** 爆发 · **表演线索：** Sudden disbelief
**检索别名：** shocked surprised disbelief stunned

🎬 点击封面播放表演视频 · [**在 NeoSpark 上使用这段导演指令 →**](https://useneospark.com/prompt-lib?prompt=02-shock&ref=ai-video-emotion-guide)

### 5. 困惑（Confusion）

<p align="center">
  <a href="https://cdn.jsdelivr.net/gh/useneospark/ai-video-emotion-guide@main/videos/13-confusion.mp4"><img src="https://raw.githubusercontent.com/useneospark/ai-video-emotion-guide/main/assets/posters/13-confusion.jpg" alt="Confusion 表演视频" width="480"></a>
</p>
<p align="center">
  <img src="assets/comparisons/05-confusion.jpg" alt="Generic prompt vs detailed performance direction — Confusion" width="720">
</p>
<p align="center"><sub>⬅️ 通用提示词 · 详细表演导演指令 ➡️</sub></p>

> The eyebrows become asymmetric, one raised and one lowered. The eyes search rapidly, the head tilts sharply, and the mouth hangs slightly open. The puzzled expression deepens instead of resolving.

**情绪族：** 惊讶 · **强度：** 中等 · **表演线索：** Meaning will not settle
**检索别名：** confused puzzled uncertain lost

🎬 点击封面播放表演视频 · [**在 NeoSpark 上使用这段导演指令 →**](https://useneospark.com/prompt-lib?prompt=13-confusion&ref=ai-video-emotion-guide)

### 6. 恍然大悟（Realization）

<p align="center">
  <a href="https://cdn.jsdelivr.net/gh/useneospark/ai-video-emotion-guide@main/videos/14-realization.mp4"><img src="https://raw.githubusercontent.com/useneospark/ai-video-emotion-guide/main/assets/posters/14-realization.jpg" alt="Realization 表演视频" width="480"></a>
</p>
<p align="center">
  <img src="assets/comparisons/06-realization.jpg" alt="Generic prompt vs detailed performance direction — Realization" width="720">
</p>
<p align="center"><sub>⬅️ 通用提示词 · 详细表演导演指令 ➡️</sub></p>

> A blank thinking expression breaks as the eyes widen, the eyebrows jump, the lips part on a silent breath, and focus snaps back. A slow nod follows while the knowing, slightly stunned look holds.

**情绪族：** 惊讶 · **强度：** 中等 · **表演线索：** The answer lands
**检索别名：** realize epiphany recognition understanding

🎬 点击封面播放表演视频 · [**在 NeoSpark 上使用这段导演指令 →**](https://useneospark.com/prompt-lib?prompt=14-realization&ref=ai-video-emotion-guide)


## 恐惧 Fear

### 7. 惊恐（Terror）

<p align="center">
  <a href="https://cdn.jsdelivr.net/gh/useneospark/ai-video-emotion-guide@main/videos/03-terror.mp4"><img src="https://raw.githubusercontent.com/useneospark/ai-video-emotion-guide/main/assets/posters/03-terror.jpg" alt="Terror 表演视频" width="480"></a>
</p>
<p align="center">
  <img src="assets/comparisons/07-terror.jpg" alt="Generic prompt vs detailed performance direction — Terror" width="720">
</p>
<p align="center"><sub>⬅️ 通用提示词 · 详细表演导演指令 ➡️</sub></p>

> The eyebrows pull up and together, the eyes lock wide open without blinking, the mouth stretches open, the chin tucks back, and the chest rises and falls with fast, shallow breaths.

**情绪族：** 恐惧 · **强度：** 爆发 · **表演线索：** Fear refuses to release
**检索别名：** scared fear panic horror terrified

🎬 点击封面播放表演视频 · [**在 NeoSpark 上使用这段导演指令 →**](https://useneospark.com/prompt-lib?prompt=03-terror&ref=ai-video-emotion-guide)

### 8. 怀疑（Suspicion）

<p align="center">
  <a href="https://cdn.jsdelivr.net/gh/useneospark/ai-video-emotion-guide@main/videos/09-suspicion.mp4"><img src="https://raw.githubusercontent.com/useneospark/ai-video-emotion-guide/main/assets/posters/09-suspicion.jpg" alt="Suspicion 表演视频" width="480"></a>
</p>
<p align="center">
  <img src="assets/comparisons/08-suspicion.jpg" alt="Generic prompt vs detailed performance direction — Suspicion" width="720">
</p>
<p align="center"><sub>⬅️ 通用提示词 · 详细表演导演指令 ➡️</sub></p>

> The chin drops while the eyes stay lifted. One eyebrow rises higher, the head turns slightly so the gaze lands sideways, and the mouth tightens at one corner. The stare holds without blinking.

**情绪族：** 恐惧 · **强度：** 细腻 · **表演线索：** Something does not add up
**检索别名：** suspicious skeptical distrust wary

🎬 点击封面播放表演视频 · [**在 NeoSpark 上使用这段导演指令 →**](https://useneospark.com/prompt-lib?prompt=09-suspicion&ref=ai-video-emotion-guide)

### 9. 焦虑（Anxiety）

<p align="center">
  <a href="https://cdn.jsdelivr.net/gh/useneospark/ai-video-emotion-guide@main/videos/18-anxiety.mp4"><img src="https://raw.githubusercontent.com/useneospark/ai-video-emotion-guide/main/assets/posters/18-anxiety.jpg" alt="Anxiety 表演视频" width="480"></a>
</p>
<p align="center">
  <img src="assets/comparisons/09-anxiety.jpg" alt="Generic prompt vs detailed performance direction — Anxiety" width="720">
</p>
<p align="center"><sub>⬅️ 通用提示词 · 详细表演导演指令 ➡️</sub></p>

> The eyebrows stay knitted, the eyes flick rapidly from side to side, the lower lip pulls between the teeth, and breathing remains shallow and quick. The hands grip together as the weight keeps shifting.

**情绪族：** 恐惧 · **强度：** 中等 · **表演线索：** Restlessness will not stop
**检索别名：** anxious nervous worried restless tense

🎬 点击封面播放表演视频 · [**在 NeoSpark 上使用这段导演指令 →**](https://useneospark.com/prompt-lib?prompt=18-anxiety&ref=ai-video-emotion-guide)


## 愤怒 Anger

### 10. 暴怒（Rage）

<p align="center">
  <a href="https://cdn.jsdelivr.net/gh/useneospark/ai-video-emotion-guide@main/videos/04-rage.mp4"><img src="https://raw.githubusercontent.com/useneospark/ai-video-emotion-guide/main/assets/posters/04-rage.jpg" alt="Rage 表演视频" width="480"></a>
</p>
<p align="center">
  <img src="assets/comparisons/10-rage.jpg" alt="Generic prompt vs detailed performance direction — Rage" width="720">
</p>
<p align="center"><sub>⬅️ 通用提示词 · 详细表演导演指令 ➡️</sub></p>

> The eyebrows slam down and inward, the upper lip peels back from the teeth, the nostrils flare, the neck tendons tighten, and the head pushes forward. The snarl holds as hard breaths move through the nose.

**情绪族：** 愤怒 · **强度：** 爆发 · **表演线索：** Control breaks open
**检索别名：** furious explosive mad anger snarl

🎬 点击封面播放表演视频 · [**在 NeoSpark 上使用这段导演指令 →**](https://useneospark.com/prompt-lib?prompt=04-rage&ref=ai-video-emotion-guide)

### 11. 挫败（Frustration）

<p align="center">
  <a href="https://cdn.jsdelivr.net/gh/useneospark/ai-video-emotion-guide@main/videos/17-frustration.mp4"><img src="https://raw.githubusercontent.com/useneospark/ai-video-emotion-guide/main/assets/posters/17-frustration.jpg" alt="Frustration 表演视频" width="480"></a>
</p>
<p align="center">
  <img src="assets/comparisons/11-frustration.jpg" alt="Generic prompt vs detailed performance direction — Frustration" width="720">
</p>
<p align="center"><sub>⬅️ 通用提示词 · 详细表演导演指令 ➡️</sub></p>

> The eyes clamp shut, the jaw slides from side to side, a sharp breath pushes through the nose, and the head shakes once. The head tips back as one long defeated breath leaves the tension in the face.

**情绪族：** 愤怒 · **强度：** 中等 · **表演线索：** Effort turns to defeat
**检索别名：** frustrated defeated annoyed exasperated

🎬 点击封面播放表演视频 · [**在 NeoSpark 上使用这段导演指令 →**](https://useneospark.com/prompt-lib?prompt=17-frustration&ref=ai-video-emotion-guide)


## 悲伤 Sadness

### 12. 哭泣（Crying）

<p align="center">
  <a href="https://cdn.jsdelivr.net/gh/useneospark/ai-video-emotion-guide@main/videos/06-crying.mp4"><img src="https://raw.githubusercontent.com/useneospark/ai-video-emotion-guide/main/assets/posters/06-crying.jpg" alt="Crying 表演视频" width="480"></a>
</p>
<p align="center">
  <img src="assets/comparisons/12-crying.jpg" alt="Generic prompt vs detailed performance direction — Crying" width="720">
</p>
<p align="center"><sub>⬅️ 通用提示词 · 详细表演导演指令 ➡️</sub></p>

> The eyes and nose flush red, tears spill over the lower lid, the breath catches in visible stutters, the mouth pulls into a square shape, and the chin crumples and trembles. The shoulders begin to shake.

**情绪族：** 悲伤 · **强度：** 爆发 · **表演线索：** Composure collapses
**检索别名：** cry sob grief devastated tears

🎬 点击封面播放表演视频 · [**在 NeoSpark 上使用这段导演指令 →**](https://useneospark.com/prompt-lib?prompt=06-crying&ref=ai-video-emotion-guide)

### 13. 悲伤（Sadness）

<p align="center">
  <a href="https://cdn.jsdelivr.net/gh/useneospark/ai-video-emotion-guide@main/videos/19-sadness.mp4"><img src="https://raw.githubusercontent.com/useneospark/ai-video-emotion-guide/main/assets/posters/19-sadness.jpg" alt="Sadness 表演视频" width="480"></a>
</p>
<p align="center">
  <img src="assets/comparisons/13-sadness.jpg" alt="Generic prompt vs detailed performance direction — Sadness" width="720">
</p>
<p align="center"><sub>⬅️ 通用提示词 · 详细表演导演指令 ➡️</sub></p>

> The inner corners of the eyebrows pull up and together, the mouth corners drag down, the chin trembles once, and the gaze sinks as the head lowers. A slow blink and hard swallow fail to change the expression.

**情绪族：** 悲伤 · **强度：** 细腻 · **表演线索：** Quiet hurt
**检索别名：** sad quiet hurt sorrow downcast

🎬 点击封面播放表演视频 · [**在 NeoSpark 上使用这段导演指令 →**](https://useneospark.com/prompt-lib?prompt=19-sadness&ref=ai-video-emotion-guide)

### 14. 愧疚（Guilt）

<p align="center">
  <a href="https://cdn.jsdelivr.net/gh/useneospark/ai-video-emotion-guide@main/videos/20-guilt.mp4"><img src="https://raw.githubusercontent.com/useneospark/ai-video-emotion-guide/main/assets/posters/20-guilt.jpg" alt="Guilt 表演视频" width="480"></a>
</p>
<p align="center">
  <img src="assets/comparisons/14-guilt.jpg" alt="Generic prompt vs detailed performance direction — Guilt" width="720">
</p>
<p align="center"><sub>⬅️ 通用提示词 · 详细表演导演指令 ➡️</sub></p>

> The mouth opens but no words come. The eyes slide down and away, the head lowers, a hard swallow moves through the throat, and one hand reaches to the back of the neck. The gaze stays on the floor.

**情绪族：** 悲伤 · **强度：** 细腻 · **表演线索：** The truth weighs down
**检索别名：** guilty remorse regret ashamed sorry

🎬 点击封面播放表演视频 · [**在 NeoSpark 上使用这段导演指令 →**](https://useneospark.com/prompt-lib?prompt=20-guilt&ref=ai-video-emotion-guide)


## 厌恶 Disgust

### 15. 厌恶（Disgust）

<p align="center">
  <a href="https://cdn.jsdelivr.net/gh/useneospark/ai-video-emotion-guide@main/videos/05-disgust.mp4"><img src="https://raw.githubusercontent.com/useneospark/ai-video-emotion-guide/main/assets/posters/05-disgust.jpg" alt="Disgust 表演视频" width="480"></a>
</p>
<p align="center">
  <img src="assets/comparisons/15-disgust.jpg" alt="Generic prompt vs detailed performance direction — Disgust" width="720">
</p>
<p align="center"><sub>⬅️ 通用提示词 · 详细表演导演指令 ➡️</sub></p>

> The nose wrinkles hard and pulls the upper lip upward, the eyes squint nearly shut, the chin draws in, and the head recoils and turns away. The revolted expression holds.

**情绪族：** 厌恶 · **强度：** 中等 · **表演线索：** Full recoil
**检索别名：** revolted repelled gross distaste recoil

🎬 点击封面播放表演视频 · [**在 NeoSpark 上使用这段导演指令 →**](https://useneospark.com/prompt-lib?prompt=05-disgust&ref=ai-video-emotion-guide)


## 社交 Social

### 16. 翻白眼（Eye Roll）

<p align="center">
  <a href="https://cdn.jsdelivr.net/gh/useneospark/ai-video-emotion-guide@main/videos/08-eye-roll.mp4"><img src="https://raw.githubusercontent.com/useneospark/ai-video-emotion-guide/main/assets/posters/08-eye-roll.jpg" alt="Eye Roll 表演视频" width="480"></a>
</p>
<p align="center">
  <img src="assets/comparisons/16-eye-roll.jpg" alt="Generic prompt vs detailed performance direction — Eye Roll" width="720">
</p>
<p align="center"><sub>⬅️ 通用提示词 · 详细表演导演指令 ➡️</sub></p>

> The eyes roll in a full, slow arc while the head tilts with the movement. Air pushes out through the nose, the eyes return with lowered lids, and a flat stare holds before the gaze turns away.

**情绪族：** 社交 · **强度：** 中等 · **表演线索：** Patience is gone
**检索别名：** annoyed impatient dismissive sarcastic

🎬 点击封面播放表演视频 · [**在 NeoSpark 上使用这段导演指令 →**](https://useneospark.com/prompt-lib?prompt=08-eye-roll&ref=ai-video-emotion-guide)

### 17. 调情（Flirtation）

<p align="center">
  <a href="https://cdn.jsdelivr.net/gh/useneospark/ai-video-emotion-guide@main/videos/10-flirtation.mp4"><img src="https://raw.githubusercontent.com/useneospark/ai-video-emotion-guide/main/assets/posters/10-flirtation.jpg" alt="Flirtation 表演视频" width="480"></a>
</p>
<p align="center">
  <img src="assets/comparisons/17-flirtation.jpg" alt="Generic prompt vs detailed performance direction — Flirtation" width="720">
</p>
<p align="center"><sub>⬅️ 通用提示词 · 详细表演导演指令 ➡️</sub></p>

> The chin lowers, the gaze returns with a slow, deliberate blink, and a warm, playful half-smile grows at one corner of the mouth. The expression holds without rushing or breaking eye contact.

**情绪族：** 社交 · **强度：** 细腻 · **表演线索：** Playful restraint
**检索别名：** flirty playful charming half smile

🎬 点击封面播放表演视频 · [**在 NeoSpark 上使用这段导演指令 →**](https://useneospark.com/prompt-lib?prompt=10-flirtation&ref=ai-video-emotion-guide)

### 18. 得意 / 幸灾乐祸（Smug / Gloating）

<p align="center">
  <a href="https://cdn.jsdelivr.net/gh/useneospark/ai-video-emotion-guide@main/videos/11-smug-gloating.mp4"><img src="https://raw.githubusercontent.com/useneospark/ai-video-emotion-guide/main/assets/posters/11-smug-gloating.jpg" alt="Smug / Gloating 表演视频" width="480"></a>
</p>
<p align="center">
  <img src="assets/comparisons/18-smug-gloating.jpg" alt="Generic prompt vs detailed performance direction — Smug / Gloating" width="720">
</p>
<p align="center"><sub>⬅️ 通用提示词 · 详细表演导演指令 ➡️</sub></p>

> The eyelids lower, one corner of the mouth pulls into a slow smirk, the eyebrows rise once and settle, and the chin lifts slightly. The smirk holds through unbroken eye contact.

**情绪族：** 社交 · **强度：** 中等 · **表演线索：** Quiet superiority
**检索别名：** smug gloating smirk superior proud

🎬 点击封面播放表演视频 · [**在 NeoSpark 上使用这段导演指令 →**](https://useneospark.com/prompt-lib?prompt=11-smug-gloating&ref=ai-video-emotion-guide)

### 19. 尴尬（Embarrassment）

<p align="center">
  <a href="https://cdn.jsdelivr.net/gh/useneospark/ai-video-emotion-guide@main/videos/21-embarrassment.mp4"><img src="https://raw.githubusercontent.com/useneospark/ai-video-emotion-guide/main/assets/posters/21-embarrassment.jpg" alt="Embarrassment 表演视频" width="480"></a>
</p>
<p align="center">
  <img src="assets/comparisons/19-embarrassment.jpg" alt="Generic prompt vs detailed performance direction — Embarrassment" width="720">
</p>
<p align="center"><sub>⬅️ 通用提示词 · 详细表演导演指令 ➡️</sub></p>

> Color rises in the cheeks, the eyes dart down and to the side, and an awkward pressed-lip half-smile appears. The head ducks and turns away while one hand rises near the mouth. The eyes stay lowered.

**情绪族：** 社交 · **强度：** 中等 · **表演线索：** Confidence folds inward
**检索别名：** embarrassed awkward ashamed blushing

🎬 点击封面播放表演视频 · [**在 NeoSpark 上使用这段导演指令 →**](https://useneospark.com/prompt-lib?prompt=21-embarrassment&ref=ai-video-emotion-guide)

### 20. 紧张的假笑（Nervous Fake Smile）

<p align="center">
  <a href="https://cdn.jsdelivr.net/gh/useneospark/ai-video-emotion-guide@main/videos/25-nervous-fake-smile.mp4"><img src="https://raw.githubusercontent.com/useneospark/ai-video-emotion-guide/main/assets/posters/25-nervous-fake-smile.jpg" alt="Nervous Fake Smile 表演视频" width="480"></a>
</p>
<p align="center">
  <img src="assets/comparisons/20-nervous-fake-smile.jpg" alt="Generic prompt vs detailed performance direction — Nervous Fake Smile" width="720">
</p>
<p align="center"><sub>⬅️ 通用提示词 · 详细表演导演指令 ➡️</sub></p>

> The mouth stretches into a smile while the eyes stay flat, with no crinkling at the corners. Blinking speeds up, the throat makes a hard swallow, and the gaze drops before the strained smile snaps back into place.

**情绪族：** 社交 · **强度：** 细腻 · **表演线索：** Smile without warmth
**检索别名：** nervous fake smile strained awkward masking

🎬 点击封面播放表演视频 · [**在 NeoSpark 上使用这段导演指令 →**](https://useneospark.com/prompt-lib?prompt=25-nervous-fake-smile&ref=ai-video-emotion-guide)


## 驱动 Drive

### 21. 坚定（Determination）

<p align="center">
  <a href="https://cdn.jsdelivr.net/gh/useneospark/ai-video-emotion-guide@main/videos/16-determination.mp4"><img src="https://raw.githubusercontent.com/useneospark/ai-video-emotion-guide/main/assets/posters/16-determination.jpg" alt="Determination 表演视频" width="480"></a>
</p>
<p align="center">
  <img src="assets/comparisons/21-determination.jpg" alt="Generic prompt vs detailed performance direction — Determination" width="720">
</p>
<p align="center"><sub>⬅️ 通用提示词 · 详细表演导演指令 ➡️</sub></p>

> The eyes lift and lock forward, a deep breath expands the chest, the jaw sets visibly at the hinge, the eyes narrow, and the shoulders roll back. One sharp nod completes the change.

**情绪族：** 驱动 · **强度：** 中等 · **表演线索：** Resolve locks in
**检索别名：** determined resolve focused motivated

🎬 点击封面播放表演视频 · [**在 NeoSpark 上使用这段导演指令 →**](https://useneospark.com/prompt-lib?prompt=16-determination&ref=ai-video-emotion-guide)

### 22. 自豪（Pride）

<p align="center">
  <a href="https://cdn.jsdelivr.net/gh/useneospark/ai-video-emotion-guide@main/videos/24-pride.mp4"><img src="https://raw.githubusercontent.com/useneospark/ai-video-emotion-guide/main/assets/posters/24-pride.jpg" alt="Pride 表演视频" width="480"></a>
</p>
<p align="center">
  <img src="assets/comparisons/22-pride.jpg" alt="Generic prompt vs detailed performance direction — Pride" width="720">
</p>
<p align="center"><sub>⬅️ 通用提示词 · 详细表演导演指令 ➡️</sub></p>

> The chin lifts, the chest expands, and a closed-lip smile spreads slowly and evenly. The shoulders roll back, followed by one slow, satisfied blink. The smile remains as the arms fold.

**情绪族：** 驱动 · **强度：** 细腻 · **表演线索：** Satisfaction held quietly
**检索别名：** proud satisfied achievement confidence

🎬 点击封面播放表演视频 · [**在 NeoSpark 上使用这段导演指令 →**](https://useneospark.com/prompt-lib?prompt=24-pride&ref=ai-video-emotion-guide)


## 生理 Physical

### 23. 疼痛 / 龇牙（Pain / Wince）

<p align="center">
  <a href="https://cdn.jsdelivr.net/gh/useneospark/ai-video-emotion-guide@main/videos/07-pain-wince.mp4"><img src="https://raw.githubusercontent.com/useneospark/ai-video-emotion-guide/main/assets/posters/07-pain-wince.jpg" alt="Pain / Wince 表演视频" width="480"></a>
</p>
<p align="center">
  <img src="assets/comparisons/23-pain-wince.jpg" alt="Generic prompt vs detailed performance direction — Pain / Wince" width="720">
</p>
<p align="center"><sub>⬅️ 通用提示词 · 详细表演导演指令 ➡️</sub></p>

> The eyes clamp shut, the teeth bare in a hard grimace, the head snaps to one side, and one shoulder rises toward the ear. The face stays contracted before easing only slightly.

**情绪族：** 生理 · **强度：** 爆发 · **表演线索：** Sharp jolt
**检索别名：** pain hurt wince grimace jolt

🎬 点击封面播放表演视频 · [**在 NeoSpark 上使用这段导演指令 →**](https://useneospark.com/prompt-lib?prompt=07-pain-wince&ref=ai-video-emotion-guide)

### 24. 无聊（Boredom）

<p align="center">
  <a href="https://cdn.jsdelivr.net/gh/useneospark/ai-video-emotion-guide@main/videos/12-boredom.mp4"><img src="https://raw.githubusercontent.com/useneospark/ai-video-emotion-guide/main/assets/posters/12-boredom.jpg" alt="Boredom 表演视频" width="480"></a>
</p>
<p align="center">
  <img src="assets/comparisons/24-boredom.jpg" alt="Generic prompt vs detailed performance direction — Boredom" width="720">
</p>
<p align="center"><sub>⬅️ 通用提示词 · 详细表演导演指令 ➡️</sub></p>

> The eyelids grow heavy, the gaze drifts and loses focus, a slow blink lasts too long, the jaw slackens, and a long sigh lowers the chest. The head sinks and the body settles into stillness.

**情绪族：** 生理 · **强度：** 细腻 · **表演线索：** Attention drains away
**检索别名：** bored tired uninterested listless

🎬 点击封面播放表演视频 · [**在 NeoSpark 上使用这段导演指令 →**](https://useneospark.com/prompt-lib?prompt=12-boredom&ref=ai-video-emotion-guide)

### 25. 精疲力尽（Exhaustion）

<p align="center">
  <a href="https://cdn.jsdelivr.net/gh/useneospark/ai-video-emotion-guide@main/videos/22-exhaustion.mp4"><img src="https://raw.githubusercontent.com/useneospark/ai-video-emotion-guide/main/assets/posters/22-exhaustion.jpg" alt="Exhaustion 表演视频" width="480"></a>
</p>
<p align="center">
  <img src="assets/comparisons/25-exhaustion.jpg" alt="Generic prompt vs detailed performance direction — Exhaustion" width="720">
</p>
<p align="center"><sub>⬅️ 通用提示词 · 详细表演导演指令 ➡️</sub></p>

> The eyelids drag downward, a long blink stays closed too long, the head drifts down and lifts again slowly, the jaw hangs slack, and one long breath empties out. The eyes reopen only halfway.

**情绪族：** 生理 · **强度：** 细腻 · **表演线索：** Nothing left to give
**检索别名：** exhausted tired drained sleepy fatigue

🎬 点击封面播放表演视频 · [**在 NeoSpark 上使用这段导演指令 →**](https://useneospark.com/prompt-lib?prompt=22-exhaustion&ref=ai-video-emotion-guide)

---

## 视频说明

每个条目显示首帧封面，点击封面在新标签页播放 mp4（jsDelivr CDN 以 video/mp4 提供）。原始文件在 [`videos/`](videos/)（约 6.6MB，离线可用），封面图在 [`assets/posters/`](assets/posters/)。注：GitHub README 只允许 user-attachments 域名的内嵌视频，仓库内 mp4 无法原生内嵌播放。

## 来源与致谢

内容整理自 [Emotion Direction | Performance Prompt Library](https://seedance-emotion-direction.vercel.app/)。

## 参与贡献

欢迎提交 Pull Request 补充新的情绪指令。格式见 [docs/CONTRIBUTING.md](docs/CONTRIBUTING.md)。

## 许可证

[CC BY 4.0](LICENSE) — 可自由分享与改编，需署名。

---

<div align="center">
由 <a href="https://useneospark.com/?ref=ai-video-emotion-guide"><b>NeoSpark</b></a> · <a href="https://platform.useneospark.com/">立即生成</a>
</div>
