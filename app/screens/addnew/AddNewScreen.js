/**
 * Created by kid on 2017/5/17
 * Function:新增视图
 * Desc:
 */
'use strict';
import React, { Component } from "react";
import { View, Alert } from "react-native";
import { Container, Content, List, ListItem, InputGroup, Input, Icon, Text, Picker, Button, Item } from "native-base";
import oilInfo from '../../resource/db/control/oilInfo'
export default class AddNewScreen extends Component {

    constructor(props) {
        super(props);
        this.state = {
            selectedItem: undefined,
            selected1: 'key0',
            results: {
                items: [],
            },
        };
    }
    onValueChange(value: string) {
        this.setState({
            selected1: value,
        });
    }
    AddNew() {

        let a = new oilInfo();

        a.addInfo(new Date(2017, 4, 19), 2, 3, 4, 5, 6);
        let oils = a.queryAll();

        this.props.navigation.state.params.oils(oils);

        const { goBack } = this.props.navigation;
        goBack();

    }
    render() {
        return (
            <Container>
                <Content>
                    <List>
                        <ListItem>
                            <InputGroup>
                                <Input inlineLabel label="First Name" placeholder="John" />
                            </InputGroup>
                        </ListItem>

                        <ListItem>
                            <InputGroup>
                                <Icon name="ios-person" style={{ color: '#0A69FE' }} />
                                <Input placeholder="EMAIL" />
                            </InputGroup>
                        </ListItem>
                        <ListItem>
                            <InputGroup>
                                <Icon name="ios-unlock" style={{ color: '#0A69FE' }} />
                                <Input placeholder="PASSWORD" secureTextEntry />
                            </InputGroup>
                        </ListItem>
                        <ListItem>
                            <InputGroup>
                                <Icon name="ios-call" style={{ color: '#0A69FE' }} />
                                <Input placeholder="PHONE" keyboardType="numeric" />
                            </InputGroup>
                        </ListItem>

                        <ListItem iconLeft>
                            <Icon name="ios-transgender" style={{ color: '#0A69FE' }} />
                            <Text>GENDER</Text>
                            <Picker
                                iosHeader="Select one"
                                mode="dropdown"
                                selectedValue={this.state.selected1}
                                onValueChange={this.onValueChange.bind(this)} >
                                <Item label="Male" value="key0" />
                                <Item label="Female" value="key1" />
                                <Item label="Other" value="key2" />
                            </Picker>
                        </ListItem>

                        <ListItem>
                            <InputGroup >
                                <Input stackedLabel label="Permanent Address" placeholder="Address" />
                            </InputGroup>
                        </ListItem>
                    </List>
                    <Button onPress={() => this.AddNew()} style={{ alignSelf: 'center', marginTop: 20, marginBottom: 20 }} >
                        <Text> Sign Up</Text>
                    </Button>
                </Content>
            </Container>
        );
    }
}