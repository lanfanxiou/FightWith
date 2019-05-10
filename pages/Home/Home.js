import React,{Component} from "react";
import {View,Image,Text,StyleSheet,Dimensions,ScrollView,TouchableOpacity} from "react-native";
import Details from "../static/Details";
import Exhibition from "./Exhibition";

class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isModalVisible: false,
        };
    }

    toggleModal = () => {
        this.setState({ isModalVisible: !this.state.isModalVisible });
    };
    render() {
        return (
            <View style={styles.box1}>
                {/*顶部及登录*/}
                <View style={styles.view1}>
                    <Details/>
                </View>

                {/*展示区*/}
                <View style={styles.view2}>
                    <Exhibition/>
                </View>
            </View>
        );
    }
}

const styles =StyleSheet.create( {
    box1:{
        flex:1
    },
    view1:{
        flex:1,
        flexDirection:'row',
        backgroundColor:'#333333'
    },
    view2:{
        flex:10,
        borderWidth:1,
        backgroundColor: '#000000'
    },
});
export default Home;
