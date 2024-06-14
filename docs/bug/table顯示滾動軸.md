---
id: table-scroll
title: table顯示滾動軸
description: table顯示滾動軸
tags:
    - HTML
    - CSS
---

# table顯示滾動軸

## 解決
:::tip
需要把需要顯示滾動軸的table在包一層，
table需要加上 `table-layout:fixed;`
:::
```css
table{
    width:100%;
    border-collapse:collapse;
    table-layout:fixed;
}
```