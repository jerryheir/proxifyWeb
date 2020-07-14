import React from 'react';
import { View, Text, TouchableOpacity, Animated, Image, Easing } from 'react-native';
import { connect } from 'react-redux';
import { toggleMenu } from '../Actions/mainAction';
import { styles } from '../Styles';

interface Props {
  open: boolean;
  toggleMenu: Function;
  screen: string;
}
interface State {}

class Home extends React.PureComponent<Props, State> {
  constructor(props: Props){
    super(props);
    this.rotate = new Animated.Value(360);
    this.animatedPosition = new Animated.ValueXY({ x: 0, y: -100 })
  }
  rotate: any;
  animatedPosition: Animated.ValueXY;
  componentDidUpdate(prevProps: Props){
    if (prevProps.open !== this.props.open){
      this.toggle()
    }
  }
  toggle = () => {
    const { open } = this.props;
    const object = { useNativeDriver: false };
    const animatedPosition = open ?         
    {
      toValue: { x: 0, y: -100 },
      duration: 300,
    } : {
      toValue: { x: 260, y: -360 },
      duration: 400,
    }
    const rotate = open ? 
    {
      toValue: 355,
      duration: 300,
      easing: Easing.ease
    } : {
      toValue: 360,
      duration: 400,
      easing: Easing.ease
    }
    Animated.parallel([
      Animated.timing(
        this.animatedPosition,
        {
          ...animatedPosition,
          ...object
        }
      ),
      Animated.timing(
        this.rotate,
        {
          ...rotate,
          ...object
        }
      ),
    ]).start()
  }
  render() {
    const { toggleMenu, screen } = this.props;
    console.log(this.rotate)
    return (
      <Animated.View style={[styles.homeAnimatedContainer, {
        // backgroundColor: 'pink',
        left: this.animatedPosition.x, right: this.animatedPosition.y,
        transform: [{
          rotate: `${this.rotate._value}deg`
        }]
      }]}>
        <View style={styles.homeHeader}>
          <TouchableOpacity
          onPress={()=>toggleMenu()}
          style={styles.homePressable}
          >
            <Image 
            source={{ uri: 'https://www.pngjoy.com/pngl/41/952275_hamburger-icon-menu-icon-png-grey-hd-png.png' }}
            style={{ height: 28, width: 40 }}
            />
          </TouchableOpacity>
          <Text style={styles.homeHeaderText}>{screen}</Text>
        </View>
      </Animated.View>
    );
  }
};

const mapStateToProps = ({ main }: any) => ({
  open: main.open,
  screen: main.screen
})

export default connect(mapStateToProps, {
  toggleMenu
})(Home);