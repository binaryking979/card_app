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
import { t, use } from "i18next";
import Footer from "../../components/Footer";

const width = Dimensions.get("screen").width;
const height = Dimensions.get("screen").height;



export default function Details() {
    const { changeStore, store } = useStore();
    const theme = useContext(themeContext);
    const navigation = useNavigation();

    const user = store.user;

    const [datas, setDatas] = useState([
        { num: 4, image: require("../../../assets/kms.png"), desc: t('statistics.kms') },
        { num: 23, image: require("../../../assets/passing.png"), desc: t('statistics.passing') },
        { num: 7, image: require("../../../assets/shooting.png"), desc: t('statistics.shooting') },
        { num: 18, image: require("../../../assets/dribbling.png"), desc: t('statistics.dribbling') },
        { num: 300, image: require("../../../assets/tackles.png"), desc: t('statistics.tackles') },
        { num: 10, image: require("../../../assets/headers.png"), desc: t('statistics.headers') },
    ]);


    const renderItem1 = ({ item, index }) => {
        const selectProgram = (item) => {
            changeStore({ ...store, program: item });
        };
        return (
            <TouchableOpacity >
                <View style={{
                    borderRadius: 10,
                    marginBottom: 20,
                    paddingRight: 20,
                }}>

                    <View style={{
                        paddingVertical: 15,
                        paddingHorizontal: 15,
                        backgroundColor: theme.itembackground, 
                        borderRadius: 20,
                        justifyContent: "space-evenly",
                        width: width / 2 - 30,
                        height: height * 0.16,
                    }}>
                        <Text style={[style.text2, { color: theme.txt, fontWeight: 'bold', paddingBottom: 5, }]}>  {item.num} </Text>
                        <Image
                            source={item.image}
                            resizeMode="stretch"
                            style={{ width: 25, height: 25, alignContent: "center", }}
                            tintColor={theme.txt}
                        />
                        <Text style={[style.text2, { color: theme.txt, }]} > {item.desc} </Text>
                    </View>
                </View>
            </TouchableOpacity>
        );
    };

    const [activeTab, setActiveTab] = useState(1);

    const handleTabChange = (tabNumber) => {
        setActiveTab(tabNumber);
    };


    return (
        <SafeAreaView style={[style.area, { backgroundColor: theme.bg, paddingTop: 30, }]}>
            <StatusBar translucent={true} backgroundColor="transparent" />
            <AppBar
                color={theme.bg}
                title={user.name}
                titleStyle={{ color: theme.txt, fontWeight: 'bold', }}
                centerTitle={true}
                elevation={0}
                leading={
                    <TouchableOpacity onPress={() => navigation.goBack()}>
                        <IconM
                            name="chevron-left"
                            style={{ backgroundColor: theme.bg }}
                            color={Colors.primary}
                            size={40}
                        />
                    </TouchableOpacity>
                }
            />
            <View style={[style.main, { backgroundColor: theme.bg, }]}>

                <View
                    style={{
                        marginVertical: 20,
                        flexDirection: "row",
                        alignItems: "center",
                        justifyContent: "center"
                    }}>
                    <Image
                        source={user.image}
                        resizeMode="stretch"
                        style={{
                            width: width * 0.25,
                            height: width * 0.25,
                            borderRadius: width * 0.08,
                        }}
                    ></Image>
                </View>
                <View style={{ marginTop: 5, marginBottom: 20, height: height * 0.6 }}>
                    <FlatList
                        numColumns={2}
                        key={"key-1"}
                        data={datas}
                        keyExtractor={(item, index) => {
                            return index;
                        }}
                        showsVerticalScrollIndicator={false}
                        renderItem={renderItem1}
                    />
                </View>
            </View >
            <Footer />
        </SafeAreaView >
    );
}


