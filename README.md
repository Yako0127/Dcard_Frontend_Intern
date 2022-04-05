# Dcard_Frontend_Intern
應徵Dcard前端實習生的作業

## 作業頁面介紹

### first step

在檔案目錄位置，透過終端機輸入npm start，即可啟動
若顯示缺少package的話，請執行npm install

### second step

可以點擊標題下的連結，以jserv作為例子試用功能

或是利用連結下方的文字輸入欄，輸入後，點擊"search"按鈕後，即可以查看任意使用者的Repository List

### third step

點選資訊框（包含name、stargazers_count），即會redirect至詳細資訊頁面

### forth step

點選“website link”可另開頁面至該repository的github頁面

點選“”return 可返回上一頁，繼續查看同一使用者的Repository List

## 作業架構設計

<img width="681" alt="截圖 2022-04-05 下午11 52 46" src="https://user-images.githubusercontent.com/48832361/161794941-93b8bcac-efea-46ff-b5bf-0d2ba8f85e27.png">

### 各檔案說明
#### index.js

架router

#### Header.js

搜尋文字框、例子超連結

#### ErrorPage.js

在使用者輸入錯誤route時，提示使用者該route不對

#### ReposList.js

render Repository List

處理error message及“Not Found"等錯誤

#### ReposInfo.js

render Repository的詳細資訊

處理error message錯誤

#### useFetch.js

負責fetch API
使用useState來保存，

目前的url：決定是否需要初始化

及需要顯示幾個Repository：for Repository List
