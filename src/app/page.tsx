'use client'

import Spline from '@splinetool/react-spline'
// import { RefObject, useRef } from 'react'

export default function Home() {
  // const keyboard: RefObject<any | null> = useRef(null)

  // function onLoad(spline: any) {
  //   console.log('spline', spline)
  //   const obj = spline.findObjectByName('Keyboard :D')
  //   // or
  //   // const obj = spline.findObjectById('8E8C2DDD-18B6-4C54-861D-7ED2519DE20E');
  //   console.log('obj', obj)
  //   // save it in a ref for later use
  //   keyboard.current = obj // Armazene o objeto em uma propriedade personalizada
  // }

  // function moveObj() {
  //   console.log('keyboard', keyboard.current) // Spline Object => { name: 'Cube', id: '8E8C2DDD-18B6-4C54-861D-7ED2519DE20E', position: {}, ... }

  //   // move the object in 3D space
  //   keyboard.current.position.x += 10
  // }

  return (
    <main className="relative flex h-screen flex-col items-center overflow-hidden bg-cyan-300">
      <div className="absolute mt-4 flex flex-col items-center text-center">
        <h1 className="text-5xl font-black text-pink-500">
          INTERACTIVE KEYBOARD
        </h1>
        <h2 className="text-xl text-cyan-900">
          try hitting the keys on your physical keyboard and watch the magic
          happen
        </h2>
      </div>

      <Spline
        scene="https://prod.spline.design/luwBnVZ3KJsh0toS/scene.splinecode"
        // onLoad={onLoad}
      />
    </main>
  )
}
