import React, {useState} from 'react';

import {View, Text, TouchableOpacity, Image} from 'react-native';
import {Menu, MenuItem, MenuDivider} from 'react-native-material-menu';

const CustomMenu = (props) => {
  const [visible, setVisible] = useState(false);
  const [isActive, setIsActive] = useState(false);
  const [isSelect, setIsSelect] = useState(true);

  const hideMenu = () => {
    setVisible(false), setIsActive(false);
  };

  const showMenu = () => {
    setVisible(true), setIsActive(true);
  };

  return (
    <View
      style={{
        marginBottom: 10,
        marginRight: 70,
        flexDirection: 'row',
        alignSelf: 'center',
        justifyConstent: 'center',
      }}>
      <Menu
        visible={visible}
        style={{marginTop: 40, marginLeft: 40, width: 200}}
        anchor={
          <TouchableOpacity onPress={showMenu}>
            {isActive ? (
              <Image source={require('../assets/burger-icon-active.png')} />
            ) : (
              <Image source={require('../assets/burger-icon.png')} />
            )}
          </TouchableOpacity>
        }
        onRequestClose={hideMenu}>
        <MenuItem
          onPress={() => {
            props.navigation.navigate('ThirdClaim');
          }}>
          Home
        </MenuItem>
        <MenuDivider color="#000000" />

        <MenuItem
          onPress={() => {
            props.navigation.navigate('Profile');
          }}>
          {isSelect ? (
            <Text style={{color: '#39B54A'}}>{`\u2B24`} Profile</Text>
          ) : (
            <Text>Profile</Text>
          )}
        </MenuItem>
        <MenuDivider color="#000000" />

        <MenuItem
          onPress={() => {
            props.navigation.navigate('Payment');
          }}>
          Get Paid
        </MenuItem>
      </Menu>
    </View>
  );
};

export default CustomMenu;
