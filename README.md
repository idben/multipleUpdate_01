# HTML的checkbox送出多筆資料到PHP軟刪除的範例

## 專案摘要

1. 由 HTML 中的 checkbox 來控制要軟軟除的資料
2. 由 javascript 整理好有勾選的資料，將資料對應的 id 存入陣列
3. 陣列再 stringify 後存入隱藏的表單中
4. 再用 javascript 送出表單
5. php 檔中將取得的內容 json_decode 變回陣列
6. 陣列用 implode 方法加上半形逗點組合後存入變數
7. 再使用 sql 語法的 WHERE IN 一口氣更新多筆 

## 操作
1. 建立專案資料夾後
2. 開啟終端機或命令提示字元
3. 不要 git init
4. 貼上以下指令，就可以直接在專案資料夾下下載專案，不會再多一層 
```bash
git clone git@github.com:idben/multipleUpdate_01.git .
```

## 操作圖示
![操作圖示](https://github.com/idben/multipleUpdate_01/blob/main/images/info1.png)

## 結果圖示
![結果圖示](https://github.com/idben/multipleUpdate_01/blob/main/images/info2.png)

## 示範網址
[https://sagedaben.com/iSpan/phpTest/multipleUpdate_01/](https://sagedaben.com/iSpan/phpTest/multipleUpdate_01/)