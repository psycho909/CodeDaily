---
id: checkHash
title: checkHash & getHash
description: 獲取Hash和檢查Hash
tags:
    - js
    - tool
---

# checkHash & getHash
## checkHash
```js
function checkHash(targetHash) {
	var hash = window.location.hash;

	if (hash === targetHash || hash === "") {
		return true;
	} else {
		return false;
	}
}
```
> 使用方式
```js
// 返回true / false
checkHash("#page1")
```

## getHash
```js
function getHash() {
	var hash = window.location.hash;

	if (hash) {
		return hash;
	} else {
		return "";
	}
}
```
> 使用方式
```js
// 返回hash
getHash();

```