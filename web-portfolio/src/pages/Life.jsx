import React from 'react'

import {skills} from "../constants";

const Life = () => {
  return (
    <section className="max-container">
      <h1 className="head-text">
        Hello, I'm <span className="blue-gradient_text font-semibold
        drop-shadow"> Harvin </span> 
      </h1>

      <div className="mt-5 flex flex-col gap-3">
        <p> my heart is just so in the work i love working i love pui i love the final project</p>
      </div>

      <div className="py-10 flex flex-col">
        <h3 className="subhead-text">Core Skills</h3>

        <div className='mt-16 flex flex-wrap gap-12'>
          {skills.map((skill) => (
            <div className='block-container w-20 h-20' key={skill.name}>
              <div className='btn-back rounded-xl' />
              <div className='btn-front rounded-xl flex justify-center items-center'>
                <img
                  src={skill.imageUrl}
                  alt={skill.name}
                  className='w-1/2 h-1/2 object-contain'
                />
              </div>
            </div>
          ))}
        </div>


      </div>
    </section>
  )
}

export default Life