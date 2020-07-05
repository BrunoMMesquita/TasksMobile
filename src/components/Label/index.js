import React from 'react'
import { LabelOta } from './styled'

export default function Label(props) {
    return (
        <LabelOta {...props}>
            {props.text}
        </LabelOta>
    ) 
}