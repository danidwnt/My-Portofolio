import React from 'react'
import './experience.css'
import { BsFillPatchCheckFill } from 'react-icons/bs'

const Experience = () => {
  return (
    <section id='experients'>
      <h5> What Skills I Have </h5>
      <h2>My Experience</h2>

      <div className="container experience__container">
        <div className="experience__frontend">
          <h3>Frontend Development</h3>
          <div className="experience__content">
            <article className='experience__details'>
                <BsFillPatchCheckFill style={style} />
                <div>
                  <h4>HTML</h4>
                <small className='text-light'>Experience</small>
                </div>
                
            </article>

            <article className='experience__details'>
                <BsFillPatchCheckFill style={style} />
                <div>
                  <h4>CSS</h4>
                <small className='text-light'>Intermediate</small>
                </div>
              
            </article>

            <article className='experience__details'>
                <BsFillPatchCheckFill style={style} />
                <div>
                  <h4>JavaScript</h4>
                <small className='text-light'>Experience</small>
                </div>
                
            </article>

            <article className='experience__details'>
                <BsFillPatchCheckFill style={style} />
                <div>
                  <h4>Bootstrap</h4>
                <small className='text-light'>Experience</small>
                </div>
                
            </article>

            <article className='experience__details'>
                <BsFillPatchCheckFill style={style} />
                <div>
                  <h4>Talwind</h4>
                <small className='text-light'>Experience</small>
                </div>
                
            </article>

            <article className='experience__details'>
                <BsFillPatchCheckFill style={style} />
                <div>
                  <h4>React</h4>
                <small className='text-light'>Experience</small>
                </div>
                
            </article>
          </div>
        </div>

        {/* end FrontEND */}

        <div className="experience__backend">
        <h3>Backend Development</h3>
          <div className="experience__content">
            <article className='experience__details'>
                <BsFillPatchCheckFill style={style} />
                <div>
                  <h4>Note JS</h4>
                <small className='text-light'>Experience</small>
                </div>
                
            </article>

            <article className='experience__details'>
                <BsFillPatchCheckFill style={style} />
                <div>
                  <h4>PHP</h4>
                <small className='text-light'>Intermediate</small>
                </div>
                
            </article>

            <article className='experience__details'>
                <BsFillPatchCheckFill style={style} />
                <div>
                  <h4>MySQL</h4>
                <small className='text-light'>Experience</small>
                </div>
                
            </article>

            <article className='experience__details'>
                <BsFillPatchCheckFill style={style} />
                <div>
                  <h4>Express Js</h4>
                <small className='text-light'>Experience</small>
                </div>
                
            </article>

            <article className='experience__details'>
                <BsFillPatchCheckFill style={style} />
                <div>
                  <h4>Postgress</h4>
                <small className='text-light'>Experience</small>
                </div>
                
            </article>

          </div>
        </div>
      </div>
    </section>
  )
}


const style ={
            marginTop: '7px',
            color:'var(--color-primary)'
}

export default Experience
