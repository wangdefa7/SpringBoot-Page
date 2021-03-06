// 指定图表的配置项和数据
var url = window.location.origin;
console.log(url+'/echarts/img/icon_sj.png')
/**
 * 实际金额
 * @type {{yAxis: {type: string}[], xAxis: {axisLabel: {color: string}, data: string[], name: string, type: string, boundaryGap: boolean}[], color: string[], calculable: boolean, legend: {formatter: (function(*=): string), itemGap: number, data: *[], width: number, icon: string, tooltip: {show: boolean}, itemWidth: number}, series: *[], tooltip: {trigger: string}, title: {text: string, textStyle: {color: string}}, graphic: {cursor: string, top: string, children: *[], onclick: onclick, width: string, invisible: boolean, z: number, id: string, right: string, type: string, bounding: string, height: number}[]}}
 */
var realAmountOption = {
    graphic: [{
        type: 'group',//group 是唯一的可以有子节点的容器。group 可以用来整体定位一组图形元素。
        id: 'yearId',
        right: '13%',
        top: '1%',
        bounding: 'all',//决定此图形元素在定位时，对自身的包围盒计算方式。
        z: 90,
        width: '10%',
        height: 115,
        invisible:false,//是否可见
        cursor : 'pointer',
        onclick:function () {
            alert("123")
        },
        children: [
            {
                type: 'image',
                z: 100,
                right:0,
                style: {
                    image:url+'/echarts/img/icon_sj.png',
                    width: 15,
                    height: 15
                }

            },
            {
                type: 'text',
                z: 100,
                top: '1%',
                left: 0,
                style: {
                    fill:'#c9ecdd',
                    text: [
                        '2019'
                    ].join('\n'),
                    font:'caption'
                }
            }
        ]
    }],
    color:['#a4c6fa','#8bd5f2'],
    title : {
        text: '实际金额（万）',
        textStyle:{
            fontSize: 18,
            fontWeight:500,//字体粗细
            color :'#3e9f90'
        }
    },
    tooltip : {
        trigger: 'axis'
    },
    legend: {
        data:[{
            name:'实际垫付金额',
            textStyle: {
                width:50,
                fontSize : 12
            }
        },{
            name:'实际拨付金额',
            textStyle: {
            }
        }],
        width:155,
        itemWidth : 15,//图例标记的图形宽度。
        itemGap : 60,//图例每项之间的间隔。横向布局时为水平间隔，纵向布局时为纵向间隔。
        icon:'rect',//图标样式
        formatter: function (name) {//提示文字以及样式
            return echarts.format.truncateText(name, 40, '14px Microsoft Yahei', '…');
        },
        tooltip: {//提示文字
            show: true
        },
    },
    calculable : true,
    xAxis : [
        {
            type : 'category',
          //  name:'横坐标名称',
            boundaryGap : false,
            data : ['一月','二月','三月','四月','五月','六月','七月'],
            axisLabel:{
                color:'#999999'
            }
        }
    ],
    yAxis : [
        {
            type : 'value'
        }
    ],
    series : [
        {
            name:'实际垫付金额',
            type:'line',
            smooth:true,//是否平滑曲线显示。
            itemStyle: {//折线拐点标志的样式。
                //  color:'#69af1e',
                normal: {
                    areaStyle: {//区域填充
                        color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                            offset: 0,
                            color: '#a4c6fa'
                        }, {
                            offset: 1,
                            color: '#ffffff'
                        }])
                    }
                }
            },
            data:[10, 12, 21, 54, 260, 830, 710],
            lineStyle:{//线条样式。
                type:'solid',
                normal:{
                    width:1
                }
            }
        },
        {
            name:'实际拨付金额',
            type:'line',
            smooth:true,
            lineStyle:{
                width:1
            },
            itemStyle: {
                normal: {
                    areaStyle: {//区域填充
                        color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                            offset: 0,
                            color: '#8bd5f2'
                        }, {
                            offset: 1,
                            color: '#ffffff'
                        }])
                    }
                }
            },
            data:[30, 182, 434, 791, 390, 30, 10]
        }
    ],
};

/**
 * 预留保证金
 * @type {{yAxis: {type: string}[], xAxis: {axisLabel: {color: string}, data: string[], name: string, type: string, boundaryGap: boolean}[], color: string[], calculable: boolean, legend: {formatter: (function(*=): string), itemGap: number, data: *[], width: number, icon: string, tooltip: {show: boolean}, itemWidth: number}, series: *[], tooltip: {trigger: string}, title: {text: string, textStyle: {color: string}}, graphic: {cursor: string, top: string, children: *[], onclick: onclick, width: string, invisible: boolean, z: number, id: string, right: string, type: string, bounding: string, height: number}[]}}
 */
var reserveMarginOption = {
    graphic: [{
        type: 'group',//group 是唯一的可以有子节点的容器。group 可以用来整体定位一组图形元素。
        id: 'yearId',
        right: '13%',
        top: '1%',
        bounding: 'all',//决定此图形元素在定位时，对自身的包围盒计算方式。
        z: 90,
        width: '10%',
        height: 115,
        invisible:false,//是否可见
        cursor : 'pointer',
        onclick:function () {
            alert("123")
        },
        children: [
            {
                type: 'image',
                z: 100,
                right:0,
                style: {
                    image:url+'/echarts/img/icon_sj.png',
                    width: 15,
                    height: 15
                }

            },
            {
                type: 'text',
                z: 100,
                top: '1%',
                left: 0,
                style: {
                    fill:'#c9ecdd',
                    text: [
                        '2019'
                    ].join('\n'),
                    font:'caption'
                }
            }
        ]
    }],
    color:['#32b77d'],
    title : {
        text: '预留保证金（千）',
        textStyle:{
            fontWeight:500,//字体粗细
            color :'#3e9f90'
        }
    },
    tooltip : {
        trigger: 'axis'
    },
    legend: {
        data:[{
            name:'预留保证金',
            textStyle: {
                width:50,
                fontSize : 12
            }
        }],
        width:155,
        itemWidth : 15,//图例标记的图形宽度。
        itemGap : 60,//图例每项之间的间隔。横向布局时为水平间隔，纵向布局时为纵向间隔。
        icon:'rect',//图标样式
        formatter: function (name) {//提示文字以及样式
            return echarts.format.truncateText(name, 40, '14px Microsoft Yahei', '…');
        },
        tooltip: {//提示文字
            show: true
        },
    },
    calculable : true,
    xAxis : [
        {
            type : 'category',
           // name:'横坐标名称',
            boundaryGap : false,
            data : ['一月','二月','三月','四月','五月','六月','七月'],
            axisLabel:{
                color:'#999999'
            }
        }
    ],
    yAxis : [
        {
            type : 'value'
        }
    ],
    series : [
        {
            name:'预留保证金',
            type:'line',
            smooth:true,//是否平滑曲线显示。
            symbol:'circle',//标记的图形。
            symbolSize : 10,//大小
            itemStyle: {//折线拐点标志的样式。
                //  color:'#69af1e',
                normal: {
                    areaStyle: {//区域填充
                        color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                            offset: 0,
                            color: '#3e9f90'
                        }, {
                            offset: 1,
                            color: '#ffffff'
                        }])
                    }
                }
            },
            data:[10, 12, 21, 54, 260, 830, 710],
            lineStyle:{//线条样式。
                type:'solid',
                width:3

            }
        }
    ],
};

/**
 * 不合理费用
 * @type {{yAxis: {type: string}[], xAxis: {axisLabel: {color: string}, data: string[], name: string, type: string, boundaryGap: boolean}[], color: string[], calculable: boolean, legend: {formatter: (function(*=): string), itemGap: number, data: *[], width: number, icon: string, tooltip: {show: boolean}, itemWidth: number}, series: *[], tooltip: {trigger: string}, title: {text: string, textStyle: {color: string}}, graphic: {cursor: string, top: string, children: *[], onclick: onclick, width: string, invisible: boolean, z: number, id: string, right: string, type: string, bounding: string, height: number}[]}}
 */
var unreasonableAmountOption = {
    graphic: [{
        type: 'group',//group 是唯一的可以有子节点的容器。group 可以用来整体定位一组图形元素。
        id: 'yearId',
        right: '13%',
        top: '1%',
        bounding: 'all',//决定此图形元素在定位时，对自身的包围盒计算方式。
        z: 90,
        width: '10%',
        height: 115,
        invisible:false,//是否可见
        cursor : 'pointer',
        onclick:function () {
            alert("123")
        },
        children: [
            {
                type: 'image',
                z: 100,
                right:0,
                style: {
                    image:url+'/echarts/img/icon_sj.png',
                    width: 15,
                    height: 15
                }

            },
            {
                type: 'text',
                z: 100,
                top: '1%',
                left: 0,
                style: {
                    fill:'#c9ecdd',
                    text: [
                        '2019'
                    ].join('\n'),
                    font:'caption'
                }
            }
        ]
    }],
    color:[' #789cef'],
    title : {
        text: '不合理费用（千）',
        textStyle:{
            fontWeight:500,//字体粗细
            color :'#3e9f90'
        }
    },
    tooltip : {
        trigger: 'axis'
    },
    legend: {
        data:[{
            name:'不合理费用',
            textStyle: {
                width:50,
                fontSize : 12
            }
        }],
        width:155,
        itemWidth : 15,//图例标记的图形宽度。
        itemGap : 60,//图例每项之间的间隔。横向布局时为水平间隔，纵向布局时为纵向间隔。
        icon:'rect',//图标样式
        formatter: function (name) {//提示文字以及样式
            return echarts.format.truncateText(name, 40, '14px Microsoft Yahei', '…');
        },
        tooltip: {//提示文字
            show: true
        },
    },
    calculable : true,
    xAxis : [
        {
            type : 'category',
           // name:'横坐标名称',
            boundaryGap : false,
            data : ['一月','二月','三月','四月','五月','六月','七月'],
            axisLabel:{
                color:'#999999'
            }
        }
    ],
    yAxis : [
        {
            type : 'value'
        }
    ],
    series : [
        {
            name:'不合理费用',
            type:'line',
            //smooth:'none',//是否平滑曲线显示。
            smooth: 0.6,
            symbol: 'none',//标记的图形
            itemStyle: {//折线拐点标志的样式。
            },
            data:[10, 12, 21, 54, 260, 830, 710],
            lineStyle:{//线条样式。
                type:'solid',
                width:3,
                shadowColor: 'rgba(0, 0, 0, 0.5)',//阴影
                shadowBlur: 5,
                shadowOffsetY:5 //阴影垂直方向上的偏移距离。
                //shadowOffsetX:0 //阴影水平方向上的偏移距离
            }
        }
    ],
};

/**
 * 超定额费用
 * @type {{yAxis: {type: string}[], xAxis: {axisLabel: {color: string}, data: string[], name: string, type: string, boundaryGap: boolean}[], color: string[], calculable: boolean, legend: {formatter: (function(*=): string), itemGap: number, data: *[], width: number, icon: string, tooltip: {show: boolean}, itemWidth: number}, series: *[], tooltip: {trigger: string}, title: {text: string, textStyle: {color: string}}, graphic: {cursor: string, top: string, children: *[], onclick: onclick, width: string, invisible: boolean, z: number, id: string, right: string, type: string, bounding: string, height: number}[]}}
 */
var overrateAmountOption = {
    graphic: [{
        type: 'group',//group 是唯一的可以有子节点的容器。group 可以用来整体定位一组图形元素。
        id: 'yearId',
        right: '13%',
        top: '1%',
        bounding: 'all',//决定此图形元素在定位时，对自身的包围盒计算方式。
        z: 90,
        width: '10%',
        height: 115,
        invisible:false,//是否可见
        cursor : 'pointer',
        onclick:function () {
            alert("123")
        },
        children: [
            {
                type: 'image',
                z: 100,
                right:0,
                style: {
                    image:url+'/echarts/img/icon_sj.png',
                    width: 15,
                    height: 15
                }

            },
            {
                type: 'text',
                z: 100,
                top: '1%',
                left: 0,
                style: {
                    fill:'#c9ecdd',
                    text: [
                        '2019'
                    ].join('\n'),
                    font:'caption'
                }
            }
        ]
    }],
    color:['#b785f8'],
    title : {
        text: '超定额费用（千）',
        textStyle:{
            fontWeight:500,//字体粗细
            color :'#3e9f90'
        }
    },
    tooltip : {
        trigger: 'axis'
    },
    legend: {
        show: true,
        data:[{
            name:'超定额费用',
            textStyle: {
                width:50,
                fontSize : 12
            }
        }],
        width:155,
        itemWidth : 15,//图例标记的图形宽度。
        itemGap : 60,//图例每项之间的间隔。横向布局时为水平间隔，纵向布局时为纵向间隔。
        icon:'rect',//图标样式
        formatter: function (name) {//提示文字以及样式
            return echarts.format.truncateText(name, 40, '14px Microsoft Yahei', '…');
        },
        tooltip: {//提示文字
            show: true
        },
    },
    calculable : true,
    xAxis : [
        {
            type : 'category',
           // name:'横坐标名称',
            boundaryGap : false,
            data : ['一月','二月','三月','四月','五月','六月','七月'],
            axisLabel:{
                color:'#999999'
            }
        }
    ],
    yAxis : [
        {
            type : 'value'
        }
    ],
    series : [
        {
            name:'超定额费用',
            type:'line',
            smooth:true,//是否平滑曲线显示。
            symbol: 'none',//折点
            itemStyle: {//折线拐点标志的样式。
            },
            data:[10, 12, 21, 54, 260, 830, 710],
            lineStyle:{//线条样式。
                type:'solid',
                width:3,
                shadowColor: 'rgba(0, 0, 0, 0.5)',//阴影
                shadowBlur: 5,
                shadowOffsetY:5 //阴影垂直方向上的偏移距离。
            }
        }
    ],
};