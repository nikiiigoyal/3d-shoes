# 3D Shoe Customizer

A beautiful, interactive 3D shoe customizer built with React Three Fiber. Customize colors in real-time, rotate the 3D model, and download your design!

## Features

- 🎨 **Real-time Color Customization** - Change colors for main body, stripes, and sole
- 🔄 **360° Rotation** - Full orbit controls to view from any angle
- 🔍 **Zoom & Pan** - Interactive camera controls
- 📱 **Responsive Design** - Works on desktop, tablet, and mobile
- ⚡ **Fast & Smooth** - Optimized 3D rendering with React Three Fiber

## 🚀 Demo

[Live Demo](https://3d-shoes-one.vercel.app/) 

## 🛠️ Technologies Used

- **React** - UI library
- **React Three Fiber** - React renderer for Three.js
- **@react-three/drei** - Useful helpers for R3F
- **Three.js** - 3D graphics library
- **Vite** - Build tool and dev server


> **Important:** The GLTF model must be named exactly `shoe.gltf` and placed in the `public` folder. If you want to use a different model or name, update line 8 in `App.jsx`:
> ```javascript
> const { nodes, materials } = useGLTF('/your-model-name.gltf')
> ```

## 📦 GLTF Model from the github repo
https://github.com/drcmda/floating-shoe/tree/master/resources/gltf












