import React from 'react'

import { storiesOf } from '@storybook/react'
import { action } from '@storybook/addon-actions'

import Modal from '../components/Modal'
import Tabs, { Tab } from '../components/Tabs'
import Tree from '../components/Tree'
import Button from '../components/Button'

storiesOf('Modal', module).add('Basic', () => <Modal />)
storiesOf('Tabs', module).add('Basic', () => (
  <Tabs activeKey={'My Articles'}>
    <Tab key="My Articles">My Articles</Tab>
    <Tab key="Favorited Articles">Favorited Articles</Tab>
  </Tabs>
))
storiesOf('Tree', module).add('Basic', () => <Tree />)
storiesOf('ButtonOne', module).add('Basic', () => <Button onClick={action('clicked')}>123</Button>)
storiesOf('ButtonOne', module).add('With Danger', () => <Button danger>123</Button>)
storiesOf('ButtonOne', module).add('With Big', () => <Button size="big">123</Button>)
