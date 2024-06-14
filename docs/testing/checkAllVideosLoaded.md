---
id: checkAllVideosLoaded
title: checkAllVideosLoaded
description: 檢查所有視頻是否已經加載完成
tags:
    - js
    - tool
---

# checkAllVideosLoaded
## 檢查所有視頻是否已經加載完成
```js
/**
 * 說明: 檢查所有視頻是否已經加載完成
 * callback: 回調函數
 * @param {*} callback
 * @returns
 * checkAllVideosLoaded(function(isLoaded) {})
 */
function checkAllVideosLoaded(callback) {
	var videos = document.querySelectorAll("video");
	var videosCount = videos.length;
	var loadedCount = 0;

	if (videosCount === 0) {
		console.warn("No video elements found");
		callback(true); // 沒有視頻元素，認為已經加載完成
		return;
	}

	function onVideoLoaded() {
		loadedCount++;
		if (loadedCount === videosCount) {
			callback(true); // 所有視頻元素已經加載完成
		}
	}

	videos.forEach(function (video) {
		if (video.readyState >= 2) {
			// 如果視頻已經加載
			onVideoLoaded();
		} else {
			// 為尚未加載的視頻添加事件監聽器
			video.addEventListener("loadeddata", onVideoLoaded);
		}
	});
}
```
> 使用方式
```js
checkAllVideosLoaded(function(isLoaded) {
	// is true完成
	if(isLoaded){

	}
})
```