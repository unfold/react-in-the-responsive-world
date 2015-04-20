import React from 'react'

export default class ResponsiveContainer extends React.Component {
  constructor() {
    super()

    this.updateDimensions = this.updateDimensions.bind(this)

    this.state = {
      width: null,
      height: null
    }
  }

  updateDimensions() {
    const node = React.findDOMNode(this)

    this.setState({
      width: node.offsetWidth,
      height: node.offsetHeight
    })
  }

  componentDidMount() {
    window.addEventListener('resize', this.updateDimensions)

    this.updateDimensions()
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.updateDimensions)
  }

  render() {
    let image

    if(this.state.width) {
      const child = React.Children.only(this.props.children)

      image = React.cloneElement(child, {
        container: this.state
      })
    }

    return (
      <div className="responsive-container">
        {image}
      </div>
    )
  }
}
