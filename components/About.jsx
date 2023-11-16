import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import AboutImg from '../public/assets/about.jpg';

const About = () => {
  return (
    <div id='about' className='w-full md:h-screen p-2 flex items-center py-16'>
      <div className='max-w-[1240px] m-auto md:grid grid-cols-3 gap-8'>
        <div className='col-span-2'>
          <p className='uppercase text-xl tracking-widest text-[#5651e5]'>
            About
          </p>
          <h2 className='py-4'>Who I Am</h2>
          <p className='py-2 text-gray-600'>
            I specialize in building mobile responsive front-end UI applications
            that connect with API’s and other backend technologies. I’m
            passionate about learning new technologies and understand there is
            more than one way to accomplish a task. Though I am most proficient
            in building front-end applications using HTML, CSS, Javascript,Next JS and
            React, I am a quick learner and can pick up new tech stacks as
            needed. I believe that being a great developer is not using one
            specific language, but choosing the best tool for the job.
          </p>
          <p className='py-2 text-gray-600'>
            Enthusiastic about the transformative power of technology, I am Joswin Shogi, a BTech student pursuing a degree in Artificial Intelligence and Data Science. My passion for technology stems from its ability to solve real-world problems and make a positive impact on society.

            Beyond my academic pursuits, I am an avid cricket fan, always eager to catch the latest matches and analyze the strategies employed by the players. Mathematics has also been a constant source of fascination for me, its logical beauty and problem-solving applications captivating my intellectual curiosity.

            Coupling my academic knowledge with my programming skills, I am actively involved in developing software solutions. The process of translating ideas into functional code fuels my passion for programming, and I constantly seek opportunities to enhance my skills and explore new technologies.

            Driven by a desire to contribute to the advancement of AI and data science, I am committed to continuous learning and exploration. I believe that technology holds the key to addressing many of the world's challenges, and I am eager to play a part in shaping its future.

            My Interests:

            Artificial Intelligence
            Data Science
            Cricket
            Mathematics
            Programming
            My Goals:

            Become an expert in AI and data science
            Develop innovative solutions using AI and data science
            Make a positive impact on society through technology
            My Skills:

            Programming (Python, Java, C++)
            Data analysis
            Machine learning
            Problem-solving
            Critical thinking
            I am always looking for new challenges and opportunities to expand my knowledge and skills. Feel free to connect with me if you have any interesting projects or ideas.
          </p>
          {/* <Link href='/#projects'>
            <p className='py-2 text-gray-600 underline cursor-pointer'>
              Check out some of my latest projects.
            </p>
          </Link> */}
        </div>
        <div className='w-full h-auto m-auto shadow-xl shadow-gray-400 rounded-xl flex items-center justify-center p-4 hover:scale-105 ease-in duration-300'>
          <Image src={AboutImg} className='rounded-xl' alt='/' />
        </div>
      </div>
    </div>
  );
};

export default About;
