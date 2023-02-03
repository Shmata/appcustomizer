var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
import { Log } from '@microsoft/sp-core-library';
import { BaseApplicationCustomizer } from '@microsoft/sp-application-base';
var LOG_SOURCE = 'AppcustomizerInjectCssApplicationCustomizer';
/** A Custom Action which can be run during execution of a Client Side Application */
var AppcustomizerInjectCssApplicationCustomizer = /** @class */ (function (_super) {
    __extends(AppcustomizerInjectCssApplicationCustomizer, _super);
    function AppcustomizerInjectCssApplicationCustomizer() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    AppcustomizerInjectCssApplicationCustomizer.prototype.onInit = function () {
        //const sourcefile:string = `https://5jsdrp.sharepoint.com/themeing/Shared%20Documents/k1.css`;
        var cssUrl = this.properties.cssurl;
        if (cssUrl) {
            // inject the style sheet
            var head = document.getElementsByTagName("head")[0] || document.documentElement;
            var customStyle = document.createElement("link");
            customStyle.href = cssUrl;
            customStyle.rel = "stylesheet";
            customStyle.type = "text/css";
            head.insertAdjacentElement("beforeEnd", customStyle);
        }
        Log.info(LOG_SOURCE, "K1 CSS address is:  " + cssUrl);
        return Promise.resolve();
    };
    return AppcustomizerInjectCssApplicationCustomizer;
}(BaseApplicationCustomizer));
export default AppcustomizerInjectCssApplicationCustomizer;
//# sourceMappingURL=AppcustomizerInjectCssApplicationCustomizer.js.map