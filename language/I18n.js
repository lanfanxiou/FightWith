import I18n,{ getLanguages } from 'react-native-i18n'
import en from "./locales/en";
import zh from "./locales/zh";

I18n.fallbacks = true;

I18n.translations = {
    en,
    zh,
};

I18n.defaultLocale = 'zh';
// I18n.localeLanguage = () => {
// //
// //
// //     new DataRepository().fetchLocalRepository('localLanguage')
// //         .then((res)=>{
// //
// //             I18n.locale = res;
// //
// //         })
// //         .catch((error)=>{
// //
// //             I18n.locale = DeviceInfo.getDeviceLocale();
// //
// //         });
// //
// //     return I18n.locale;
// //
// // };

export { I18n, getLanguages };
//export default I18n;