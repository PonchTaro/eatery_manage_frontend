## Description
* 名前の由来は、フランス語のMoNGe(食べる)と英語のMaNaGe(管理する)を掛けて、FastにMNGするアプリという意味を込めた。
* 飲食店を始める際に、客自身にモバイル端末で注文してもらうシステムが手軽に導入できると喜ぶ人もいるかと思った。
* 新しい店舗を始める際のスタッフを募集する手間の削減, 営業中の人件費の削減を目的とする。
* バックエンドは[ここ](https://github.com/shigekato/eatery_manage_backend)
* ER図はバックエンドに記載

## 機能
#### 客
* テーブルに座ったらテーブルのQRコードを読み取る。
* 注文を開始できる。
* メニュー一覧から商品を選んで注文をしていく。
* 注文履歴が見れる。
* 離席する際に会計する。(未実装)paypayでやろうと最近思った。
* ![image](https://user-images.githubusercontent.com/31150623/144202578-bf917325-35de-4aa1-9abd-e38c1148e23b.png)


#### 店
* 注文できる品物を登録する。
* 注文できる品物の種類を登録する(品物をグループ分けして表示するため)
* テーブルの情報を登録する。(椅子の数など)
* テーブルに紐づくQRコードの発行
![image](https://user-images.githubusercontent.com/31150623/144202622-13952876-0eb9-4aaa-aff9-2b80fa1ec890.png)
![image](https://user-images.githubusercontent.com/31150623/144202697-98ce2e15-3b35-474c-b175-c89dc5c24146.png)
