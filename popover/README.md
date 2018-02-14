## popover

使用 Vue 制作一个 popover 

## 实现效果

1. 点击图标其他的对话框消失，对应的对话框出现，再次点击图标，对应的对话框消失

2. 点击其他地方已显示的对话框消失

3. 点击 wife 开关，可以打开或者关闭 wife

4. 点击对应的 wife 则会高亮对应的 wife

5. wife 列表最多显示 4 个，如果多余 4 个，则可以滚动显示，但是不会出现滚动条

6. wife 列表不足 4 个，wife 高度随 wife 个数确定

## 技术细节

1. 使用 Vue 全局组件

2. 使用 scss 预编译语言编写 css

3. 列表能够滚动但是不出现滚动条
    ```
    seletor{
        overflow: auto;
    }
    seletor::webkit-scrollbar {
        display: none;
    }
    ```

4. wife 列表高度随 wife 个数确定，如果大于 4 个，则可以滚动

## 技术

HTML + CSS + JavaScript + Scss + Vue