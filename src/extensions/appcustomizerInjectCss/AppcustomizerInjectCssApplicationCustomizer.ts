import { Log } from '@microsoft/sp-core-library';
import {
  BaseApplicationCustomizer,
  PlaceholderContent,
  PlaceholderName
} from '@microsoft/sp-application-base';

import  styles  from './AppcustomizerInjectCssApplicationCustomizer.module.scss';

import * as strings from 'AppcustomizerInjectCssApplicationCustomizerStrings';
import * as $ from 'jquery';

const LOG_SOURCE: string = 'AppcustomizerInjectCssApplicationCustomizer';

/**
 * If your command set uses the ClientSideComponentProperties JSON input,
 * it will be deserialized into the BaseExtension.properties object.
 * You can define an interface to describe it.
 */
export interface IAppcustomizerInjectCssApplicationCustomizerProperties {
  // This is an example; replace with your own property
   cssurl?: string;
}


/** A Custom Action which can be run during execution of a Client Side Application */
export default class AppcustomizerInjectCssApplicationCustomizer
    extends BaseApplicationCustomizer<IAppcustomizerInjectCssApplicationCustomizerProperties> {



    public onInit(): Promise<void> {
      
      const cssUrl: string =  this.properties.cssurl;
      //console.log(cssUrl);
      if (cssUrl) {
          // inject the style sheet
          const head: any = document.getElementsByTagName("head")[0] || document.documentElement;
          let customStyle: HTMLLinkElement = document.createElement("link");
          customStyle.href = cssUrl;
          customStyle.rel = "stylesheet";
          customStyle.type = "text/css";
          head.insertAdjacentElement("beforeEnd", customStyle);
      }
      
      $(document).ready(function(){

        getHidedContent()
        function getHidedContent(){
          
          setTimeout(function () {
              
          }, 5000);
          
          //var elem = $('.ms-compositeHeader, div[role="header"], div[data-automationid="SiteHeader"], .ms-HubNav, .sp-App-hubNav:eq(1)').html();
          $('.ms-compositeHeader, div[role="header"], div[data-automationid="SiteHeader"], .ms-HubNav, .sp-App-hubNav:eq(1)').removeClass('ms-HubNav');
          //$('.ms-FocusZone').html(elem);
          
          
        }
      })

      return Promise.resolve();
    }



}
