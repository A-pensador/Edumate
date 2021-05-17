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
import { Tab, Tabs } from 'native-base';
import { Picker } from '@react-native-community/picker';
import { Images } from '../../utils';
import styles from './style';
import { Ionicons } from 'react-native-vector-icons';
import { connect } from 'react-redux';
import { classes } from '../../redux/actions/classes';
import { subjects } from '../../redux/actions/subjects';
import { topics } from '../../redux/actions/topics';
import { queryform } from '../../redux/actions/queryform';
import SelectMultiple from 'react-native-select-multiple'
import DateTimePicker from '@react-native-community/datetimepicker';
const subject = [
  { label: "Hindi", value: 'hindi' },
  { label: "English", value: 'eng' },
  { label: "Maths", value: 'maths' },
  { label: "Physics", value: 'physics' },
  { label: "Biology", value: 'bio' },
  { label: "Chemestry", value: 'chem' },
  { label: "History", value: 'hist' },
  { label: "Political Sience", value: 'polSci' },
  { label: "Geography", value: 'geo' },
  { label: "Computer", value: 'comp' },
]
class ClassForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      show_date: false,
      date_placeholder: true,
      selectedValue: '',
      date: new Date(),
    }
    this.props.classes()
  }
  state = {
    class: 'Select Class',
    board: 'Select Board',
    topics: 'Select Topic',
    name: '',
    phoneNo: '',
    adress: '',
    email: '',
    school: '',
    topic: '',
    date: '',
    chapter: '',
    preferredTime: '',
    selectedSubjects: [],
    allsubjects:'',
    formateddate:''
  };
  onFamilySelectionsChange = (selectedSubjects) => {
    this.setState({ selectedSubjects: selectedSubjects })
  }
  onChangeDate = (event, selectedDate) => {
    const currentDate = selectedDate || date;
    if (Platform.OS === 'ios')
      this.setState({ show_date: true })
    else
      this.setState({ show_date: false })
    // formateddate = this.formatDate(currentDate)
    this.setState({ date: currentDate, date_placeholder: false });
  };
  formatDate = (date) => {
    return `${date.getDate()}/${date.getMonth() +
      1}/${date.getFullYear()}`;
  };
  showDatepicker = () => {
    this.setState({ show_date: true });
  };
  submitForm() {
    console.log(this.state)
    console.log('hi')
    // this.setState({ allsubjects: allsubjects }).then(()=> {
      this.props.queryform(this.state)
      this.props.navigation.goBack()
    // });
  }
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.wrapper}>
          <KeyboardAvoidingView behavior="padding">
            <ScrollView
              contentContainerStyle={styles.scrollWrapper}
              showsVerticalScrollIndicator={false}>
              <View style={styles.upperCont}>
                <TouchableOpacity
                  style={styles.arrowCont}
                  onPress={() => this.props.navigation.goBack()}>
                  <Image source={Images.BackIcon} />
                </TouchableOpacity>
                <View>
                  <Text style={styles.headerText}>APPLICATION FORM</Text>
                  <Text style={styles.textStyle1}>Fill out below Information so that we can help u better</Text>
                </View>
              </View>
              <View style={styles.TabView}>
                {/* <Text style={styles.textStyle1}>Fill out below Information so that we can help u better</Text> */}
                <View style={styles.inputWrapper}>
                  <Text style={styles.textStyle}>Name</Text>
                  <TextInput style={styles.textinput}
                    underlineColorAndroid="transparent"
                    placeholder="Enter Name"
                    value={this.state.name}
                    onChangeText={name => this.setState({ name })}
                    placeholderTextColor="#808080"
                  />
                </View>
                <View style={styles.inputWrapper}>
                  <Text style={styles.textStyle}>Phone-No</Text>
                  <TextInput style={styles.textinput}
                    underlineColorAndroid="transparent"
                    keyboardType='numeric'
                    maxLength={10}
                    placeholder="Enter Phone No "
                    value={this.state.phoneNo}
                    onChangeText={phoneNo => this.setState({ phoneNo })}
                    placeholderTextColor="#808080"
                  />
                </View>
                <View style={styles.inputWrapper}>
                  <Text style={styles.textStyle}>Address</Text>
                  <TextInput style={styles.textinput}
                    underlineColorAndroid="transparent"
                    placeholder="Enter Address"
                    value={this.state.adress}
                    onChangeText={adress => this.setState({ adress })}
                    placeholderTextColor="#808080"
                  />
                </View>
                <View style={styles.inputWrapper}>
                  <Text style={styles.textStyle}>Email</Text>
                  <TextInput style={styles.textinput}
                    underlineColorAndroid="transparent"
                    placeholder="Enter Email"
                    value={this.state.email}
                    onChangeText={email => this.setState({ email })}
                    placeholderTextColor="#808080"
                  />
                </View>
                <View style={styles.inputWrapper}>
                  <Text style={styles.textStyle}>School</Text>
                  <TextInput style={styles.textinput}
                    underlineColorAndroid="transparent"
                    placeholder="Enter School"
                    value={this.state.school}
                    onChangeText={school => this.setState({ school })}
                    placeholderTextColor="#808080"
                  />
                </View>
                <View style={styles.inputWrapper}>
                  <Text style={styles.textStyle}> Board</Text>
                  <View style={styles.pickerBox}>
                    <Picker
                      selectedValue={this.state.board}
                      style={styles.pickerStyle}
                      onValueChange={(itemValue, itemIndex) =>
                        this.setState({ board: itemValue })
                      }>
                      <Picker.Item label="Select Board" value="st" color="#808080" />
                      <Picker.Item label="C.B.S.E" value="C.B.S.E" />
                      <Picker.Item label="I.C.S.C" value="I.C.S.C" />
                      <Picker.Item label="State Board" value="State Board" />
                    </Picker>
                  </View>
                </View>
                <View style={styles.inputWrapper}>
                  <Text style={styles.textStyle}> Class</Text>
                  <View style={styles.pickerBox}>
                    <Picker
                      selectedValue={this.state.class}
                      style={styles.pickerStyle}
                      onValueChange={(itemValue, itemIndex) =>
                        this.setState({ class: itemValue })
                      }>
                      <Picker.Item label="Select Class" value="sc" color="#808080" />
                      <Picker.Item label="Class 1" value="1" />
                      <Picker.Item label="Class 2" value="2" />
                      <Picker.Item label="Class 3" value="3" />
                      <Picker.Item label="Class 4" value="4" />
                      <Picker.Item label="Class 5" value="5" />
                      <Picker.Item label="Class 6" value="6" />
                      <Picker.Item label="Class 7" value="7" />
                      <Picker.Item label="Class 8" value="8" />
                      <Picker.Item label="Class 9" value="9" />
                      <Picker.Item label="Class 10" value="10" />
                      <Picker.Item label="Class 11" value="11" />
                      <Picker.Item label="Class 12" value="12" />
                    </Picker>
                  </View>
                </View>
                <View style={styles.inputWrapper}>
                  <Text style={styles.textStyle}> Subject</Text>
                  <SelectMultiple
                    items={subject}
                    selectedItems={this.state.selectedSubjects}
                    onSelectionsChange={this.onFamilySelectionsChange}
                    style={{ width: '100%', marginTop: 15 }}
                    labelStyle={{ marginLeft: 30, fontWeight: 'bold' }} />
                </View>
                <View style={styles.inputWrapper4}>
                  <Text style={styles.textStyle}>Chapter</Text>
                  <TextInput style={styles.textinput}
                    underlineColorAndroid="transparent"
                    placeholder="Enter Chapter"
                    value={this.state.chapter}
                    onChangeText={chapter => this.setState({ chapter })}
                    placeholderTextColor="#808080"
                  />
                </View>
                <View style={styles.inputWrapper2}>
                  <Text style={styles.textStyle}>Select Date</Text>
                  <View style={styles.formBox}>
                    <Image source={Images.Calender} style={styles.searchIcon} />
                    <TouchableOpacity style={styles.formshortInput}
                      onPress={this.showDatepicker}>
                      <Text style={styles.placeholderText}>{(this.state.date_placeholder) ? ("Date") : (this.formatDate(this.state.date))}</Text>
                      {this.state.show_date && (
                        <DateTimePicker
                          onPress={this.showDatepicker}
                          style={styles.formshortInput}
                          testID="dateTimePicker"
                          value={this.state.date}
                          mode='date'
                          is24Hour={true}
                          display="default"
                          onChange={this.onChangeDate}
                        />
                      )}
                    </TouchableOpacity>
                  </View>
                  <View style={styles.inputWrapper, { marginTop: 15 }}>
                    <Text style={styles.textStyle}>Preferred Time</Text>
                    <TextInput style={styles.textinput}
                      underlineColorAndroid="transparent"
                      placeholder="Enter Time"
                      value={this.state.preferredTime}
                      onChangeText={preferredTime => this.setState({ preferredTime })}
                      placeholderTextColor="#808080"
                    />
                  </View>
                  <TouchableOpacity
                    style={styles.boxBtn2}
                    onPress={() => this.submitForm()}>
                    <Text
                      style={styles.btnText}>
                      SUBMIT
                          </Text>
                  </TouchableOpacity>
                </View>
              </View>
            </ScrollView>
          </KeyboardAvoidingView>
        </View>
      </View>
    );
  }
}
const mapStateToProps = (state) => {
  return {
    classes1: state.classes.classes,
    subjects1: state.subjects.subjects,
    topics1: state.topics.topics,
    queryform: state.queryform.queryform,
  };
};
export default connect(mapStateToProps, { classes, subjects, topics, queryform })(ClassForm);
