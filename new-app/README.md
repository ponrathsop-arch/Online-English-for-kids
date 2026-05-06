# New App Preview: Learn English with Pang 🌈

If you saw a **404 File not found** message, do not worry. That usually means GitHub Pages has not published this new folder yet, or the preview server was opened from the wrong folder.

## Easiest no-code preview

1. Download the repository as a ZIP from GitHub.
2. Unzip the file.
3. Open the folder named `Online-English-for-kids`.
4. Open the `new-app` folder.
5. Double-click `open-preview.html`.
6. Click **Open the real app**.

You can also double-click `new-app/index.html` directly. The app uses only plain HTML, CSS, and JavaScript, so it does not need React, Tailwind, Vite, npm, or a build step.

## Preview image

If you only want to check the visual direction, open this file in GitHub or after downloading:

- `new-app/preview.svg`

![Preview of the Learn English with Pang homepage](./preview.svg)

## GitHub Pages URL after publishing

After this branch is merged and GitHub Pages republishes the site, the page should be available at:

<https://ponrathsop-arch.github.io/Online-English-for-kids/new-app/>

Before the branch is merged or before Pages finishes publishing, that URL may show 404.

## Optional local server method

Only use this if you are comfortable copying one command.

From the main `Online-English-for-kids` folder, run:

```bash
python3 -m http.server 8000
```

Then open:

```text
http://localhost:8000/new-app/
```

On Windows, if `python3` does not work, try:

```bash
py -m http.server 8000
```

Important: if you start the server while already inside the `new-app` folder, open `http://localhost:8000/` instead of `http://localhost:8000/new-app/`.
