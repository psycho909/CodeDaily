---
id: updateScreenSize
title: updateScreenSize
description: 更新視頻元素的寬度和高度，以保持原始寬高比
tags:
    - js
    - tool
---

# updateScreenSize
## 更新視頻元素的寬度和高度，以保持原始寬高比
```js
function updateScreenSize() {
	var targetWidth, targetHeight, videoElement, videoWidth, videoHeight, newWidth, newHeight;

	// 獲取窗口的寬度和高度
	targetWidth = window.innerWidth;
	targetHeight = window.innerHeight;

	// 重新定義並檢查取得視頻元素
	videoElement = document.querySelector("video"); // 假設視頻元素是 <video> 標籤
	if (!videoElement) {
		console.warn("Video element not found");
		return;
	}

	// 獲取視頻元素的原始寬度和高度
	videoWidth = videoElement.videoWidth;
	videoHeight = videoElement.videoHeight;

	// 確保視頻的寬高比有效
	if (!videoWidth || !videoHeight) {
		console.warn("Invalid video dimensions");
		return;
	}

	// 計算新寬度和高度，保持視頻的原始寬高比
	if (targetWidth / targetHeight < videoWidth / videoHeight) {
		// 當窗口的寬高比小於視頻的寬高比時，以高度為基準計算寬度
		newWidth = (targetHeight * videoWidth) / videoHeight;
		newHeight = targetHeight;
	} else {
		// 當窗口的寬高比大於或等於視頻的寬高比時，以寬度為基準計算高度
		newWidth = targetWidth;
		newHeight = (targetWidth * videoHeight) / videoWidth;
	}
	// 設置視頻元素的寬度和高度
	videoElement.style.width = `${newWidth}px`;
	videoElement.style.height = `${newHeight}px`;
}
```
> 使用方式
```js
updateScreenSize()
```