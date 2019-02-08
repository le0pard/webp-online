import React from 'react'
import PropTypes from 'prop-types'
import InfoView from 'components/infoView'
import ConfigurationForm from 'containers/configurationForm'
import ConfigurationView from 'containers/configurationView'

import './main-generator.sass'

export default class MainGenerator extends React.Component {
  static propTypes = {
    isReadyForConfiguration: PropTypes.bool.isRequired,
    resetConfiguration: PropTypes.func.isRequired
  }

  componentWillUnmount() {
    this.props.resetConfiguration()
  }

  render() {
    const {isReadyForConfiguration} = this.props

    return (
      <div className="main-generator">
        <div className="main-generator-form-wrapper">
          <h4 className="main-generator-form-subtitle">
            Parameters of your system
          </h4>
          <ConfigurationForm />
        </div>
        <div className="main-generator-result-wrapper">
          {!isReadyForConfiguration && <InfoView />}
          {isReadyForConfiguration && <ConfigurationView />}
        </div>
      </div>
    )
  }
}
