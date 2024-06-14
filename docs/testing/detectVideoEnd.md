---
id: detectVideoEnd
title: detectVideoEnd
description: 檢查視頻是否已經播放完畢
tags:
    - js
    - tool
---

# detectVideoEnd
## 檢查視頻是否已經播放完畢
```js
/**
 * 說明: 檢查視頻是否已經播放完畢
 * videoElement: 視頻元素
 * callback: 回調函數
 * detectVideoEnd($(".layer-page video")[0],function(){
 *    console.log("Video ended");
 * })
 */
function detectVideoEnd(videoElement, callback) {
	if (!videoElement) {
		console.warn("Video element not found");
		return;
	}

	videoElement.addEventListener("ended", function () {
		callback();
	});
}

```
> 使用方式
```js
detectVideoEnd($(".layer-page video")[0],function(){
	console.log("Video ended");
})
```