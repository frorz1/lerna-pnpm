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

## 添加依赖

```sh
lerna add module-1 --scope=module-2 --dev
```

> 依赖添加需要使用`lerna add`, 因为pnpm添加本地依赖时，会以workspace:协议开头，这样的版本lerna在发布的时候没办法解析
> 如果不通过workspace的方式添加，那么在module-2未发布之前，pnpm没办法将其添加为module-1的依赖