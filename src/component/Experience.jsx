import React from 'react'
import html from '../Assert/html.png'
import css from '../Assert/css.png'
import javascript from '../Assert/javascript.png'
import tailwind from '../Assert/tailwind.png'
import react from '../Assert/react.png'
import node from '../Assert/node.png'

const Experience = () => {
  const text = [
    {
      id: 1,
      src: html,
      title: 'html',
      style: 'shadow-orange-500',
    },
    {
      id: 2,
      src: css,
      title: 'Css',
      style: 'shadow-blue-500',
    },
    {
      id: 3,
      src: react,
      title: 'react',
      style: 'shadow-sky-500',
    },
    {
      id: 4,
      src: javascript,
      title: 'javascript',
      style: 'shadow-yellow-500',
    },
    {
      id: 5,
      src: node,
      title: 'node',
      style: 'shadow-green-500',
    },
    {
      id: 6,
      src: tailwind,
      title: 'tailwind',
      style: 'shadow-sky-500',
    },
  ]

  return (
    <div
      name="Experience"
      className="bg-gradient-to-b from-gray-800 to-black w-full h-screen"
    >
      <div className="max-w-screen-lg mx-auto p-4 flex flex-col justify-center w-full h-full text-white">
        <div>
          <p className="text-4xl font-bold border-b-4 border-gray-500 p-2 inline">
            Experience
          </p>
          <p className="py-6">These are the Technologies I've worked with</p>
        </div>

        <div className="w-full grid grid-cols-2 sm:grid-cols-3 gap-8 text-center py-8 px-12 sm:px-0">
          {text.map(({ id, src, title, style }) => (
            <div
              key={id}
              className={`shadow-md hover:scale-105 duration-500 py-2 rounded-lg ${style}`}
            >
              <img src={src} alt={title} className="w-20 mx-auto" />
              <p className="mt-4 ">{title}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Experience
