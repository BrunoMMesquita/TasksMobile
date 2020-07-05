import React, { Component } from 'react'
import {
    Content, Container, Input, Label, TextArea,
    Card, InputDate, InputHour, CardDate, IconCalendar, IconTime
} from './styled'
import Header from '../../components/Header'
import Constants from 'expo-constants'
import Button from '../../components/Button'
import api from '../../services/api'
import CheckBox from '../../components/CheckBox'
import Loading from '../../components/Loading'
import { Alert } from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome5'
import DateTimePickerModal from "react-native-modal-datetime-picker";
import moment from 'moment'

export default class Add extends Component {
    constructor(props) {
        super(props)
        this.state = {
            title: '',
            description: '',
            completed: false,
            editTask: false,
            id: '',
            loading: false,
            isDateVisible: false,
            date: '',
            isTimeVisible: false,
            hour: ''
        }

    }

    componentDidMount() {
        const id = this.props.route.params?.id;

        if (id) {
            this.LoadTask(id);
        }
    }

    ConfirmDelete = () => {
        Alert.alert(
            "Confirmação",
            "Tem certeza que deseja excluir essa tarefa?",
            [
                {
                    text: "Cancelar",
                    onPress: () => console.log("Cancel Pressed"),
                    style: "cancelar"
                },
                { text: "Sim", onPress: () => this.deleteTask() }
            ],
            { cancelable: false }
        );
    }

    LoadTask = async (id) => {
        try {
            this.setState({ loading: true })
            const response = await api.get(`tasks/${id}`)

            if (response) {
                const task = response.data.task
                this.setDate(task.date)
                this.setHour(task.date)

                this.setState({
                    title: task.title,
                    description: task.description,
                    editTask: true,
                    id: task._id,
                    loading: false,
                    completed: task.completed
                })
            }
        }
        catch (error) {
            console.log(error)
        }
    }

    goBack = () => {
        this.props.navigation.reset({
            routes: [{ name: 'List' }],
        });
    }
    onSubmit = async () => {
        try {
            const { title, description, editTask, id, completed, date, hour } = this.state;

            const dateHour = moment(`${date} ${hour}`).format();

            let data = {
                title,
                description,
                completed,
                date: dateHour
            }
            const response = editTask ? await api.put(`tasks/${id}`, data) : await api.post('tasks', data)

            if (response) {
                this.goBack()
            }

        }
        catch (error) {
            console.log(erro)
        }
    }

    setTitle = (title) => {
        this.setState({ title })
    }

    setDescription = (description) => {
        this.setState({ description })
    }

    setCompleted = () => {
        this.setState({ completed: !this.state.completed })
    }

    setDate = (date) => {
        const dateFormat = moment(date).format('ddd, MMM DD YYYY')
        this.setState({
            date: dateFormat,
            isDateVisible: false
        })
    }

    setHour = (hour) => {
        const hourFormat = moment(hour).format('h:mm A')
        this.setState({
            hour: hourFormat
        })
    }

    deleteTask = async () => {
        const { id } = this.state;

        try {
            const response = await api.delete(`tasks/${id}`);

            if (response) {
                this.goBack();
            }

        }
        catch (error) {
            console.log(error)
        }
    }
    render() {
        const { title, description, editTask, loading, completed, isDateVisible, date, isTimeVisible, hour } = this.state;
        const titleScreen = editTask ? "Edição de tarefa" : "Adicionar nova tarefa";
        return (
            <>
                {
                    loading ? <Loading /> :
                        <>
                            <Container style={{ paddingTop: Constants.statusBarHeight }}>
                                <Header title={titleScreen} icon="arrow-left" onPress={this.goBack} deleteTask={editTask} onDeleteTask={this.ConfirmDelete} />
                                <Content>
                                    <Card>
                                        <Label>
                                            Titulo
                                    </Label>
                                        <Input value={title} onChangeText={value => this.setTitle(value)} />
                                    </Card>
                                    <Card>
                                        <Label>
                                            Descrição
                                    </Label>
                                        <TextArea value={description} multiline={true} onChangeText={value => this.setDescription(value)} />
                                    </Card>
                                    <Card>
                                        <Label>
                                            Data e hora de conclusão
                                    </Label>
                                    </Card>
                                    <CardDate>
                                        <InputDate value={date} editable={false} selectTextOnFocus={false} />
                                        <IconCalendar onPress={() => this.setState({ isDateVisible: !isDateVisible })}>
                                            <Icon name="sort-down" size={10} />
                                        </IconCalendar>
                                        <DateTimePickerModal
                                            isVisible={isDateVisible}
                                            mode="date"
                                            locale="pt_BR"
                                            onConfirm={this.setDate}
                                            onCancel={() => this.setState({ isDateVisible: !isDateVisible })}
                                        />
                                        <InputHour value={hour} editable={false} selectTextOnFocus={false} />
                                        <IconTime onPress={() => this.setState({ isTimeVisible: !isTimeVisible })}>
                                            <Icon name="sort-down" size={10} />
                                        </IconTime>
                                        <DateTimePickerModal
                                            isVisible={isTimeVisible}
                                            mode="time"
                                            label="hora"
                                            locale="pt_BR"
                                            onConfirm={this.setHour}
                                            onCancel={() => this.setState({ isTimeVisible: !isTimeVisible })}
                                        />
                                    </CardDate>
                                    {
                                        editTask &&
                                        <Card>
                                            <CheckBox checked={completed} color="#FF4500" onPress={this.setCompleted} />
                                        </Card>
                                    }
                                    <Button icon="check" onPress={this.navigateToAddTask} onPress={this.onSubmit} />
                                </Content>
                            </Container>
                        </>
                }
            </>
        )
    }
}