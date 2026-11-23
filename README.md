# ☃ Snowman Desktop Pet · 堆雪人 · 눈사람 만들기

[English](#english) · [中文](#中文) · [한국어](#한국어)

---

## English

A cozy winter desktop pet. Snow piles up right on top of your taskbar — roll snowballs, stack them into snowmen, and decorate them with a click.

### Features
- **Roll to grow** — drag a snowball left and right to make it bigger (with a size limit).
- **Stack** — lift a snowball and drop it on another one. Stack as high as you dare.
- **Balance & wobble** — tall snowmen with off-center balls start to sway, and collapse on their own past the tipping point.
- **Smash** — pick up a snowman and drop it from high up: it shatters into snow.
- **Auto-decorate** — click the top snowball to dress it up: eyes, carrot nose, scarf, buttons, stick arms and a hat.
- **18 snowman types**, all equally likely and never the same twice in a row — Santa, cat, rabbit, tangerine, strawberry hat, bear hat, earmuffs, bubble tea, sweet potato chef, pirate, king, sunglasses, golden snowman, melting snowman and more.
- **Snow sculptor** — sometimes a sculptor carves the snowman into a palace, Santa or reindeer sculpture.
- **Christmas items** — every snowman pops out an item (bell, stocking, candy cane, star, gift, wreath…). Drag items to the top of the screen to hang them on a string; sweep your mouse to make them swing.
- **Fireworks** — drag a firework up and let go: it launches and bursts into shapes (heart, star, snowflake, tree, smiley…) with chain bursts and glitter.
- **Korean / Chinese** UI.

### Run in a browser
Open `index.html` in Chrome or Edge (press F11 for full screen).
Add `?lang=zh` to the URL for Chinese.

### Run as a desktop overlay (Windows)
The snowman floats transparently over your desktop. Clicks pass through to the windows behind it, except on snowballs and items.

1. Install [Node.js](https://nodejs.org) (LTS).
2. Double-click `run-overlay.bat` (Korean) or `run-overlay-zh.bat` (Chinese).
   The first run downloads Electron (~100 MB).

Or from a terminal:
```bash
npm install
npm start            # Korean
npm start -- --zh    # Chinese
```
**Quit:** `Ctrl + Shift + Q`, or the ✕ button above the snow at the bottom-left.

> If the Electron download fails (e.g. in mainland China), set a mirror first:
> `set ELECTRON_MIRROR=https://npmmirror.com/mirrors/electron/` (the `.bat` files already do this).

---

## 中文

一个温暖的冬日桌面宠物。雪会堆在任务栏上方——滚雪球、堆雪人，点一下就能给雪人自动装扮。

### 功能
- **滚雪球** —— 左右拖动雪球，它会越滚越大（有最大尺寸限制）。
- **堆雪人** —— 把雪球拎起来放到另一个雪球上，可以一直往上堆。
- **重心摇晃** —— 堆得越高、放得越歪，雪人就会左右摇摇欲坠，超过临界点会自己倒塌。
- **摔碎** —— 把雪人拎高再松手，它会摔成一地雪花。
- **自动装扮** —— 点击最上面的雪球，自动加上眼睛、胡萝卜鼻子、围巾、纽扣、树枝手臂和帽子。
- **18 种雪人**，出现概率相同，且不会连续重复：圣诞老人、猫猫、兔兔、橘子、草莓帽、小熊帽、毛绒耳罩、奶茶、烤红薯大厨、海盗、国王、墨镜、黄金雪人、融化雪人等。
- **雪雕师** —— 有时会出现雕刻家，把雪人雕成宫殿、圣诞老人或驯鹿雪雕。
- **圣诞道具** —— 每堆好一个雪人都会蹦出一个道具（铃铛、圣诞袜、拐杖糖、星星、礼物盒、花环……）。把道具拖到屏幕最上方就能用线挂起来，鼠标扫过会晃来晃去。
- **烟花** —— 把烟花往上拖再松手，它会升空并绽放成各种图案（爱心、星星、雪花、圣诞树、笑脸……），还有连环小烟花和闪粉。
- 支持 **中文 / 韩文** 界面。

### 在浏览器中运行
用 Chrome 或 Edge 打开 `index.html`（按 F11 全屏）。
在网址后加上 `?lang=zh` 即为中文版。

### 作为桌面悬浮窗运行（Windows）
雪人会透明地浮在桌面上。除了雪球和道具，其他地方的点击都会穿透到后面的窗口。

1. 安装 [Node.js](https://nodejs.org)（LTS 版）。
2. 双击 `run-overlay-zh.bat`（中文）或 `run-overlay.bat`（韩文）。
   第一次运行会下载 Electron（约 100 MB）。

或在终端中：
```bash
npm install
npm start -- --zh    # 中文
npm start            # 韩文
```
**退出：** `Ctrl + Shift + Q`，或点击左下角雪地上方的 ✕ 按钮。

> 如果 Electron 下载失败，请先设置国内镜像：
> `set ELECTRON_MIRROR=https://npmmirror.com/mirrors/electron/`（`.bat` 文件已自动设置）。

---

## 한국어

작업표시줄 위에 눈이 쌓이는 겨울 데스크톱 펫이에요. 눈덩이를 굴리고, 쌓아서 눈사람을 만들고, 클릭 한 번으로 꾸밀 수 있어요.

### 기능
- **굴리기** — 눈덩이를 좌우로 드래그하면 점점 커져요 (최대 크기 제한).
- **쌓기** — 눈덩이를 들어 다른 눈덩이 위에 올려요. 원하는 만큼 높이 쌓을 수 있어요.
- **무게중심 흔들림** — 높이 쌓을수록, 중심이 어긋날수록 아슬아슬하게 기우뚱거리고, 임계점을 넘으면 스스로 무너져요.
- **와르르** — 눈사람을 높이 들었다가 놓으면 눈가루로 부서져요.
- **자동 꾸미기** — 맨 위 눈덩이를 클릭하면 눈, 당근 코, 목도리, 단추, 나뭇가지 팔, 모자로 꾸며져요.
- **눈사람 18종** — 모두 같은 확률, 연속으로 같은 종류는 안 나와요: 산타, 고양이, 토끼, 귤, 딸기 모자, 곰돌이 모자, 털귀마개, 버블티, 군고구마 셰프, 해적, 왕, 선글라스, 황금 눈사람, 녹는 눈사람 등.
- **눈 조각가** — 가끔 조각가가 나타나 눈사람을 궁전·산타·순록 조각으로 깎아요.
- **크리스마스 아이템** — 눈사람을 만들 때마다 아이템이 튀어나와요 (징글벨, 양말, 지팡이 사탕, 별, 선물 상자, 리스…). 화면 맨 위로 끌어올리면 끈에 대롱대롱 매달리고, 마우스로 쓸면 흔들흔들해요.
- **폭죽** — 폭죽을 위로 드래그해서 놓으면 하늘로 올라가 하트·별·눈꽃·트리·스마일 등 여러 모양으로 터지고, 연쇄 불꽃과 반짝이가 이어져요.
- **한국어 / 중국어** 지원.

### 브라우저에서 실행
`index.html`을 크롬이나 엣지로 열어요 (F11 = 전체화면).
주소 뒤에 `?lang=zh`를 붙이면 중국어 버전이에요.

### 바탕화면 오버레이로 실행 (Windows)
눈사람이 바탕화면 위에 투명하게 떠 있어요. 눈덩이와 아이템이 없는 곳을 클릭하면 뒤에 있는 창이 그대로 클릭돼요.

1. [Node.js](https://nodejs.org) (LTS)를 설치해요.
2. `run-overlay.bat`(한국어) 또는 `run-overlay-zh.bat`(중국어)을 더블클릭해요.
   처음 한 번은 Electron(약 100MB)을 내려받아요.

또는 터미널에서:
```bash
npm install
npm start            # 한국어
npm start -- --zh    # 중국어
```
**끄기:** `Ctrl + Shift + Q`, 또는 왼쪽 아래 눈 위의 ✕ 버튼.

> 중국 등에서 Electron 다운로드가 실패하면 미러를 먼저 설정하세요:
> `set ELECTRON_MIRROR=https://npmmirror.com/mirrors/electron/` (`.bat` 파일에는 이미 들어 있어요).

---

Made with HTML Canvas + Electron.
