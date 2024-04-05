import React from 'react'

const About = () => {
  return (
    <div
      name="About"
      className="w-full h-screen bg-gradient-to-b from-gray-800 to to-black text-white"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div>
          <div className="pb-8">
            <p className="text-4xl font-bold inline border-b-4 border-gray-500">
              About
            </p>
          </div>

          <p className="text-xl mt-20">
            With a strong grasp of HTML, CSS, JavaScript, and Tailwind CSS, I'm
            a newcomer ready to make waves in web development. My knack for
            crafting sleek and responsive user interfaces sets the stage for
            dynamic projects . Eager to evolve alongside technology, I'm
            dedicated to enhancing my skills and making meaningful contributions
            to the field.
          </p>
          <br />

          <p className="text-xl">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Fugia t
            maxime odio minus sunt, facilis magni magnam veritatis aut animi asp
            ernatur deserunt quaerat voluptatum ea quia earum cum voluptas
            dolorum placeat.
          </p>
        </div>
      </div>
    </div>
  )
}

export default About
