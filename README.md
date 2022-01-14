# lerna-pnpm
lerna + pnpm的monorepo方案


npm install husky --save-dev
npx husky install
npx husky add .husky/commit-msg 'npx --no -- commitlint --edit $1'


npm install -g commitizen
npm install -g cz-customizable