import React,{Component} from "react";
import {AsyncStorage,View, Text, StyleSheet, TouchableOpacity, Dimensions,Image} from "react-native";
import {scaleSizeH, scaleSizeW,setSpText} from "../../utils/Screen";
import Details from "../static/Details";
const { width, height } = Dimensions.get('window');//获取手机的宽和高
import {I18n} from "../../language/I18n";
import EventBus from 'react-native-event-bus';
import styles from "../../styles/Rule_styles/Rulestyles";


class Rule extends Component {
    constructor(props) {
        super(props);
        this.state = {
            language: 'zh'
        };
        this.renderLanguageItem = this.renderLanguageItem.bind(this)
    }

    componentDidMount() {
        AsyncStorage.getItem('language', (error, result) => {
            if (!error && result) {
                this.setState({ language: result })
            }
        })
    }

    renderLanguageItem(item, index) {
        return (
            <TouchableOpacity
                key={index}
                style={styles.items}
                onPress={() => {
                    AsyncStorage.setItem('language', index);
                    I18n.locale = index;
                    EventBus.getInstance().fireEvent("event",
                        this.setState({
                            language: index
                        })
                    );
                }}
            >
                <View>
                    <View style={styles.buttonMargin}>
                        <Text style={styles.text}>{ item }</Text>
                    </View>
                </View>
            </TouchableOpacity>
        )
    }

    render() {
        const languages = {
            'zh': '简体中文',
            'en': 'English',
        };
        let languageItems = [];
        Object.keys(languages).map((key) => {
            languageItems.push(this.renderLanguageItem(languages[key], key))
        });
        return (
            <View style={styles.box1}>
                {/*顶部及登录*/}
                <View style={styles.view1}>
                    <Details/>
                </View>
                <View style={styles.view2}>
                    <Text style={styles.ruletxt}>
                        {I18n.t('rule.rules')}
                    </Text>
                </View>
                <View style={styles.container}>

                    { languageItems }

                </View>
            </View>
        );
    }
}
export default Rule;
