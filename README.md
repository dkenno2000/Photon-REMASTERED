<h1 align="center" style="font-weight: bold;">Photon REMASTERED v1.25</h1>

<p align="center"><b>Adds advanced features and tools to Photon for a better, faster and safer trading experience. Built for serious memecoin traders.</b></p>

<p align="center">
    <img src="https://lh3.googleusercontent.com/qT_UVS9kE0QYjwpj5qt1A7L9v_aMfijS8s2WqVUPBR4eTdJ4tWGy1yZQpLlubwnL17mc6tg-UFBvbuLUZEImdHMt=s800-w800-h500" width="260px">
    <img src="https://lh3.googleusercontent.com/iTeRy1uBjU6x_coYF6OGhYyOXt4nbGFQ1DEwJLyndHfAntZQtBbD1rUDcCDnnHckbm6dMl4b-KTGd9UWsdc9YZDZJw=s800-w800-h500" width="260px">
    <img src="https://lh3.googleusercontent.com/vhl9bFwIOretnBYO6Ov6oehc2qoPNhtR9wh-dC3aVK8wkkOekLYLYM7--D9tJUrij3ENEtdaxMtfpYe4dO2I_WSs1w=s800-w800-h500" width="260px">
</p>

<hr>

Decided to open source all my previous Chrome extensions. Use the code anyway you want, just give credit.
<br>
<br>

NOTE: This is an old release I wrote quite some time ago and since then Photon updated their website, so some of the features don't work correctly anymore. This code is no longer being maintained, because no one uses Photon anymore. The code is provided here fully open source (under GPL-3) 'as is'.

This extension is built for serious memecoin traders on the [Photon](https://photon-sol.tinyastro.io/) platform. It adds advanced features, smart tools, and real-time insights that help you trade faster, smarter and safer. Packed with everything missing from the default Photon experience.

<h2 id="releases">💾 Releases</h2>

- <a href="https://chromewebstore.google.com/detail/photon-remastered/fakniobofgpnfgkbidahlmlbokligijf">Download from Chrome Web Store</a>
- <a href="https://github.com/dkenno2000/Windows-Alerts-for-Photon/releases/download/Photon/alerts_for_photon-v1.1.zip">Download the ZIP from Github</a>

<h2 id="features">🚩 Key Features</h2>

Adds advanced features and tools to Photon for a better, faster and safer trading experience.

- Coin image & description (Pump.fun, Raydium, LetsBonk,...)
- Holder's SOL wallet balance/Dev's wallet age & balance
- Keyboard shortcuts for quick trading
- Option to open the coin and all social links with one click
- Dexscreener header
- Windows notifications for token graduations
- Realtime DEX paid status
- Live SOL/USDT price & chart
- Search the coin on X by name or CA
- 4 modern Photon themes
- 100+ other tweaks and enhancements

<br>

Uses <b>amCharts5</b> & <b>ChartJS</b> for drawing chart data.

```bash
  import * as am5 from "@amcharts/amcharts5";
  import * as am5percent from "@amcharts/amcharts5/percent";
  import am5themes_Animated from "@amcharts/amcharts5/themes/Animated";
```

Holder's wallet balances are fetched from drpc.org (displayed in SOL and USD). This extension showed holder's balances a full year before Photon added that feature.

<h2 id="started">⚙️ Getting started</h2>
<h3>Prerequisites</h3>

This project uses [Webpack](https://webpack.js.org/) module bundler.

```bash
  npm init
  npm install --save-dev webpack webpack-cli
```

You'll also need:
- amCharts 5.x lib from [amcharts.com](https://www.amcharts.com/)
- [Chart.js v4.4.8](https://github.com/chartjs/Chart.js)

To build it run:

```bash
  npm i chart.js
  npx webpack
```

Make sure to modify the included webpack.config to target 'web':

```bash
  target: "web", // Ensure it's targeting web for a browser environment
```

Change the path to point where your /node/modules/ folder is:
```bash
  modules: [path.resolve("D:/node_modules"), "node_modules"],
```

<h3>Installation</h3>

- Install from the Chrome Web Store: Link above
- Install locally: Manage Extensions -> Enable Developer Mode -> Load Unpacked -> Select the unzipped folder

<h2 id="contribute">⚠️ License</h2>

Released under the GPL-3 license. Use as you please, but give credit where credit is due.
