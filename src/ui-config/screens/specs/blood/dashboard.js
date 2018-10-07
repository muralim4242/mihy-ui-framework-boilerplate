import { appOptions } from "./dashboardResources/appOptions";
import { appOptionsCardsWithIcons } from "../utils";

const screenConfig = {
  uiFramework: "material-ui",
  name: "mihyBloodDashboard",
  components: {
    // mihyBloodDashboardAppCarosel: {
    //   uiFramework: "custom-molecules",
    //   componentPath: "Carousel",
    //   props: {
    //     items: [
    //       {
    //         src: require("ui-assets/pexels-photo-1068523.jpeg"),
    //         legend: "carousel two"
    //       },
    //       {
    //         src: require("ui-assets/pexels-photo-910154.jpeg"),
    //         legend: "carousel one"
    //       }
    //     ]
    //   }
    // },
    mihyBloodDashboardAppCards: appOptionsCardsWithIcons(appOptions)
  }
};

export default screenConfig;
