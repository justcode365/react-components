import React from 'react'

import { storiesOf } from '@storybook/react'
import { action } from '@storybook/addon-actions'
import { linkTo } from '@storybook/addon-links'
import { withInfo } from '@storybook/addon-info'

import { Button, Welcome } from '@storybook/react/demo'

storiesOf('Welcome', module).add('to Storybook', () => <Welcome showApp={linkTo('Button')} />)

storiesOf('Button', module)
  .add('with text', () => <Button onClick={action('clicked')}>Hello Button</Button>)
  .add('with some emoji', () => <Button onClick={action('clicked')}>😀 😎 👍 💯</Button>)
  .add(
    'simple info',
    withInfo(`
    description or documentation about my component, supports markdown
  
    ~~~js
    <Button>Click Here</Button>
    ~~~
  
  `)(() => <Button>Click the "?" mark at top-right to view the info.</Button>)
  )
