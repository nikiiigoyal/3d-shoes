import { Suspense, useRef, useState } from 'react'
import './App.css'
import { OrbitControls,useGLTF } from '@react-three/drei'
import { Canvas } from '@react-three/fiber'

function Model(props) {
  const { nodes, materials } = useGLTF('/shoe.gltf')
  return (
    <group {...props} dispose={null} scale={3}>
      <mesh geometry={nodes.shoe.geometry} material={materials.laces} material-color= {props.customColors.stripes}/>
      <mesh geometry={nodes.shoe_1.geometry} material={materials.mesh} material-color={props.customColors.mesh}/>
      <mesh geometry={nodes.shoe_2.geometry} material={materials.caps} material-color={props.customColors.sole} />
      <mesh geometry={nodes.shoe_3.geometry} material={materials.inner} material-color={props.customColors.sole}/>
      <mesh geometry={nodes.shoe_4.geometry} material={materials.sole} material-color={props.customColors.sole}
      />
      <mesh geometry={nodes.shoe_5.geometry} material={materials.stripes} material-color={props.customColors.stripes}/>
      <mesh geometry={nodes.shoe_6.geometry} material={materials.band} material-color={props.customColors.stripes}/>
      <mesh geometry={nodes.shoe_7.geometry} material={materials.patch} material-color={props.customColors.sole}/>
    </group>
  )
}

function App() {
const [mesh,setMesh] = useState("ffffff")
const [stripes,setStripes] = useState("ffffff")
const [sole,setSole] = useState("ffffff")

//  const downloadScreenshot = () => {
//   console.log('Download button clicked') // Debug
//     if (canvas.current) {
//       const canvas = canvas.current.querySelector('canvas')
//       if (canvas) {
//         const link = document.createElement('a')
//         link.download = 'my-custom-shoe.png'
//         link.href = canvas.toDataURL('image/png')
//         link.click()
//       }
//     }
//   }

  return (
    <>
      <div className='app'>
            <div className="wrapper">
              {/* /* Main Heading */} 
            <div className="header-section">
              <h1 className="main-title">
                <span className="gradient-text">Customize</span> Your Shoes
              </h1>
              <p className="subtitle">
                Design your perfect shoe with our 3D customizer. Rotate, zoom, and pick your favorite colors!
              </p>
            </div>
        <div className="card">
          
            <div className="product-canvas">
          <Canvas >
         <Suspense fallback={null}>
      <ambientLight>
        <spotLight intensity={0.9} angle={0.1} penumbra={1} position={[10,15,10]} castShadow></spotLight>
      </ambientLight>
      <Model customColors={{mesh:mesh,stripes:stripes,sole:sole}} />
      <OrbitControls enablePan={true} enableZoom={true} enableRotate={true}/>
         </Suspense>
          </Canvas>

            </div>
            {/* Features Info */}
            <div className="features-info">
              <div className="feature-item">
                <span className="feature-icon">🎨</span>
                <span className="feature-text">Choose Colors</span>
              </div>
              <div className="feature-item">
                <span className="feature-icon">🔄</span>
                <span className="feature-text">Rotate 360°</span>
              </div>
              <div className="feature-item">
                <span className="feature-icon">🔍</span>
                <span className="feature-text">Zoom In/Out</span>
              </div>
            </div>
            
            <h2>Color chooser</h2>
            <div className='colors'>
                 <div>
                    <input type="color" id="mesh" name="mesh"
                           value={mesh} onChange={(e) => setMesh(e.target.value)}/>
                    <label htmlFor="mesh">Main</label>
                  </div>

                <div>
                    <input type="color" id="stripes" name="stripes"
                            value={stripes} onChange={(e) => setStripes(e.target.value)} />
                    <label htmlFor="stripes">Stripes</label>
                </div>
                 <div>
                    <input type="color" id="sole" name="sole"
                            value={sole} onChange={(e) => setSole(e.target.value)} />
                    <label htmlFor="sole">Soul</label>
                </div>
            </div>
        </div>
    </div>
     {/* Download Button
        <button className="download-btn" onClick={downloadScreenshot}>
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4M7 10l5 5 5-5M12 15V3"/>
          </svg>
          Download
        </button> */}

        
      </div>
      
    </>
  )
}

export default App
