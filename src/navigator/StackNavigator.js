import { View, Text, StatusBar } from "react-native";
import React, { useState, useEffect } from "react";
// import { createStackNavigator } from '@react-navigation/stack';

import {
  NavigationContainer,
  DarkTheme,
  DefaultTheme,
} from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { EventRegister } from "react-native-event-listeners";
import theme from "../theme/theme";
import themeContext from "../theme/themeContex";

import Introduction from "../Introduction";
import Splash from "../screens/loginscreens/Splash";
import Signin from "../screens/loginscreens/SignIn";
import Signup from "../screens/loginscreens/Signup";
import Forgot from "../screens/loginscreens/Forgot";
import Forgotpass from "../screens/loginscreens/Forgotpass";
import NewPassword from "../screens/loginscreens/NewPassword";
import Verification from "../screens/loginscreens/Verification";

// Customer
import CustomerHomepage from "../screens/customer/Homepage";
import CustomerPoints from "../screens/customer/Points";
import CustomerCategory from "../screens/customer/Category";
import CustomerPostList from "../screens/customer/PostList";
import CustomerReview from "../screens/customer/Review";
import CustomerHistoryDetail from "../screens/customer/HistoryDetail";
import CustomerInterCategoryList from "../screens/customer/InterCategoryList";
import CustomerReviewList from "../screens/customer/ReviewList";
import CustomerPostDetail from "../screens/customer/PostDetail";
import CustomerProgramEnter from "../screens/customer/ProgramEnter";
import CustomerHistoryList from "../screens/customer/HistoryList";
import CustomerCategoryList from "../screens/customer/CategoryList";


import Home from "../screens/home/Home";
import Search from "../screens/home/Search";
import Details from "../screens/home/Details";
import Settings from "../screens/home/Settings";
import SettingsBasic from "../screens/home/SettingsBasic";
import SettingsPersonal from "../screens/home/SettingsPersonal";
import SettingsSecurity from "../screens/home/SettingsSecurity";
import SettingsAppearance from "../screens/home/SettingsAppearance";


import AddCard from "../screens/card/AddCard";


// Common
import ViewerHome from '../scenes/home/viewer'
import SpeakerHome from '../scenes/home/speaker';
import Meeting from '../scenes/ILS';
import Profile from "../screens/common/Settings";
import Language from "../screens/common/Language";
import Privacy from "../screens/common/Privacy";
import Notification from "../screens/common/Notification";
import AccountProfile from "../screens/common/AccountProfile";
import LiveChat from "../screens/common/LiveChat";
import Terms from "../screens/common/Terms";
import Law from "../screens/common/Law";
import ContactUs from "../screens/common/ContactUs";
import Report from "../screens/common/Report";
import UpdatePassword from "../screens/common/UpdatePassword";
import RegisterBank from "../screens/common/RegisterBank";
import Message from "../screens/common/Message";

import { Colors } from "../theme/color";
import { storage } from "../utils/storage";
import { useStore } from "../store/store";
import Withdraw from "../screens/common/Withdraw";

const Stack = createNativeStackNavigator();

export default function StackNavigator() {

  // let role = storage.getItem("role");
  // const { skipIntro } = useSelector((state) => state.common);
  const { store, changeStore } = useStore();
  // console.log("store------------------------------------------>")
  // console.log('isLoading', store.isLoading);
  // console.log('currentUser.id', (store.currentUser)&&store.currentUser.id);
  // console.log('program.id', (store.program)&&store.program.id);
  // console.log("store--------------------------->")
  const [darkMode, setDarkMode] = useState(false);
  // store.isLoading = true;

  // storage.removeItem('currentUser');

  // const toggleSwitch = () => setDarkMode(previousState => !previousState);
  useEffect(() => {
    const listener = EventRegister.addEventListener("ChangeTheme", (data) => {
      setDarkMode(data);
    });

    return () => {
      EventRegister.removeAllListeners(listener);
    };
  }, [darkMode]);

  const [showSplashScreen, setshowSplashScreen] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      // setshowSplashScreen(false);
      changeStore({ ...store, showSplashScreen: false });
    }, 3000);
    const fetchStatus = async () => {
      const currentUser = await storage.getItem("currentUser");
      if (currentUser != null) {
        // setIsLoggedin(true);
        changeStore({ ...store, isLoggedin: true });
      }
    };
    fetchStatus();
  }, []);

  return (
    <themeContext.Provider
      value={darkMode === false ? theme.dark : theme.light}
    >
      <NavigationContainer
        theme={darkMode === false ? DarkTheme : DefaultTheme}
      >
        <StatusBar
          backgroundColor={
            darkMode === false ? Colors.active : Colors.secondary
          }
          barStyle={darkMode === false ? "light-content" : "dark-content"}
          translucent={false}
        />
        <Stack.Navigator>
          {store.showSplashScreen ? (
            <Stack.Screen
              name="Splash"
              component={Splash}
              options={{ headerShown: false }}
            />
          ) : null}
          {(store.isLoggedin) ? (
            <>
              
                  <Stack.Screen
                    name="Home"
                    component={Home}
                    options={{ headerShown: false }}
                  />
                  <Stack.Screen
                    name="Search"
                    component={Search}
                    options={{ headerShown: false }}
                  />
                  
                  <Stack.Screen
                    name="AddCard"
                    component={AddCard}
                    options={{ headerShown: false }}
                  />
                  {/* <Stack.Screen
                    name="Category"
                    component={PerformerCategory}
                    options={{ headerShown: false }}
                  />

                  <Stack.Screen
                    name="PostCreate"
                    component={PerformerPostCreate}
                    options={{ headerShown: false }}
                  />
                  <Stack.Screen
                    name="PerformerPostEdit"
                    component={PerformerPostEdit}
                    options={{ headerShown: false }}
                  />
                  <Stack.Screen
                    name="CategoryList"
                    component={PerformerCategoryList}
                    options={{ headerShown: false }}
                  />
                  <Stack.Screen
                    name="PerformerHistoryDetail"
                    component={PerformerHistoryDetail}
                    options={{ headerShown: false }}
                  />

                  <Stack.Screen
                    name="PerformerProgramEnter"
                    component={PerformerProgramEnter}
                    options={{ headerShown: false }}
                  />

                  <Stack.Screen
                    name="SpeakerHome"
                    component={SpeakerHome}
                    options={{ headerShown: false }}
                  />

                  <Stack.Screen
                    name="Meeting"
                    component={Meeting}
                    options={{ headerShown: false }}
                  />
                  <Stack.Screen
                    name="HistoryList"
                    component={PerformerHistoryList}
                    options={{ headerShown: false }}
                  />
                  <Stack.Screen
                    name="CustomerList"
                    component={PerformerCustomerList}
                    options={{ headerShown: false }}
                  />
                  <Stack.Screen
                    name="RegisterBank"
                    component={RegisterBank}
                    options={{ headerShown: false }}
                  /> */}
                
              <Stack.Screen
                name="Message"
                component={Message}
                options={{ headerShown: false }}
              />
              <Stack.Screen
                name="Notification"
                component={Notification}
                options={{ headerShown: false }}
              />
              <Stack.Screen
                name="LiveChat"
                component={LiveChat}
                options={{ headerShown: false }}
              />
              <Stack.Screen
                name="Profile"
                component={Profile}
                options={{ headerShown: false }}
              />
              <Stack.Screen
                name="Language"
                component={Language}
                options={{ headerShown: false }}
              />

              <Stack.Screen
                name="Privacy"
                component={Privacy}
                options={{ headerShown: false }}
              />
              
              <Stack.Screen
                name="Terms"
                component={Terms}
                options={{ headerShown: false }}
              />
              <Stack.Screen
                name="Law"
                component={Law}
                options={{ headerShown: false }}
              />
              <Stack.Screen
                name="ContactUs"
                component={ContactUs}
                options={{ headerShown: false }}
              />
              <Stack.Screen
                name="Report"
                component={Report}
                options={{ headerShown: false }}
              />
              <Stack.Screen
                name="AccountProfile"
                component={AccountProfile}
                options={{ headerShown: false }}
              />
              <Stack.Screen
                name="UpdatePassword"
                component={UpdatePassword}
                options={{ headerShown: false }}
              />
              <Stack.Screen
                name="Withdraw"
                component={Withdraw}
                options={{ headerShown: false }}
              />
            </>
          ) : (
            <>
              <Stack.Screen
                name="Introduction"
                component={Introduction}
                options={{ headerShown: false }}
              />
              <Stack.Screen
                name="Signin"
                component={Signin}
                options={{ headerShown: false }}
              />
              <Stack.Screen
                name="Signup"
                component={Signup}
                options={{ headerShown: false }}
              />
              <Stack.Screen
                name="Verification"
                component={Verification}
                options={{ headerShown: false }}
              />
              <Stack.Screen
                name="Forgot"
                component={Forgot}
                options={{ headerShown: false }}
              />
              <Stack.Screen
                name="Forgotpass"
                component={Forgotpass}
                options={{ headerShown: false }}
              />

              <Stack.Screen
                name="NewPassword"
                component={NewPassword}
                options={{ headerShown: false }}
              />
              <Stack.Screen
                name="UpdatePassword"
                component={UpdatePassword}
                options={{ headerShown: false }}
              />
            </>
          )}
        </Stack.Navigator>
      </NavigationContainer>
    </themeContext.Provider>
  );
}
