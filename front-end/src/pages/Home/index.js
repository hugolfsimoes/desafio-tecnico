import React from 'react'
import Content from '../../components/Content'
import Menu from '../../components/Menu'
import './style.css'

export default function Home() {
  return (
    <div id="container-home">
      <Menu id="component-menu" />
      <Content />
    </div>
  )
}
