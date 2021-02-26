import React from "react";
import { connect } from "react-redux";
import {
  View,
  Button,
  Text,
  ScrollView,
  Image,
  Navigator,
} from "@tarojs/components";
import Taro from "@tarojs/taro";
import { add, minus, asyncAdd, getname } from "../../actions/counter";
import { AtButton, AtCard, AtSearchBar, AtTabBar } from "taro-ui";

import "./index.scss";
// import { AtTabBar } from "taro-ui";
// import { AtCard } from "taro-ui";

// #region 书写注意
//
// 目前 typescript 版本还无法在装饰器模式下将 Props 注入到 Taro.Component 中的 props 属性
// 需要显示声明 connect 的参数类型并通过 interface 的方式指定 Taro.Component 子类的 props
// 这样才能完成类型检查和 IDE 的自动提示
// 使用函数模式则无此限制
// ref: https://github.com/DefinitelyTyped/DefinitelyTyped/issues/20796
//
// #endregion

type PageStateProps = {
  counter: {
    num: number;
  };
};

type PageDispatchProps = {
  add: () => void;
  dec: () => void;
  asyncAdd: () => any;
  getname: () => any;
};

type PageOwnProps = {};

type PageState = {
  current: number;
  value: string;
};

type IProps = PageStateProps & PageDispatchProps & PageOwnProps;

interface Index {
  props: IProps;
}

@connect(
  (state) => ({
    counter: state.counter,
  }),
  (dispatch) => ({
    add() {
      dispatch(add());
    },
    dec() {
      dispatch(minus());
    },
    asyncAdd() {
      dispatch(asyncAdd());
    },
    getname() {
      dispatch(getname());
    },
  })
)
class Index extends React.Component<PageOwnProps, PageState> {
  constructor(props) {
    super(props);
    this.state = {
      current: 0,
      value: "",
    };
  }
  handleClick(value) {
    this.setState({
      current: value,
    });
  }
  onChange(value) {
    this.setState({
      value: value,
    });
  }
  pay(){
    Taro.requestPayment({
      timeStamp: '',
      nonceStr: '',
      package: '',
      signType: 'MD5',
      paySign: '',
      success: function (res) { },
      fail: function (res) { }
    })
  }

  componentWillReceiveProps(nextProps) {
    console.log(this.props, nextProps);
  }

  componentWillUnmount() {}

  componentDidShow() {}

  componentDidHide() {}

  render() {
    return (
      <View className="index">
        <AtSearchBar
          value={this.state.value}
          onChange={this.onChange.bind(this)}
        />
        <ScrollView>
          <AtCard>
            <Image
              style="width: 300px;height: 300px;background: #fff;"
              src="https://res.wx.qq.com/wxdoc/dist/assets/img/0.4cb08bb4.jpg"
            />
          </AtCard>
          <Button className="dec_btn" onClick={this.props.asyncAdd}>
            async
          </Button>
          <Button className="dec_btn" onClick={this.props.getname}>
            getname
          </Button>
          <View>
            <Text>{this.props.counter.num}</Text>
          </View>
          <View>
            <Text>Hello, World</Text>
          </View>
          <View className="at-row">
            <View className="at-col">A</View>
            <View className="at-col">B</View>
            <View className="at-col">C</View>
          </View>
          <View className="index">
            <AtButton type="primary">按钮文案</AtButton>
          </View>
          <Navigator url="../detail/index" openType="navigate">
            跳转到新页面1
          </Navigator>
          <Button onClick={this.pay}>支付</Button>
        </ScrollView>
      </View>
    );
  }
}

export default Index;
