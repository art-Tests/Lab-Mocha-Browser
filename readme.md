# ReadMe #
撰寫js程式碼及js單元測試程式，透過自動化完成單元測試報告及程式碼覆蓋率。

# How To Start #
1. npm install
2. bower install
3. gulp

* 程式碼覆蓋率報告(karma coverage)：/report/converage/chrome/index.html
* 單元測試報告(mochawesome)：/report/all.html
* 單元測試報告(以瀏覽器執行)：/browser/index.html


## Basic ##

1. 新建.gitignore並執行`npm init`
2. `mocha init {目錄名稱}`
3. 加入待測試js
4. 透過bower管理前端套件chai
5. 網頁載入chai套件
6. 撰寫test程式

### Test ###
1. 開啟/browser/index.html透過瀏覽器執行測試程式
2. 透過`mocha`執行測試程式

## Report ##
1. 安裝相關套件
2. `karma init`
3. 加入覆蓋率報告設定
4. 加入單元測試報告設定及套件 `npm install mochawesome --save-dev`

```
npm install karma karma-chrome-launcher karma-coverage karma-mocha --save-dev
```

```
karma start karma.conf.js
```

## Gulp ##
1. 安裝相關套件
2. 進行設定

```
npm install gulp gulp-karma gulp-mocha --save-dev
```
