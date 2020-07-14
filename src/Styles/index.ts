import {StyleSheet} from 'react-native';
import {colors} from './Colors';
import {Regular, Bold} from './Fonts';

export {
    colors
} from './Colors';

export {
    Light,
    Regular,
    Bold
} from './Fonts';

export const styles = StyleSheet.create({
  listItemAtomContainer: {
    borderRadius: 15,
    paddingHorizontal: 32,
    justifyContent: 'center',
    alignSelf: 'center',
    marginBottom: 8,
    height: 50,
    width: 190,
  },
  listItemAtomText: {
    fontFamily: Regular,
    fontSize: 21
  },
  homeAnimatedContainer: {
    backgroundColor: colors.white,
    flex: 1,
    borderRadius: 0,
    borderTopLeftRadius: 60,
    paddingTop: 32,
    position: 'absolute',
    top: -1,
    bottom: -200,
  },
  homeHeader: {
    paddingHorizontal: 32,
    flexDirection: 'row',
    alignItems: 'center'
  },
  homePressable: {
    height: 45, width: 50
  },
  homeHeaderIcon: {
    color: colors.gray,
    fontSize: 45,
    height: 45
  },
  homeHeaderText: {
    color: colors.darkerGray,
    marginBottom: 11,
    paddingLeft: 21,
    fontSize: 26,
    lineHeight: 26,
    height: 26,
    letterSpacing: 3,
    fontFamily: Regular
  },
  sideBarContainer: {
    width: 220,
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  sideBarName: {
    color: colors.white,
    fontFamily: Bold,
    fontSize: 28,
    left: -21,
    paddingBottom: 57
},
sideBarLine: {
    height: 1,
    width: 180,
    backgroundColor: colors.white,
    marginVertical: 50
},
routeContainer: {
    backgroundColor: colors.white, 
    flex: 1,
    paddingTop: 50
},
routeInnerContainer: {
    backgroundColor: colors.primary,
    flex: 1,
    borderRadius: 0,
    borderTopLeftRadius: 60,
}
});
