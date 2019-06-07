import React from 'react'
import styled from 'styled-components'

const Resume = styled.div.attrs({
  className: 'bg-white shadow-lg p-8 md:p-16',
})`
  flex-basis: 900px;
`

const ResumeBody = styled.main`
  @media (min-width: 900px) {
    display: grid;
    grid-template-areas:
      'Skills Bio'
      'Skills Experience'
      'Skills Education';
    grid-gap: 2rem;
    grid-template-columns: 300px 1fr;
  }
`

const Skills = styled.aside.attrs({
  className: 'bg-gray-200 px-4 py-3 rounded-lg',
})`
  grid-area: Skills;
`

const Bio = styled.section`
  grid-area: Bio;
`

const Experience = styled.section`
  grid-area: Experience;
`

const Education = styled.section`
  grid-area: Education;
`

const Hr = styled.hr.attrs({
  className: 'border-t border-gray-300',
})``

export default () => (
  <div className="min-h-screen bg-gray-200 p-4 flex justify-center items-center">
    <Resume>
      <header>
        <h1 className="flex flex-col md:flex-row md:justify-between md:items-baseline">
          <span className="text-3xl font-medium">Wilson Parson</span>
          <span className="text-xl text-gray-600 font-medium mt-2 md:mt-0">
            UI/UX Designer &middot; Front-end Developer
          </span>
        </h1>
      </header>
      <Hr />
      <ResumeBody>
        <Bio>bio</Bio>
        <Experience>experience</Experience>
        <Education>education</Education>
        <Skills>skills</Skills>
      </ResumeBody>
      <Hr />
      <footer className="text-sm leading-loose mt-4 md:mt-8 text-gray-600">
        <address className="not-italic flex flex-wrap justify-center">
          footer
        </address>
      </footer>
    </Resume>
  </div>
)
