import React from 'react'

import { storiesOf } from '@storybook/react'
import { action } from '@storybook/addon-actions'

import Modal from '../components/Modal'
import Tabs from '../components/Tabs'
import Tree from '../components/Tree'

storiesOf('Modal', module).add('Basic', () => <Modal />)
storiesOf('Tabs', module).add('Basic', () => <Tabs />)
storiesOf('Tree', module).add('Basic', () => <Tree />)
