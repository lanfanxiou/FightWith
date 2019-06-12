//登陆 测试成功
login=()=>{
    const user = {
        "astrAccountName": "dzk",
        "astrUserPassWord": "123"
    };
    const srtUser = JSON.stringify(user);
    const action = {
        "FromUser": "",
        "Tag": "ac",
        "Message": srtUser,
        "ActionMethod": "UserBLL.Login"
    };
    var wss=new WebSocket("ws://172.16.31.250:9009/");
    wss.onopen=function () {
        wss.send(JSON.stringify(action))
    };
    wss.onmessage=function (ev) {
        alert(ev.data);
    }
};

//查询在日期内的赛事 测试成功
selectDateMatch=()=>{
    var date={
        'aDate':'2019-5-30'
    };
    const srt = JSON.stringify(date);
    const action = {
        "FromUser": "",
        "Tag": "ac",
        "Message": srt,
        "ActionMethod":"CompetitionBLL.GetComprtitionByDate"
    };
    var wss=new WebSocket("ws://172.16.31.250:9009/");
    wss.onopen=function () {
        wss.send(JSON.stringify(action))
    };
    wss.onmessage=function (ev) {
        alert(ev.data);
    }
};

//查询要进行图片轮播的赛事 测试成功
selectSwipeMatch=()=>{
    const action = {
        "FromUser": "",
        "Tag": "ac",
        "Message": "null",
        "ActionMethod":"CompetitionBLL.GetCompetitionByCarousel"
    };
    var wss=new WebSocket("ws://172.16.31.250:9009/");
    wss.onopen=function () {
        wss.send(JSON.stringify(action))
    };
    wss.onmessage=function (ev) {
        console.log(ev.data);
    }
};

//查询要在首页展示的赛事 测试成功
selectIndexMatch=()=>{
    const action = {
        "FromUser": "",
        "Tag": "ac",
        "Message": "null",
        "ActionMethod":"CompetitionBLL.GetCompetitionByIndex"
    };
    var wss=new WebSocket("ws://172.16.31.250:9009/");
    wss.onopen=function () {
        wss.send(JSON.stringify(action))
    };
    wss.onmessage=function (ev) {
        console.log(ev.data);
    }
};

//查询该赛事的玩法 和玩法的投票信息  测试成功
selectMatchInfo=()=>{
    const data={
        "aintComprtitionID":4,
        "astrAccountName":"dzk"
    };
    const str=JSON.stringify(data);
    const action = {
        "FromUser": "",
        "Tag": "ac",
        "Message": str,
        "ActionMethod":"GameMethodBLL.GetCompetitionMethod"
    };
    var wss=new WebSocket("ws://172.16.31.250:9009/");
    wss.onopen=function () {
        wss.send(JSON.stringify(action))
    };
    wss.onmessage=function (ev) {
        console.log(ev.data);
    }
};

//添加一条投票 测试成功
addOneVote=()=>{
    const data={
        "AccountName":"dzk",
        "MethodID":2,
        "CompetitionID":4
    };
    const str=JSON.stringify(data);
    const action = {
        "FromUser": "",
        "Tag": "ac",
        "Message": str,
        "ActionMethod":"BetBLL.InsertBet"
    };
    var wss=new WebSocket("ws://172.16.31.250:9009/");
    wss.onopen=function () {
        wss.send(JSON.stringify(action))
    };
    wss.onmessage=function (ev) {
        console.log(ev.data);
    }
};

