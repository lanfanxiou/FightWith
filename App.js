import React, {Component} from 'react';
import {StyleSheet,AsyncStorage,View,Text,Button} from 'react-native';
import {Router,Scene,Tabs,Actions} from "react-native-router-flux";
import Home from "./pages/Home/Home";
import Match from "./pages/Match/Match";
import  Rule from "./pages/Rule/Rule";
import Videotape from "./pages/Videotape/Videotape";
import {I18n} from "./language/I18n";
import EventBus from 'react-native-event-bus'
import Modal from "react-native-modal";
import PersonalCenter from "./pages/PersonalCenter/PersonalCenter"
import Myorder from "./pages/PersonalCenter/Myorder"

type Props = {};
export default class App extends Component<Props> {
    constructor(props) {
        super(props);
        this.state = {
            isModalVisible: false
        };
    }

    toggleModal = () => {
        this.setState({ isModalVisible: !this.state.isModalVisible });
    };

    componentDidMount() {
        EventBus.getInstance().addListener("event", (this.languageListener = ()=> {
                this.getUserInfo()
            })
        )
    }
    getUserInfo() {
        AsyncStorage.getItem(
            'language',
            (error,result)=>{
                if (!error){
                    this.setState({
                        language: result
                    })
                }
            }
        )
    }

    componentWillUnmount() {
        EventBus.getInstance().removeListener(
            this.languageListener
        )
    }

    render() {
    return (
        <Router>
          <Scene key={"root"} tabBarPosition={"bottom"} hideNavBar={true}>
            <Tabs
                hideNavBar={true}
                key={"tabber"}
                swipeEnabled={true}
                //隐藏标签栏
                wrap={false}
                //是否显示标签文字
                showLable={false}
                //tab选中的颜色
                activeBackgroundColor={'#41C7DB'}
                //tab没选中的颜色
                inactiveBackgroundColor={'#000000'}
                //选中的文字颜色
                activeTintColor={"#000000"}
                //没选中的文字颜色
                inactiveTintColor={"#ffffff"}
                //标签栏样式
                tabStyle={{paddingBottom:12,borderLeftWidth:0.3,borderColor:'#CCCCCC'}}
                tabBarStyle={{borderTopWidth:0.3,borderColor:'#CCCCCC',alignItems:'center',justifyContent:'center'}}
                //设置tab上的样式
                labelStyle={{alignItems:'center',justifyContent:'center',fontSize:12}}
                >
              <Scene key={"Home"} component={Home} initial={true} title={I18n.t('login.home_page')}/>
              <Scene key={"Match"} component={Match} title={I18n.t('login.match')}/>
              <Scene key={"Rule"} component={Rule} title={I18n.t('login.rule_description')}/>
            </Tabs>
              <Scene key={"videotape"} component={Videotape} title="录像回播"/>
              <Scene key={"PersonalCenter"} component={PersonalCenter} title="会员权益"/>
              <Scene key={"Myorder"} component={Myorder} title="我的订单"/>
          </Scene>
        </Router>
    );
  }
}

const styles = StyleSheet.create({
  tab:{

  }
});
