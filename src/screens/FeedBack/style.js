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
        justifyContent: 'space-between',
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
        // marginLeft: width * 0.06,
        fontWeight: 'bold',
        // marginTop: 24
    },
    textStyle1: {
        marginTop: 10,
        fontSize: 12,
        color: '#505050',
        // marginLeft:-50
    },
    docSpecsWrapper: {
        width: '93%',
        display: 'flex',
        flexDirection: 'row',
    },
    docdetailImg: {
        width: 60,
        height: 60,
        borderRadius: 30,
        borderWidth: 1,
        // borderColor: colors.WHITE,
        // shadowColor: colors.BLACK,
        shadowOffset: { width: 2, height: 2 },
        shadowOpacity: 1,
        shadowRadius: 1,
        elevation: 5,
        marginBottom: 4
    },
    docNameWrapper: {
        width: '60%',
        marginLeft: 25,
        display: 'flex',
        marginTop: 3,
        flexDirection: 'column',
    },
    docNameText: {
        fontFamily: 'Helvetica Neue',
        color: '#000',
        fontSize: width * 0.03,
        fontWeight: 'bold',
        paddingBottom: 1,
    },
    docSubNameText: {
        color: '#808080',
        fontSize: width * 0.033,
        fontWeight: 'bold',
        fontFamily: 'Helvetica Neue',
        fontStyle: 'normal',
        marginTop: 2
    },
    middleWrapper: {
        width: '100%',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginTop: height * 0.03,
    },
    locationWrapper: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        marginRight: 20,
        marginLeft: 20
    },
    feedText: {
        fontSize: width * 0.0325,
        fontWeight: '700',
        fontFamily: 'Helvetica Neue',
        fontStyle: 'normal',
        marginLeft: width * 0.05,
    },
    doclocText: {
        marginLeft: width * 0.01,
        fontSize: width * 0.035,
        color: '#898A8F',
    },
    bottom1Wrapper: {
        width: '89%',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginTop: height * 0.02,
    },
    docDetailedWrapper2: {
        width: width * 0.9,
        height: height * 0.15,
        display: 'flex',
        justifyContent: 'flex-start',
        alignItems: 'center',
        backgroundColor: '#ffffff',
        marginTop: height * 0.02,
        borderRadius: 15,
        shadowColor: 'rgba(1, 1, 1, 1)',
        elevation: 4,
        marginLeft: 18,
    },
});
