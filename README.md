# lerna-pnpm
lerna + pnpm的monorepo方案

## start
```sh
pnpm i
```

## 初始化git相关

`husky`

```sh
npx husky install

npx husky add .husky/commit-msg 'npx --no -- commitlint --edit $1'
```

``

npm install -g commitizen
npm install -g cz-customizable