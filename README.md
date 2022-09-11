### ESLint Settings

1. Install the ESLint

```shell
yarn add eslint --dev
```

1. Install theESLint Initialize

```shell
yarn run eslint --init
```

1. ESLint SettingSelect

```shell
 How would you like to use ESLint? · problems
✔ What type of modules does your project use? · esm
✔ Which framework does your project use? · react
✔ Does your project use TypeScript? · No / Yes
✔ Where does your code run? · browser
✔ What format do you want your config file to be in? · JSON

The config that you've selected requires the following dependencies:

eslint-plugin-react@latest @typescript-eslint/eslint-plugin@latest @typescript-eslint/parser@latest
✔ Would you like to install them now? · No / Yes
✔ Which package manager do you want to use? · yarn
```

### Prettier Settings

1. Install Prettier

```shell
yarn add --dev --exact prettier
```

1. initialize the .prettierrc.json

```shell
echo {}> .prettierrc.json 
```

1. Touch .prettierignore

```shell
touch .prettierignore
```

1. add eslint-config-prettier

```shell
yarn --dev add eslint-config-prettier
```