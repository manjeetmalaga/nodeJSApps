#### Links


1. npm install --global lerna
2. git init && lerna init
3. Create folders for each package
4. lerna bootstrap --hoist  (whenever you need add common node_modules to all packages)
5. lerna add sillyname@0.1.0 --scope=grocery  (specific version of node_modules in specific package)
6. lerna add apple banana --scope=grocery (for internal dependencies. One package is dependent on another one)