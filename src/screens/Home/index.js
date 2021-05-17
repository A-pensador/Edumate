import React, { Component } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  KeyboardAvoidingView,
  ScrollView,
  TextInput,
  Dimensions,
  Image,
  FlatList,
} from "react-native";
import { Images } from '../../utils';
import { Tab, Tabs, Card } from 'native-base';
import { Picker } from '@react-native-community/picker';
import styles from './style';
import { connect } from 'react-redux';
import { classes } from '../../redux/actions/classes';
import { sliders } from '../../redux/actions/sliders';
const Banner = [
  {
    banner_id: '1',
    view: (
      <View style={styles.headerContainer}>
        <View style={styles.headerTextContainer}>
          <Text style={styles.headerText}>Knowledge is power</Text>
          <Text style={styles.headerSubText}>Quick View</Text>
        </View>
        <Image source={Images.books} style={styles.bookImg} />
      </View>
    )
  },
  {
    banner_id: '2',
    view: (
      <View style={styles.headerContainer}>
        <View style={styles.headerTextContainer1}>
          <Text style={styles.headerText1}>Now it is easy to find perfect Teacher !!!</Text>
        </View>
      </View>
    )
  },
];
class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
    }
    this.props.classes().then(() => { console.log(this.props.classes1) })
  }
  state = {
    class: 'Select Class',
    subClass: 'Select Subject',
  };
  render() {
    return (
      <View style={styles.container}>
        <ScrollView>
          <View style={styles.wrapper}>
            <View style={styles.headerContainer}>
              <FlatList
                horizontal={true}
                showsHorizontalScrollIndicator={false}
                data={Banner}
                renderItem={({ item }) => (
                  <TouchableOpacity onPress={() => { this.props.navigation.navigate("FeedBack") }}>
                    <View>
                      {item.view}
                    </View>
                  </TouchableOpacity>
                )}
                keyExtractor={item => item.banner_id}
              />
            </View>
            <View style={styles.gridContainer}>
              <View >
                <FlatList
                  data={this.props.classes1}
                  numColumns={2}
                  renderItem={({ item }) => (
                    <TouchableOpacity onPress={() => { console.log('here'); this.props.navigation.navigate("ClassForm") }} style={styles.categoryWrapper1}>
                      <View style={styles.imgWrapper}>
                        <Image source={Images.basic_grammar} style={styles.basic_grammar} />
                      </View>
                      <Text style={styles.topic}>{item.class_name}</Text>
                      <Text style={styles.course}>{item.total_courses} Course</Text>
                    </TouchableOpacity>
                  )}
                  keyExtractor={item => item.banner_id}
                />
              </View>
            </View>
            <View style={styles.learningContainer}>
              <Text style={styles.learning}>Teach With Us</Text>
              <View style={styles.buttonContainer}>
                <TouchableOpacity onPress={() => { this.props.navigation.navigate("Home_Old") }} style={styles.buttonBox}>
                  <Image source={Images.Ragistration} style={styles.article_icon} />
                  {/* <Text style={styles.iconText}>Teacher</Text> */}
                  <Text style={styles.iconText}>Ragistration</Text>
                </TouchableOpacity>
                {/* <TouchableOpacity onPress={() =>{this.props.navigation.navigate("Audio")}} style={styles.buttonBox}>
                <Image source={Images.audios} style={styles.article_icon}/>
                <Text style={styles.iconText}>Audio</Text>
              </TouchableOpacity> */}
                <TouchableOpacity onPress={() => { this.props.navigation.navigate("FeedBack") }} style={styles.buttonBox}>
                  <Image source={Images.review} style={styles.article_icon} />
                  <Text style={styles.iconText}>FeedBack</Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>
        </ScrollView>
      </View>
    );
  }
}
const mapStateToProps = (state) => {
  return {
    classes1: state.classes.classes,
  };
};
export default connect(mapStateToProps, { classes })(Home);
