---
id: safari-fixed
title: safari背景fixed失效問題
description: safari background-attachment:fixed解決失效問題
tags:
    - HTML
    - CSS
---

# safari背景fixed

:::tip
在safari使用css`background-attachment:fixed;`失效
:::
## 解決
> 新增一個`div`背景使用`position:fixed;`
```html
<div class="background"></div>
```
```css
.background{
    background: url("../images/background-lg.png") no-repeat, $secondary;
    background-size: cover;
    -webkit-background-size: cover;
    background-position: center;
    background-position-x: 50%;
    background-position-y: 50%;
    position: fixed;
    height: 100%;
    width: 100%;
}
```