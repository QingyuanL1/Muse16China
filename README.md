# 中国16大博物馆地图项目

本项目展示了中国16个著名博物馆的互动地图，用户可以在地图和列表视图之间切换，并查看各个博物馆的详细信息。

## 项目概述

该项目使用了HTML、CSS（通过Tailwind CSS框架）、JavaScript，以及Google Maps API来实现一个直观且互动性强的博物馆展示页面。用户可以在地图上点击标记查看博物馆的名称、地址和详细介绍，或在列表视图中快速浏览博物馆的基本信息。

## 功能介绍

- **地图视图**：用户可以通过点击地图上的标记来查看博物馆的名称、地址和详细介绍。
- **列表视图**：以列表形式展示博物馆的名称和地址，并提供“查看详情”按钮。
- **弹窗展示**：点击“查看详情”按钮或地图标记，可以在弹窗中查看博物馆的详细信息，包括位置、描述和图片。
- **返回顶部按钮**：当页面滚动超过一定距离时，显示返回顶部的按钮，方便用户快速回到页面顶部。

## 使用技术

- **HTML**：用于页面的基本结构。
- **Tailwind CSS**：用于快速构建响应式布局和美观的UI。
- **JavaScript**：实现交互功能，如地图初始化、标记创建、弹窗管理等。
- **Google Maps API**：用于地图展示和标记管理。

## 文件结构

- `index.html`：项目的主页面文件。
- `style.css`：页面的自定义样式文件。
- `data.js`：包含博物馆数据的文件，包括名称、地址、描述和图片。
- `script.js`：实现地图初始化、标记和弹窗管理的核心逻辑。
- `images/`：存放博物馆相关图片的文件夹。
- `icon/`：用于地图标记的图标文件夹。

## 如何运行

1. 下载或克隆本项目代码到本地。
2. 在`index.html`文件中找到以下代码行：
    ```html
    <script
      src="https://maps.googleapis.com/maps/api/js?key=&libraries=places,geometry&callback=initMap&language=zh-CN"
      async
      defer
    ></script>
    ```
3. 将其中的`key=`替换为你自己的Google Maps API密钥，如下所示：
    ```html
    <script
      src="https://maps.googleapis.com/maps/api/js?key=YOUR_API_KEY&libraries=places,geometry&callback=initMap&language=zh-CN"
      async
      defer
    ></script>
    ```
4. 保存文件并打开`index.html`，即可在浏览器中查看项目效果。

## 参考资料

- 博物馆信息参考：[https://www.sohu.com/a/676503418_121123853](https://www.sohu.com/a/676503418_121123853)

## 贡献

欢迎对本项目提出改进建议或提交代码贡献。如有任何问题，请通过GitHub Issue与我们联系。

## 许可协议

本项目遵循MIT开源许可证，详细内容请查看`LICENSE`文件。
