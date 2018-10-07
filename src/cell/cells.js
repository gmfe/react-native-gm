import React from 'react'
import PropTypes from 'prop-types'

import {
  View,
  StyleSheet
} from 'react-native'
import V from '../variable'

const styles = StyleSheet.create({
  cells: {
    backgroundColor: 'white',
    overflow: 'hidden',
    borderTopWidth: StyleSheet.hairlineWidth,
    borderBottomWidth: StyleSheet.hairlineWidth,
    borderColor: V.borderColor
  }
})

class Cells extends React.Component {
  render () {
    const {
      children,
      style,
      ...rest
    } = this.props

    return (
      <View {...rest} style={[styles.cells, style]}>
        {React.Children.map(children, (child, idx) => {
          if (idx === 0) {
            return React.cloneElement(child, { first: true })
          }
          return child
        })}
      </View>
    )
  }
}

Cells.propTypes = {
  style: PropTypes.object
}

export default Cells
