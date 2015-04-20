import React from 'react'

const connection = navigator.connection
const slow = connection && /(^([23]g?)$)/.test(connection.type)
const devicePixelRatio = (!slow && window.devicePixelRatio) || 1

export default class ResponsiveImage extends React.Component {
  getSizeInterval(size) {
    return Math.ceil(size / this.props.sizeInterval) * this.props.sizeInterval
  }

  render() {
    const container = this.props.container

    const width = Math.round(this.getSizeInterval(container.width) * devicePixelRatio)
    const height = Math.round(this.getSizeInterval(container.height) * devicePixelRatio)

    const src = `${this.props.src}/${width}x${height}`

    return <img src={src} />
  }
}

ResponsiveImage.defaultProps = {
  sizeInterval: 100
}
