# MIHY

MIHY is boilerplate for creating screen using writing object configuration

### Requirements
* Node js
* NPM

## Installation & Development
```
$ npm clone https://github.com/muralimgwl/mihy-ui-framework-boilerplate.git
$ cd mihy-ui-framework-boilerplate
$ npm i
$ npm start
```

### Note : We have added default configuration for login,register, dashboard and advance dashboard, it will use for you to create new configuration for screen.

## Usage

1. Go to src/ui-config/screens/specs/.
2. Create a folder for your set of screens. eg:Blood.
3. Create a file for screen. eg:dashboard.js
4. Write your configuration.

example code

```
import {
  getCommonCardWithHeader,
  getLabel
} from "mihy-ui-framework/ui-config/screens/specs/utils";

const screenConfig = {
  uiFramework: "material-ui",
  name: "mihyLoginScreen",
  components: {
    mihyLoginGrid: {
      uiFramework: "custom-atoms",
      componentPath: "Container",
      children: {
        mihyEmptyRow: {
          uiFramework: "custom-atoms",
          componentPath: "Item",
          props: {
            sm: 4
          }
        },
        mihyLoginItem: {
          uiFramework: "custom-atoms",
          componentPath: "Item",
          props: {
            sm: 4,
            xs: 12
          },
          children: {
            mihyLoginCard: getCommonCardWithHeader(
              {
                mihyloginDiv: {
                  uiFramework: "custom-atoms",
                  componentPath: "Div",
                  props: {
                    className: "text-center"
                  },
                  children: {
                    mihyLoginUsername: {
                      uiFramework: "custom-molecules",
                      componentPath: "TextfieldWithIcon",
                      props: {
                        label: "Email",
                        margin: "normal",
                        fullWidth: true,
                        autoFocus: true,
                        required: true,
                        iconObj: {
                          position: "end",
                          iconName: "email"
                        }
                      },
                      required: true,
                      jsonPath: "body.mihy.username",
                      pattern: "^([a-zA-Z0-9@.])+$"
                    },
                    mihyLoginPassword: {
                      uiFramework: "custom-molecules",
                      componentPath: "TextfieldWithIcon",
                      props: {
                        label: "Password",
                        type: "password",
                        margin: "normal",
                        fullWidth: true,
                        required: true,
                        iconObj: { position: "end", iconName: "lock" }
                      },
                      jsonPath: "body.mihy.password",
                      required: true,
                      pattern: "^([a-zA-Z0-9!])+$"
                    },
                    mihyBreakOne: {
                      uiFramework: "custom-atoms",
                      componentPath: "Break"
                    },
                    mihyBreakTwo: {
                      uiFramework: "custom-atoms",
                      componentPath: "Break"
                    },
                    mihyLoginButton: {
                      componentPath: "Button",
                      props: {
                        color: "primary",
                        fullWidth: true
                      },
                      children: {
                        mihyLoginButtonText: getLabel({label:"Let's go"})
                      }
                      // onClickDefination:{
                      //   action:"submit",
                      //   method:"get",
                      //   endPoint:"afbc.com",
                      //   purpose:"authLogin",
                      //   redirectionUrl:"/"
                      // }
                    }
                  }
                }
              },
              {
                mihyLoginHeader: {
                  componentPath: "Typography",
                  children: {
                    mihyLoginHeaderText: getLabel({label:"Login"})
                  },
                  props: {
                    align: "center",
                    variant: "title",
                    style: {
                      color: "white"
                    }
                  }
                }
              }
            )
          }
        }
      }
    }
  }
};

export default screenConfig;

```

### Note: Many components we directly reffered [material-ui](https://material-ui.com/) framework, thanks to material-ui for giving such a beautifull components.

example for using material ui components
### React way for rendering Material component
```
import React from 'react';
import Button from '@material-ui/core/Button';

<Button variant="contained" color="primary">
        Primary
</Button>
```

### MIHY way for rendering same component in configuration
```
......
primaryButton:{
  componentPath:"Button",
  props:{
    variant:"contained",
    color:"primary"
  }
}
......
```


## Contributing
Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

Please make sure to update tests as appropriate.

### Special thanks
1. Sonia
2. Vishwas
3. Abhishek
4. Ranjeet
5. Tharu
6. My ui team members

## License
[MIT](https://choosealicense.com/licenses/mit/)
