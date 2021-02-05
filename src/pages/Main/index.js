import React from 'react';

import {Container, Content, Card, CardContent, CardFooter, CardHeader, Title, Description, Annotation} from './styles';
import Header from '~/components/Header/index'
import Tabs from '~/components/Tabs/index'
import Icon from 'react-native-vector-icons/MaterialIcons'
import Menu from '~/components/Menu/index'


import {Animated} from 'react-native'
import {PanGestureHandler, State} from 'react-native-gesture-handler'

export default function Main(){

  const translateY = new Animated.Value(0);

  const animatedEvent = Animated.event(
    [
      {
        nativeEvent: {
          translationY: translateY,
        },
      },
    ],
    {useNativeDriver: true}
  )

  function onHandlerStateChange(event){

  }

  return(
    <Container>
       <Header />
      <Content>
        <Menu/>

        <PanGestureHandler
          onGestureEvent={animatedEvent}
          onHandlerStateChange={onHandlerStateChange}
        >
          <Card style={{
              transform: [{
                translateY: translateY.interpolate({
                  inputRange:[-350,0,380],
                  outputRane: [-50,0,380],
                  extrapolate: "clamp",
                }),
              }],
            }
          }>
            <CardHeader>
              <Icon name='attach-money' size={28} color="#666"/>
              <Icon name='visibility-off' size={28} color="#666"/>
            </CardHeader>
            <CardContent>
              <Title>Saldo disponível</Title>
              <Description>R$ 197.611,65</Description>
            </CardContent>
            <CardFooter>
              <Annotation>Transferência de R$ 20,00 recebida de Antonio Welles Queiroz de Paiva hoje as 16:00h</Annotation>
            </CardFooter>
          </Card>
        </PanGestureHandler>

      </Content>
       <Tabs />
    </Container>
  );

};
