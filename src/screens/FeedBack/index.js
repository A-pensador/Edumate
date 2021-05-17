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
import { feedback } from '../../redux/actions/feedback';

class FeedBack extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
        }
        this.props.feedback().then(() => { console.log(this.props.feedback1) })
      }
      

    render() {
        // console.log(this.props.feedback1)
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
                            <View style={{ justifyContent: 'center', alignItems: 'center', }}>
                                <Text style={styles.headerText}>FEEDBACK</Text>
                            </View>
                            <TouchableOpacity onPress={() => this.props.navigation.navigate('NewFeedback')} style={{ marginRight: '5%', justifyContent: 'center', alignItems: 'center' }}>
                                <View style={{ padding: 1, justifyContent: 'center', backgroundColor: '#6271f7', borderRadius: 100, minWidth: height * 0.06, minHeight: height * 0.06, alignItems: 'center' }}>
                                    <Image source={Images.plus} style={{ height: height * 0.01, width: height * 0.01, borderRadius: 100, }} />
                                    <Text style={{ fontSize: 8, color: '#fff' }}>Add</Text>
                                </View></TouchableOpacity>
                        </View>
                        <FlatList
                            showsVerticalScrollIndicator={false}
                            data={this.props.feedback1}
                            renderItem={({ item }) => (
                                <>
                                    <View style={styles.docDetailedWrapper2}>
                                        <View
                                            style={[styles.docSpecsWrapper, { marginTop: 10 }]}>
                                            <Image
                                                style={styles.docdetailImg}
                                                // source={require('../../Assets/profile_default.png')}
                                                source={Images.dummy}
                                            />
                                            <View style={styles.docNameWrapper}>
                                                <Text style={styles.docNameText}>
                                                    Name: {item.name}
                                                </Text>
                                                <Text style={styles.docSubNameText}>
                                                    {item.feedback}
                                                </Text>
                                                <View style={{ marginTop: 5, flexDirection: 'row' }}>
                                                    <StarRating fullStarColor="#ffc121" emptyStarColor="grey" starSize={17}
                                                        disabled={false} maxStars={5} rating={item.rating} containerStyle={{ width: 100, }} />
                                                </View>
                                            </View>
                                        </View>
                                    </View>
                                </>
                            )}
                            keyExtractor={item => item.id}
                        />
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
    feedback1: state.feedback.feedback,
  };
};
export default connect(mapStateToProps, { feedback })(FeedBack);

