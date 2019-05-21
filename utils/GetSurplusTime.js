/*

此组件的调用说明：
<GetSurplusTime stringTime="2321-01-01 0:00:00" units={{
  century:"世纪",	//“世纪”分隔符
  year:"年",		//“年”分隔符
  month:"月",		//“月”分隔符
  day:"天",		//“日”分隔符
  hour:"小时",	//“时”分隔符
  minute:"分",	//“分”分隔符
  second:"秒"		//“秒”分隔符
}} />


*/

//import {} from 'react-native';
import React,{Component} from 'react';

export default class GetSurplusTime extends Component{
    constructor(props) {
        super(props);
        this.state={
            surplusTime:"00"+this.units.second  //剩余时间
        };
    }


    //单位分隔符----------------------
    units=(this.props.units===undefined||this.props.units===null||this.props.units==="")?{
        century:"世纪",	//“世纪”分隔符
        year:"年",		//“年”分隔符
        month:"月",		//“月”分隔符
        day:"天",		//“日”分隔符
        hour:"小时",	//“时”分隔符
        minute:"分",	//“分”分隔符
        second:"秒"		//“秒”分隔符
    }:this.props.units;


    //时间
    //var titi="2019-06-01 19:00:00";
    stringTime=(this.props.stringTime===undefined||this.props.stringTime==="")?"2221-01-01 0:00:00":this.props.stringTime;  //字符串时间
    endTime=new Date((this.stringTime).replace(/-/g,"/"));  //将“字符串时间”转成“时间”，作为结束时间。


    //获取剩余时间
    getSurplusTime=()=>{
        //算出“结束时间”与“现在的时间”间隔的毫秒数
        let intervalMillisecond=this.endTime-(new Date());


        //算出“秒”。
        let s=(intervalMillisecond/1000)+"";  //未取整的“秒”
        s=(s.split("."))[0];  //取整。
        let second=s%60;  //算出将要显示的“秒”，即当前“分”的“秒”。-------------------------------------------------------------
        second=second<10?"0"+second+this.units.second:second+this.units.second;  //给将要显示的“秒”拼接0和拼接单位。

        //如果总“秒”等于0或小于0就停止。
        if(s<=0){
            //关闭计时器
            clearInterval(this.timer);

            //alert("OK");

            return "00"+this.units.second;  //只返回“秒”
        }


        //如果只剩下秒数，就不再执行秒钟以下的代码了，以节省性能。
        //当“s<=59”时就证明是只剩下秒数了。
        if(s<=59){
            return second;
        }


        //算出“分”。
        let m=(s/60)+"";  //未取整的“分”
        m=(m.split("."))[0];  //取整。
        let minute=m%60;  //算出将要显示的“分”，即当前“时”的“分”。-------------------------------------------------------------
        minute=minute<10?m==="0"?"":"0"+minute+this.units.minute:minute+this.units.minute;  //给将要显示的“分”拼接0和拼接单位。


        //如果只剩下分，就不再执行分钟以下的代码了，以节省性能。
        //当“m<=59”时就证明是只剩下分了。
        if(m<=59){
            return minute+second;
        }


        //算出“时”。
        let h=(m/60)+"";  //未取整的“时”
        h=(h.split("."))[0];  //取整。
        let hour=h%24;  //算出将要显示的“时”，即当“日”的“时”。-------------------------------------------------------------
        hour=h==="0"?"":hour+this.units.hour;  //给将要显示的“时”拼接单位。


        //如果只剩下时，就不再执行时钟以下的代码了，以节省性能。
        //当“h<=23”时就证明是只剩下时了。
        if(h<=23){
            return hour+minute+second;
        }


        //以上代码是最精确的，以下代码可能有误差。因为无法知道具体“月”是30天还是31天还是28天还是29天，除了天数不精准之外，算法是完成精准的，还有总体的时间也是精准的。



        //算出“日”。
        let d=(h/24)+"";  //未取整的“日”
        d=(d.split("."))[0];  //取整。
        let day=d%30;  //算出将要显示的“日”，即当“月”的“日”。-------------------------------------------------------------
        day=d==="0"?"":day+this.units.day;  //给将要显示的“日”拼接单位。


        //如果只剩下日，就不再执行日以下的代码了，以节省性能。
        //当“d<=29”时就证明是只剩下日了。
        if(d<=29){
            return day+hour+minute+second;
        }


        //算出“月”。
        let mo=(d/30)+"";  //未取整的“月”
        mo=(mo.split("."))[0];  //取整。
        let month=mo%12;  //算出将要显示的“月”，即当“年”的“月”。-------------------------------------------------------------
        month=mo==="0"?"":month+this.units.month;  //给将要显示的“月”拼接单位。


        //如果只剩下月，就不再执行月以下的代码了，以节省性能。
        //当“mo<=12”时就证明是只剩下月了。
        if(mo<=11){
            return month+day+hour+minute+second;
        }


        //算出“年”。
        let y=(mo/12)+"";  //未取整的“年”
        y=(y.split("."))[0];  //取整。
        let year=y%100;  //算出将要显示的“年”，即当前“世纪”的“年”。-------------------------------------------------------------
        year=y==="0"?"":year+this.units.year;  //给将要显示的“年”拼接单位。


        //如果只剩下年，就不再执行年以下的代码了，以节省性能。
        //当“y<=99”时就证明是只剩下年了。
        if(y<=99){
            return year+month+day+hour+minute+second;
        }


        //算出“世纪”。
        let c=(y/100)+"";  //未取整的“世纪”
        c=(c.split("."))[0];  //取整。
        let century=c==="0"?"":c+this.units.century;  //给将要显示的“世纪”拼接单位。-------------------------------------------------------------


        //返回计算出来的结果。
        return century+year+month+day+hour+minute+second;
    };

    //计时器
    timer=null;

    //DOM挂载到DOM树中后才执行。
    componentDidMount(){
        //创建计时器。
        if(this.timer==null){
            this.timer=setInterval(()=>{
                this.setState({
                    surplusTime:this.getSurplusTime()
                });
            },1000);
        }
    };

    //DOM将要从DOM树中移除后才执行。
    componentWillUnmount(){
        //关闭计时器
        clearInterval(this.timer);
        this.timer=null;
    };

    render(){
        return this.state.surplusTime;
    }
}



