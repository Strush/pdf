import React from "react";
import {
  Document,
  Page,
  Text,
  View,
  StyleSheet,
  Canvas,
  Font,
} from "@react-pdf/renderer";
import { templates } from "../templates";
import { replaceContent } from "../utils";
import { Html } from "react-pdf-html";

// Create Pdf Document Component
export const PdfDocument = (
  { allOptions } //
) => (
  <Document>
    <Page size="A4" style={styles.page} orientation="landscape">
      <View>
        {allOptions.length > 0 ? (
          allOptions.map((item, index) => {
            return templates.map((template) => {
              return item.variationIds.map((renderTemplate, i) =>
                renderTemplate === template.id ? (
                  <View
                    key={index + template.id + i}
                    break={index === 0 && i === 0 ? false : true}
                    style={{ marginBottom: 20 }}
                  >
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
                        <Html>
                          {replaceContent(
                            template.mainTitle,
                            item.selected,
                            item.standard
                          )}
                        </Html>
                      </Text>
                    </View>
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
                          <Html
                            style={{
                              fontSize: 12,
                              paddingLeft: 5,
                            }}
                          >
                            {replaceContent(
                              template.heading,
                              item.selected,
                              item.standard
                            )}
                          </Html>
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
                          width: "80%",
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
                          {template.content.map((el, index) => (
                            <View key={el.id} style={{ marginBottom: 5 }}>
                              <View
                                style={{
                                  flexDirection: "row",
                                  marginBottom: 3,
                                  marginRight: 3,
                                }}
                              >
                                <Text style={styles.text10}>{index + 1}. </Text>

                                <Text
                                  style={{
                                    ...styles.text10,
                                    ...styles.textBold,
                                    flex: 1,
                                  }}
                                >
                                  <Html
                                    style={{
                                      ...styles.text10,
                                      ...styles.textBold,
                                      flex: 1,
                                    }}
                                  >
                                    {replaceContent(
                                      el.title,
                                      item.selected,
                                      item.standard
                                    )}
                                  </Html>
                                </Text>
                              </View>

                              {el.items.map((li) => (
                                <View
                                  key={li.id}
                                  style={{
                                    flexDirection: "row",
                                    marginBottom: 3,
                                  }}
                                >
                                  <Text
                                    style={[styles.text10, { marginLeft: 15 }]}
                                  >
                                    • &nbsp;&nbsp;
                                  </Text>
                                  <Text
                                    style={{
                                      ...styles.text10,
                                      flex: 1,
                                      lineHeight: 1.2,
                                    }}
                                  >
                                    <Html
                                      style={{
                                        ...styles.text10,
                                        flex: 1,
                                        lineHeight: 1.2,
                                      }}
                                    >
                                      {replaceContent(
                                        li.text,
                                        item.selected,
                                        item.standard
                                      )}
                                    </Html>
                                  </Text>
                                </View>
                              ))}
                            </View>
                          ))}
                        </View>
                      </View>
                      {/* End Card title (dark blue) */}

                      {/* Card title (dark blue) */}
                      <View style={{ width: "20%" }}>
                        {template.options.map((option, index) => (
                          <>
                            <View
                              key={option.id}
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
                                {option.heading}
                              </Text>
                            </View>
                            <View
                              style={{
                                ...styles.cardLigthBlue,
                                flex: 1,
                                marginBottom:
                                  template.options.length === index + 1 ? 0 : 3,
                                marginRight: 3,
                                justifyContent: "center",
                                alignItems: "center",
                              }}
                            >
                              <Text style={styles.text10}>{option.desc}</Text>
                            </View>
                          </>
                        ))}
                      </View>
                      {/* End Card title (dark blue) */}
                    </View>
                    {/* Close card body */}
                  </View>
                ) : (
                  <Text key={index + template.id + i}></Text>
                )
              );
            });
          })
        ) : (
          <Text></Text>
        )}
      </View>
    </Page>
  </Document>
);

const styles = StyleSheet.create({
  /* PDF page style */
  page: {
    flexDirection: "column",
    paddingHorizontal: 15,
    fontFamily: "Open Sans",
  },

  viewer: {
    height: "100vh",
    width: "100vw",
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

// Register fonts
Font.register({
  family: "Open Sans",
  fonts: [
    {
      src: "https://cdn.jsdelivr.net/npm/open-sans-all@0.1.3/fonts/open-sans-regular.ttf",
    },
    {
      src: "https://cdn.jsdelivr.net/npm/open-sans-all@0.1.3/fonts/open-sans-600.ttf",
      fontWeight: 600,
    },
  ],
});
