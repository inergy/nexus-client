import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'cerebral/react'
import { state } from 'cerebral/tags'
import styled, { ThemeProvider as CerebralThemeProvider } from 'styled-components'
import {
  RTThemeProvider,
  RTLayout,
  RTPanel,
} from 'wrappers/react-toolbox'


import RenderView from '../RenderView'
import toolboxTheme from '../../../dist/react-toolbox/theme'
import cerebralTheme from '../.././theme'
import AppBar from '../AppBar'
import NavDrawer from '../NavDrawer'
import Sidebar from '../Sidebar'

const App = props => {
  return (
    <CerebralThemeProvider theme={cerebralTheme}>
      <RTThemeProvider theme={toolboxTheme}>
        <RTLayout>
          <NavDrawer/>
          <RTPanel>
            <View isDrawerPinned={props.drawerPinned}>
              <AppBar />
              <RenderView />
            </View>
          </RTPanel>
          <Sidebar/>
        </RTLayout>
      </RTThemeProvider>
    </CerebralThemeProvider>
  )
}

App.propTypes = {
  drawerPinned: PropTypes.bool,
}

export default connect(
  {
    drawerPinned: state`app.drawerPinned`,
  }, App
)

const View = styled.div`
  ${props => props.isDrawerPinned ? 'margin-left: 256px; transition-delay: 50ms !important;' : 'transition-delay: 0ms !important;'}
  height: 100vh;
  transition: all .3s cubic-bezier(.4,0,.2,1);
  background-color: #f3f3f3;
  @media (max-width: 575px) {
    margin-left: 0;
  }
`
