import { Entypo } from '@expo/vector-icons';
import React from 'react';

import { Text, View, Image, Dimensions, TouchableOpacity, StyleSheet } from 'react-native';

const CardItem = ({
  actions,
  image,
  onPressLeft,
  onPressRight,
  variant
}) => {
    
  // Custom styling
  const fullWidth = Dimensions.get('window').width;
  const imageStyle = [
    {
      borderRadius: 8,
      width: variant ? fullWidth / 2 - 30 : fullWidth - 80,
      height: variant ? 170 : 350,
      margin: variant ? 0 : 20
    }
  ];

  return (
    <View style={styles.containerCardItem}>
      {/* IMAGE */}
      <Image source={image} style={imageStyle} />
      )}
      {/* ACTIONS */}
      {actions && (
          <View style={{
            justifyContent: "flex-end",
            flexDirection: "column"
        }}>
            <View style={{
                flexDirection: "row",
                justifyContent: "space-evenly"
            }}>
                <Entypo.Button

                    name='cross'
                    size={94}
                    backgroundColor='#FF7777'
                    underlayColor='transparent'
                    activeOpacity={0.3}
                    color={"red"}
                    onPress={() => onPressLeft()}
                    borderRadius={200}
                    iconStyle={{
                        marginRight: 10,
                        marginLeft: 5
                    }}
                />
                <Entypo.Button
                    name='check'
                    size={94}
                    backgroundColor='#60DA60'
                    underlayColor='transparent'
                    activeOpacity={0.3}
                    color={"green"}
                    onPress={() => onPressRight()}
                    borderRadius={200}
                    iconStyle={{
                        marginRight: 0,
                        marginLeft: 10
                    }}
                />
            </View>
        </View>
      )};
    </View>
    )};

export default CardItem;

const PRIMARY_COLOR = "#7444C0";
const SECONDARY_COLOR = "#5636B8";
const WHITE = "#FFFFFF";
const GRAY = "#757E90";
const DARK_GRAY = "#363636";
const BLACK = "#000000";

const ONLINE_STATUS = "#46A575";
const OFFLINE_STATUS = "#D04949";

const STAR_ACTIONS = "#FFA200";
const LIKE_ACTIONS = "#B644B2";
const DISLIKE_ACTIONS = "#363636";
const FLASH_ACTIONS = "#5028D7";

const ICON_FONT = "tinderclone";

const DIMENSION_WIDTH = Dimensions.get("window").width;
const DIMENSION_HEIGHT = Dimensions.get("window").height;

const styles = StyleSheet.create({
	// COMPONENT - CARD ITEM
	containerCardItem: {
		backgroundColor: 'white',
		borderRadius: 8,
		alignItems: "center",
		margin: 10,
		shadowOpacity: 0.05,
		shadowRadius: 10,
		shadowColor: 'black',
		shadowOffset: { height: 0, width: 0 }
	},
	matchesCardItem: {
		marginTop: -35,
		backgroundColor: 'black',
		paddingVertical: 7,
		paddingHorizontal: 20,
		borderRadius: 20
	},
	matchesTextCardItem: {
		
		color: 'white'
	},
	descriptionCardItem: {
		color: 'white',
		textAlign: "center"
	},
	status: {
		paddingBottom: 10,
		flexDirection: "row",
		alignItems: "center"
	},
	statusText: {
		color: 'white',
		fontSize: 12
	},
	online: {
		width: 6,
		height: 6,
		backgroundColor: 'white',
		borderRadius: 3,
		marginRight: 4
	},
	offline: {
		width: 6,
		height: 6,
		backgroundColor: 'white',
		borderRadius: 3,
		marginRight: 4
	},
	actionsCardItem: {
		flexDirection: "row",
		alignItems: "center",
		paddingVertical: 30
	},
	button: {
		width: 60,
		height: 60,
		borderRadius: 30,
		backgroundColor: 'white',
		marginHorizontal: 7,
		alignItems: "center",
		justifyContent: "center",
		shadowOpacity: 0.15,
		shadowRadius: 20,
		shadowColor: 'white',
		shadowOffset: { height: 10, width: 0 }
	},
	miniButton: {
		width: 40,
		height: 40,
		borderRadius: 30,
		backgroundColor: 'white',
		marginHorizontal: 7,
		alignItems: "center",
		justifyContent: "center",
		shadowOpacity: 0.15,
		shadowRadius: 20,
		shadowColor: 'white',
		shadowOffset: { height: 10, width: 0 }
	},
	star: {
		
		color: 'white'
	},
	like: {
		fontSize: 25,
		
		color: 'white'
	},
	dislike: {
		fontSize: 25,
		
		color: 'white'
	},
	flash: {
		
		color: 'white'
	},

	// COMPONENT - CITY
	city: {
		backgroundColor: 'white',
		padding: 10,
		borderRadius: 20,
		width: 90,
		shadowOpacity: 0.05,
		shadowRadius: 10,
		shadowColor: 'black',
		shadowOffset: { height: 0, width: 0 }
	},
	cityText: {
		
		color: 'white',
		fontSize: 13
	},

	// COMPONENT - FILTERS
	filters: {
		backgroundColor: 'white',
		padding: 10,
		borderRadius: 20,
		width: 70,
		shadowOpacity: 0.05,
		shadowRadius: 10,
		shadowColor: 'black',
		shadowOffset: { height: 0, width: 0 }
	},
	filtersText: {
		
		color: 'white',
		fontSize: 13
	},

	// COMPONENT - MESSAGE
	containerMessage: {
		flex: 1,
		alignItems: "center",
		justifyContent: "flex-start",
		flexDirection: "row",
		paddingHorizontal: 10,
		
	},
	avatar: {
		borderRadius: 30,
		width: 60,
		height: 60,
		marginRight: 20,
		marginVertical: 15
	},
	message: {
		color: 'white',
		fontSize: 12,
		paddingTop: 5
	},

	// COMPONENT - PROFILE ITEM
	containerProfileItem: {
		backgroundColor: 'white',
		paddingHorizontal: 10,
		paddingBottom: 25,
		margin: 20,
		borderRadius: 8,
		marginTop: -65,
		shadowOpacity: 0.05,
		shadowRadius: 10,
		shadowColor: 'black',
		shadowOffset: { height: 0, width: 0 }
	},
	matchesProfileItem: {
		width: 131,
		marginTop: -15,
		backgroundColor: 'black',
		paddingVertical: 7,
		paddingHorizontal: 20,
		borderRadius: 20,
		textAlign: "center",
		alignSelf: "center"
	},
	matchesTextProfileItem: {
		color: 'white'
	},
	name: {
		paddingTop: 25,
		paddingBottom: 5,
		color: 'white',
		fontSize: 15,
		textAlign: "center"
	},
	descriptionProfileItem: {
		color: 'white',
		textAlign: "center",
		paddingBottom: 20,
		fontSize: 13
	},
	info: {
		paddingVertical: 8,
		flexDirection: "row",
		alignItems: "center"
	},
	iconProfile: {
		
		fontSize: 12,
		color: 'white',
		paddingHorizontal: 10
	},
	infoContent: {
		color: 'white',
		fontSize: 13
	},

	// CONTAINER - GENERAL
	bg: {
		flex: 1,
		resizeMode: "cover",
		
	},
	top: {
		paddingTop: 50,
		marginHorizontal: 10,
		flexDirection: "row",
		justifyContent: "space-between",
		alignItems: "center"
	},
	title: { paddingBottom: 10, fontSize: 22, color: 'white' },
	icon: {
		
		fontSize: 20,
		color: 'white',
		paddingRight: 10
	},

	// CONTAINER - HOME
	containerHome: { marginHorizontal: 10 },

	// CONTAINER - MATCHES
	containerMatches: {
		justifyContent: "space-between",
		flex: 1,
		paddingHorizontal: 10
	},

	// CONTAINER - MESSAGES
	containerMessages: {
		justifyContent: "space-between",
		flex: 1,
		paddingHorizontal: 10
	},

	// CONTAINER - PROFILE
	containerProfile: { marginHorizontal: 0 },
	photo: {
		
		height: 450
	},
	topIconLeft: {
		
		fontSize: 20,
		color: 'white',
		paddingLeft: 20,
		marginTop: -20,
		transform: [{ rotate: "90deg" }]
	},
	topIconRight: {
		
		fontSize: 20,
		color: 'white',
		paddingRight: 20
	},
	actionsProfile: {
		justifyContent: "center",
		flexDirection: "row",
		alignItems: "center"
	},
	iconButton: {  fontSize: 20, color: 'white' },
	textButton: {
		
		fontSize: 15,
		color: 'white',
		paddingLeft: 5
	},
	circledButton: {
		width: 50,
		height: 50,
		borderRadius: 25,
		backgroundColor: 'black',
		justifyContent: "center",
		alignItems: "center",
		marginRight: 10
	},
	roundedButton: {
		justifyContent: "center",
		flexDirection: "row",
		alignItems: "center",
		marginLeft: 10,
		height: 50,
		borderRadius: 25,
		backgroundColor: SECONDARY_COLOR,
		paddingHorizontal: 20
	},

	// MENU
	tabButton: {
		paddingTop: 20,
		paddingBottom: 30,
		alignItems: "center",
		justifyContent: "center",
		flex: 1
	},
	tabButtonText: {
		textTransform: "uppercase"
	},
	iconMenu: {
		
		height: 20,
		paddingBottom: 7
	}
});


const Icon = ({ name }) => {
    const iconsList = {
      heart: '&#xe800;',
      star: '&#xe801;',
      like: '&#xe800;',
      dislike: '&#xe802;',
      flash: '&#xe803;',
      marker: '&#xf031;',
      filter: '&#xf0b0;',
      user: '&#xf061;',
      circle: '&#xf039;',
      hashtag: '&#xf029;',
      calendar: '&#xf4c5;',
      chevronLeft: '&#xf004;',
      optionsV: '&#xf142;',
      optionsH: '&#xf141;',
      chat: '&#xf4ac;',
      explore: '&#xf50d;'
    };
  
    let icon = iconsList[name];
    icon = icon.substr(3);
    icon = String.fromCharCode(parseInt(icon, 16));
  
    return icon;
  };

  