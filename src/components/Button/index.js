import React from 'react'
import { ButtonAction } from './styled'
import Icon from 'react-native-vector-icons/MaterialIcons';

export default function Button(props) {
    return (
        <ButtonAction {...props}>
             <Icon name={props.icon} size={30} color="#fff"/>
        </ButtonAction>
    ) 
}