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
        backgroundColor: '#F8F8F8',
    },
    scrollWrapper: {
        paddingBottom: 35
        // backgroundColor: 'pink',
    },
    upperCont: {
        // width: '100%',
        height: height * 0.1,
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'flex-start',
        alignItems: 'center',
        // marginTop: 30,
        // marginBottom:20,
        backgroundColor: '#fff',
        // marginLeft:'5%'
    },
    arrowCont: {
        // width: width * 0.15,
        // height: height * 0.03,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        marginLeft: width * 0.07,
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
    headerText: {
        fontSize: width * 0.06,
        color: '#6271f7',
        // marginLeft: width * 0.06,
        fontWeight: 'bold',
        // marginTop: 24
    },
    loginArea: {
        paddingHorizontal: 10,
        width:'90%',
        paddingVertical: 10,
        height: height * 0.25,
        borderWidth: 1,
        marginHorizontal: 20,
        borderRadius: 25,
        marginTop:'5%',
        borderColor: 'white',
        elevation: 3,
        backgroundColor: "#ffffff"
    },
    input1: {
        width: '95%',
        paddingLeft:10
      
    },
    formBox: {
        // justifyContent: 'center',
        alignItems: 'center',
        width: "90%",
        // height:'31%',
        flexDirection: 'row',
        borderRadius: 30,
        // borderWidth:1,
        marginTop: 15,
        backgroundColor: "#fff",
        elevation: 2,
        paddingLeft:10
    },
    formBox1: {
        // justifyContent: 'center',
        alignItems: 'center',
        width: "90%",
        height:'10%',
        flexDirection: 'row',
        borderRadius: 30,
        // borderWidth:1,
        marginTop: 15,
        backgroundColor: "#fff",
        elevation: 2,
        paddingLeft:50
    },
    boxBtn2: {
        width: width * 0.90,
        height: height * 0.08,
       
        backgroundColor: '#6271f7',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 30,
        // marginRight: width * 0.018,
        marginTop: width * 0.15
        
    },
    btnText: {
        fontWeight: 'normal',
        textShadowColor: '#ffffff',
        fontSize: 20,
        color: '#FFFFFF'
    },
});
