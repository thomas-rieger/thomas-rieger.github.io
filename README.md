# thomas-rieger.github.io
Personal academic website of Thomas Rieger

This site is based on the [minimal theme by orderedlist](https://github.com/orderedlist/minimal/tree/master).

## CV

The CV is generated from [cv/CV_TRieger.tex](cv/CV_TRieger.tex) (using [cv/res.cls](cv/res.cls)).
Pushing a change under `cv/` to `main` runs the [Build CV](.github/workflows/build-cv.yml) workflow,
which compiles the PDF and commits it as `CV_TRieger.pdf` in the root, where the website links to it.

To update the CV:

1. Edit `cv/CV_TRieger.tex`
2. Commit and push
3. Wait for the workflow to finish (Actions tab), then `git pull` to get the rebuilt PDF

To preview the CV locally before pushing (PowerShell, with MiKTeX):

```powershell
cd cv
& "$env:LOCALAPPDATA\Programs\MiKTeX\miktex\bin\x64\pdflatex.exe" CV_TRieger.tex
```

This writes `cv/CV_TRieger.pdf` plus build files, all ignored by git. Only the PDF built by the workflow is published.
