import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View,Image} from 'react-native';
import {Router,Scene,Tabs} from "react-native-router-flux";
import Home from "./pages/Home/Home";
import Match from "./pages/Match/Match";
import  Rule from "./pages/Rule/Rule";
import Details from "./pages/Match/Details";

import {scaleSizeH, scaleSizeW, setSpText} from "./utils/Screen";


type Props = {};
export default class App extends Component<Props> {

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
                tabBarStyle={{scaleSizeH:scaleSizeH(120),borderTopWidth:0.3,borderColor:'#CCCCCC'}}
                //设置tab上的样式
                labelStyle={{fontSize:setSpText(30),lineHeight:scaleSizeH(80),borderLeftWidth:0.3,borderColor:'#CCCCCC'}}>
              <Scene key={"Home"} component={Home} initial={true} title="首页" />
              <Scene key={"Match"} component={Match} title="比赛"/>
              <Scene key={"Rule"} component={Rule} title="规则说明"/>
            </Tabs>
              <Scene key={"Details"} component={Details} title="弹框"/>
          </Scene>
        </Router>
    );
  }
}

const styles = StyleSheet.create({
  tab:{

  }
});
