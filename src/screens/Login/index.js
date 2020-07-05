import React, { Component } from 'react'
import { Container, Content, Submit, SignUp } from './styled'
import DropdownAlert from 'react-native-dropdownalert';
import api from '../../services/api'
import Input from '../../components/Input'
import Label from '../../components/Label'

export default class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {
            email: '',
            password: ''
        }
    }
    onSubmit = async () => {
        const { email, password } = this.state;

        const formIsValid = email !== '' && password !== '';

        if (formIsValid) {
            const data = {
                email,
                password
            }
            const response = await api.post('user/isValid', data)

            if (response.data.isValid)
                this.props.navigation.navigate('List')
            else
                this.dropDownAlertRef.alertWithType('error', 'Error', "Usuário ou senha incorretos");
        }
        else
            this.dropDownAlertRef.alertWithType('error', 'Error', "Campos login ou senha em branco");
    }

    SignUp = () => {
        this.props.navigation.reset({
            routes: [{ name: 'SignUp' }],
        });
    }
    render() {
        return (
            <Container>
                <DropdownAlert ref={ref => this.dropDownAlertRef = ref} />
                <Content>
                    <Label color="#00BFFF" text="E-mail" />
                    <Input onChangeText={(email) => this.setState({
                        email
                    })} />
                    <Label color="#00BFFF" text="Password" />
                    <Input secureTextEntry={true} onChangeText={(password) => this.setState({
                        password
                    })} />
                    <Submit onPress={this.onSubmit}>
                        <Label color="#fff" text="Sing-in" />
                    </Submit>
                    <SignUp onPress={this.SignUp}>
                        <Label color="#00BFFF" text="Sign Up" />
                    </SignUp>
                </Content>
            </Container>
        )
    }
}