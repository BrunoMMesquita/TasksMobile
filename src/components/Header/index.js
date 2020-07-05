import React from 'react'
import { Container, Text, Touch, TouchDelete } from './styled'
import Icon from 'react-native-vector-icons/FontAwesome5'

export default function Header(props) {
    return (
        <Container>
            <Touch {...props}>
                <Icon name={props.icon} size={30} color="#038bce" />
            </Touch>
            <Text>{props.title}</Text>
            {
                props.deleteTask &&
                    <TouchDelete onPress={props.onDeleteTask}>
                        <Icon name="trash" size={30} color="#fff" />
                    </TouchDelete>
            }
        </Container>
    )
}