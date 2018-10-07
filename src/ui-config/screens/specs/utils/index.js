import {
  getCommonCard,
  getLabel
} from "mihy-ui-framework/ui-config/screens/specs/utils";
import "./index.css";

const appOptionCardIconBoxStyle = (
  colorOne = "#ffa726",
  colorTwo = "#fb8c00"
) => {
  return {
    color: "#FFFFFF",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    height: "48px",
    width: "48px",
    zIndex: 1000000,
    padding: "15px",
    marginTop: "-36px",
    marginRight: "15px",
    borderRadius: "3px",
    background: `linear-gradient(60deg,${colorOne} ,${colorTwo} )`,
    boxShadow: "0 1px 4px 0 rgba(0, 0, 0, 0.14)"
  };
};

export const getFormCommonCard=({iconName="",header="",iconColorOne="",iconColorTwo="",children={},gridDefination={ xs: 12, sm:12 },cardProps})=>{
  return {
    ...getCommonCard({
      iconDiv: {
        uiFramework: "custom-atoms",
        componentPath: "Div",
        props: {
          style: appOptionCardIconBoxStyle(iconColorOne, iconColorTwo)
        },
        children: {
          icon: {
            uiFramework: "custom-atoms",
            componentPath: "Icon",
            props: {
              iconName,
              size: "36px"
            }
          }
        },
        gridDefination: {
          xs: 4,
          align: "left"
        }
      },
      ...children
    },cardProps),
    gridDefination
  }
}

export const appOptionCardWithIcon = (
  label,
  iconName,
  iconColorOne,
  iconColorTwo,
  onClickDefination={},
  gridDefination = { xs: 12, sm: 6 }
) => {
  return {
    uiFramework: "custom-atoms",
    componentPath: "Item",
    props: {
      ...gridDefination
    },
    children: {
      appCard: getCommonCard({
        appOptionContainer: {
          uiFramework: "custom-atoms",
          componentPath: "Container",
          children: {
            iconDiv: {
              uiFramework: "custom-atoms",
              componentPath: "Div",
              props: {
                style: appOptionCardIconBoxStyle(iconColorOne, iconColorTwo)
              },
              children: {
                icon: {
                  uiFramework: "custom-atoms",
                  componentPath: "Icon",
                  props: {
                    iconName,
                    size: "36px"
                  }
                }
              },
              gridDefination: {
                xs: 4,
                align: "left"
              }
            },
            cardLabel: {
              componentPath: "Typography",
              props: {
                variant: "headline"
              },
              children: {
                optionName: {
                  uiFramework: "custom-atoms",
                  componentPath: "Label",
                  props: {
                    label
                  }
                }
              },
              gridDefination: {
                xs: 8,
                align: "right"
              }
            }
          },
          onClickDefination
        }
      })
    }
  };
};

export const appOptionsCardsWithIcons = apps => {
  return {
    uiFramework: "custom-atoms",
    componentPath: "Container",
    children: apps.reduce((acc, obj, index) => {
      const { displayLabel, iconName, iconColorOne, iconColorTwo,onClickDefination } = obj;
      acc[`app${index}`] = appOptionCardWithIcon(
        displayLabel,
        iconName,
        iconColorOne,
        iconColorTwo,
        onClickDefination
      );
      return acc;
    }, {})
  };
};

const appCardIconBoxStyle = (colorOne = "#ffa726", colorTwo = "#fb8c00") => {
  return {
    color: "#FFFFFF",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    height: "90px",
    padding: "15px",
    marginTop: "-36px",
    borderRadius: "3px",
    background: `linear-gradient(60deg,${colorOne} ,${colorTwo} )`,
    boxShadow: "0 1px 4px 0 rgba(0, 0, 0, 0.14)"
  };
};

export const getApps = app => {
  const {name,onClickDefination}=app;
  return {
    componentPath: "Button",
    props: {
      variant: "contained",
      color:"primary"
    },
    children: {[name]:getLabel({label:name})},
    onClickDefination
  };
};

export const appCardWithIcon = (
  label,
  iconName,
  iconColorOne,
  iconColorTwo,
  apps,
  onClickDefination,
  gridDefination = { xs: 12, sm: 6 }
) => {
  return {
    uiFramework: "custom-atoms",
    componentPath: "Item",
    props: {
      ...gridDefination
    },
    children: {
      appCard: getCommonCard({
        appContainer: {
          uiFramework: "custom-atoms",
          componentPath: "Container",
          children: {
            iconDiv: {
              uiFramework: "custom-atoms",
              componentPath: "Div",
              props: {
                style: appCardIconBoxStyle(iconColorOne, iconColorTwo),
                className: "mihy-image"
              },
              children: {
                icon: {
                  uiFramework: "custom-atoms",
                  componentPath: "Icon",
                  props: {
                    iconName,
                    size: "36px"
                  }
                }
              },
              gridDefination: {
                xs: 12
              }
            },
            cardLabel: {
              componentPath: "Typography",
              props: {
                variant: "headline"
              },
              children: {
                optionName: {
                  uiFramework: "custom-atoms",
                  componentPath: "Label",
                  props: {
                    label
                  }
                }
              },
              gridDefination: {
                xs: 12,
                align: "center"
              }
            },
            apps: {
              uiFramework: "custom-atoms",
              componentPath: "Div",
              children: apps.reduce((acc, app, index) => {
                acc[`app${index}`] = getApps(app);
                return acc;
              }, {}),
              gridDefination: {
                xs: 12,
                align: "center"
              }
            }
          },
          props: {
            className: "mihy-image-container"
          }
        }
      })
    }
  };
};

export const appCardsWithIcons = categories => {
  return {
    uiFramework: "custom-atoms",
    componentPath: "Container",
    props: {
      style: {
        marginTop: "24px"
      }
    },
    children: categories.reduce((acc, obj, index) => {
      const { displayLabel, iconName, iconColorOne, iconColorTwo, apps } = obj;
      acc[`app${index}`] = appCardWithIcon(
        displayLabel,
        iconName,
        iconColorOne,
        iconColorTwo,
        apps
      );
      return acc;
    }, {})
  };
};
