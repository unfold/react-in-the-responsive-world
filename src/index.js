import React from 'react'

import ResponsiveContainer from './ResponsiveContainer'
import ResponsiveImage from './ResponsiveImage'

window.addEventListener('load', () => {
  React.render((
    <div className="page">
      <ResponsiveContainer>
        <ResponsiveImage src="http://placehold.it/" />
      </ResponsiveContainer>

      <ResponsiveContainer>
        <ResponsiveImage src="http://placehold.it/" />
      </ResponsiveContainer>

      <ResponsiveContainer>
        <ResponsiveImage src="http://placehold.it/" />
      </ResponsiveContainer>
    </div>
  ), document.body)
})