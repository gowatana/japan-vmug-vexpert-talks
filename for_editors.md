# ページ編集の例

細かい誤記修正などは、mainブランチでの編集でよいと思います。  
大幅な編集をする場合は、ブランチを作成してからファイル編集すると無難かなと思います。


1-1. リポジトリを取得。

```
git clone https://github.com/gowatana/japan-vmug-vexpert-talks.git
cd ./japan-vmug-vexpert-talks/
```

2-1. （すでに git clone している場合は、）最新のものを取得しておく。

```
git pull origin main
```

2-2. ブランチを切りかえ。  
例のブランチ名は、branch-001。-bで新規作成しつつ切りかえ。

```
git checkout -b branch-001
```

2-3. ファイルを編集。
* テキストエディタなどにて。

2-4. 更新内容の確認

```
git status
```

2-5. 更新内容をステージング。

```
git add 更新したファイル名
```

2-6. 更新内容をコミット。

```
git commit -m "更新内容を書いておく"
```

2-7. 更新内容を push。

```
git push --set-upstream origin branch-001
```

2-8. ローカルのリポジトリを、main ブランチに戻しておく。

* あとでブランチ/プルリクエストを更新することになったら、もう一度2-1から繰り返して追加更新する。

```
git checkout main
git branch
  branch-001
* main
```

3-1. GitHub にて、プルリクエストを作成する。
* Pushすると、UI に何かメッセージが出ているはず。
* だれかが確認して問題なそうならマージ。
* マージしたら、ブランチは削除してよい。（git branch -d branch-001 など）

EOF
