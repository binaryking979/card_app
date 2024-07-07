import {
    View,
    Text,
    SafeAreaView,
    TextInput,
    ImageBackground,
    StatusBar,
    Image,
    Dimensions,
    TouchableOpacity,
    ScrollView,
    FlatList,
    StyleSheet
} from "react-native";
import React, { useState, useContext, useEffect } from "react";
import style from "../../theme/style";
import themeContext from "../../theme/themeContex";
import { Colors } from "../../theme/color";
import Icons from "react-native-vector-icons/Ionicons";
import IconM from "react-native-vector-icons/MaterialCommunityIcons";
import { AppBar } from "@react-native-material/core";
import { Avatar } from "react-native-paper";
import { useNavigation } from "@react-navigation/native";
import { useStore } from "../../store/store";
import { t } from "i18next";
import Footer from "../../components/Footer";
import { CategoryList, images } from "../../constants";
import { Dropdown } from 'react-native-element-dropdown';
import DropDownPicker from "react-native-dropdown-picker";

const width = Dimensions.get("screen").width;
const height = Dimensions.get("screen").height;



export default function AddCard() {
    const { changeStore, store } = useStore();
    const theme = useContext(themeContext);
    const navigation = useNavigation();
    const [darkMode, setDarkMode] = useState(false);


    const [openPob, setOpenPob] = useState(false);
    const [valuePob, setValuePob] = useState(0);
    const [itemPobs, setItemPobs] = useState(CategoryList);


    const [value, setValue] = useState(null);
    const [isFocus, setIsFocus] = useState(false);


    const styles = StyleSheet.create({
        container: {
            flex: 1,
            paddingTop: 50,
        },
        tabBar: {
            flexDirection: 'row',
            justifyContent: 'space-around',
            backgroundColor: theme.background,
            marginBottom: 20,
        },
        tabButton: {
            paddingVertical: 10,
            paddingHorizontal: 20,
            backgroundColor: theme.background,
        },
        tabButtonText: {
            fontSize: 14,
            fontWeight: 'bold',
            color: Colors.disable

        },
        activeTabText: {
            borderBottomWidth: 2,
            borderColor: Colors.primary,

        },
        activeTabView: {
            backgroundColor: Colors.primary,
            width: 30, height: 5,
            alignSelf: "center",
            marginTop: 10,
            borderRadius: 10
        },
        activeColor: {
            color: theme.txt,
        },
        renderItem2View: {
            flexDirection: "row",
            paddingVertical: 15,
            paddingHorizontal: 30,
            justifyContent: "space-between",
            width: width - 40,
            height: height * 0.09,
            borderBottomColor: Colors.disable, borderBottomWidth: 2
        },
        tabContent: {
            // flex: 1,
            // justifyContent: 'center',
            // alignItems: 'center',
        },
    });

    const [datas, setDatas] = useState([
        { image: images.card_nhl, desc: 'NHL' },
        { image: images.card_nba, desc: 'NBA' },
        { image: images.card_nhl, desc: 'MLB' },
        { image: images.card_nfl, desc: 'NFL' },
    ]);


    useEffect(() => {
        // changeStore({ ...store, isLoggedin: false, isLoading: false, page: "home" });
    }, [])


    const [activeTab, setActiveTab] = useState(1);

    const handleTabChange = (tabNumber) => {
        setActiveTab(tabNumber);
    };


    return (
        <SafeAreaView
            style={[style.area, { backgroundColor: theme.bg, paddingTop: 30, }]}
        >
            <AppBar
                color={theme.bg}
                title={t('Add Card')}
                titleStyle={{ fontFamily: "Plus Jakarta Sans" }}
                centerTitle={true}
                elevation={0}
                leading={
                    <TouchableOpacity onPress={() => navigation.navigate("Home")}>
                        <Avatar.Icon
                            icon="arrow-left"
                            style={{ backgroundColor: theme.bg }}
                            color={theme.txt}
                            size={40}
                        />
                    </TouchableOpacity>
                }
            />

            <StatusBar translucent={true} backgroundColor="transparent" />
            <View style={[style.main, { backgroundColor: theme.bg, }]}>

                <View style={{ marginTop: 5, marginBottom: 20, }}>


                    <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
                        <View>
                            <Text style={[style.txt, { color: theme.txt }]}>Category</Text>
                        </View>

                        <View style={{ marginTop: 10, zIndex: 200, backgroundColor: theme.bg }}>
                            <DropDownPicker
                                style={{
                                    borderWidth: 1,
                                    borderRadius: 10,
                                    paddingHorizontal: 20,
                                    color: Colors.disable,
                                    height: 45,
                                    width: width * 0.7,
                                    backgroundColor: theme.itembackground
                                }}
                                listMode="FLATLIST"
                                theme="DARK"
                                placeholder="Select"
                                open={openPob}
                                value={valuePob}
                                items={itemPobs}
                                setOpen={setOpenPob}
                                setValue={setValuePob}
                                setItems={setItemPobs}
                            // onChangeValue={(e) => {
                            // setData({ ...data, pob: e });
                            // }}
                            />
                        </View>
                    </View>

                    <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
                        <View>
                            <Text style={[style.txt, { color: theme.txt }]}>Name</Text>
                        </View>
                        <View style={{ marginTop: 10 }}>
                            <TextInput
                                placeholder={t("Name")}
                                selectionColor={Colors?.primary}
                                placeholderTextColor={Colors?.disable}
                                require
                                style={{
                                    borderWidth: 1,
                                    borderRadius: 10,
                                    paddingHorizontal: 20,
                                    color: Colors.disable,
                                    height: 45,
                                    width: width * 0.7,
                                    backgroundColor: theme.itembackground
                                }} />
                        </View>
                    </View>
                    <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
                        <View>
                            <Text style={[style.txt, { color: theme.txt }]}>Brand</Text>
                        </View>
                        <View style={{ paddingVertical: 5, }}>
                            <TextInput
                                placeholder={t("Brand or manufacturer")}
                                selectionColor={Colors?.primary}
                                placeholderTextColor={Colors?.disable}
                                require
                                style={{
                                    borderWidth: 1,
                                    borderRadius: 10,
                                    paddingHorizontal: 20,
                                    color: Colors.disable,
                                    height: 45,
                                    width: width * 0.7,
                                    backgroundColor: theme.itembackground
                                }} />
                        </View>
                    </View>
                    <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
                        <View>
                            <Text style={[style.txt, { color: theme.txt }]}>Year</Text>
                        </View>
                        <View style={{ paddingVertical: 5, }}>
                            <TextInput
                                placeholder={t("Year")}
                                selectionColor={Colors?.primary}
                                placeholderTextColor={Colors?.disable}
                                require
                                style={{
                                    borderWidth: 1,
                                    borderRadius: 10,
                                    paddingHorizontal: 20,
                                    color: Colors.disable,
                                    height: 45,
                                    width: width * 0.7,
                                    backgroundColor: theme.itembackground
                                }} />
                        </View>
                    </View>
                    <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
                        <View>
                            <Text style={[style.txt, { color: theme.txt }]}>Set</Text>
                        </View>
                        <View style={{ paddingVertical: 5, }}>
                            <TextInput
                                placeholder={t("Set")}
                                selectionColor={Colors?.primary}
                                placeholderTextColor={Colors?.disable}
                                require
                                style={{
                                    borderWidth: 1,
                                    borderRadius: 10,
                                    paddingHorizontal: 20,
                                    color: Colors.disable,
                                    height: 45,
                                    width: width * 0.7,
                                    backgroundColor: theme.itembackground
                                }} />
                        </View>
                    </View>
                    <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
                        <View>
                            <Text style={[style.txt, { color: theme.txt }]}>Number</Text>
                        </View>
                        <View style={{ paddingVertical: 5, }}>
                            <TextInput
                                placeholder={t("Number")}
                                selectionColor={Colors?.primary}
                                placeholderTextColor={Colors?.disable}
                                require
                                style={{
                                    borderWidth: 1,
                                    borderRadius: 10,
                                    paddingHorizontal: 20,
                                    color: Colors.disable,
                                    height: 45,
                                    width: width * 0.7,
                                    backgroundColor: theme.itembackground
                                }} />
                        </View>
                    </View>
                    <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
                        <View>
                            <Text style={[style.txt, { color: theme.txt }]}>Team</Text>
                        </View>
                        <View style={{ paddingVertical: 5, }}>
                            <TextInput
                                placeholder={t("Team")}
                                selectionColor={Colors?.primary}
                                placeholderTextColor={Colors?.disable}
                                require
                                style={{
                                    borderWidth: 1,
                                    borderRadius: 10,
                                    paddingHorizontal: 20,
                                    color: Colors.disable,
                                    height: 45,
                                    width: width * 0.7,
                                    backgroundColor: theme.itembackground
                                }} />
                        </View>
                    </View>
                </View>
            </View>
        </SafeAreaView>
    );
}


