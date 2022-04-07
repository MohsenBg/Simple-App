<View style={style.container}>
        <Text style={style.TextHashBig}>0.00 H/s</Text>
        <View style={style.Chart}>
          <Image
            resizeMode={"contain"}
            source={require("../../assets/Images/Chart.png")}
            style={{ width: "100%", height: imageHeight }}
          />
        </View>
        <View style={{ width: "100%", paddingHorizontal: 20 }}>
          <View style={style.box}>
            <View style={style.row}>
              <Text style={style.textHash}>Avg. hashrate /{"\n"}1h</Text>
              <Text style={style.textResult}>0.00 H/s</Text>
            </View>
            <View style={style.row}>
              <Text style={style.textHash}>Avg. hashrate /{"\n"}24h</Text>
              <Text style={style.textResult}>0.00 H/s</Text>
            </View>
          </View>
        </View>
      </View>