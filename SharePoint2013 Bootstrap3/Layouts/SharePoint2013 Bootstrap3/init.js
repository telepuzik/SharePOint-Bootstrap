//require.config({
//    baseUrl: '',
//    paths: {
//        jquery: '/_layouts/15/SharePoint2013 Bootstrap3/jQuery.2.2.2/Content/Scripts/jquery-2.2.2.min'
//    }
//});

//require(['jquery'], function () {
//    console.log("JS: jquery loaded");
//    loadCss("/_layouts/15/SharePoint2013 Bootstrap3/bootstrap.3.3.6/content/content/bootstrap.css");
//    loadCss("/_layouts/15/SharePoint2013 Bootstrap3/bootstrap3_reset.css");
//});

loadCss("/_layouts/15/SharePoint2013 Bootstrap3/bootstrap.3.3.6/content/content/bootstrap.css");
loadCss("/_layouts/15/SharePoint2013 Bootstrap3/bootstrap3_reset.css");

function loadCss(url) {
    var link = document.createElement("link");
    link.type = "text/css";
    link.rel = "stylesheet";
    link.href = url;
    document.getElementsByTagName("head")[0].appendChild(link);
    console.log("CSS: " + url + " loaded");
}