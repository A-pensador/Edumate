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
        backgroundColor:'#fff'
    },
    scrollWrapper: {
        paddingBottom: 35
        // backgroundColor: 'pink',
    },
    upperCont: {
        width: '100%',
        // height: height * 0.01,
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'flex-start',
        alignItems:'center',
        marginTop:10
        // backgroundColor: 'maroon',
    },
    arrowCont: {
        width: width * 0.15,
        height: height * 0.03,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        marginLeft: width * 0.02,
        // marginTop:height * 0.05
        
        // backgroundColor: 'pink',
    },
    headerContainer: {
        width,
        height: height * 0.25,
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'row',
        backgroundColor: 'white',
    },
    headerImage: {
        height: height * 0.2,
        width: height * 0.2,
        marginLeft: width * 0.13,
    },
    headerPlaceholderImage: {
        height: height * 0.2,
        width: width * 0.8,
    },
headerText: {
        
        fontSize: width * 0.06,
        color: '#6271f7',
        marginLeft: width * 0.06,
        fontWeight:'bold',
        marginTop:24
        
    },
    tabBarUnderLine: {
        borderBottomWidth: 5,
        borderBottomColor: '#536591',
    },
    tab: {
        backgroundColor: 'white',
    },
    TabView: {
        padding: 10,
        alignItems: 'center',
        marginTop: 20
    },
    classBox: {
        borderWidth: 1,
        borderRadius: height * 0.02,
        height: height * 0.15,
        width: width * 0.45,
        alignItems: 'center',
        justifyContent: 'center',
        marginVertical: height * 0.01,
        marginHorizontal: width * 0.01,
        borderColor: 'grey',
    },
    class: {
        fontSize: width * 0.05,
        color: '#536591',
    },
    inputWrapper: {
        justifyContent: 'flex-start',
        alignItems: 'flex-start',
        width: '100%',
        
    },
    inputWrapper4: {
        justifyContent: 'flex-start',
        alignItems: 'flex-start',
        width: '100%',
        marginTop: 20
        
    },
    inputWrapper1: {
        flexDirection: "row",
        justifyContent: 'flex-start',
        alignItems: 'flex-start',
        width: '100%',
        // marginTop: 10
    },
    inputWrapper2: {
       
        width: '100%',
        
    },
    textStyle: {
        fontSize: 16,
        color: '#808080'
    },
    textStyle1: {
        marginTop:10,
        fontSize: 12,
        color: '#505050',
        marginLeft:-50
    },
    textinput: {
        fontSize: 18,
        // alignself: 'self',
        color: 'black',
        marginBottom: 20,
        borderBottomColor: '#808080',
        borderBottomWidth: 1,
        width: '100%',
        marginTop: 10
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
    uploadBtn: {
        width: width * 0.37,
        backgroundColor: '#6900e8',
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

    formBox: {
        justifyContent:'center',
        alignItems:'center',
        // borderWidth:1,
        width:"100%",
        height:'12%',
        flexDirection:'row',
        // borderRadius:width*0.02,
        // borderWidth:2,
        borderBottomWidth:1,
        borderBottomColor:'#808080',
        // marginTop:height*0.02,
    },
    searchIcon: {
        height:height*0.04,
        width:height*0.04,
        marginRight:width*0.02,
    },
    formshortInput: {
        width:"80%",
        height:'100%',
        marginLeft:width*0.01,
        fontSize:width*0.04,
        justifyContent:'center',
    },

    placeholderText: {
        fontSize:width*0.05,
        color:"#6f7a8c",
    },

    formshortInput: {
        width:"80%",
        // height:'100%',
        marginLeft:width*0.01,
        fontSize:width*0.04,
        justifyContent:'center',
    },

});
