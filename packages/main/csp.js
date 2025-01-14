import { setPackageCSSRoot, setUseLinks } from "@ui5/webcomponents-base/dist/CSP.js";

setUseLinks(false); // !document.adoptedStyleSheets
setPackageCSSRoot("@ui5/webcomponents-base", "/resources/css/base/");
setPackageCSSRoot("@ui5/webcomponents-theming", "/resources/css/theming/");
setPackageCSSRoot("@ui5/webcomponents", "/resources/css/main/");
setPackageCSSRoot("@ui5/webcomponents-fiori", "/css/");
