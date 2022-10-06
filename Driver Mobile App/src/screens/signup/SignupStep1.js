import React, {useState} from 'react';
import {
  StyleSheet,
  View,
  Image,
  Text,
  TextInput,
  TouchableOpacity,
  StatusBar,
  ScrollView,
  FlatList,
  Modal,
  Dimensions,
} from "react-native";
import Footer from "../../components/Footer";

const windowWidth = Dimensions.get("window").width;
const windowHeight = Dimensions.get("window").height;

const UNIVERSITY = ["University of St Thomas", "University of Minnesota"];
const YEARINCOLLEGE = ["Freshman", "Sophomore", "Junior", "Senior"];

const SelectUniversity = (props) => {
  const onPressItem = (option) => {
    props.changeModelVisibility(false);
    props.setData(option);
  };
  const option = UNIVERSITY.map((uni, index) => {
    return (
      <TouchableOpacity
        key={index}
        onPress={() => onPressItem(uni)}
        style={{ padding: 10 }}
      >
        <Text style={{ fontSize: 15, color: "#ffffff", fontWeight: "800" }}>
          {uni}
        </Text>
      </TouchableOpacity>
    );
  });
  return (
    <TouchableOpacity
      style={styles.options}
      onPress={() => {
        props.changeModelVisibility(false);
      }}
    >
      <View
        style={{
          backgroundColor: "grey",
          borderRadius: 5,
          width: windowWidth - 80,
          minHeight: windowHeight / 5,
        }}
      >
        <ScrollView>{option}</ScrollView>
      </View>
    </TouchableOpacity>
  );
};

const SelectYear = (props) => {
  const onPressItem = (option) => {
    props.changeModelVisibility1(false);
    props.setData(option);
  };
  const option = YEARINCOLLEGE.map((year, index) => {
    return (
      <TouchableOpacity
        key={index}
        onPress={() => onPressItem(year)}
        style={{
          paddingLeft: 20,
          paddingTop: 8,
          paddingBottom: 8,
          paddingRight: 20,
        }}
      >
        <Text style={{ fontSize: 15, color: "#ffffff", fontWeight: "800" }}>
          {year}
        </Text>
      </TouchableOpacity>
    );
  });

  return (
    <TouchableOpacity
      style={styles.options}
      onPress={() => {
        props.changeModelVisibility1(false);
      }}
    >
      <View
        style={{
          backgroundColor: "grey",
          borderRadius: 5,
          width: windowWidth - 80,
          minHeight: windowHeight / 5,
        }}
      >
        <ScrollView>{option}</ScrollView>
      </View>
    </TouchableOpacity>
  );
};

const SignupScreen1 = ({ navigation }) => {
  const [lastname, setLastname] = useState("");
  const [university, setUniversity] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setComfirmPassword] = useState("");
  const [yearInCollege, setYearInCollege] = useState("");
  const [slect, setSelect] = useState("University");
  const [collegeYear, setCollegeYear] = useState("Year in college");
  const [isVisible, setIsVisible] = useState(false);
  const [isVisible1, setIsVisible1] = useState(false);

  const changeModelVisibility = (bool) => {
    setIsVisible(bool);
  };

  const changeModelVisibility1 = (bool) => {
    setIsVisible1(bool);
  };
  const setData = (option) => {
    setSelect(option);
  };
  const setYearData = (option) => {
    setCollegeYear(option);
  };

  return (
    <View style={styles.container}>
      <StatusBar backgroundColor="#39B54A" barStyle="light-content" />
      <ScrollView>
        <View
          style={{ flex: 1, justifyContent: "center", alignItems: "center" }}
        >
          <View style={styles.logoView}>
            <Text style={[styles.welcome, { marginTop: 15 }]}>Sign Up</Text>
          </View>
          <View style={styles.loginView}>
            <Text style={{ fontSize: 15 }}>
              Sign up to start delivering food on
            </Text>
            <View style={styles.actions}>
              <Text style={{ marginHorizontal: 5, fontSize: 15 }}>
                your campus!
              </Text>
            </View>
          </View>
          <View style={styles.inputView}>
            <TextInput
              style={styles.inputText}
              placeholder="Legal Name"
              placeholderTextColor="#AFAFAF"
              onChangeText={setLastname}
              value={lastname}
            />
            <Image
              source={require("../../assets/user.png")}
              style={styles.imageStyle}
            />
          </View>
          <View style={styles.inputView}>
            <TextInput
              style={styles.inputText}
              placeholder="Student Email"
              placeholderTextColor="#AFAFAF"
              onChangeText={setEmail}
              value={email}
            />
            <Image
              source={require("../../assets/email.png")}
              style={styles.imageStyle}
            />
          </View>

          <View style={styles.inputView}>
            <TouchableOpacity
              style={{
                flex: 1,
                flexDirection: "row",
                justifyContent: "space-between",
              }}
              onPress={() => changeModelVisibility(true)}
            >
              <Text
                style={{
                  padding: 0,
                  marginTop: 15,
                  fontSize: 15,
                  color: slect === "University" ? "#AFAFAF" : "#777777",
                  fontWeight: "800",
                }}
              >
                {slect}
              </Text>
              <Image
                source={require("../../assets/chevron-down.png")}
                style={styles.imageStyle}
              />
            </TouchableOpacity>
            <Modal
              transparent={true}
              visible={isVisible}
              animationType="fade"
              onRequestClose={() => changeModelVisibility(false)}
            >
              <SelectUniversity
                changeModelVisibility={changeModelVisibility}
                setData={setData}
              />
            </Modal>
          </View>

          <View style={styles.inputView}>
            <TouchableOpacity
              style={{
                flex: 1,
                flexDirection: "row",
                justifyContent: "space-between",
              }}
              onPress={() => changeModelVisibility1(true)}
            >
              <Text
                style={{
                  padding: 0,
                  marginTop: 15,
                  fontSize: 15,
                  color:
                    collegeYear === "Year in college" ? "#AFAFAF" : "#777777",
                  fontWeight: "800",
                }}
              >
                {collegeYear}
              </Text>
              <Image
                source={require("../../assets/chevron-down.png")}
                style={styles.imageStyle}
              />
            </TouchableOpacity>
            <Modal
              transparent={true}
              visible={isVisible1}
              animationType="fade"
              onRequestClose={() => changeModelVisibility1(false)}
            >
              <SelectYear
                changeModelVisibility1={changeModelVisibility1}
                setData={setYearData}
              />
            </Modal>
          </View>

          <View style={styles.inputView}>
            <TextInput
              style={styles.inputText}
              placeholder="+1 (___) ___-___"
              placeholderTextColor="#AFAFAF"
              onChangeText={setPhone}
              value={phone}
            />
            <Image
              source={require("../../assets/phone.png")}
              style={styles.imageStyle}
            />
          </View>
          <View style={styles.inputView}>
            <TextInput
              style={styles.inputText}
              secureTextEntry={true}
              placeholder="Password"
              placeholderTextColor="#AFAFAF"
              onChangeText={(text) => setPassword(text)}
              value={password}
            />
            <Image
              source={require("../../assets/eye.png")}
              style={styles.imageStyle}
            />
          </View>
          <View style={styles.inputView}>
            <TextInput
              style={styles.inputText}
              secureTextEntry={true}
              placeholder="Comfirm Password"
              placeholderTextColor="#AFAFAF"
              onChangeText={(text) => setComfirmPassword(text)}
              value={confirmPassword}
            />
            <Image
              source={require("../../assets/eye.png")}
              style={styles.imageStyle}
            />
          </View>

          <TouchableOpacity style={styles.loginBtn}>
            <Text
              style={styles.loginText}
              onPress={() => navigation.navigate("Signup2")}
            >
              Next Step →{" "}
            </Text>
          </TouchableOpacity>
          <View
            style={{
              width: "80%",
              flexDirection: "row",
              justifyContent: "center",
              flexWrap: "wrap",
              marginBottom: 30,
            }}
          >
            <Text style={{ textDecorationLine: "underline" }}>Return to </Text>
            <TouchableOpacity onPress={() => navigation.navigate("Login")}>
              <Text style={{ color: "#39B54A" }}> Log In</Text>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>

      <Footer />
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    justifyContent: "center",
  },

  inputView: {
    flexDirection: "row",
    width: "80%",
    borderBottomColor: "#ccc",
    borderBottomWidth: 2,
    height: 50,
    marginBottom: 20,
    justifyContent: "space-between",
  },
  inputText: {
    fontSize: 15,
    height: 50,
    color: "#777777",
    fontWeight: "800",
  },
  imageStyle: {
    padding: 10,
    marginTop: 15,
    height: 25,
    width: 25,
    resizeMode: "stretch",
    alignItems: "center",
  },

  singUp: {
    color: "#39B54A",
    fontWeight: "500",
    fontSize: 15,
  },
  loginBtn: {
    width: "30%",
    backgroundColor: "#39B54A",
    borderRadius: 25,
    height: 50,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 20,
    marginBottom: 10,
  },
  loginText: {
    color: "#ffffff",
    fontWeight: "800",
  },
  actions: {
    flexDirection: "row",
    alignItems: "flex-start",
    justifyContent: "flex-start",
  },
  logoView: {
    flexDirection: "row",
    alignItems: "flex-start",
    marginBottom: 15,
    marginTop: 0,
  },
  logo: {
    marginBottom: 25,
    width: 250,
    height: 100,
  },
  welcome: {
    color: "#39B54A",
    fontWeight: "800",
    fontSize: 34,
  },
  loginView: {
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 15,
  },
  options: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
export default SignupScreen1;
