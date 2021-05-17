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
const { width, height } = Dimensions.get('window');
import { Images } from '../../utils';
import styles from './style';
import StarRating from 'react-native-star-rating';
import { connect } from 'react-redux';
import { addFeedback } from '../../redux/actions/addFeedback';

class NewFeedback extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            rating: 0,
            name:'',
            email:'',
            feedback:''
        };
    }
    onStarRatingPress(rating) {
        this.setState({
            rating: rating
        });
    }

    submitForm(){
        this.props.addFeedback(this.state)
    }

    render() {
        // console.log(this.state)
        return (
            <View style={styles.container}>
                <View style={styles.wrapper}>
                    <KeyboardAvoidingView behavior="padding">
                        {/* <ScrollView
                            contentContainerStyle={styles.scrollWrapper}
                            showsVerticalScrollIndicator={false}> */}
                        <View style={styles.upperCont}>
                            <TouchableOpacity
                                style={styles.arrowCont}
                                onPress={() => this.props.navigation.goBack()}>
                                <Image source={Images.BackIcon} />
                            </TouchableOpacity>
                            <View style={{ justifyContent: 'center', alignItems: 'center', marginLeft: '20%' }}>
                                <Text style={styles.headerText}>NEW FEEDBACK</Text>
                            </View>
                        </View>
                        <View style={{ justifyContent: 'center', alignItems: 'center', width: '100%', marginTop: '20%' }}>
                            <View style={styles.formBox}>
                                <TextInput placeholderTextColor="#000" autoCapitalize='none'
                                    style={styles.input1} placeholder="Full Name"
                                    value={this.state.name}
                                    onChangeText={name => this.setState({ name })}
                                />
                            </View>
                            <View style={styles.formBox}>
                                <TextInput placeholderTextColor="#000" autoCapitalize='none'
                                    style={styles.input1} placeholder="Email"
                                    value={this.state.email}
                                    onChangeText={email => this.setState({ email })}
                                />
                            </View>
                            <View style={styles.loginArea}>
                                <Text style={{ paddingLeft: 10, fontWeight: 'bold' }}>Please Enter Feedback: </Text>
                                <TextInput placeholderTextColor="#000" autoCapitalize='none' multiline={true} textAlignVertical='top'
                                    style={styles.input1} placeholder=""
                                    value={this.state.feedback}
                                    onChangeText={feedback => this.setState({ feedback })}
                                />

                            </View>
                            <View style={styles.formBox1}>

                                <StarRating fullStarColor="#ffc121"
                                    emptyStarColor="grey"
                                    starSize={37}
                                    disabled={false}
                                    maxStars={5}
                                    rating={this.state.rating}
                                    selectedStar={(rating) => this.onStarRatingPress(rating)}
                                    containerStyle={{ width: 250, }} />
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

                        {/* </ScrollView> */}
                    </KeyboardAvoidingView>
                </View>
            </View>
        );
    }
}
const mapStateToProps = (state) => {
    console.log(state)
  return {
    addFeedback1: state.addFeedback.addFeedback,
  };
};
export default connect(mapStateToProps, { addFeedback })(NewFeedback);


