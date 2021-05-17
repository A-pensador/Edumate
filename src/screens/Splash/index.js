/*This is an Example of Animated Splash Screen*/
import React, { Component } from 'react';
import { View, Text, Image, Animated } from 'react-native';

export default class Splash extends Component {
  constructor() {
    super();
    this.state = {
      animating: false,
      alignsecond: false,
    };
    setTimeout(
      () =>{
        this.setState({ align: 'flex-start' }, function() {
          this.setState({
            alignsecond: true,
          });
        }),this.animatedBox()},
      2000
    );
    setTimeout(
        () =>{
            this.props.navigation.navigate("Home")
        },3000
    )
  }

  componentDidMount(){
    this.animatedWidth = new Animated.Value(300)
    this.animatedHeight = new Animated.Value(300)
  }

  animatedBox = () => {
    Animated.timing(this.animatedWidth, {
       toValue: 200,
       duration: 1000
    }).start()
    Animated.timing(this.animatedHeight, {
       toValue: 200,
       duration: 1000
    }).start()
 }



  render() {
    const animatedStyle = { width: this.animatedWidth, height: this.animatedHeight, alignItems:'center', justifyContent:'center' }
    return (
      <View
        style={{
          flex: 1,
          alignItems: 'center',
          flexDirection: 'column',
          marginHorizontal: 40,
          justifyContent: 'center'
        }}>
           <Text
              style={{ color: '#114998', fontSize:20, fontWeight: 'bold' }}>
              Welcome to Edumate
            </Text>
        <Animated.View style = {[animatedStyle]}>
       
          <Image
            source={require("../../assets/logo.png")}
            style={{ width: 200, height: 200,marginTop:30 }}
          />
        </Animated.View>
        {!this.state.alignsecond ? null : (
          <View style={{ margin: 10 ,alignItems:'center', marginTop:50}}>
            <Text
              style={{ color: '#114998', fontSize: 50, fontWeight: 'bold' }}>
              Edumate
            </Text>
         
            <Text
              style={{ color: '#114998', fontSize: 18, fontWeight: 'bold' }}>
             शिक्षा आपके द्वार
            </Text>
            <Text
              style={{ color: '#114998', fontSize: 20, fontWeight: 'bold' }}>
              Teacher at your Home
            </Text>
          </View>
        )}
      </View>
    );
  }
}