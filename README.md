salesforce-angularjs-crud
=========================

Simple CRUD application using SaleForce and AngularJS

I gave the name 'bumble' to the app.

#steps to deploy the app:

1) Add the static resources and the bundle to your SalesForce App
##
        Note: Sales force does not accept file extensions use underscore instead of '.'. eg:use app_js for app.js
        bumble_app_js  (static resources/bumble_app.js)
        bumble_controllers_js (static resources/bumble_controllers.js)
        bumble_services_js (static resources/bumble_services.js)
        bumble_bundle</strong> (static resources/bundle/bumble_bundle.zip)
2) Add the remoteTK class(The class is Available here: https://github.com/developerforce/Force.com-JavaScript-REST-Toolkit)
##
      Create a new Class, copy and paste the code from  'sf assets/RemoteTKController.cls'
      
3) Add the remoteTK Component (Available here : https://github.com/developerforce/Force.com-JavaScript-REST-Toolkit)
##
    Create a new component 'remoteTK', copy and paste the code from 'sf assets/RemoteTK.component'
    (The class is Available here : https://github.com/developerforce/Force.com-JavaScript-REST-Toolkit)
4) Add the pages to the app
##
    bumble_create_html (pages/bumble_create_html)
    bumble_update_html (pages/bumble_update_html)
    bumble_receive_html (pages/bumble_receive_html)
    bumble_receive_one_html (pages/bumble_receive_one_html)
    bumble_index_html (pages/bumble_index_html)
    
5) Running the app:
  <br/ > Make sure you have permissions to create/ update/ delete the records from 'Contacts'
  <br/> Make sure your code editor in the visual force page is closed(not even minimised)
  <br/> Preview bumble_index_html 

#More Info
I took the idea from the following excellent tutorial: https://developer.salesforce.com/blogs/developer-relations/2014/04/building-beautiful-mobile-apps-in-visualforce-using-angularjs-and-ionic-part-1.html
