import React from "react";

export default function SaveCode() {
  return (
    <PDFViewer style={styles.viewer}>
      <Document>
        <Page size="A4" style={styles.page}>
          <View style={(styles.mxAuto, { width: "100%" })}>
            <Canvas style={styles.trapeze} />
            <View
              style={{
                width: "100%",
              }}
            >
              {/* End first section */}
              <View
                style={{
                  flexDirection: "row",
                }}
              >
                <View
                  style={{
                    width: "60%",
                    marginRight: 5,
                  }}
                >
                  <View
                    style={{
                      justifyContent: "center",
                      alignItems: "center",
                      backgroundColor: "#183153",
                      height: 28,
                      marginBottom: 3,
                    }}
                  >
                    <Text
                      style={{
                        fontSize: 12,
                        color: "#fff",
                      }}
                    >
                      Activities
                    </Text>
                  </View>
                  <View style={styles.cardLigthBlue}>
                    <View style={{ marginBottom: 10 }}>
                      <View
                        style={{
                          flexDirection: "row",
                          marginBottom: 3,
                        }}
                      >
                        <Text style={styles.text10}>1. </Text>
                        <Text
                          style={{
                            ...styles.text10,
                            ...styles.textBold,
                            flex: 1,
                          }}
                        >
                          Indentify government agency to lead efforts related to
                          enhancing standards and regulations related to
                          "standard"
                        </Text>
                      </View>

                      <View
                        style={{
                          flexDirection: "row",
                        }}
                      >
                        <Text style={styles.text10}>• &nbsp;&nbsp;</Text>
                        <Text style={{ ...styles.text10, flex: 1 }}>
                          Indentify lead agency and from working group
                          consisting of service providers and relevant
                          government agencies to discuss efforts required to
                          improve standards and regulations related to standard:
                          'standard'
                        </Text>
                      </View>
                    </View>
                    <View style={{ marginBottom: 10 }}>
                      <View
                        style={{
                          flexDirection: "row",
                          marginBottom: 3,
                        }}
                      >
                        <Text style={styles.text10}>2. </Text>
                        <Text
                          style={{
                            ...styles.text10,
                            ...styles.textBold,
                            flex: 1,
                          }}
                        >
                          Develop draft standards and regulations related to
                          improving "standard" in "ECIS" services
                        </Text>
                      </View>

                      <View
                        style={{
                          flexDirection: "row",
                          marginBottom: 3,
                        }}
                      >
                        <Text style={styles.text10}>• &nbsp;&nbsp;</Text>
                        <Text style={{ ...styles.text10, flex: 1 }}>
                          Carry out an assessment of all existing standards and
                          regulations that currently exist related to standard
                          "standard 1"
                        </Text>
                      </View>
                      <View
                        style={{
                          flexDirection: "row",
                          marginBottom: 3,
                        }}
                      >
                        <Text style={styles.text10}>• &nbsp;&nbsp;</Text>
                        <Text style={{ ...styles.text10, flex: 1 }}>
                          Evaluate global practices for standards and
                          regulations aimedat improving standard "standard 1"
                          within services related to 'ECIS'
                        </Text>
                      </View>
                      <View
                        style={{
                          flexDirection: "row",
                          marginBottom: 3,
                        }}
                      >
                        <Text style={styles.text10}>• &nbsp;&nbsp;</Text>
                        <Text style={{ ...styles.text10, flex: 1 }}>
                          Agree on standards and regulations required to improve
                          practices related to standard: "standard 1"
                        </Text>
                      </View>
                      <View
                        style={{
                          flexDirection: "row",
                          marginBottom: 3,
                        }}
                      >
                        <Text style={styles.text10}>• &nbsp;&nbsp;</Text>
                        <Text style={{ ...styles.text10, flex: 1 }}>
                          Work alongside policy experts to develop draft of
                          standards and regulations related to standard:
                          "standard 1"
                        </Text>
                      </View>
                    </View>
                    <View style={{ marginBottom: 10 }}>
                      <View
                        style={{
                          flexDirection: "row",
                          marginBottom: 3,
                        }}
                      >
                        <Text style={styles.text10}>3. </Text>
                        <Text
                          style={{
                            ...styles.text10,
                            ...styles.textBold,
                            flex: 1,
                          }}
                        >
                          Educate and mobillize resources that minght be
                          impacted by suggested changes to data and measurement
                          of services
                        </Text>
                      </View>

                      <View
                        style={{
                          flexDirection: "row",
                          marginBottom: 3,
                        }}
                      >
                        <Text style={styles.text10}>• &nbsp;&nbsp;</Text>
                        <Text style={{ ...styles.text10, flex: 1 }}>
                          Inform and Educate service providers and agencies
                          impacted by suggested updates of data and measurement
                          related to improving "standard 1"
                        </Text>
                      </View>
                      <View
                        style={{
                          flexDirection: "row",
                          marginBottom: 3,
                        }}
                      >
                        <Text style={styles.text10}>• &nbsp;&nbsp;</Text>
                        <Text style={{ ...styles.text10, flex: 1 }}>
                          Equip service providers and agencies with resources
                          required to successfully adopt suggested data and
                          measurement
                        </Text>
                      </View>
                    </View>
                    <View style={{ marginBottom: 10 }}>
                      <View
                        style={{
                          flexDirection: "row",
                          marginBottom: 3,
                        }}
                      >
                        <Text style={styles.text10}>3. </Text>
                        <Text
                          style={{
                            ...styles.text10,
                            ...styles.textBold,
                            flex: 1,
                          }}
                        >
                          Implement data and measurement system related to
                          improving "standard 1" in "ECIS" services
                        </Text>
                      </View>

                      <View
                        style={{
                          flexDirection: "row",
                          marginBottom: 3,
                        }}
                      >
                        <Text style={styles.text10}>• &nbsp;&nbsp;</Text>
                        <Text style={{ ...styles.text10, flex: 1 }}>
                          Gain approval from appropriate agencies and introduce
                          suggested standards and regulations
                        </Text>
                      </View>
                    </View>
                  </View>
                </View>

                <View style={{ width: "20%" }}>
                  <View
                    style={{
                      justifyContent: "center",
                      alignItems: "center",
                      backgroundColor: "#183153",
                      marginBottom: 3,
                      height: 28,
                    }}
                  >
                    <Text
                      style={{
                        fontSize: 12,
                        color: "#fff",
                      }}
                    >
                      Initiative Owner
                    </Text>
                  </View>
                  <View
                    style={{
                      ...styles.cardLigthBlue,
                      flex: 1,
                      marginBottom: 3,
                      justifyContent: "center",
                      alignItems: "center",
                    }}
                  >
                    <Text style={styles.text10}>
                      Indentify initiative owner
                    </Text>
                  </View>
                  <View
                    style={{
                      justifyContent: "center",
                      alignItems: "center",
                      backgroundColor: "#183153",
                      marginBottom: 3,
                      height: 28,
                    }}
                  >
                    <Text
                      style={{
                        fontSize: 12,
                        color: "#fff",
                      }}
                    >
                      Timeline
                    </Text>
                  </View>
                  <View
                    style={{
                      ...styles.cardLigthBlue,
                      flex: 1,
                      justifyContent: "center",
                      alignItems: "center",
                    }}
                  >
                    <Text style={styles.text10}>12 months</Text>
                  </View>
                </View>
                <View style={{ width: "20%" }}>
                  <View
                    style={{
                      justifyContent: "center",
                      alignItems: "center",
                      backgroundColor: "#183153",
                      marginBottom: 3,
                      height: 28,
                    }}
                  >
                    <Text
                      style={{
                        fontSize: 12,
                        color: "#fff",
                      }}
                    >
                      Supporting
                    </Text>
                  </View>
                  <View
                    style={{
                      ...styles.cardLigthBlue,
                      flex: 1,
                      marginBottom: 3,
                      justifyContent: "center",
                      alignItems: "center",
                    }}
                  >
                    <Text style={styles.text10}>test 1</Text>
                  </View>
                  <View
                    style={{
                      justifyContent: "center",
                      alignItems: "center",
                      backgroundColor: "#183153",
                      marginBottom: 3,
                      height: 28,
                    }}
                  >
                    <Text
                      style={{
                        fontSize: 12,
                        color: "#fff",
                      }}
                    >
                      test
                    </Text>
                  </View>
                  <View
                    style={{
                      ...styles.cardLigthBlue,
                      flex: 1,
                      justifyContent: "center",
                      alignItems: "center",
                    }}
                  >
                    <Text style={styles.text10}>test</Text>
                  </View>
                </View>
              </View>
            </View>
          </View>
        </Page>
      </Document>
    </PDFViewer>
  );
}
