import React, { Component } from 'react'
import { Container, Content, Submit, GoBack } from './styled'
import DropdownAlert from 'react-native-dropdownalert';
import api from '../../services/api'
import Input from '../../components/Input'
import Label from '../../components/Label'
import Loading from '../../components/Loading'

export default class SignUp extends Component {
    constructor(props) {
        super(props);
        this.state = {
            email: '',
            password: '',
            name: '',
            loading: false
        }
    }

    onSubmit = async () => {
        const { email, password, name } = this.state;
        this.setState({ loading: true })

        const formIsValid = email !== '' && password !== '' && name !== '';

        if (formIsValid) {
            const data = {
                email,
                password,
                name
            }
            const response = await api.post('user', data)
            console.log(response)

            if (response.data.emailRegitered) {
                this.setState({ loading: false })
                this.dropDownAlertRef.alertWithType('warn', '', "E-mail já cadastrado");
            } else {
                if (response.data.userCreated) {
                    this.props.navigation.navigate('List')
                }
                else {
                    this.setState({ loading: false })
                    this.dropDownAlertRef.alertWithType('error', 'Error', "Erro ao registrar usuário");
                }
            }
        }
        else {
            this.setState({ loading: false })
            this.dropDownAlertRef.alertWithType('error', 'Error', "Revise os campos");
        }

    }

    render() {
        const { loading } = this.state;
        return (
            <Container>
                <DropdownAlert ref={ref => this.dropDownAlertRef = ref} />
                <Content>
                    {
                        loading ? <Loading /> :
                            <>
                                <Label color="#00BFFF" text="Nome" />
                                <Input onChangeText={(name) => this.setState({
                                    name
                                })} />
                                <Label color="#00BFFF" text="E-mail" />
                                <Input onChangeText={(email) => this.setState({
                                    email
                                })} />
                                <Label color="#00BFFF" text="Senha" />
                                <Input secureTextEntry={true} onChangeText={(password) => this.setState({
                                    password
                                })} />
                                <Submit onPress={this.onSubmit}>
                                    <Label color="#fff" text="Registrar" />
                                </Submit>
                                <GoBack onPress={() => this.props.navigation.navigate('Login')}>
                                    <Label color="#00BFFF" text="Voltar" />
                                </GoBack>
                            </>
                    }

                </Content>
            </Container>
        )
    }
}