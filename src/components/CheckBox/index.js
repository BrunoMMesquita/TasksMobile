import React from 'react'
import Icon from 'react-native-vector-icons/MaterialIcons'

import {Check } from './styled'

const CheckBox = (props) => (
    <Check {...props}>
        <Icon
            size={40}
            color={props.color}
            name={ props.checked ? 'check-box' : 'check-box-outline-blank'}
        />

    </Check>
)

export default CheckBox