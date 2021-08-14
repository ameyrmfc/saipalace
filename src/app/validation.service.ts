import { Injectable } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Injectable({
   providedIn: 'root'
})
export class ValidationService {
  validationMessages: any
   constructor() { 
    this.validationMessages = {   
      'Email': {  
         'required': 'Email is required.',  
         'pattern': 'Please provide valid Email ID'  
      },  
      'Password': {  
         'required': 'Password is required.',
         'minlength':'Password length should be between 8 - 32.',
         'maxlength':'Password length should be between 8 - 32.',
         'pattern': 'Password sholud contain atleast 1 Special Character and Number.',
      },  
   };
   }

   public regex =
      {
         regemail: '^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$',
         regpassword: '^[0-9]{8,16}$',
         domain: '^(([[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$',
         regnum: '^\\d+$',
         reghost: '^(([[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$',
         regip: '^(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)$',
         regpass: '^(?=.{8,})(?!.*\\s)(?=.*[A-Z])(?=.*[a-z])(?=.*[0-9])(?=.*\\W).*$',
         //regport: '^\d{2,3}$',
         regport: '^0*(?:6553[0-5]|655[0-2][0-9]|65[0-4][0-9]{2}|6[0-4][0-9]{3}|[1-5][0-9]{4}|[1-9][0-9]{1,3}|[0-9])$',
         //regemail: '^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$',
         //regnum: '^\d+$',
         regnumpipe: '^\\d+(\\|\\d+)*$',
         domain_name: '^[A-Za-z0-9]+([\.\-0-9a-zA-Z]?[A-Za-z0-9]+)*(\.[A-Za-z0-9]{2,15})+$',
         locaton: '^[A-Za-z]+([\w\-]?[A-Za-z0-9]+)*$',
         //disclaimer: '(<script(.*?)src(.*?)>(.*?)<\/script\s*>|<(link|style)(?=[^<>]*?(?:type="(text/css)"|>))(?=[^<>]*?(?:media="([^<>"]*)"|>))(?=[^<>]*?(?:href="(.*?)"|>))(?=[^<>]*(?:rel="([^<>"]*)"|>))(?:.*?</\1>|[^<>]*>))',
         regsubnet: '^([1-9]|[12][0-9]|3[0-2])$',
         //regdomain: "(?:[a-z0-9](?:[a-z0-9-]{0,61}[a-z0-9])?\\.)+[a-z0-9][a-z0-9-]{0,61}[a-z0-9]",
         regdomain:"^(([[0-9]{1,8}\\.[0-9]{1,8}\\.[0-9]{1,8}\.[0-9]{1,8}])|(([a-zA-Z\-0-9]+\\.)+[a-zA-Z]{2,8}))$",
         regimg: '^(\.jpg|\.jpeg|\.png)$',
         regtext: '^[A-z ]+$',
         regtextnum: '^[A-Za-z0-9]+$',
         regtextnumspace: '^[A-Za-z0-9 ]+$',
         regname: '^[A-Za-z0-9]*[a-z   A-Z0-9\s._-]*[a-zA-Z0-9]$',
         regusername: '^[A-Za-z0-9][\\.a-zA-Z0-9_-]*[a-zA-Z0-9]$',
         regdate: '^\\d{4}-\\d{2}-\\d{2}$',
         regdatetime: '^\d{4}-\d{2}-\d{2} \d{2}:\d{2}:\d{2}$',
         regaddress: '^[A-Za-z0-9\,\s\-]*[\.a-zA-Z0-9\_\-\s\,\(\)]*[a-zA-Z0-9\(\)]$',
         regjt: '^[A-Za-z0-9\,\s\-]*[\.a-zA-Z0-9\_\-\s\,\(\)\&]*[a-zA-Z0-9\(\)]$',
         reglabel: '^[A-Za-z0-9][\\.a-zA-Z0-9_-]*[a-zA-Z0-9]$',
         regaddr: '^[\w\.\_\@]+$',
         regscript: '[<]script',
         question: '^[A-Za-z \'\-\_ ]+[\?]$/',
         //regurl: '^(https?:\/\/(?:www\.[^\s]+\.[^\s]{2,}))$',
         regurl: '^(http[s]?:\/\/){0,1}(www\.){0,1}[a-zA-Z0-9\.\-]+\.[a-zA-Z]{2,5}[\.]{0,1}[\/[[:alnum:]]*]?',
         regtfapwd: '^[^\|\'\"]+$',
         regmsg: '^[-_.!\'&0-9A-Za-z ]+$',
         portRange: '^[\d]+([\:][\d]+)*$',
         regfreq: '^[1-9][0-9]*$',
         regpath: '^[A-Za-z{1}]?:\\[\\A-Za-z0-9]+?$|^[\/A-Za-z0-9]+?$',
         regmobphn : '^(?:(?:\\+|0{0,2})91(\\s*[\\ -]\\s*)?|[0]?)?[789]\\d{9}|(\\d[ -]?){10}\\d$',
         regzip : '^\\d{6}$',
      }

   getValidationErrors(group: FormGroup, messagesHash: any = {}): any {
      var formErrors:any = {};

      Object.keys(group.controls).forEach((key: string) => {

         const abstractControl = group.get(key);
         formErrors[key] = '';

         if (abstractControl && !abstractControl.valid &&
            (abstractControl.touched || abstractControl.dirty)) {

            let messages = (Object.keys(messagesHash).length > 0) ? messagesHash[key] : this.validationMessages[key];

            if (messages) {
               for (const errorKey in abstractControl.errors) {
                  if (errorKey) {
                     formErrors[key] = messages[errorKey];
                     break;
                  }
               }
            }
         }

         if (abstractControl instanceof FormGroup) {
            let groupError = this.getValidationErrors(abstractControl);
            formErrors = { ...formErrors, ...groupError }

         }
      });
      return formErrors
   }

}
