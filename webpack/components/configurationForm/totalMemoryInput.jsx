import React from 'react'
import PropTypes from 'prop-types'
import {Field} from 'redux-form'
import Tooltip from 'components/form/tooltip'
import FormSimpleField from 'components/form/simpleField'
import FormSimpleDropdown from 'components/form/simpleDropdown'
import {
  SIZE_UNIT_MB,
  SIZE_UNIT_GB
} from 'reducers/configuration/constants'

import './total-memory-input.sass'

export default class TotalMemoryInput extends React.Component {
  static propTypes = {
    tooltip: PropTypes.oneOfType([
      PropTypes.node,
      PropTypes.func,
      PropTypes.string
    ]).isRequired
  }

  totalMemoryUnitOptions() {
    return [
      {
        label: 'GB',
        value: SIZE_UNIT_GB
      },
      {
        label: 'MB',
        value: SIZE_UNIT_MB
      }
    ]
  }

  render() {
    const {tooltip} = this.props
    const inputID = 'TotalMemoryId'

    return (
      <div className="total-memory">
        <label className="total-memory-label" htmlFor={inputID}>
          Total Memory (RAM)
        </label>
        <Tooltip
          id={`tooltip${inputID}`}
          label="what is this?"
          text={tooltip}
          className="total-memory-tooltip" />
        <Field
          name="totalMemory"
          type="number"
          className="total-memory-amount"
          inputClassName="total-memory-amount__input"
          errorClassName="total-memory-amount__error"
          component={FormSimpleField}
          inputProps={{
            id: inputID,
            autoFocus: true,
            autoComplete: 'off',
            autoCorrect: 'off',
            autoCapitalize: 'none',
            required: 'required',
            min: '1',
            max: '9999',
            step: '1',
            pattern: '[0-9]{1,4}',
            placeholder: 'Memory size (RAM, required)'
          }}
        />
        <Field
          name="totalMemoryUnit"
          label="Memory units"
          className="total-memory-unit"
          selectClassName="total-memory-unit__select"
          component={FormSimpleDropdown}
          options={this.totalMemoryUnitOptions()}
        />
      </div>
    )
  }
}
