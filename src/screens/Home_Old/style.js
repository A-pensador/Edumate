import { StyleSheet, Dimensions } from 'react-native';
const { width, height } = Dimensions.get('window');
export default StyleSheet.create({
    container: {
        width,
        height,
        position: 'relative',
    },
    wrapper: {
        width,
        height,
        display: 'flex',
        justifyContent: 'flex-start',
    },
    headerContainer: {
        width,
        height: height * 0.25,
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'row',
        backgroundColor:'white',
    },
    headerImage: {
        height: height * 0.2,
        width: height * 0.2,
        marginLeft: width * 0.13,
    },


    headerPlaceholderImage: {
        height:height*0.2,
        width:width*0.8,
 
    },


    headerText: {
        fontSize: width * 0.07,
        color: '#6271f7',
        marginLeft: width * 0.15,
        fontWeight: 'bold',
    },
    tabBarUnderLine: {
        borderBottomWidth: 5,
        borderBottomColor: '#6271f7',
    },
    tab: {
        backgroundColor: 'white',
    },
    TabView: {
        padding: 10,
        alignItems: 'center',
        marginTop: 30
    },


    classBox:{
        borderRadius: height*0.02,
        height:height*0.15,
        width: width*0.4,
        alignItems: 'center',
        justifyContent: 'center',
        borderColor:'#6271f7',
    },

    class:{
        fontSize: width*0.05,
        fontWeight: 'bold',
        color: '#6271f7',
    },

    classWrapper:{
        height:height*0.15,
        width: width*0.4,
        alignItems: 'center',
        justifyContent: 'center',
        borderWidth: 2,
        borderRadius: height*0.02,
        borderColor:'#81bfff',
    },
    
    cardWrapper:{
        marginHorizontal:width*0.02,
    },

    inputWrapper: {
        justifyContent: 'flex-start',
        alignItems: 'flex-start',
        width: '100%',
        marginTop:20
    },
    inputWrapper1: {
        flexDirection: "row",
        justifyContent: 'flex-start',
        alignItems: 'flex-start',
        width: '100%',
        marginTop: 20
    },
    textStyle: {
        fontSize: 16,
        color: '#808080'
    },
    textinput: {
        fontSize: 18,
        // alignself: 'self',
        color: 'black',
        marginBottom: 20,
        borderBottomColor: '#808080',
        borderBottomWidth: 1,
        width: '100%',
        marginTop: 10,
       
    },
    pickerStyle: {
        height: height * 0.05,
        width: "100%",
        borderBottomWidth: 1,
        borderBottomColor: '#808080',
    },
    pickerBox: {
        borderBottomWidth: 1,
        borderBottomColor: '#808080',
        height: height * 0.05,
        width: "100%",
        marginVertical: height * 0.025,
    },
    boxBtn2: {
        width: width * 0.95,
        height: height * 0.08,
        display: 'flex',
        backgroundColor: '#6271f7',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 30,
        // marginRight: width * 0.018,
        marginTop: width * 0.1
    },
    btnText: {
        fontWeight: 'normal',
        textShadowColor: '#ffffff',
        fontSize: 20,
        color: '#FFFFFF'
    },
    scrollWrapper: {
        paddingBottom: 35
        // backgroundColor: 'pink',
    },
    uploadBtn: {
        width: width * 0.37,
        backgroundColor: '#6271f7',
        height: height * 0.05,
        borderRadius: width * 0.03,
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'row',
        marginLeft: 5
    },
    uploadTxt: {
        color: 'white',
    },
    uploadImage: {
        width: width * 0.05,
        height: width * 0.05,
        marginRight: width * 0.05,
    },
    BannerWrapper: {
        width,
        height: height * 0.20,
        flexDirection: 'row',
        justifyContent: 'flex-start',
        alignItems: 'center',
        marginTop: height * 0.03,
    
      },
    
      bannerImgWrapper: {
        width: width * 0.9,
        height: '100%',
        marginLeft: width * 0.04,
        borderRadius: 10,
      },
    
      bannerImg: {
        width: '100%',
        height: '100%',
        borderRadius: 10,
      },
});
