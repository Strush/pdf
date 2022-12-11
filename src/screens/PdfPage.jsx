import React, { useContext } from "react";
import {
  Page,
  Text,
  View,
  Document,
  StyleSheet,
  PDFViewer,
  Canvas,
  Font,
} from "@react-pdf/renderer";
import { Store } from "../Store";

Font.register({
  family: "Ubuntu",
  fonts: [
    {
      src: "https://fonts.gstatic.com/s/questrial/v13/QdVUSTchPBm7nuUeVf7EuStkm20oJA.ttf",
    },
    {
      src: "https://fonts.gstatic.com/s/questrial/v13/QdVUSTchPBm7nuUeVf7EuStkm20oJA.ttf",
      fontWeight: "bold",
    },
    {
      src: "https://fonts.gstatic.com/s/questrial/v13/QdVUSTchPBm7nuUeVf7EuStkm20oJA.ttf",
      fontWeight: "normal",
      fontStyle: "italic",
    },
  ],
});

export default function PdfPage() {
  const { state, dispatch } = useContext(Store);
  const { allOptions } = state; // to show dynamic data

  return (
    <PDFViewer style={styles.viewer}>
      <Document>
        <Page size="A4" style={styles.page}>
          <View style={{ flex: 1 }}>
            {/* Canvas */}
            <Canvas style={styles.trapeze} />
            {/* Close Canvas */}

            {/* Header title */}
            <View style={{ marginBottom: 15 }}>
              <Text
                style={[
                  styles.title,
                  {
                    fontWeight: "black",
                  },
                ]}
              >
                Implementation Charter - Defining quality standards, regulations
              </Text>
            </View>
            {/* Close title */}

            {/* Card Header */}
            <View
              style={{
                width: "100%",
                flexDirection: "row",
                marginBottom: 5,
              }}
            >
              <View
                style={{
                  backgroundColor: "#183153",
                  width: "20%",
                  paddingTop: 16,
                  paddingBottom: 16,
                  marginRight: 3,
                  fontSize: 16,
                }}
              >
                <Text
                  style={{
                    color: "#fff",
                    textAlign: "center",
                  }}
                >
                  Initiative
                </Text>
              </View>

              <View
                style={{
                  width: "80%",
                  justifyContent: "center",
                  ...styles.cardLigthBlue,
                }}
              >
                <Text
                  style={{
                    fontSize: 12,
                    paddingLeft: 5,
                  }}
                >
                  Defining quality standards, regulations
                </Text>
              </View>
            </View>
            {/* Close card header */}

            {/* Card body */}
            <View
              style={{
                flexDirection: "row",
              }}
            >
              {/* Card title (dark blue) */}
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
                        Indentify lead agency and from working group consisting
                        of service providers and relevant government agencies to
                        discuss efforts required to improve standards and
                        regulations related to standard: 'standard'
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
                        Evaluate global practices for standards and regulations
                        aimedat improving standard "standard 1" within services
                        related to 'ECIS'
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
                        standards and regulations related to standard: "standard
                        1"
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
                        Educate and mobillize resources that minght be impacted
                        by suggested changes to data and measurement of services
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
              {/* End Card title (dark blue) */}

              {/* Card title (dark blue) */}
              <View style={{ width: "20%" }}>
                <View
                  style={{
                    justifyContent: "center",
                    alignItems: "center",
                    backgroundColor: "#183153",
                    marginBottom: 3,
                    marginRight: 3,
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
                    marginRight: 3,
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  <Text style={styles.text10}>Indentify initiative owner</Text>
                </View>
                <View
                  style={{
                    justifyContent: "center",
                    alignItems: "center",
                    backgroundColor: "#183153",
                    marginBottom: 3,
                    marginRight: 3,
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
                    marginRight: 3,
                    alignItems: "center",
                  }}
                >
                  <Text style={styles.text10}>12 months</Text>
                </View>
              </View>
              {/* End Card title (dark blue) */}

              {/* Card title (dark blue) */}
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
              {/* End Card title (dark blue) */}
            </View>
            {/* Close card body */}
          </View>
        </Page>
      </Document>
    </PDFViewer>
  );
}

// Create styles
const styles = StyleSheet.create({
  /* PDF page style */
  page: {
    flexDirection: "row",
    paddingHorizontal: 15,
    paddingVertical: 3,
    fontFamily: "Ubuntu",
  },

  viewer: {
    width: window.innerWidth, //the pdf viewer will take up all of the width and height
    height: window.innerHeight,
  },

  /* Typography */
  text10: {
    fontSize: 10,
  },
  title: {
    color: "#183153",
    textAlign: "center",
    fontSize: 16,
    fontWeight: "bold",
  },

  /* General */
  px20: {
    paddingLeft: 20,
    paddingRight: 20,
  },

  mxAuto: {
    marginLeft: "auto",
    marginRight: "auto",
  },

  textDarkBlue: {
    color: "#183153",
  },
  textBold: {
    fontWeight: 700,
  },
  bgDarkBlue: {
    backgroundColor: "#183153",
  },
  cardLigthBlue: {
    border: "1.5px solid #183153",
    backgroundColor: "#DFF6FF",
    padding: 5,
  },

  // Header
  trapeze: {
    backgroundColor: "#4FA095",
    height: 20,
    marginBottom: 10,
    width: 300,
    marginLeft: "auto",
    marginRight: "auto",
  },
});
