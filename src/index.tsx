import {Text, TouchableOpacity} from "react-native"


export function HellowWorldButton() {
  return (
    <TouchableOpacity
    onPress={() => console.log('Hello World')}
    style={{
          backgroundColor:"#3677BC" ,
          borderRadius: 6,
          padding: 14,
          alignItems: "center",
        }}
        > <Text style={{ color: "white", fontWeight: "600" }}>{"hello"}</Text>

        
    </TouchableOpacity>
  );
}

export default HellowWorldButton;
