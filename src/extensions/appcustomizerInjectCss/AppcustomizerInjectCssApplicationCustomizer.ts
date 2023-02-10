import { Log } from '@microsoft/sp-core-library';
import {
  BaseApplicationCustomizer,
  PlaceholderContent,
  PlaceholderName
} from '@microsoft/sp-application-base';

import  styles  from './AppcustomizerInjectCssApplicationCustomizer.module.scss';

import * as strings from 'AppcustomizerInjectCssApplicationCustomizerStrings';
import * as $ from 'jquery';

import { Services } from '../../services';
import { IMenu } from '../../models/IMenu';

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

    private services: Services;

    public onInit(): Promise<void> {
      
      this.services = new Services(
        this.context.pageContext.web.absoluteUrl,
        this.context.spHttpClient
      )

      this.services.getMenu().then((menu: IMenu[])=>{
        //console.log(menu)
        this._renderQuickLaunch( menu)
      })


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


        


        setTimeout(changeStyle, 4000);
          // v1.0.0 order          
          //var elem = $('.ms-compositeHeader, div[role="header"], div[data-automationid="SiteHeader"], .ms-HubNav, .sp-App-hubNav:eq(1)').html();
          //$('.ms-compositeHeader, div[role="header"], div[data-automationid="SiteHeader"], .ms-HubNav, .sp-App-hubNav:eq(1)').removeClass('ms-HubNav');          

        function changeStyle(){
          // v2.0.0 order
          //var elem = $("#spSiteHeader > div >  div[class^='headerRow-'] > div > div[class^='adjacentTitleSubcell-'] > div").html()
          //var elem = $("div[class^='adjacentTitleSubcell-']").html();
          var elem = $("#spSiteHeader").html();
          $(elem).insertBefore($('.ms-CommandBar')); 
          

        }
      })

      return Promise.resolve();
    }

    private _renderQuickLaunch( menus: IMenu[]):void {
      let element: HTMLElement = document.getElementById['spCommandBar'] ;
      let menuList: string = ''; 
      if(menus && menus.length && menus.length > 0 ){
        menus.forEach((menu: IMenu) =>{
          menuList = menuList + `
            <li key='${menu.Id}'><a href='${menu.Url}'>${menu.Title}</a></li>
          `
        });
      }

      element.innerHTML = `<ul>${menuList}</ul>`;

      console.log(menuList);
    }



}
