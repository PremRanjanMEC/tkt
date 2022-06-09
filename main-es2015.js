(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./$$_lazy_route_resource lazy recursive":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html":
/*!**************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html ***!
  \**************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div *ngIf=\"printPopup\">\n  <div style=\"width: 100%;\">\n    <textarea [rows]=\"5\" [cols]=\"150\" pInputTextarea autoResize=\"autoResize\" [(ngModel)]=\"printTktInput\"></textarea>\n  </div>\n  <div style=\"width: 100%;\">\n    <input type=\"button\" class=\"train_Search\" style=\"padding: 5px 10px; font-weight: bold; font-size: 24px;\" value=\"Print\" (click)=\"processData()\" />\n  </div>\n</div>\n\n\n<div *ngIf=\"!printPopup\" id=\"print-section\" oncontextmenu=\"return false\" unselectable=\"on\" onselectstart=\"return false;\" onmousedown=\"return false;\">\n  <table width=\"99%\" align=\"center\" cellpadding=\"0\" cellspacing=\"0\" border=\"1\" style=\" color: black; border-style: solid; border-width: 1px;\">\n    <tr>\n      <td style=\"padding:2px;\">\n        <table width=\"100%\" align=\"center\">\n          <tr valign=\"top\">\n            <td width=\"100%\">\n              <table width=\"100%\" align=\"center\">\n                <tr align=\"center\">\n                  <td width=\"10%\" align=\"left\" rowspan=\"2\">\n                    <img appLazyLoad rel=\"preload\" src=\"./tkt/assets/images/indianrailways-logo.jpg\" height=\"40px\" />\n                  </td>\n                  <td *ngIf=\"printTktResp.waitlistOption != undefined && printTktResp.waitlistOption != null\" width=\"20%\" align=\"center\" rowspan=\"2\">\n                    <div *ngIf=\"printTktResp.waitlistOption==3\" style=\"font-family:Arial;color:red;font-size: 1.4rem;font-weight: bold;\">\n                      WL\n                    </div>\n                    <div *ngIf=\"printTktResp.waitlistOption!=3 && printTktResp.curBkngMsg!=undefined && printTktResp.curBkngMsg!=null\" style=\"font-family:Arial;color:black;font-size: 1.4rem;font-weight: bold;\">\n                      {{printTktResp.curBkngMsg}}\n                    </div>\n                  </td>\n                  <td width=\"40%\" align=\"center\" style=\"font-family:Arial;font-size: 1.1rem;color:black;\">\n                    <u><b><div *ngIf=\"lng=='en'\">IRCTCs e-Ticketing Service</div><div *ngIf=\"lng=='hi'\">इलैक्ट्रोनिक आरक्षण पर्ची</div></b></u>\n                  </td>\n                  <td *ngIf=\"printTktResp.waitlistOption != undefined && printTktResp.waitlistOption != null\" width=\"20%\" align=\"center\" rowspan=\"2\">\n                    <div *ngIf=\"printTktResp.waitlistOption==3\" style=\"font-family:Arial;color:red;font-size: 1.4rem;font-weight: bold;\">\n                      WL\n                    </div>\n                    <div *ngIf=\"printTktResp.waitlistOption!=3 && printTktResp.curBkngMsg!=undefined && printTktResp.curBkngMsg!=null\" style=\"font-family:Arial;color:black;font-size: 1.4rem;font-weight: bold;\">\n                      {{printTktResp.curBkngMsg}}\n                    </div>\n                  </td>\n                  <td width=\"10%\" align=\"right\" rowspan=\"2\">\n                    <img appLazyLoad rel=\"preload\" src=\"./tkt/assets/images/irctclogo.jpg\" height=\"40px\" />\n                  </td>\n                </tr>\n                <tr align=\"center\">\n                  <td align=\"center\">\n                    <u>\n                      <b><div *ngIf=\"lng=='en' && travelAgentFlag=='false' && ecsFlag=='false'\" style=\"font-family:Arial;font-size: 1.1rem;color:black;\" id=\"msgId\" >\n                             Electronic Reservation Slip (Personal User)\n                        </div>\n                        <div *ngIf=\"lng=='hi' && travelAgentFlag=='false' && ecsFlag=='false'\" style=\"font-family:Arial;font-size: 1.1rem;color:black;\" id=\"msgId\" >\n                             आई.आर.सी.टी.सी.ई-टिकटिंग सेवा (पर्सनल उपयोगकर्ता)\n                        </div>\n                        <div *ngIf=\"lng=='en' && travelAgentFlag=='true' && ecsFlag=='false' && pmfAgentFlage=='true'\" style=\"font-family:Arial;font-size: 1.1rem;color:black;\" id=\"msgId\" >\n                          Electronic Reservation Slip \n                      </div>\n                      <div *ngIf=\"lng=='hi' && travelAgentFlag=='true' && ecsFlag=='false' && pmfAgentFlage=='true'\" style=\"font-family:Arial;font-size: 1.1rem;color:black;\" id=\"msgId\" >\n                        आई.आर.सी.टी.सी.ई-टिकटिंग सेवा \n                    </div>\n\n                        <div *ngIf=\"lng=='en' && travelAgentFlag=='true' && ecsFlag=='false' && pmfAgentFlage=='false'\" style=\"font-family:Arial;font-size: 1.1rem;color:black;\" id=\"msgId\" >\n                            Electronic Reservation Slip (Agent)\n                        </div>\n                        <div *ngIf=\"lng=='hi' && travelAgentFlag=='true' && ecsFlag=='false' && pmfAgentFlage=='false'\" style=\"font-family:Arial;font-size: 1.1rem;color:black;\" id=\"msgId\" >\n                            आई.आर.सी.टी.सी.ई-टिकटिंग सेवा (एजेंट)\n                        </div>\n\n                        <div *ngIf=\"lng=='en' && travelAgentFlag=='false' && ecsFlag=='true'\" style=\"font-family:Arial;font-size: 1.1rem;color:black;\" id=\"msgId\" >\n                          Electronic Cancellation Slip (Personal User)\n                        </div>\n                        \n                        <div *ngIf=\"lng=='hi' && travelAgentFlag=='false' && ecsFlag=='true'\" style=\"font-family:Arial;font-size: 1.1rem;color:black;\" id=\"msgId\" >\n                          आई.आर.सी.टी.सी.रद्दीकरण पर्ची (पर्सनल उपयोगकर्ता)\n                        </div>\n\n                        <div *ngIf=\"lng=='en' && travelAgentFlag=='true' && ecsFlag=='true' && pmfAgentFlage=='false'\" style=\"font-family:Arial;font-size: 1.1rem;color:black;\" id=\"msgId\" >\n                          Electronic Cancellation Slip (Agent)\n                        </div>\n                        <div *ngIf=\"lng=='en' && travelAgentFlag=='true' && ecsFlag=='true' && pmfAgentFlage=='true'\" style=\"font-family:Arial;font-size: 1.1rem;color:black;\" id=\"msgId\" >\n                          Electronic Cancellation Slip \n                        </div>\n                        <div *ngIf=\"lng=='hi' && travelAgentFlag=='true' && ecsFlag=='true' && pmfAgentFlage=='false'\" style=\"font-family:Arial;font-size: 1.1rem;color:black;\" id=\"msgId\" >\n                          आई.आर.सी.टी.सी.रद्दीकरण पर्ची (एजेंट)\n                        </div>\n                        <div *ngIf=\"lng=='hi' && travelAgentFlag=='true' && ecsFlag=='true'&& pmfAgentFlage=='true'\" style=\"font-family:Arial;font-size: 1.1rem;color:black;\" id=\"msgId\" >\n                          आई.आर.सी.टी.सी.रद्दीकरण पर्ची \n                        </div>\n                       \n                      </b>\n                    </u>\n                  </td>\n                </tr>\n              </table>\n            </td>\n          </tr>\n          <tr>\n            <td style=\"padding-top:7px; text-align: justify;\">\n              <table>\n                <tr>\n                  <td rowspan=\"2\" width=\"90%\">\n                    <div style=\"font-family:Arial;font-size: 10px;color:black;border-width:0px;vertical-align:top;\">\n                      <table>\n                          <div *ngIf=\"lng=='en' && ecsFlag=='false' && printTktResp.trainOwnerFlag==1\" style=\"font-family:Arial;font-size: 1.4rem;color:green;\" id=\"msgId\" >\n                              Indian Railway Catering & Tourism Corporation Ltd.(IRCTC) welcomes you aboard its own new fully air-\n                              conditioned super fast train. Happy Journey!!\n                          </div>\n                          <div *ngIf=\"lng=='hi' && ecsFlag=='false' && printTktResp.trainOwnerFlag==1\" style=\"font-family:Arial;font-size: 1.4rem;color:green;\" id=\"msgId\" >\n                              इंडियन रेलवे कैटरिंग एंड टूरिज्म कॉरपोरेशन लिमिटेड (आई.आर.सी.टी.सी.) अपनी नई, पूर्णतया वातानुकूलित सुपर फास्ट ट्रेन में आपका स्वागत करता है | आपकी यात्रा मंगलमय हो !!\n                          </div>\n                        <tr *ngFor=\"let msg of topTktMsg; let i = index;\">\n                          <td style=\"padding-bottom:3px;padding-right:3px;padding-left:5px;font-family:Arial;font-size: 10px;color:black;\">\n                             <div innerHtml=\"{{i+1}}.{{msg}}\"></div>\n                          </td>\n                        </tr>  \n                        <td *ngIf=\"printTktResp.userGroupId == 33||printTktResp.userGroupId == 34 ||printTktResp.userGroupId == 45 ||printTktResp.userGroupId == 46\" style=\"padding-bottom:3px;padding-right:3px;padding-left:5px;font-family:Arial;font-size: 10px;color:black; font-weight: bold;\">\n                          <span>7.E-Ticket cancellation is permitted through your respective agents only. The customer/passenger should share the Refund OTP with the agent who booked/cancelled the ticket, for getting the cancellation refund amount</span>\n                       </td>             \n                      </table>\n                    </div>\n                  </td>\n\n                </tr>\n                <tr>\n                  <td style=\"padding: 1px;\"align=\"center\" width=\"10%\">\n                    <div *ngIf=\"printTktResp.userGroupId != 82\">\n                      <qr-code style=\"padding: 4px;\" [size]=\"250\" [value]=\"printTktResp.qrCodeText\"></qr-code>\n                    </div>\n                    <div *ngIf=\"printTktResp.displayMPPhoto == 'true'  && displayMpPhoto== 'true' \">\n                      <img [src]=\"_sanitizer.bypassSecurityTrustResourceUrl(printTktResp.mpPhoto)\" height=\"100\" width=\"100\" style=\" padding-bottom: 2px; \">\n                    </div>\n                  </td>\n                </tr>\n              </table>\n            </td>\n          </tr>\n          <tr>\n            <td>\n              <table width=\"100%\" border=\"1\" cellpadding=\"0\" cellspacing=\"0\" style=\"font-family: Arial; font-size: 12px; color: black;\">\n                <tr *ngIf=\"lng=='en'\">\n                  <td  width=\"25%\" align=\"left\" >&nbsp;<b>PNR No:&nbsp;{{printTktResp.pnrNumber}}</b></td>\n                  <td width=\"25%\" align=\"left\" >&nbsp;<b>Train No. & Name:&nbsp;{{printTktResp.trainNo}} / {{printTktResp.trainName}}</b></td>\n                  <td width=\"25%\" align=\"left\" >&nbsp;<b>Quota:&nbsp;{{printTktResp.quota}}</b></td>\n                </tr>\n                <tr *ngIf=\"lng=='hi'\">\n                  <td  width=\"25%\" align=\"left\" >&nbsp;<b>पीएनआर संख्या:&nbsp;{{printTktResp.pnrNumber}}</b></td>\n                  <td  width=\"25%\" align=\"left\" >&nbsp;<b>गाड़ी संख्या एवं नाम :&nbsp;{{printTktResp.trainNo}} / {{printTktResp.trainName}}</b></td>\n                  <td  width=\"25%\" align=\"left\" >&nbsp;<b>कोटा:&nbsp;{{printTktResp.quota}}</b></td>\n                </tr>\n                <tr *ngIf=\"lng=='en'\">\n                  <td *ngIf=\"printTktResp.cancellationID==0\" width=\"25%\" align=\"left\" >&nbsp;<b>Transaction ID:&nbsp;{{printTktResp.mlTransactionID}}</b></td>\n                  <td *ngIf=\"printTktResp.cancellationID!=null && printTktResp.cancellationID!=0\" width=\"25%\" align=\"left\" >&nbsp;<b>Cancellation ID:&nbsp;{{printTktResp.cancellationID}}</b></td>\n                  <td width=\"25%\" align=\"left\" >&nbsp;<b>Date & Time Of Booking:&nbsp;{{printTktResp.dateOfBooking}}</b></td>\n                  <td width=\"25%\" align=\"left\" >&nbsp;<b>Class:&nbsp;{{printTktResp.classCode}}</b></td>\n                </tr>\n                <tr *ngIf=\"lng=='hi'\">\n                  <td *ngIf=\"printTktResp.cancellationID==0\" width=\"25%\" align=\"left\" >&nbsp;<b>ट्रांजेक्शन संख्या:&nbsp;{{printTktResp.mlTransactionID}}</b></td>\n                  <td *ngIf=\"printTktResp.cancellationID!=null && printTktResp.cancellationID!=0\" width=\"25%\" align=\"left\" >&nbsp;<b>रद्दीकरण संख्या:&nbsp;{{printTktResp.cancellationID}}</b></td>\n                  <td width=\"25%\" align=\"left\" >&nbsp;<b>बुकिंग की तिथि:&nbsp;{{printTktResp.dateOfBooking}} HRS</b></td>\n                  <td width=\"25%\" align=\"left\" >&nbsp;<b>श्रेणी:&nbsp;{{printTktResp.classCode}}</b></td>\n                </tr>\n                <tr *ngIf=\"lng=='en'\">\n                  <td width=\"25%\" align=\"left\" >&nbsp;<b>From: {{printTktResp.fromStationName}}({{printTktResp.fromStation}})</b></td>\n                  <td width=\"25%\" align=\"left\" >&nbsp;<b>Date Of Journey: {{printTktResp.dateOfJourney}}</b></td>\n                  <td width=\"25%\" align=\"left\" >&nbsp;<b>To: {{printTktResp.reservationUptoName}}({{printTktResp.reservationUpto}})</b></td>\n                </tr>\n                <tr *ngIf=\"lng=='hi'\">\n                  <td width=\"25%\" align=\"left\" >&nbsp;<b>कहाँ से: {{printTktResp.fromStationName}}({{printTktResp.fromStation}})</b></td>\n                  <td width=\"25%\" align=\"left\" >&nbsp;<b>यात्रा की तिथि: {{printTktResp.dateOfJourney}}</b></td>\n                  <td width=\"25%\" align=\"left\" >&nbsp;<b>कहाँ तक: {{printTktResp.reservationUptoName}}({{printTktResp.reservationUpto}})</b></td>\n                </tr>\n                <tr *ngIf=\"lng=='en'\">\n                  <td width=\"25%\" align=\"left\" >&nbsp;<b>Boarding At: {{printTktResp.boardingAtName}}({{printTktResp.boardingAt}})</b></td>\n                  <td width=\"25%\" align=\"left\" >&nbsp;<b>Date Of Boarding: {{printTktResp.dateOfBoarding}}</b></td>\n                  <td *ngIf=\"scheduleDepartureFlag=='true'\" width=\"25%\" align=\"left\" >&nbsp;<b>Scheduled Departure: {{printTktResp.scheduledDepartureTime}}*</b></td>\n                  <td *ngIf=\"scheduleDepartureFlag=='false'\" width=\"25%\" align=\"left\" >&nbsp;<b>Scheduled Departure: N.A.</b></td>\n                </tr>\n                <tr *ngIf=\"lng=='hi'\">\n                  <td width=\"25%\" align=\"left\" >&nbsp;<b>गाडी में चढ़ने का स्टेशन: {{printTktResp.boardingAtName}}({{printTktResp.boardingAt}})</b></td>\n                  <td width=\"25%\" align=\"left\" >&nbsp;<b>गाड़ी में बैठने की तिथि: {{printTktResp.dateOfBoarding}}</b></td>\n                  <td *ngIf=\"scheduleDepartureFlag=='true'\" width=\"25%\" align=\"left\" >&nbsp;<b>निर्धारित प्रस्थान समय: {{printTktResp.scheduledDepartureTime}}*</b></td>\n                  <td *ngIf=\"scheduleDepartureFlag=='false'\" width=\"25%\" align=\"left\" >&nbsp;<b>निर्धारित प्रस्थान समय: N.A.</b></td>\n                </tr>\n                <tr *ngIf=\"lng=='en'\">\n                  <td width=\"25%\" align=\"left\" >&nbsp;<b>Resv. Upto: {{printTktResp.reservationUptoName}}({{printTktResp.reservationUpto}})</b>\n                  </td>\n                  <td *ngIf=\"scheduleArrivalFlag=='true'\" width=\"25%\" align=\"left\" >&nbsp;<b>Scheduled Arrival: {{printTktResp.scheduledArrivalTime}}*</b></td>\n                  <td *ngIf=\"scheduleArrivalFlag=='false'\" width=\"25%\" align=\"left\" >&nbsp;<b>Scheduled Arrival: N.A.</b></td>\n\n                  <td width=\"25%\" align=\"left\" >&nbsp;<b>Adult: {{printTktResp.noOfAdult}} Child: {{printTktResp.noOfChildren}} </b></td>\n                </tr>\n                <tr *ngIf=\"lng=='hi'\">\n                  <td width=\"25%\" align=\"left\" >&nbsp;<b>कहाँ तक आरक्षण: {{printTktResp.reservationUptoName}}({{printTktResp.reservationUpto}})</b>\n                  </td>\n                  <td *ngIf=\"scheduleArrivalFlag=='true'\" width=\"25%\" align=\"left\" >&nbsp;<b>निर्धारित आगमन समय: {{printTktResp.scheduledArrivalTime}}*</b></td>\n                  <td *ngIf=\"scheduleArrivalFlag=='false'\" width=\"25%\" align=\"left\" >&nbsp;<b>निर्धारित आगमन समय: N.A.</b></td>\n\n                  <td width=\"25%\" align=\"left\" >&nbsp;<b>वयस्क: {{printTktResp.noOfAdult}} बच्चे: {{printTktResp.noOfChildren}}</b></td>\n                </tr>\n                <tr *ngIf=\"lng=='en'\">\n                  <td width=\"25%\" align=\"left\" >&nbsp;<b>Passenger Mobile No: {{printTktResp.mobileNumber}}</b></td>\n                  <td width=\"25%\" align=\"left\" ></td>\n                  <td width=\"25%\" align=\"left\" >&nbsp;<b>Distance: {{printTktResp.distance}}KM</b></td>\n                </tr>\n                <tr *ngIf=\"lng=='hi'\">\n                  <td width=\"25%\" align=\"left\" >&nbsp;<b>यात्री का मोबाइल नंबर: {{printTktResp.mobileNumber}}</b></td>\n                  <td width=\"25%\" align=\"left\" ></td>\n                  <td width=\"25%\" align=\"left\" >&nbsp;<b>दूरी: {{printTktResp.distance}}KM</b></td>\n                </tr>\n                <tr  *ngIf=\"lng=='en'\">\n                  <td width=\"25%\" align=\"left\" style=\"font-size:12px\">&nbsp;<b>Passenger Address</b></td>\n                  <td width=\"25%\" colspan=\"2\" align=\"left\" >&nbsp;<b>{{printTktResp.passengerAddress}}</b></td>\n                </tr>\n                <tr  *ngIf=\"lng=='hi'\">\n                  <td width=\"25%\" align=\"left\" >&nbsp;<b>यात्री का पता:</b></td>\n                  <td width=\"25%\" colspan=\"2\" align=\"left\" >&nbsp;<b>{{printTktResp.passengerAddress}}</b></td>\n                </tr>\n                <tr  *ngIf=\"lng=='en' && printTktResp.cancellationID!=null && printTktResp.cancellationID!=0\">\n                  <td width=\"25%\" align=\"left\" >&nbsp;<b>Date Of Cancellation:</b></td>\n                  <td width=\"25%\" colspan=\"2\" align=\"left\" >&nbsp;<b>{{printTktResp.cancellationDate}}</b></td>\n                </tr>\n                <tr  *ngIf=\"lng=='hi' && printTktResp.cancellationID!=null && printTktResp.cancellationID!=0\">\n                  <td width=\"25%\" align=\"left\" >&nbsp;<b>रद्दीकरण की तिथि:</b></td>\n                  <td width=\"25%\" colspan=\"2\" align=\"left\" >&nbsp;<b>{{printTktResp.cancellationDate}}</b></td>\n                </tr>\n                <tr *ngFor=\"let msg of informationMessages\">\n                  <td *ngIf=\"msg!=undefined && msg!=null && msg!=''\" colspan=\"3\" width=\"25%\" align=\"left\" >&nbsp;<b>{{msg}}</b></td>\n                </tr>\n\n                <tr  *ngIf=\"lng=='en' && (printTktResp.nosbMainPnr!=null || printTktResp.nosbChildPnr!=null)\">\n                  <td *ngIf=\"printTktResp.nosbMainPnr!=null\" width=\"25%\" align=\"left\" >&nbsp;<b>Main PNR:</b></td>\n                  <td *ngIf=\"printTktResp.nosbChildPnr!=null\" width=\"25%\" align=\"left\" >&nbsp;<b>Child PNR:</b></td>\n                  <td width=\"25%\" colspan=\"2\" align=\"left\" >&nbsp;<b>{{printTktResp.nosbMainPnr}} {{printTktResp.nosbChildPnr}}</b></td>\n                </tr>\n                <tr  *ngIf=\"lng=='hi' && (printTktResp.nosbMainPnr!=null || printTktResp.nosbChildPnr!=null)\">\n                  <td *ngIf=\"printTktResp.nosbMainPnr!=null\" width=\"25%\" align=\"left\" >&nbsp;<b>मुख्य पीएनआर:</b></td>\n                  <td *ngIf=\"printTktResp.nosbChildPnr!=null\" width=\"25%\" align=\"left\" >&nbsp;<b>कनेक्टिंग पीएनआर:</b></td>\n                  <td width=\"25%\" colspan=\"2\" align=\"left\" >&nbsp;<b>{{printTktResp.nosbMainPnr}} {{printTktResp.nosbChildPnr}}</b></td>\n                </tr>\n\n              </table>\n            </td>\n          </tr>\n          <!-- connect PNR start -->\n          <tr *ngIf=\"printTktResp.pnrLinkStatus=='1'\">\n            <td *ngIf=\"lng=='en'\" align=\"left\" style=\"padding-top:15px;padding-bottom:3px;\">\n              <b><div style=\"font-size: 10px;color:black;\">CONNECTING PNR DETAILS :</div></b></td>\n              <td *ngIf=\"lng=='hi'\" align=\"left\" style=\"padding-top:15px;padding-bottom:3px;\">\n              <b><div style=\"font-size: 10px;color:black;\">कनेक्टिंग पीएनआर विवरण :</div></b></td>\n          </tr>\n          <tr *ngIf=\"printTktResp.pnrLinkStatus=='1'\">\n            <td>\n              <table width=\"100%\" border=\"1\" cellpadding=\"0\" cellspacing=\"0\" style=\"font-family: Arial; font-size: 12px; color: black;\">\n                <tr *ngIf=\"lng=='en'\">\n                  <td  width=\"35%\" align=\"left\" >&nbsp;<b>Connecting PNR No:</b>&nbsp;{{printTktResp.linkPnr}}</td>\n                  <td width=\"35%\" align=\"left\" >&nbsp;Ticket Type:&nbsp;{{printTktResp.mainPnrType}}</td>\n                </tr>\n                <tr *ngIf=\"lng=='hi'\">\n                  <td  width=\"35%\" align=\"left\" >&nbsp;<b>कनेक्टिंग पीएनआर संख्या:</b>&nbsp;{{printTktResp.linkPnr}}</td>\n                  <td  width=\"35%\" align=\"left\" >&nbsp;टिकिट का प्रकार:&nbsp;{{printTktResp.mainPnrType}}</td>\n                </tr>\n              </table>\n            </td>\n          </tr>\n          <!-- connect PNR end -->\n          <tr *ngIf=\"iframeVisible\"> \n            <td colspan=\"12\" align=\"center\" style=\"padding-top:15px;padding-bottom:3px;\">\n              <img style=\"right: 60px;  padding-top: 3px; margin-left: 14px; margin-right: 14px; \" \n              src=\"https://contents.irctc.co.in/en/ersWebsite.jpeg\" \n              scrolling=\"no\" width=\"1020\" height=\"230\">\n            </td>\n          </tr> \n\n          <tr>\n            <td *ngIf=\"lng=='en'\" align=\"left\" style=\"padding-top:15px;padding-bottom:3px;\">\n              <b><div style=\"font-family: Arial;font-size: 12px;color:black;\">FARE DETAILS :</div></b></td>\n              <td *ngIf=\"lng=='hi'\" align=\"left\" style=\"padding-top:15px;padding-bottom:3px;\">\n              <b><div style=\"font-family: Arial;font-size: 12px;color:black;\">किराये का विवरण :</div></b></td>\n          </tr>\n          <!-- <tr *ngIf=\"printTktResp.cancellationID==0\">\n            <td>\n              <table style=\"font-family:Arial;font-size: 9px;color:black;width:100%\" cellpadding=\"0\" cellspacing=\"0\" border=\"1\">\n                <tr *ngFor=\"let fare of fareInfoData\">\n                  <td width=\"30%\" style=\"border-color:black;font-size: 10px;color:black;\"><b>&nbsp;{{fare.paramName}}</b></td>\n                  <td width=\"10%\" style=\"border-color:black;width:60px;font-size: 10px;color:black;\"><b>₹ </b>{{fare.message}}</td>\n                  <td *ngIf=\"lng=='en'\" width=\"60%\" style=\"border-color:black;border-right-color:white;font-size: 10px;color:black;\"> {{fare.message | rupeesInWords}}</td>\n                  <td *ngIf=\"lng=='hi'\" width=\"60%\" style=\"border-color:black;border-right-color:white;font-size: 10px;color:black;\"> {{fare.message | rupeesInHindi}}</td>\n                </tr>\n              </table>\n            </td>\n          </tr> -->\n\n          <tr *ngIf=\"printTktResp.cancellationID==0\">\n              <td>\n                <table style=\"font-family:Arial;font-size: 9px;color:black;width:100%\" cellpadding=\"0\" cellspacing=\"0\" border=\"1\">\n                  <tr *ngFor=\"let fare of fareInfoData\">\n                    <td *ngIf=\"fare.paramName=='Travel Agent Service Charge #' && printTktResp.gsaFlag=='false' && fare.message!=0\" width=\"30%\" style=\"border-color:black;font-size: 12px;color:black;\"><b>&nbsp;{{fare.paramName}}</b></td>\n                    <td *ngIf=\"fare.paramName=='Travel Agent Service Charge #' && printTktResp.gsaFlag=='true'\" width=\"30%\" style=\"border-color:black;font-size: 12px;color:black;\"><b>&nbsp;{{fare.paramName}}</b></td>\n                    <td *ngIf=\"fare.paramName!='Travel Agent Service Charge #'\" width=\"30%\" style=\"border-color:black;font-size: 12px;color:black;\"><b>&nbsp;{{fare.paramName}}</b></td>\n\n                    <td *ngIf=\"fare.paramName=='Travel Agent Service Charge #' && printTktResp.gsaFlag=='false' && fare.message!=0\" width=\"10%\" style=\"border-color:black;width:60px;font-size: 12px;color:black;\"><b>₹ </b>{{fare.message}}</td>\n                    <td *ngIf=\"fare.paramName=='Travel Agent Service Charge #' && printTktResp.gsaFlag=='true'\" width=\"10%\" style=\"border-color:black;width:60px;font-size: 12px;color:black;\"> </td>\n                    <td *ngIf=\"fare.paramName!='Travel Agent Service Charge #'\" width=\"10%\" style=\"border-color:black;width:60px;font-size: 12px;color:black;\">&nbsp;<b>₹ </b><b>{{fare.message}}</b></td>\n\n                    <td *ngIf=\"lng=='en' && fare.paramName!='Travel Agent Service Charge #'\" width=\"60%\" style=\"border-color:black;border-right-color:white;font-size: 12px;color:black;\">&nbsp;<b>{{fare.message | rupeesInWords}}</b></td>\n                    <td *ngIf=\"lng=='en' && fare.paramName=='Travel Agent Service Charge #' && printTktResp.gsaFlag=='false' && fare.message!=0\" width=\"60%\" style=\"border-color:black;border-right-color:white;font-size: 12px;color:black;\">&nbsp;<b>{{fare.message | rupeesInWords}}</b></td>\n                    <td *ngIf=\"lng=='hi' && fare.paramName!='Travel Agent Service Charge #'\" width=\"60%\" style=\"border-color:black;border-right-color:white;font-size: 12px;color:black;\">&nbsp;<b>{{fare.message | rupeesInHindi}}</b></td>\n                    <td *ngIf=\"lng=='hi' && fare.paramName=='Travel Agent Service Charge #' && printTktResp.gsaFlag=='false' && fare.message!=0\" width=\"60%\" style=\"border-color:black;border-right-color:white;font-size: 12px;color:black;\">&nbsp;<b>{{fare.message | rupeesInHindi}}</b></td>\n                    <td *ngIf=\"fare.paramName=='Travel Agent Service Charge #' && printTktResp.gsaFlag=='true'\" width=\"10%\" style=\"border-color:black;width:60px;font-size: 12px;color:black;\"><b>As per the approved prevalent charges in concerned country</b></td>\n\n                  </tr>\n                </table>\n              </td>\n          </tr>\n\n          <!-- <tr *ngIf=\"printTktResp.cancellationID==0\">\n            <td>\n              <table style=\"font-family:Arial;font-size: 9px;color:black;width:100%\" cellpadding=\"0\" cellspacing=\"0\" border=\"1\">\n                <tr *ngFor=\"let fare of fareInfoData\">\n                  <td *ngIf=\"fare.paramName=='Travel Agent Service Charge #' && printTktResp.gsaFlag=='false' && fare.message!=0\" width=\"30%\" style=\"border-color:black;font-size: 10px;color:black;\"><b>&nbsp;{{fare.paramName}}</b></td>\n                  <td *ngIf=\"fare.paramName=='Travel Agent Service Charge #' && printTktResp.gsaFlag=='true'\" width=\"30%\" style=\"border-color:black;font-size: 10px;color:black;\"><b>&nbsp;{{fare.paramName}}</b></td>\n                  <td *ngIf=\"fare.paramName!='Travel Agent Service Charge #' && fare.paramName!='PG Charges'\" width=\"30%\" style=\"border-color:black;font-size: 10px;color:black;\"><b>&nbsp;{{fare.paramName}}</b></td>\n                  <td *ngIf=\"fare.paramName=='PG Charges' && pmfAgentFlage=='false'\" width=\"30%\" style=\"border-color:black;font-size: 10px;color:black;\"><b>&nbsp;{{fare.paramName}}</b></td>\n\n                  <td *ngIf=\"fare.paramName=='Travel Agent Service Charge #' && printTktResp.gsaFlag=='false' && fare.message!=0\" width=\"10%\" style=\"border-color:black;width:60px;font-size: 10px;color:black;\"><b>₹ </b>{{fare.message}}</td>\n                  <td *ngIf=\"fare.paramName=='Travel Agent Service Charge #' && printTktResp.gsaFlag=='true'\" width=\"10%\" style=\"border-color:black;width:60px;font-size: 10px;color:black;\"> </td>\n                  <td *ngIf=\"fare.paramName!='Travel Agent Service Charge #' && fare.paramName!='PG Charges'\" width=\"10%\" style=\"border-color:black;width:60px;font-size: 10px;color:black;\"><b>₹ </b>{{fare.message}}</td>\n                  <td *ngIf=\"fare.paramName=='PG Charges' && pmfAgentFlage=='false'\" width=\"10%\" style=\"border-color:black;width:60px;font-size: 10px;color:black;\"><b>₹ </b>{{fare.message}}</td>\n\n                  <td *ngIf=\"lng=='en' && fare.paramName!='Travel Agent Service Charge #' && fare.paramName!='PG Charges'\" width=\"60%\" style=\"border-color:black;border-right-color:white;font-size: 10px;color:black;\"> {{fare.message | rupeesInWords}}</td>\n                  <td *ngIf=\"lng=='en' && fare.paramName=='PG Charges' && pmfAgentFlage=='false'\" width=\"60%\" style=\"border-color:black;border-right-color:white;font-size: 10px;color:black;\"> {{fare.message | rupeesInWords}}</td>\n                  <td *ngIf=\"lng=='en' && fare.paramName=='Travel Agent Service Charge #' && printTktResp.gsaFlag=='false' && fare.message!=0\" width=\"60%\" style=\"border-color:black;border-right-color:white;font-size: 10px;color:black;\"> {{fare.message | rupeesInWords}}</td>\n                  <td *ngIf=\"lng=='hi' && fare.paramName!='Travel Agent Service Charge #' && fare.paramName!='PG Charges'\" width=\"60%\" style=\"border-color:black;border-right-color:white;font-size: 10px;color:black;\"> {{fare.message | rupeesInHindi}}</td>\n                  <td *ngIf=\"lng=='hi' && fare.paramName=='PG Charges' && pmfAgentFlage=='false'\" width=\"60%\" style=\"border-color:black;border-right-color:white;font-size: 10px;color:black;\"> {{fare.message | rupeesInHindi}}</td>\n                  <td *ngIf=\"lng=='hi' && fare.paramName=='Travel Agent Service Charge #' && printTktResp.gsaFlag=='false' && fare.message!=0\" width=\"60%\" style=\"border-color:black;border-right-color:white;font-size: 10px;color:black;\"> {{fare.message | rupeesInHindi}}</td>\n                  <td *ngIf=\"fare.paramName=='Travel Agent Service Charge #' && printTktResp.gsaFlag=='true'\" width=\"10%\" style=\"border-color:black;width:60px;font-size: 10px;color:black;\">As per the approved prevalent charges in concerned country</td>\n\n                </tr>\n              </table>\n            </td>\n        </tr> -->\n\n          <tr *ngIf=\"printTktResp.cancellationID!=null && printTktResp.cancellationID!=0\">\n            <td>\n              <table style=\"font-family:Arial;font-size: 10px;color:black;width:100%\" cellpadding=\"0\" cellspacing=\"0\" border=\"1\">\n                <tr *ngFor=\"let fare of CancellationRefundData\">\n                  <td width=\"30%\" style=\"border-color:black;font-size: 10px;color:black;\"><b>&nbsp;{{fare.paramName}}</b></td>\n                  <td width=\"10%\" style=\"border-color:black;width:60px;font-size: 10px;color:black;\"><b>₹</b> <b>{{fare.message}}</b></td>\n                  <td *ngIf=\"lng=='en'\" width=\"60%\" style=\"border-color:black;border-right-color:white;font-size: 10px;color:black;\"> <b>{{fare.message | rupeesInWords}}</b></td>\n                  <td *ngIf=\"lng=='hi'\" width=\"60%\" style=\"border-color:black;border-right-color:white;font-size: 10px;color:black;\"> <b>&nbsp;{{fare.message | rupeesInHindi}}</b></td>\n                </tr>\n              </table>\n            </td>\n          </tr>\n          <tr>\n            <td *ngIf=\"lng=='en' && printTktResp.currentServiceTax!=0 && travelAgentFlag=='false' && ecsFlag=='false'\" align=\"left\" style=\"font-family: Arial; font-size: 12px; color: black;\">\n              ** Inclusive of GST - <b>₹</b> {{printTktResp.currentServiceTax}} Only\n            </td>\n            <td *ngIf=\"lng=='hi' && printTktResp.currentServiceTax!=0 && travelAgentFlag=='false' && ecsFlag=='false'\" align=\"left\" style=\"font-family: Arial; font-size: 12px; color: black;\">\n              ** जीएसटी सहित - <b>₹</b> {{printTktResp.currentServiceTax}} Only\n            </td>\n\n          </tr>\n\n          <tr *ngIf=\"lng=='en'\">\n            <td *ngIf=\"travelAgentFlag=='true' && ecsFlag=='false' && gstFlag=='true'\" align=\"left\" style=\"font-family: Arial; font-size: 10px; color: black;\">\n              # Convenience Fee (Inclusive of GST) per e-ticket irrespective of number of passengers on the ticket.\n            </td>\n            <td *ngIf=\"travelAgentFlag=='true' && ecsFlag=='false' && gstFlag=='false'\" align=\"left\" style=\"font-family: Arial; font-size: 10px; color: black;\">\n              # Convenience Fee (Inclusive of Service Tax) per e-ticket irrespective of number of passengers on the ticket.\n            </td>\n            <td *ngIf=\"travelAgentFlag=='false'\" align=\"left\" style=\"font-family: Arial; font-size: 12px; color: black;\">\n              # Convenience Fee per e-ticket irrespective of number of passengers on the ticket.\n              <br>\n              <br>\n            </td>\n          </tr>\n            \n          <tr *ngIf=\"lng=='hi'\">\n            <td *ngIf=\"travelAgentFlag=='false'\" align=\"left\" style=\"font-family: Arial; font-size: 10px; color: black;\">\n              # ई टिकट सुविधा शुल्क प्रति टिकट यात्रियों की संख्या पर ध्यान दिए बिना\n              <br>\n              <br>\n            </td>\n          </tr>\n          <tr *ngIf=\"codPaymentMsgFlag=='true'\">\n            <td *ngIf=\"lng=='en'\" align=\"left\" style=\"font-family: Arial; font-size: 10px; color: black;\">\n                {{printTktResp.codPaymentMessageEn}}\n            </td>\n            <td *ngIf=\"lng=='hi'\" align=\"left\" style=\"font-family: Arial; font-size: 10px; color: black;\">\n                {{printTktResp.codPaymentMessageHi}}\n            </td>\n          </tr>\n          \n          <!-- <tr *ngIf=\"pledge\">\n            <td *ngIf=\"lng=='en'\" (click)=\"pledgeTaken()\" align=\"left\" style=\"font-size: 10px;color:black;padding-top:30px;padding-bottom:2px;\"><b><a href='http://pledge.cvc.nic.in' target=\"_blank\">Integrity- A way of life</a></b></td>\n            <td *ngIf=\"lng=='hi'\" (click)=\"pledgeTaken()\" align=\"left\" style=\"font-size: 10px;color:black;padding-top:30px;padding-bottom:2px;\"><b><a href='http://pledge.cvc.nic.in' target=\"_blank\">ईमानदारी- एक जीवनशैली</a></b></td>\n          </tr> -->\n\n          <tr>\n            <td *ngIf=\"lng=='en'\" align=\"left\" style=\"font-family: Arial;font-size: 12px;color:black;padding-bottom:2px;\"><b>PASSENGER DETAILS :</b></td>\n            <td *ngIf=\"lng=='hi'\" align=\"left\" style=\"font-family: Arial;font-size: 12px;color:black;padding-bottom:2px;\"><b>यात्री का विवरण :</b></td>\n          </tr>\n          <tr>\n            <td>\n              <table cellpadding=\"0\" cellspacing=\"0\" style=\"font-family:Arial;font-size: 12px;color:black;\" border=\"1\" width=\"100%\" align=\"center\"\n                styleClass=\"psgn-info\">\n\n                <tr *ngIf=\"lng=='en'\" align=\"center\">\n                  <td width=\"5%\" style=\"font-family: Arial; font-size: 12px; color: black;font-weight:bold;\"><b>Sl No.</b></td>\n                  <td width=\"15%\" style=\"font-family: Arial; font-size: 12px; color: black;font-weight:bold;\"><b>Name</b></td>\n                  <td width=\"5%\" style=\"font-family: Arial; font-size: 12px; color: black;font-weight:bold;\"><b>Age</b></td>\n                  <td width=\"5%\" style=\"font-family: Arial; font-size: 12px; color: black;font-weight:bold;\"><b>Gender</b></td>\n                  <td *ngIf=\"concessionOption=='true'\" width=\"10%\" style=\"font-family: Arial; font-size: 12px; color: black;font-weight:bold;\"><b>Concession</b></td>\n                  <td *ngIf=\"concessionOption=='true'\" width=\"10%\" style=\"font-family: Arial; font-size: 12px; color: black;font-weight:bold;\"><b>Registration Number</b></td>\n                  <td *ngIf=\"enableFood=='true'\" width=\"10%\" style=\"font-family: Arial; font-size: 12px; color: black;font-weight:bold;\"><b>Food Choice</b></td>\n                  <td *ngIf=\"bedrollChoice=='true'\" width=\"10%\" style=\"font-family: Arial; font-size: 12px; color: black;font-weight:bold;\"><b>Bedroll Choice</b></td>\n                  <td width=\"20%\" style=\"font-family: Arial; font-size: 12px; color: black;font-weight:bold;\"><b>Booking Status</b></td>\n                  <td width=\"20%\" style=\"font-family: Arial; font-size: 12px; color: black;font-weight:bold;\"><b>Current Status</b></td>\n                  <td *ngIf=\"tatkalIDChoice=='true'\" width=\"10%\" style=\"font-family: Arial; font-size: 12px; color: black;font-weight:bold;\"><b>ID Card Type</b></td>\n                  <td *ngIf=\"tatkalIDChoice=='true'\" width=\"10%\" style=\"font-family: Arial; font-size: 12px; color: black;font-weight:bold;\"><b>ID Card Number</b></td>\n                </tr>\n\n                <tr *ngIf=\"lng=='hi'\" align=\"center\">\n                  <td width=\"5%\" style=\"font-family: Arial; font-size: 12px; color: black;font-weight:bold;\"><b>क्रम सं</b></td>\n                  <td width=\"15%\" style=\"font-family: Arial; font-size: 12px; color: black;font-weight:bold;\"><b>नाम</b></td>\n                  <td width=\"5%\" style=\"font-family: Arial; font-size: 12px; color: black;font-weight:bold;\"><b>आयु</b></td>\n                  <td width=\"5%\" style=\"font-family: Arial; font-size: 12px; color: black;font-weight:bold;\"><b>लिंग</b></td>\n                  <td *ngIf=\"concessionOption=='true'\" width=\"10%\" style=\"font-family: Arial; font-size: 12px; color: black;font-weight:bold;\"><b>रियायत कोड</b></td>\n                  <td *ngIf=\"concessionOption=='true'\" width=\"10%\" style=\"font-family: Arial; font-size: 12px; color: black;font-weight:bold;\"><b>पंजीकरण संख्या</b></td>\n                  <td *ngIf=\"enableFood=='true'\" width=\"10%\" style=\"font-family: Arial; font-size: 12px; color: black;font-weight:bold;\"><b>खाना विकल्प</b></td>\n                  <td *ngIf=\"bedrollChoice=='true'\" width=\"10%\" style=\"font-family: Arial; font-size: 12px; color: black;font-weight:bold;\"><b>बेडरोल विकल्प</b></td>\n                  <td width=\"20%\" style=\"font-family: Arial; font-size: 12px; color: black;font-weight:bold;\"><b>बुकिंग स्थिति</b></td>\n                  <td width=\"20%\" style=\"font-family: Arial; font-size: 12px; color: black;font-weight:bold;\"><b>वर्तमान स्थिति</b></td>\n                  <td *ngIf=\"tatkalIDChoice=='true'\" width=\"10%\" style=\"font-family: Arial; font-size: 12px; color: black;font-weight:bold;\"><b>आईडी कार्ड टाइप</b></td>\n                  <td *ngIf=\"tatkalIDChoice=='true'\" width=\"10%\" style=\"font-family: Arial; font-size: 12px; color: black;font-weight:bold;\"><b>आईडी कार्ड संख्या</b></td>\n                </tr>\n\n                 <tr *ngFor=\"let p of psgnDtlList; let i=index\">\n                  <td width=\"5%\" style=\"font-family: Arial; font-size: 12px; color: black;\"> &nbsp;<b>{{p.passengerSerialNumber}}</b></td>\n                  <td width=\"15%\" style=\"font-family: Arial; font-size: 12px; color: black;\"> &nbsp;<b>{{p.passengerName | uppercase}}</b></td>\n                  <td width=\"5%\" style=\"font-family: Arial; font-size: 12px; color: black;\"> &nbsp;<b>{{p.passengerAge}}</b></td>\n                  <td width=\"5%\" style=\"font-family: Arial; font-size: 12px; color: black;\"> &nbsp;<b>{{p.passengerGender}}</b></td>\n                  <td *ngIf=\"concessionOption=='true'\" width=\"10%\" style=\"font-family: Arial; font-size: 12px; color: black;\">&nbsp;<b>{{p.passengerConcession}}</b></td>\n                  <td *ngIf=\"concessionOption=='true'\" width=\"10%\" style=\"font-family: Arial; font-size: 12px; color: black;\">&nbsp;<b>{{p.psgnConcCardId}}</b></td>\n                  <td *ngIf=\"enableFood=='true'\" width=\"10%\" style=\"font-family: Arial; font-size: 12px; color: black;\">&nbsp;<b>{{p.foodChoice}}</b></td>\n                  <td *ngIf=\"bedrollChoice=='true'\" width=\"10%\" style=\"font-family: Arial; font-size: 12px; color: black;\">&nbsp;<b>{{p.passengerBedrollChoice === 'true' ? \"Yes\" : \"No\"}}</b></td>\n                  <td *ngIf=\"p.bookingStatus == 'CNF' && p.passengerBerthChoice != null && p.passengerBerthChoice != 'NULL_SBTYPE'\" width=\"20%\"\n                    style=\"font-family: Arial; font-size: 12px; color: black;\">\n                    &nbsp;<b>{{p.bookingStatus}}/{{p.bookingCoachId}}/{{p.bookingBerthNo}}/{{p.currentBerthChoice |uppercase}}</b>\n                  </td>\n                  <td *ngIf=\"p.bookingStatus == 'CNF' && p.passengerBerthChoice != null && p.passengerBerthChoice == 'NULL_SBTYPE'\" width=\"20%\"\n                    style=\"font-family: Arial; font-size: 12px; color: black;\">\n                    &nbsp;<b>{{p.bookingStatus}}/{{p.bookingCoachId}}/{{p.bookingBerthNo}}</b>\n                  </td>\n                  <td *ngIf=\"p.bookingStatus == 'CNF' && p.passengerBerthChoice == null\" width=\"20%\" style=\"font-family: Arial; font-size: 12px; color: black;\">\n                    &nbsp;<b>{{p.bookingStatus}}//{{p.bookingCoachId}}/{{p.bookingBerthNo}}</b>\n                  </td>\n                  <td *ngIf=\"p.bookingStatus != 'CNF' && p.bookingStatus != 'N/A'\" width=\"20%\" style=\"font-family: Arial; font-size: 12px; color: black;\">\n                    &nbsp;<b>{{p.bookingStatus}}/{{p.bookingBerthNo}}</b>\n                  </td>\n                  <td *ngIf=\"p.bookingStatus == 'N/A'\" width=\"20%\" style=\"font-family: Arial; font-size: 12px; color: black;\">\n                    &nbsp;<b>No seat/Berth</b>\n                  </td>\n\n                  <td *ngIf=\"p.currentStatus == 'CNF' && p.currentBerthChoice != null && p.currentBerthChoice != 'NULL_SBTYPE'\" width=\"20%\"\n                    style=\"font-family: Arial; font-size: 12px; color: black;\">\n                    &nbsp;<b>{{p.currentStatus}}/{{p.currentCoachId}}/{{p.currentBerthNo}}/{{p.currentBerthChoice|uppercase}}</b>\n                  </td>\n                  <td *ngIf=\"p.currentStatus == 'CNF' && p.currentBerthChoice != null && p.currentBerthChoice == 'NULL_SBTYPE'\" width=\"20%\"\n                    style=\"font-family: Arial; font-size: 12px; color: black;\">\n                    &nbsp;<b>{{p.currentStatus}}/{{p.currentCoachId}}/{{p.currentBerthNo}}</b>\n                  </td>\n                  <td *ngIf=\"p.currentStatus != 'CNF' &&  p.currentStatus != 'CAN' &&  p.currentStatus != 'N/A'\" width=\"20%\" style=\"font-family: Arial; font-size: 12px; color: black;\">\n                    &nbsp;<b>{{p.currentStatus}}/{{p.currentBerthNo}}</b>\n                  </td>\n                  <td *ngIf=\"p.currentStatus == 'CAN'\" width=\"20%\" style=\"font-family: Arial; font-size: 12px; color: black;\">\n                  <b>{{p.currentStatus}}</b>\n                  </td>\n                  <td *ngIf=\"p.currentStatus == 'CNF' && p.currentBerthChoice == null\" width=\"20%\" style=\"font-family: Arial; font-size: 12px; color: black;\">\n                    &nbsp;<b>{{p.currentStatus}}/{{p.currentCoachId}}/{{p.currentBerthNo}}</b>\n                  </td>\n                  <td *ngIf=\"p.currentStatus == 'N/A'\" width=\"20%\" style=\"font-family: Arial; font-size: 12px; color: black;\">\n                    &nbsp;No seat/Berth\n                  </td>\n                  <td *ngIf=\"tatkalIDChoice=='true'\" width=\"10%\" style=\"font-family: Arial; font-size: 12px; color: black;\"><b>&nbsp;{{p.passengerCardType}}</b></td>\n                  <td *ngIf=\"tatkalIDChoice=='true'\" width=\"10%\" style=\"font-family: Arial; font-size: 12px; color: black;\"><b>&nbsp;{{p.passengerCardNumber}}</b></td>\n                </tr>\n\n              </table>\n\n            </td>\n          </tr>\n\n          <!-- start GST -->\n\n          <tr *ngIf=\"gstFlag=='true'\">\n            <td *ngIf=\"lng=='en' && printTktResp.trainOwnerFlag==1\" align=\"left\" style=\"font-family: Arial;font-size: 10px;color:black;padding-top:5px;padding-bottom:2px;\"><b>IRCTC GST Details :</b></td>\n            <td *ngIf=\"lng=='en' && printTktResp.trainOwnerFlag==0\" align=\"left\" style=\"font-family: Arial;font-size: 10px;color:black;padding-top:5px;padding-bottom:2px;\"><b>Indian Railways GST Details :</b></td>\n            <td *ngIf=\"lng=='hi' && printTktResp.trainOwnerFlag==0\" align=\"left\" style=\"font-family: Arial;font-size: 10px;color:black;padding-top:5px;padding-bottom:2px;\"><b>भारतीय रेलवे जीएसटी विवरण :</b></td>\n            <td *ngIf=\"lng=='hi' && printTktResp.trainOwnerFlag==1\" align=\"left\" style=\"font-family: Arial;font-size: 10px;color:black;padding-top:5px;padding-bottom:2px;\"><b>आईआरसीटीसी जीएसटी विवरण :</b></td>\n          </tr>\n          <tr *ngIf=\"gstFlag=='true'\">\n            <td *ngIf=\"lng=='en'\" align=\"left\" style=\"font-family: Arial;font-size: 10px;color:black;\">\n              <b> &nbsp;&nbsp;&nbsp;Invoice Number : {{printTktResp.invoiceNumber}} &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;\n               Address: {{printTktResp.suplierAddress}} </b></td>\n            <td *ngIf=\"lng=='hi'\" align=\"left\" style=\"font-family: Arial;font-size: 10px;color:black;\">\n              <b> &nbsp;&nbsp;&nbsp;चालान संख्या : {{printTktResp.invoiceNumber}} &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;\n               पता: {{printTktResp.suplierAddress}} </b></td>\n          </tr>\n\n          <tr *ngIf=\"gstFlag=='true'\">\n            <td>\n              <table width=\"100%\" border=\"2\" rules=\"all\">\n                <tr *ngIf=\"lng=='en'\" style=\"border-bottom:1pt solid black;\">\n                  <!--<td rowspan=\"2\" width=\"5%\" align=\"center\">&nbsp;<b><h:outputText value=\"SAC Code</b></td>      -->\n                  <td width=\"20%\" align=\"center\" colspan=\"2\" style=\"font-family: Arial; font-size: 10px; color: black;\">&nbsp;<b>Supplier Information</b></td>\n                  <td width=\"25%\" align=\"center\" colspan=\"3\" style=\"font-family: Arial; font-size: 10px; color: black;\">&nbsp;<b>Recipient Information</b></td>\n                  <td rowspan=\"2\" width=\"5%\" align=\"center\" style=\"font-family: Arial; font-size: 10px; color: black;\">&nbsp;<b>Taxable Value</b></td>\n                  <td width=\"6%\" align=\"center\" colspan=\"2\" style=\"font-family: Arial; font-size: 10px; color: black;\">&nbsp;<b>CGST</b></td>\n                  <td width=\"6%\" align=\"center\" colspan=\"2\" style=\"font-family: Arial; font-size: 10px; color: black;\">&nbsp;<b>SGST/UGST</b></td>\n                  <td width=\"6%\" align=\"center\" colspan=\"2\" style=\"font-family: Arial; font-size: 10px; color: black;\">&nbsp;<b>IGST</b></td>\n                  <td rowspan=\"2\" width=\"6%\" align=\"center\" style=\"font-family: Arial; font-size: 10px; color: black;\">&nbsp;<b>Total Tax</b></td>\n                </tr>\n                <tr *ngIf=\"lng=='hi'\" style=\"border-bottom:1pt solid black;\">\n                  <!--<td rowspan=\"2\" width=\"5%\" align=\"center\">&nbsp;<b><h:outputText value=\"SAC Code</b></td>      -->\n                  <td width=\"20%\" align=\"center\" colspan=\"2\" style=\"font-family: Arial; font-size: 10px; color: black;\">&nbsp;<b>आपूर्तिकर्ता की जानकारी</b></td>\n                  <td width=\"25%\" align=\"center\" colspan=\"3\" style=\"font-family: Arial; font-size: 10px; color: black;\">&nbsp;<b>प्राप्तकर्ता की जानकारी</b></td>\n                  <td rowspan=\"2\" width=\"5%\" align=\"center\" style=\"font-family: Arial; font-size: 10px; color: black;\">&nbsp;<b>कर योग्य राशि</b></td>\n                  <td width=\"6%\" align=\"center\" colspan=\"2\" style=\"font-family: Arial; font-size: 10px; color: black;\">&nbsp;<b>सीजीएसटी</b></td>\n                  <td width=\"6%\" align=\"center\" colspan=\"2\" style=\"font-family: Arial; font-size: 10px; color: black;\">&nbsp;<b>एसजीएसटी/यूजीएसटी  </b></td>\n                  <td width=\"6%\" align=\"center\" colspan=\"2\" style=\"font-family: Arial; font-size: 10px; color: black;\">&nbsp;<b>आईजीएसटी</b></td>\n                  <td rowspan=\"2\" width=\"6%\" align=\"center\" style=\"font-family: Arial; font-size: 10px; color: black;\">&nbsp;<b>कुल कर</b></td>\n                </tr>\n                <tr *ngIf=\"lng=='en'\" style=\"border-bottom:1pt solid black;\">\n                  <td width=\"6%\" align=\"center\" style=\"font-family: Arial; font-size: 10px; color: black;\">&nbsp;<b>SAC Code</b></td>\n                  <td width=\"15%\" align=\"center\" style=\"font-family: Arial; font-size: 10px; color: black;\">&nbsp;<b>GSTIN</b></td>\n                  <td width=\"6%\" align=\"center\" style=\"font-family: Arial; font-size: 10px; color: black;\">&nbsp;<b>GSTIN</b></td>\n                  <td width=\"10%\" align=\"center\" style=\"font-family: Arial; font-size: 10px; color: black;\">&nbsp;<b>Name</b></td>\n                  <td width=\"17%\" align=\"center\" style=\"font-family: Arial; font-size: 10px; color: black;\">&nbsp;<b>Address</b></td>\n                  <td width=\"3%\" align=\"center\" style=\"font-family: Arial; font-size: 10px; color: black;\">&nbsp;<b>Rate</b></td>\n                  <td width=\"4%\" align=\"center\" style=\"font-family: Arial; font-size: 10px; color: black;\">&nbsp;<b>Amount</b></td>\n                  <td width=\"3%\" align=\"center\" style=\"font-family: Arial; font-size: 10px; color: black;\">&nbsp;<b>Rate</b></td>\n                  <td width=\"4%\" align=\"center\" style=\"font-family: Arial; font-size: 10px; color: black;\">&nbsp;<b>Amount</b></td>\n                  <td width=\"3%\" align=\"center\" style=\"font-family: Arial; font-size: 10px; color: black;\">&nbsp;<b>Rate</b></td>\n                  <td width=\"4%\" align=\"center\" style=\"font-family: Arial; font-size: 10px; color: black;\">&nbsp;<b>Amount</b></td>\n                </tr>\n                <tr *ngIf=\"lng=='hi'\" style=\"border-bottom:1pt solid black;\">\n                  <td width=\"6%\" align=\"center\" style=\"font-family: Arial; font-size: 10px; color: black;\">&nbsp;<b>एसएसी कोड</b></td>\n                  <td width=\"15%\" align=\"center\" style=\"font-family: Arial; font-size: 10px; color: black;\">&nbsp;<b>जीएसटीआईएन</b></td>\n                  <td width=\"6%\" align=\"center\" style=\"font-family: Arial; font-size: 10px; color: black;\">&nbsp;<b>जीएसटीआईएन</b></td>\n                  <td width=\"10%\" align=\"center\" style=\"font-family: Arial; font-size: 10px; color: black;\">&nbsp;<b>नाम </b></td>\n                  <td width=\"17%\" align=\"center\" style=\"font-family: Arial; font-size: 10px; color: black;\">&nbsp;<b>पता</b></td>\n                  <td width=\"3%\" align=\"center\" style=\"font-family: Arial; font-size: 10px; color: black;\">&nbsp;<b>दर</b></td>\n                  <td width=\"4%\" align=\"center\" style=\"font-family: Arial; font-size: 10px; color: black;\">&nbsp;<b>राशि</b></td>\n                  <td width=\"3%\" align=\"center\" style=\"font-family: Arial; font-size: 10px; color: black;\">&nbsp;<b>दर</b></td>\n                  <td width=\"4%\" align=\"center\" style=\"font-family: Arial; font-size: 10px; color: black;\">&nbsp;<b>राशि</b></td>\n                  <td width=\"3%\" align=\"center\" style=\"font-family: Arial; font-size: 10px; color: black;\">&nbsp;<b>दर</b></td>\n                  <td width=\"4%\" align=\"center\" style=\"font-family: Arial; font-size: 10px; color: black;\">&nbsp;<b>राशि</b></td>\n                </tr>\n                <tr style=\"border-bottom:1pt solid black;font-family: Arial; font-size: 10px; color: black;\">\n\n                  <td width=\"6%\" align=\"left\">&nbsp;<b> {{printTktResp.sacCode}}</b></td>\n                  <td width=\"15%\" align=\"left\">&nbsp;<b> {{printTktResp.gstinSuplier}}</b></td>\n                  <td width=\"6%\" align=\"left\">&nbsp;<b> {{printTktResp.gstDetailsDTO.gstIn}}</b></td>\n                  <td width=\"10%\" align=\"left\">&nbsp;<b> {{printTktResp.gstDetailsDTO.nameOnGst}}</b></td>\n                  <td width=\"17%\" align=\"left\">&nbsp;<b> {{printTktResp.gstDetailsDTO.area}} {{printTktResp.gstDetailsDTO.street}} {{printTktResp.gstDetailsDTO.flat}} {{printTktResp.gstDetailsDTO.city}} {{printTktResp.gstDetailsDTO.state}} {{printTktResp.gstDetailsDTO.pin}}</b></td>\n\n                  <td width=\"4%\" align=\"left\"> {{printTktResp.taxableAmt}}</td>\n                  <td width=\"4%\" align=\"left\"><div *ngIf=\"printTktResp.prsCgstCharge>0\"> {{printTktResp.cgstRate}}</div></td>\n                  <td width=\"4%\" align=\"left\"><div *ngIf=\"printTktResp.prsCgstCharge>0\"> {{printTktResp.prsCgstCharge}}</div></td>\n                  <td width=\"4%\" align=\"left\">\n                    <div *ngIf=\"printTktResp.prsSgstCharge>0\"> {{printTktResp.sgstRate}}</div>\n                    <div *ngIf=\"printTktResp.prsUgstCharge>0\"> {{printTktResp.ugstRate}}</div>\n                  </td>\n                  <td width=\"4%\" align=\"left\">\n                    <div *ngIf=\"printTktResp.prsUgstCharge>0\"> {{printTktResp.prsUgstCharge}}</div>\n                    <div *ngIf=\"printTktResp.prsSgstCharge>0\"> {{printTktResp.prsSgstCharge}}</div>\n                  </td>\n                  <td width=\"4%\" align=\"left\"><div *ngIf=\"printTktResp.prsIgstCharge>0\"> {{printTktResp.igstRate}}</div></td>\n                  <td width=\"4%\" align=\"left\"><div *ngIf=\"printTktResp.prsIgstCharge>0\"> {{printTktResp.prsIgstCharge}}</div></td>\n                  <td width=\"4%\" align=\"left\"> {{printTktResp.totalPRSGst | number:'1.2-2'}}</td>\n\n                </tr>\n              </table>\n\n            </td>\n          </tr>\n\n          <!--end GST-->\n\n          <tr *ngIf=\"lng=='en'\">\n            <td *ngIf=\"userGroupTypeIdFlag=='true'\" align=\"left\" style=\"padding-bottom:10px;font-family: Arial; font-size: 1.0rem; color: black;\">\n              <u><b>This ticket is booked on a personal user ID. Its sale/purchase is an offence u/s 143 of the Railways Act, 1989.</b></u>\n            </td>\n          </tr>\n          <tr *ngIf=\"lng=='hi'\">\n            <td *ngIf=\"userGroupTypeIdFlag=='true'\" align=\"left\" style=\"padding-bottom:10px;font-family: Arial; font-size: 1.0rem; color: black;\">\n              <u><b> यह टिकट व्यक्तिगत उपयोगकर्ता आईडी पर बुक की गई है और किसी एजेंट द्वारा नहीं बेची जा सकती है। इसकी  बिक्री / खरीद रेलवे अधिनियम,1989 की धारा 143 के तहत अपराध है |</b></u>\n            </td>\n          </tr>\n\n          <!-- start Agent Details -->\n          <tr *ngIf=\"travelAgentFlag=='true' && pmfAgentFlage=='false'\">\n            <td *ngIf=\"lng=='en'\" align=\"left\" style=\"font-size: 10px;color:black;padding-top:5px;padding-bottom:2px;\"><b>AGENT DETAILS :</b></td>\n            <td *ngIf=\"lng=='hi'\" align=\"left\" style=\"font-size: 10px;color:black;padding-top:5px;padding-bottom:2px;\"><b>एजेंट का विवरण :</b></td>\n          </tr>\n\n          <tr *ngIf=\"travelAgentFlag=='true' && printTktResp.principleAgentName!=null && pmfAgentFlage=='false'\">\n            <td>\n              <table width=\"100%\" border=\"2\" rules=\"all\">\n                <tr *ngIf=\"lng=='en'\" style=\"border-bottom:1pt solid black;\">\n                  <td width=\"20%\" align=\"left\" style=\"font-family: Arial; font-size: 10px; color: black;\">&nbsp;<b>Principle Agent:</b></td>\n                  <td width=\"20%\" align=\"left\" style=\"font-family: Arial; font-size: 10px; color: black;\">&nbsp; {{printTktResp.agentCompanyName}}</td>\n                  <td width=\"20%\" align=\"left\" style=\"font-family: Arial; font-size: 10px; color: black;\">&nbsp;<b>Corporate Name:</b></td>\n                  <td width=\"40%\" align=\"left\" style=\"font-family: Arial; font-size: 10px; color: black;\">&nbsp; {{printTktResp.subagentCompanyName}}</td>\n                </tr>\n                <tr *ngIf=\"lng=='hi'\" style=\"border-bottom:1pt solid black;\">\n                  <td width=\"20%\" align=\"left\" style=\"font-family: Arial; font-size: 10px; color: black;\">&nbsp;<b>प्रिन्सिपल एजेंट:</b></td>\n                  <td width=\"20%\" align=\"left\" style=\"font-family: Arial; font-size: 10px; color: black;\">&nbsp;{{printTktResp.agentCompanyName}}</td>\n                  <td width=\"20%\" align=\"left\" style=\"font-family: Arial; font-size: 10px; color: black;\">&nbsp;<b>कंपनी का नाम:</b></td>\n                  <td width=\"40%\" align=\"left\" style=\"font-family: Arial; font-size: 10px; color: black;\">&nbsp;{{printTktResp.subagentCompanyName}}</td>\n                </tr>\n                <tr *ngIf=\"lng=='en'\" style=\"border-bottom:1pt solid black;\">\n                  <td width=\"20%\" align=\"left\" style=\"font-family: Arial; font-size: 10px; color: black;\">&nbsp;<b>Agent Name:</b></td>\n                  <td width=\"20%\" align=\"left\" style=\"font-family: Arial; font-size: 10px; color: black;\">&nbsp; {{printTktResp.agentName}}</td>\n                  <td width=\"20%\" align=\"left\" style=\"font-family: Arial; font-size: 10px; color: black;\">&nbsp;<b>E-mail ID:</b></td>\n                  <td width=\"40%\" align=\"left\" style=\"font-family: Arial; font-size: 10px; color: black;\">&nbsp; {{printTktResp.agentEmailID}}</td>\n                </tr>\n                <tr *ngIf=\"lng=='hi'\" style=\"border-bottom:1pt solid black;\">\n                  <td width=\"20%\" align=\"left\" style=\"font-family: Arial; font-size: 10px; color: black;\">&nbsp;<b>एजेंट का नाम:</b></td>\n                  <td width=\"20%\" align=\"left\" style=\"font-family: Arial; font-size: 10px; color: black;\">&nbsp;{{printTktResp.agentName}}</td>\n                  <td width=\"20%\" align=\"left\" style=\"font-family: Arial; font-size: 10px; color: black;\">&nbsp;<b>ईमेल आईडी:</b></td>\n                  <td width=\"40%\" align=\"left\" style=\"font-family: Arial; font-size: 10px; color: black;\">&nbsp;{{printTktResp.agentEmailID}}</td>\n                </tr>\n                <tr *ngIf=\"lng=='en'\" style=\"border-bottom:1pt solid black;\">\n                  <td width=\"20%\" align=\"left\" style=\"font-family: Arial; font-size: 10px; color: black;\">&nbsp;<b>Mobile Number:</b></td>\n                  <td width=\"20%\" align=\"left\" style=\"font-family: Arial; font-size: 10px; color: black;\">&nbsp; {{printTktResp.agentMobileNumberOne}}</td>\n                  <td width=\"20%\" align=\"left\" style=\"font-family: Arial; font-size: 10px; color: black;\">&nbsp;<b>Contact Number:</b></td>\n                  <td width=\"40%\" align=\"left\" style=\"font-family: Arial; font-size: 10px; color: black;\">&nbsp; {{printTktResp.agentMobileNumber}}</td>\n                </tr>\n                <tr *ngIf=\"lng=='hi'\" style=\"border-bottom:1pt solid black;\">\n                  <td width=\"20%\" align=\"left\" style=\"font-family: Arial; font-size: 10px; color: black;\">&nbsp;<b>फोन नंबर:</b></td>\n                  <td width=\"20%\" align=\"left\" style=\"font-family: Arial; font-size: 10px; color: black;\">&nbsp;{{printTktResp.agentMobileNumberOne}}</td>\n                  <td width=\"20%\" align=\"left\" style=\"font-family: Arial; font-size: 10px; color: black;\">&nbsp;<b>संपर्क नंबर:</b></td>\n                  <td width=\"40%\" align=\"left\" style=\"font-family: Arial; font-size: 10px; color: black;\">&nbsp;{{printTktResp.agentMobileNumber}}</td>\n                </tr>\n                <tr *ngIf=\"lng=='en'\" style=\"border-bottom:1pt solid black;\">\n                  <td width=\"20%\" align=\"left\" style=\"font-family: Arial; font-size: 10px; color: black;\">&nbsp;<b>Address:</b></td>\n                  <td width=\"80%\" align=\"left\" colspan=\"3\" style=\"font-family: Arial; font-size: 10px; color: black;\">&nbsp; {{printTktResp.agentAddress}}</td>\n                </tr>\n                <tr *ngIf=\"lng=='hi'\" style=\"border-bottom:1pt solid black;\">\n                  <td width=\"20%\" align=\"left\" style=\"font-family: Arial; font-size: 10px; color: black;\">&nbsp;<b>पता:</b></td>\n                  <td width=\"80%\" align=\"left\" colspan=\"3\" style=\"font-family: Arial; font-size: 10px; color: black;\">&nbsp;{{printTktResp.agentAddress}}</td>\n                </tr>\n              </table>\n            </td>\n          </tr>\n\n          <tr *ngIf=\"travelAgentFlag=='true' && printTktResp.principleAgentName==null \">\n            <td>\n              <table width=\"100%\" border=\"2\" rules=\"all\">\n                <tr *ngIf=\"lng=='en'\" style=\"border-bottom:1pt solid black;\">\n                  <td width=\"20%\" align=\"left\" style=\"font-family: Arial; font-size: 10px; color: black;\">&nbsp;<b>Agent Name:</b></td>\n                  <td width=\"20%\" align=\"left\" style=\"font-family: Arial; font-size: 10px; color: black;\">&nbsp; {{printTktResp.agentName}}</td>\n                  <td width=\"20%\" align=\"left\" style=\"font-family: Arial; font-size: 10px; color: black;\">&nbsp;<b>Corporate Name:</b></td>\n                  <td width=\"40%\" align=\"left\" style=\"font-family: Arial; font-size: 10px; color: black;\">&nbsp; {{printTktResp.subagentCompanyName}}</td>\n                </tr>\n                <tr *ngIf=\"lng=='hi'\" style=\"border-bottom:1pt solid black;\">\n                  <td width=\"20%\" align=\"left\" style=\"font-family: Arial; font-size: 10px; color: black;\">&nbsp;<b>एजेंट का नाम:</b></td>\n                  <td width=\"20%\" align=\"left\" style=\"font-family: Arial; font-size: 10px; color: black;\">&nbsp;{{printTktResp.agentName}}</td>\n                  <td width=\"20%\" align=\"left\" style=\"font-family: Arial; font-size: 10px; color: black;\">&nbsp;<b>कंपनी का नाम:</b></td>\n                  <td width=\"40%\" align=\"left\" style=\"font-family: Arial; font-size: 10px; color: black;\">&nbsp;{{printTktResp.subagentCompanyName}}</td>\n                </tr>\n                <tr *ngIf=\"lng=='en'\" style=\"border-bottom:1pt solid black;\">\n                  <td width=\"20%\" align=\"left\" style=\"font-family: Arial; font-size: 10px; color: black;\">&nbsp;<b>E-mail ID:</b></td>\n                  <td width=\"20%\" align=\"left\" style=\"font-family: Arial; font-size: 10px; color: black;\">&nbsp; {{printTktResp.agentEmailID}}</td>\n                  <td width=\"20%\" align=\"left\" style=\"font-family: Arial; font-size: 10px; color: black;\">&nbsp;<b>Contact Number:</b></td>\n                  <td width=\"40%\" align=\"left\" style=\"font-family: Arial; font-size: 10px; color: black;\">&nbsp; {{printTktResp.agentMobileNumber}}</td>\n                </tr>\n                <tr *ngIf=\"lng=='hi'\" style=\"border-bottom:1pt solid black;\">\n                  <td width=\"20%\" align=\"left\" style=\"font-family: Arial; font-size: 10px; color: black;\">&nbsp;<b>ईमेल आईडी:</b></td>\n                  <td width=\"20%\" align=\"left\" style=\"font-family: Arial; font-size: 10px; color: black;\">&nbsp;{{printTktResp.agentEmailID}}</td>\n                  <td width=\"20%\" align=\"left\" style=\"font-family: Arial; font-size: 10px; color: black;\">&nbsp;<b>संपर्क नंबर:</b></td>\n                  <td width=\"40%\" align=\"left\" style=\"font-family: Arial; font-size: 10px; color: black;\">&nbsp;{{printTktResp.agentMobileNumber}}</td>\n                </tr>\n                <tr *ngIf=\"lng=='en'\" style=\"border-bottom:1pt solid black;\">\n                  <td width=\"20%\" align=\"left\" style=\"font-family: Arial; font-size: 10px; color: black;\">&nbsp;<b>Mobile Number:</b></td>\n                  <td width=\"20%\" align=\"left\" colspan=\"3\" style=\"font-family: Arial; font-size: 10px; color: black;\">&nbsp; {{printTktResp.agentMobileNumberOne}}</td>\n                </tr>\n                <tr *ngIf=\"lng=='hi'\" style=\"border-bottom:1pt solid black;\">\n                  <td width=\"20%\" align=\"left\" style=\"font-family: Arial; font-size: 10px; color: black;\">&nbsp;<b>फोन नंबर:</b></td>\n                  <td width=\"20%\" align=\"left\" colspan=\"3\" style=\"font-family: Arial; font-size: 10px; color: black;\">&nbsp;{{printTktResp.agentMobileNumberOne}}</td>\n                </tr>\n                <tr *ngIf=\"lng=='en'\" style=\"border-bottom:1pt solid black;\">\n                  <td width=\"20%\" align=\"left\" style=\"font-family: Arial; font-size: 10px; color: black;\">&nbsp;<b>Address:</b></td>\n                  <td width=\"80%\" align=\"left\" colspan=\"3\" style=\"font-family: Arial; font-size: 10px; color: black;\">&nbsp; {{printTktResp.agentAddress}}</td>\n                </tr>\n                <tr *ngIf=\"lng=='hi'\" style=\"border-bottom:1pt solid black;\">\n                  <td width=\"20%\" align=\"left\" style=\"font-family: Arial; font-size: 10px; color: black;\">&nbsp;<b>पता:</b></td>\n                  <td width=\"80%\" align=\"left\" colspan=\"3\" style=\"font-family: Arial; font-size: 10px; color: black;\">&nbsp;{{printTktResp.agentAddress}}</td>\n                </tr>\n              </table>\n            </td>\n          </tr>\n\n          <!-- end Agent Details -->\n\n          <tr *ngIf=\"printTktResp.waitlistOption!=undefined && printTktResp.waitlistOption!=1\"\n            style=\"font-family: Arial; font-size: 10px; color: black;\">\n            <td>\n              <u><strong>Acronyms:</strong></u>\n              <strong>RLWL:</strong> {{accommodationStatus[0]}}\n              <strong>PQWL:</strong> {{accommodationStatus[1]}}\n              <strong>RSWL:</strong> {{accommodationStatus[2]}}\n            </td>\n          </tr>\n\n          <tr *ngIf=\"gstFlag=='true'\" style=\"font-family: Arial; font-size: 10px; color: black;\">\n            <td *ngIf=\"lng=='en'\"><b>Place of Supply: </b>{{printTktResp.prsSuplierStateCode}}({{printTktResp.prsSuplierState}})\n              <b>&nbsp;&nbsp;&nbsp;&nbsp;State Code/Name of Supplier : </b> {{printTktResp.gstStateName}}({{printTktResp.gstStateCode}})\n              <div><b>Ticket Printing Time:</b> {{printTktResp.systemPrintTime}} </div>\n              <div *ngFor=\"let msg of userInfoMessage\">\n                <span *ngIf=\"printTktResp.trainOwnerFlag==0 && msg!=undefined && msg!=null && msg!=''\" width=\"25%\" align=\"left\" style=\"color:black;font:11px arial;font-weight: bold;\">\n                  {{msg.message}}\n                </span>\n              </div>\n            </td>\n            <td *ngIf=\"lng=='hi'\"><b>आपूर्ति का स्थान: </b>{{printTktResp.prsSuplierStateCode}}({{printTktResp.prsSuplierState}})\n              <b>&nbsp;&nbsp;&nbsp;&nbsp;आपूर्तिकर्ता का राज्य कोड / नाम : </b> {{printTktResp.gstStateName}}({{printTktResp.gstStateCode}})\n              <div><b>टिकट मुद्रण का समय:</b> {{printTktResp.systemPrintTime}} </div>\n              <div *ngFor=\"let msg of userInfoMessage\">\n                <span *ngIf=\"printTktResp.trainOwnerFlag==0 && msg!=undefined && msg!=null && msg!=''\" width=\"25%\" align=\"left\" style=\"color:black;font:11px arial;font-weight: bold;\">\n                  {{msg.message}}\n                </span>\n                </div>\n            </td>\n            <td *ngIf=\"printTktResp.userGroupId == 82\">\n                  <qr-code [size]=\"250\" [value]=\"printTktResp.qrCodeText\" style=\" margin-left: -135px;\"></qr-code>\n            </td>\n          </tr>\n\n          <tr *ngIf=\"pledge\">\n            <td align=\"center\" colspan=\"3\" style=\"font-size: 13px;color:black;padding-top:1px;padding-bottom:1px;\"><b><u>{{langService.lang?.bookingConfMsg5}} <a (click)=\"pledgeTaken()\" class=\"pledge\">Click here</a> {{langService.lang?.bookingConfMsg8}}</u></b></td>\n          </tr>\n\n          <tr *ngIf=\"iframeVisible\">\n            <td colspan=\"12\" align=\"center\" style=\"padding-top:15px;padding-bottom:3px;\">\n              <img style=\"right: 60px;  padding-top: 3px; margin-left: 14px; margin-right: 14px; \" \n              src=\"http://contents.irctc.co.in/en/ers4.jpeg\" \n              scrolling=\"no\" width=\"1020\" height=\"90\">\n            </td>\n          </tr>  \n\n       <!--    <tr *ngIf=\"iframeVisible\">\n            <td>\n              <div id=\"TktAdID\" align=\"center\">\n              <table width=\"100%\">\n                <tr>\n                  <td *ngIf=\"lng=='en'\" align=\"right\">\n                    <a href=\"javascript:void(0)\" (click)=\"hideIframe()\" id=\"link1\" style=\"font-size: 1.0rem;font-family: Arial,Verdana,sans-serif;\">Print ERS Without Advertisements [X]</a>\n                  </td>\n                  <td *ngIf=\"lng=='hi'\" align=\"right\">\n                    <a href=\"javascript:void(0)\" (click)=\"hideIframe()\" id=\"link1\" style=\"font-size: 1.0rem;font-family: Arial,Verdana,sans-serif;\">बिना विज्ञापन वाली आरक्षणपर्ची छापे ! [X]</a>\n                  </td>\n                </tr>\n              </table>\n              </div>\n            </td>\n          </tr> -->\n\n\n          <tr style=\"padding-top:10px;font-family: Arial; font-size: 1.1rem; color: black;padding-bottom:4px;\">\n            <td *ngIf=\"lng=='en'\"><b>IMPORTANT :</b></td>\n            <td *ngIf=\"lng=='hi'\"><b>महत्वपूर्ण सूचनाऐँ  :</b></td>\n          </tr>\n         <!--  <tr *ngIf=\"printTktResp.covidTrainFlag == 'true'\">\n            <td style=\"border: 2px solid;\">\n              <div>\n                <span *ngIf=\"lng=='en'\"><b>As the booking is done in Special Train under COVID-19. Please check Salient features available in Alerts section on\n                    IRCTC eTicketing website or <a href=\"http://contents.irctc.co.in/en/SalientFeaturesCovidSpclTrains.pdf\"\n                      id=\"link\" target=\"_blank\">Click here</a></b></span>\n                <span *ngIf=\"lng=='hi'\"><b>यह बुकिंग COVID-19 के तहत स्पेशल ट्रेन में के गई है। कृपया IRCTC की ई-टिकटिंग वेबसाइट पर उपलब्ध अलर्ट सेक्शन में मुख्य\n                    विशेषताएं देखें अथवा <a href=\"http://contents.irctc.co.in/en/SalientFeaturesCovidSpclTrains.pdf\"\n                      id=\"link\" target=\"_blank\"> यहाँ क्लिक करें |</a></b></span>\n              </div>\n            </td>\n          </tr> -->\n          <tr>\n            <td>\n              <div style=\"vertical-align:top;\">\n                <table style=\"font-family:Arial;font-size: 10px;color:black;\" border=\"0\" width=\"100%\" align=\"center\">\n                  <tr *ngFor=\"let msg of bottomTktMsg; let i = index;\">\n                    <td style=\"padding-bottom:3px;padding-right:3px;padding-left:5px;font-family:Arial;font-size: 11px;color:black;\">\n                       <div innerHtml=\"{{i+1}}.{{msg}}\"></div>\n                    </td>\n                  </tr>\n                  <tr *ngIf=\"printTktResp.trainOwnerFlag==1 && lng=='en'\">\n                    <td style=\"padding-bottom:3px;padding-right:3px;padding-left:5px;font-family:Arial;font-size: 11px;color:black;\">\n                      26.For Travel Insurance claim intimation in IRCTC Tejas Train, access Liberty Insurance’s link at: <a href=\"https://www.libertyinsurance.in/products/Travel/IRCTC/Claims\" id=\"link1\"  target=\"_blank\" style=\"font-size: 1.1rem;font-family: Arial,Verdana,sans-serif; \">https://www.libertyinsurance.in/products/Travel/IRCTC/Claims</a> OR call -1800 – 266 - 5844 OR E-mail at irctcclaims@libertyinsurance.in\n                    </td>\n                  </tr>\n                  <tr *ngIf=\"printTktResp.trainOwnerFlag==1 && lng=='hi'\">\n                    <td style=\"padding-bottom:3px;padding-right:3px;padding-left:5px;font-family:Arial;font-size: 11px;color:black;\">\n                      26.आईआरसीटीसी तेजस ट्रेन में ट्रैवल इंश्योरेंस क्लेम इंटिमेशन के लिए, लिबर्टी इंश्योरेंस लिंक पर पहुंचें: <a href=\"https://www.libertyinsurance.in/products/Travel/IRCTC/Claims\" id=\"link1\"  target=\"_blank\" style=\"font-size: 1.1rem;font-family: Arial,Verdana,sans-serif; \">https://www.libertyinsurance.in/products/Travel/IRCTC/Claims</a> या कॉल करें -1800 - 266 - 5844 या ई-मेल करें irctcclaims@libertyinsurance.in\n                    </td>\n                  </tr>\n                </table>\n              </div>\n            </td>\n          </tr>\n\n          <tr>\n            <td *ngIf=\"lng=='en'\" align=\"left\">\n              <a href=\"https://play.google.com/store/apps/details?id=com.cris.utsmobile&hl=en\" id=\"link1\" style=\"font-size: 1.1rem;font-family: Arial,Verdana,sans-serif;\">Download the UTS APP for Unreserved Ticket booking.</a>\n            </td>\n            <td *ngIf=\"lng=='hi'\" align=\"left\">\n              <a href=\"https://play.google.com/store/apps/details?id=com.cris.utsmobile&hl=en\" id=\"link1\" style=\"font-size: 1.1rem;font-family: Arial,Verdana,sans-serif;\">अनारक्षित टिकट बुकिंग के लिए यूटीएस एप्प डाउनलोड करें !</a>\n            </td>\n          </tr>\n\n          <!-- start agent messages -->\n          <tr *ngIf=\"lng=='en' && printTktResp.userGroupTypeIdFlag=='false'\">\n            <td>\n              <table style=\"padding-bottom:3px;padding-right:3px;padding-left:5px;font-family:Arial;font-size: 11px;color:black;\">\n                  <tr>\n                    <td style=\"font-size: 11px; font-weight: bold;\" align=\"center\"><b>General Rules/ Information for E-ticket passengers</b></td>\n                  </tr>\n                  <tr><td>a) Status of E-tickets after Chart preparation :</td>\n                  </tr>\n                  <tr><td>\n                      <ol>\n                      <li value=\"1\">Confirmed E ticket - E-ticket where all passengers are confirmed.</li>\n                      <li>Partially waitlist/Confirmed/RAC E ticket - E-ticket where some passengers are confirmed/ RAC and other wait-listed.</li>\n                      <li>Fully waitlisted E tickets - E-ticket where all passengers are waitlisted.</li>\n                      </ol>\n                      </td>\n                  </tr>\n                      \n                  <tr><td>b) Authorization to board the train :</td>\n                  </tr>\n                  <tr><td>\n                      <ol>\n                      <li value=\"1\">Confirmed E ticket - E-ticket where all passengers are confirmed.</li>\n                      <li>Name of passengers with Partially Waitlisted /Confirmed/RAC will appear on the chart (including the waitlisted passengers in the partially waitlist ticket).</li>\n                      </ol>\n                      </td>\n                  </tr>\n                      \n                  <tr><td>c) Cancellation and refund rules :</td>\n                  </tr>\n                  <tr><td>\n                      <ol>\n                      <li value=\"1\">Confirmed E-ticket before chart preparation : E-ticket can be cancelled online and the amount will be refunded electronically to the respective agent's account used for booking.</li>\n                      <li>Confirmed E-ticket after chart preparation : Cancellation/ refund request received after preparation of chart are forwarded by IRCTC to concerned railway for manual\n                      processing. Refund amount received from concerned railway will be credited back to the respective agent's account used for booking by IRCTC.</li>\n                      <li>Partially waitlisted E-ticket before chart preparation : E-ticket can be cancelled online and the amount will be refunded electronically to the respective agent's account\n                      used for booking.</li>\n                      <li>Partially waitlisted E-ticket after chart preparation : E-ticket cannot be cancelled online after chart preparation. Partially waitlisted e-ticket holder where part passengers\n                      have travelled and want to claim refund for passengers who have not travelled is required to send the original certificate issued by TTE / Conductor in lieu of the same to\n                      IRCTC after filing online refund request through the respective agent . The partially waitlisted e-ticket holder where no passengers have travelled and wants to claim refund is\n                      required to file online refund request through the respective agent . It would then be forwarded to concerned railway and refund received from Railways would be credited\n                      back electronically to the respective agent's account used for booking by IRCTC.</li>\n                      <li>If the ticket is partially waitlisted/ Confirmed/ RAC at remote location chart preparation then E-ticket cannot be cancelled online. It is required to file refund request online\n                      for claiming refund through the respective agent . It would then be processed offline and refund received from Railways would be credited back electronically to the\n                      respective agent's account used for booking by IRCTC.</li>\n                      </ol>\n                      </td>\n                    </tr>\n                      \n                    <tr><td>d) Dynamic fare pricing:</td>\n                    </tr>\n                    <tr><td>Dynamic fare stands for the fare component which may be increased with the subsequent bookings in Premium special train.</td>\n                    </tr>\n                    <tr><td>\n                      <ol>\n                      <li value=\"1\">No concession shall be applicable on this train.</li>\n                      <li>Only end to end, GN quota bookings will be applicable.</li>\n                      <li>Cancellation is not allowed. However, ticket can be cancelled and full refund is admissible if the train is cancelled by Indian Railways.</li>\n                      <li>For any reason, if berth cannot be given to passenger by Indian Railways on booked PNR, full refund shall be granted to the passenger through TDR.</li>\n                      <li>Agents will not be allowed to book tickets in trains with dynamic pricing.</li>\n                      </ol>\n                      </td>\n                    </tr>\n                      \n                    <tr><td>e) If train is cancelled, E-ticket can be cancelled online up to 3 days from the date of departure of the train through the respective agent's account used for booking .</td>\n                    </tr>\n                       \n                    <tr><td>f) Bank charges, if any, will be payable extra.(For details of bank charges, kindly refer to Terms and Conditions on www.irctc.co.in)</td>\n                    </tr>\n                      \n                    <tr><td>g) The Compartment/ Cabin/ Coupe/ Coach/ Seat numbers for first AC and First class will be allotted at the time of chart preparation.</td>\n                    </tr>\n                       \n                    <tr><td>h) The customer who has opted for auto-up gradation during booking of his/her e-ticket is requested to check the up-gradation chart before boarding the train.</td>\n                    </tr>\n                      \n                    <tr><td *ngIf=\"printTktResp.travelAgentServChrgFlag==2 && pmfAgentFlage=='false'\">i) IRCTC Service Charges (Incl. of GST) (not refundable):</td>\n                    </tr>\n                    <tr><td *ngIf=\"printTktResp.travelAgentServChrgFlag==2 && pmfAgentFlage=='false'\">\n                      <table><tr>\n                      <td></td><td></td><td></td><td>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Class &nbsp;&nbsp;&nbsp;</td><td></td><td></td><td></td><td></td><td></td><td></td><td>Service Charges</td></tr><tr>\n                      <td></td><td></td><td></td><td>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; SL/2S &nbsp;&nbsp;&nbsp;</td><td></td><td></td><td></td><td></td><td></td><td></td><td>{{printTktResp.irctcServiceSlCharge}}</td></tr><tr>\n                      <td></td><td></td><td></td><td>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 1AC/2AC/3AC/CC/3E/FC &nbsp;&nbsp;&nbsp;</td><td></td><td></td><td></td><td></td><td></td><td></td><td>{{printTktResp.irctcServiceAcCharge}}</td>\n                      </tr>\n                      </table>\n                      </td>\n                    </tr>\n                      \n                    <tr><td *ngIf=\"printTktResp.travelAgentServChrgFlag==2 && pmfAgentFlage=='false'\">j) Agent service charge (inclusive of GST)(not refundable):\n                      </td>\n                    </tr>\n\n                    <tr><td *ngIf=\"printTktResp.travelAgentServChrgFlag==2 && pmfAgentFlage=='false'\">\n                      <table><tr>\n                      <td></td><td></td><td></td><td *ngIf=\"printTktResp.travelAgentServChrgFlag==2\">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Class &nbsp;&nbsp;&nbsp;</td><td></td><td></td><td></td><td></td><td></td><td></td><td *ngIf=\"printTktResp.travelAgentServChrgFlag==2\">Service Charges</td></tr><tr>\n                      <td></td><td></td><td></td><td *ngIf=\"printTktResp.travelAgentServChrgFlag==2\">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; SL/2S &nbsp;&nbsp;&nbsp;</td><td></td><td></td><td></td><td></td><td></td><td></td><td *ngIf=\"printTktResp.travelAgentServChrgFlag==2 && printTktResp.gsaFlag=='false' \">{{printTktResp.taSlCharge}}\"</td></tr><tr>\n                      <td></td><td></td><td></td><td *ngIf=\"printTktResp.travelAgentServChrgFlag==2\">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 1AC/2AC/3AC/CC/3E/FC &nbsp;&nbsp;&nbsp;</td><td></td><td></td><td></td><td></td><td></td><td></td><td *ngIf=\"printTktResp.travelAgentServChrgFlag==2 && printTktResp.gsaFlag=='false'\">{{printTktResp.taAcCharge}} As per the prevalent charges in concerned country</td>\n                      </tr></table>\n                    </td></tr>\n                       \n                    <tr><td style=\"font-size: 12px; font-weight: bold;\" align=\"center\">Thank you for using IRCTC's Services.</td>\n                    </tr>\n              </table>\n            </td>          \n          </tr>\n          <!-- end agent messages -->\n        </table>\n        </td>\n    </tr>\n\n  </table>\n <!--  <div *ngIf=\"printTktResp.trainOwnerFlag==0 && displayCateringFlag =='true'\"[innerHTML]=\"printTktResp.printCateringCharges\" style=\"padding-top:10px;padding-bottom:5px;\">\n  </div> -->\n\n  <!--    <div  *ngIf=\"lng=='en'\" style=\"padding-top:10px;padding-bottom:5px; font-weight:bold\">\n      No charges for food or drinks is being collected with fare. As passenger service, provision for Ready to Eat food, Packed branded food and drinks is being made on trains/ stations, on payment basis. Passengers may purchase desired available items at MRP/ approved rates.\n    </div>\n<div  *ngIf=\"lng=='hi'\" style=\"padding-top:10px;padding-bottom:5px;font-weight:bold\">\n  भोजन या पेय का कोई शुल्क किराए के साथ नहीं लिया जा रहा है। यात्री सेवा के रूप में ट्रेन/स्टेशनों पर, रेडी टू ईट फूड, पैक्ड ब्रांडेड भोजन और पेय का प्रावधान भुगतान के आधार पर किया जा रहा है। यात्री एम.आर.पी/अनुमोदित दरों पर वांछित उपलब्ध सामान खरीद सकते हैं।\n</div>  -->\n\n  <table width=\"99%\" align=\"center\" cellpadding=\"0\" cellspacing=\"0\" border=\"1\" style=\" color: black; border-style: solid; border-width: 1px;\">\n    <tr *ngIf=\"printTktResp.fundmntlDuty == 'true' && printTktResp.covidTrainFlag != 'true'\">\n      <td>\n        <div style=\"vertical-align:top;\"> \n          <table style=\"font-family:Arial;font-size: 10px;color:black;\" border=\"0\" width=\"100%\" align=\"center\">\n            <tr>\n              <div *ngIf=\"lng=='en'\" width=\"100%\" colspan=\"2\" align=\"center\" style=\"font-family:Arial;font-size:20px\" ><h2>Fundamental Duties</h2></div>\n              <div *ngIf=\"lng=='hi'\" width=\"100%\" colspan=\"2\" align=\"center\" style=\"font-family:Arial;font-size:20px\" ><h2>मूल कर्तव्य  </h2></div>\n            </tr>\n            <tr>\n              <div *ngIf=\"lng=='en'\" width=\"100%\" colspan=\"2\" align=\"left\" style=\"font-family:Arial;font-size:12px\" >It shall be the duty of every citizen of India-</div>\n              <div *ngIf=\"lng=='hi'\" width=\"100%\" colspan=\"2\" align=\"left\" style=\"font-family:Arial;font-size:12px\" >भारत के प्रत्येक नागरिक का यह कर्तव्य होगा कि वह—</div>\n            </tr>\n            <tr *ngFor=\"let msg of fundmntlTktMsg; let i = index;\">\n              <td style=\"padding-bottom:3px;padding-right:3px;padding-left:5px;font-family:Arial;font-size: 11px;color:black;\">\n                  <div innerHtml=\"{{i+1}}. {{msg}}\"></div>\n              </td>\n            </tr>\n          </table>\n        </div>\n      </td>\n    </tr>\n  </table>\n\n  <table width=\"99%\" align=\"center\" cellpadding=\"0\" cellspacing=\"0\" border=\"1\" style=\" color: black; border-style: solid; border-width: 1px;\">\n    <tr>\n      <td>\n        <div style=\"vertical-align:top;\"> \n          <table style=\"font-family:Arial;font-size: 10px;color:black;\" border=\"0\" width=\"100%\" align=\"center\">\n            <tr>\n              <div *ngIf=\"lng=='en'\" width=\"100%\" colspan=\"2\" align=\"center\" style=\"font-family:Arial;font-size:20px\" ><h2>Information on Covid-19 Vaccination Programme</h2></div>\n              <div *ngIf=\"lng=='hi'\" width=\"100%\" colspan=\"2\" align=\"center\" style=\"font-family:Arial;font-size:20px\" ><h2>कोविड-19 टीकाकरण कार्यक्रम पर जानकारी</h2></div>\n            </tr>\n            <tr>\n              <div *ngIf=\"lng=='en'\" width=\"100%\" colspan=\"2\" align=\"left\" style=\"font-family:Arial;font-size:12px;color:black;\" >1.COVID-19 Vaccine is an injectable vaccine and is a safe vaccine.</div>\n              <div *ngIf=\"lng=='hi'\" width=\"100%\" colspan=\"2\" align=\"left\" style=\"font-family:Arial;font-size:12px;color:black;\" >1.कोविड-19 वैक्सीन एक इंजेक्शन वैक्सीन है और यह एक सुरक्षित वैक्सीन है। </div>\n            </tr>\n            <tr>\n              <div *ngIf=\"lng=='en'\" width=\"100%\" colspan=\"2\" align=\"left\" style=\"font-family:Arial;font-size:12px;color:black;\" >2.COVID-19 vaccine will help to protect you, your family and communities from the Coronavirus. </div>\n              <div *ngIf=\"lng=='hi'\" width=\"100%\" colspan=\"2\" align=\"left\" style=\"font-family:Arial;font-size:12px;color:black;\" >2.कोविड-19 वैक्सीन आपको, आपके परिवार और समुदायों को कोरोनावायरस से बचाने में मदद करेगा।  </div>\n            </tr>\n            <tr>\n              <div *ngIf=\"lng=='en'\" width=\"100%\" colspan=\"2\" align=\"left\" style=\"font-family:Arial;font-size:12px;color:black;\" >3.COVID-19 vaccine provides immunity against the Coronavirus disease and reduces the risk of contracting the COVID-19 infection. </div>\n              <div *ngIf=\"lng=='hi'\" width=\"100%\" colspan=\"2\" align=\"left\" style=\"font-family:Arial;font-size:12px;color:black;\" >3.कोविड-19 वैक्सीन कोरोनावायरस बीमारी के खिलाफ प्रतिरक्षा प्रदान करता है और कोविड-19 संक्रमण के होने  के जोखिम को कम करता है।  </div>\n            </tr>\n            <tr>\n              <div *ngIf=\"lng=='en'\" width=\"100%\" colspan=\"2\" align=\"left\" style=\"font-family:Arial;font-size:12px;color:black;\" >4.It is true that the COVID-19 vaccine has been developed in a short time frame, but it has undergone the protocols of various levels of trials, following due scientific processes and after due diligence.</div>\n              <div *ngIf=\"lng=='hi'\" width=\"100%\" colspan=\"2\" align=\"left\" style=\"font-family:Arial;font-size:12px;color:black;\" >4.यह सही है कि कोविड-19 वैक्सीन को कम समय के फ्रेम में विकसित किया गया है, लेकिन इसने विभिन्न स्तरों के परीक्षणों के प्रोटोकॉल का पालन किया है, जो उचित वैज्ञानिक प्रक्रियाओं और उचित परिश्रम के बाद विकसित किया गया है।  </div>\n            </tr>\n            <tr>\n              <div *ngIf=\"lng=='en'\" width=\"100%\" colspan=\"2\" align=\"left\" style=\"font-family:Arial;font-size:12px;color:black;\" >5..Only registered beneficiaries will be vaccinate for COVID-19 vaccine. All beneficiaries have to be registered online. There will be no on-spot registrations at the vaccination site. </div>\n              <div *ngIf=\"lng=='hi'\" width=\"100%\" colspan=\"2\" align=\"left\" style=\"font-family:Arial;font-size:12px;color:black;\" >5.कोविड-19 वैक्सीन के लिए केवल पंजीकृत लाभार्थियों को ही टीका लगाया जाएगा। सभी लाभार्थियों को ऑनलाइन पंजीकरण करना होगा। टीकाकरण स्थल पर कोई ऑन-स्पॉट पंजीकरण नहीं होगा।  </div>\n            </tr>\n            <tr>\n              <div *ngIf=\"lng=='en'\" width=\"100%\" colspan=\"2\" align=\"left\" style=\"font-family:Arial;font-size:12px;color:black;\" >6.Once you have registered yourself, you will receive the vaccine in the selected location near your home.</div>\n              <div *ngIf=\"lng=='hi'\" width=\"100%\" colspan=\"2\" align=\"left\" style=\"font-family:Arial;font-size:12px\" >6.एक बार जब आप खुद को पंजीकृत कर लेते हैं, तो आप अपने घर के पास चयनित स्थान पर टीका प्राप्त करेंगे।  </div>\n            </tr>\n            <tr>\n              <div *ngIf=\"lng=='en'\" width=\"100%\" colspan=\"2\" align=\"left\" style=\"font-family:Arial;font-size:12px;color:black;\" >7.All safety protocols including COVID Appropriate Behaviour (CAB) will be strictly followed in the vaccination centers and sites while providing the vaccine. .</div>\n              <div *ngIf=\"lng=='hi'\" width=\"100%\" colspan=\"2\" align=\"left\" style=\"font-family:Arial;font-size:12px;color:black;\" >7.टीका प्रदान करते समय टीकाकरण केंद्रों और साइटों में कोविड उपयुक्त व्यवहार (CAB) सहित सभी सुरक्षा प्रोटोकॉल का सख्ती से पालन किया जाएगा।  </div>\n            </tr>\n            <tr>\n              <div *ngIf=\"lng=='en'\" width=\"100%\" colspan=\"2\" align=\"left\" style=\"font-family:Arial;font-size:12px;color:black;\" >8.While vaccines are now available for some people in the initial phase, it is critical that all of us continue to follow all the COVID Appropriate Behaviour, like use of masks, frequent handwashing with soaps and sanitizers, and maintaining physical distance of at least 6 feet (Do Gaj ki Doori).</div>\n              <div *ngIf=\"lng=='hi'\" width=\"100%\" colspan=\"2\" align=\"left\" style=\"font-family:Arial;font-size:12px;color:black;\" >8.प्रारंभिक चरण में अभी कुछ लोगों के लिए टीके उपलब्ध हैं, लेकिन यह महत्वपूर्ण है कि हम सभी कोविड उपयुक्त व्यवहार का पालन करते रहें, जैसे मास्क का उपयोग, साबुन और सैनिटाइटर के साथ लगातार हाथ धोना, और कम से कम 6 फीट की शारीरिक दूरी बनाए रखना (दो गज की दुरी)।  </div>\n            </tr>\n         \n          </table>\n        </div>\n      </td>\n    </tr>\n  </table>\n\n\n  <table width=\"99%\" align=\"center\" cellpadding=\"0\" cellspacing=\"0\" border=\"1\" style=\" color: black; border-style: solid; border-width: 1px;\">\n    <tr>\n      <td>\n        <div style=\"vertical-align:top;\"> \n          <table style=\"font-family:Arial;font-size: 10px;color:black;\" border=\"0\" width=\"100%\" align=\"center\">\n            <tr>\n              <div *ngIf=\"lng=='en'\" width=\"100%\" colspan=\"2\" align=\"center\" style=\"font-family:Arial;font-size:20px\" ><h2>ONE NATION ONE RATION CARD</h2></div>\n              <div *ngIf=\"lng=='hi'\" width=\"100%\" colspan=\"2\" align=\"center\" style=\"font-family:Arial;font-size:20px\" ><h2>एक राष्ट्र एक राशन कार्ड</h2></div>\n            </tr>\n            <tr>\n              <div *ngIf=\"lng=='en'\" width=\"100%\" colspan=\"2\" align=\"left\" style=\"font-family:Arial;font-size:12px;color:black;\" >Under this scheme, migrant NFSA beneficiaries can get their foodgrains from any Fair Price Shop in the country through their existing ration cards. Currently this facility is available in 32 States/UTs.</div>\n              <div *ngIf=\"lng=='hi'\" width=\"100%\" colspan=\"2\" align=\"left\" style=\"font-family:Arial;font-size:12px;color:black;\" >इस योजना के अंतर्गत प्रवासी एनएफएसए लाभार्थी अपने मौजूदा राशन कार्ड से ही देश की किसी भी उचित दर दुकान से अपना खाद्यान्न प्राप्त कर सकते हैं । वर्तमान में यह सुविधा 32 राज्यों / संघ राज्य क्षेत्रों में उपलब्ध है। </div>\n            </tr>\n        \n            <td  align=\"center\" width=\"2%\"><img appLazyLoad rel=\"preload\" src=\"./tkt/assets/images/Beti bachao beti padhao.png\" /></td>\n         \n          </table>\n        </div>\n      </td>\n    </tr>\n  </table>\n  \n  <tr *ngIf=\"iframeVisible\" class=\"col-lg-12 col-md-12 col-sm-12 col-xs-12\">\n    <td  class=\"col-lg-12 col-md-12 col-sm-12 col-xs-12\" >\n      <div id=\"TktAdID\" align=\"center\" >\n      <table width=\"100%\">\n        <tr>\n          <td *ngIf=\"lng=='en'\" align=\"right\">\n            <a href=\"javascript:void(0)\" (click)=\"hideIframe()\" id=\"link1\" style=\"font-size: 1.0rem;font-family: Arial,Verdana,sans-serif;\">Print ERS Without Advertisements [X]</a>\n          </td>\n          <td *ngIf=\"lng=='hi'\" align=\"right\">\n            <a href=\"javascript:void(0)\" (click)=\"hideIframe()\" id=\"link1\" style=\"font-size: 1.0rem;font-family: Arial,Verdana,sans-serif;\">बिना विज्ञापन वाली आरक्षणपर्ची छापे ! [X]</a>\n          </td>\n        </tr>\n      </table>\n      </div>\n    </td>\n  </tr>\n\n</div>\n<table *ngIf=\"!printPopup\" width=\"10%\" align=\"center\" cellpadding=\"0\" cellspacing=\"0\" style=\"margin-top: 20px;\">\n  <tr>\n    <td align=\"center\"><input type=\"button\" class=\"train_Search\" style=\"padding: 5px 10px; font-weight: bold; font-size: 24px;\" value=\"Print\" (click)=\"printTicket()\" /></td>\n    <td align=\"center\"><input type=\"button\" class=\"train_Search\" style=\"padding: 5px 10px; font-weight: bold; font-size: 24px;\" value=\"Reset\" (click)=\"printPopup = true\" />\n    </td>\n  </tr>\n</table>\n");

/***/ }),

/***/ "./node_modules/tslib/tslib.es6.js":
/*!*****************************************!*\
  !*** ./node_modules/tslib/tslib.es6.js ***!
  \*****************************************/
/*! exports provided: __extends, __assign, __rest, __decorate, __param, __metadata, __awaiter, __generator, __createBinding, __exportStar, __values, __read, __spread, __spreadArrays, __await, __asyncGenerator, __asyncDelegator, __asyncValues, __makeTemplateObject, __importStar, __importDefault, __classPrivateFieldGet, __classPrivateFieldSet */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__extends", function() { return __extends; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__assign", function() { return __assign; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__rest", function() { return __rest; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__decorate", function() { return __decorate; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__param", function() { return __param; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__metadata", function() { return __metadata; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__awaiter", function() { return __awaiter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__generator", function() { return __generator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__createBinding", function() { return __createBinding; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__exportStar", function() { return __exportStar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__values", function() { return __values; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__read", function() { return __read; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__spread", function() { return __spread; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__spreadArrays", function() { return __spreadArrays; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__await", function() { return __await; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncGenerator", function() { return __asyncGenerator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncDelegator", function() { return __asyncDelegator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncValues", function() { return __asyncValues; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__makeTemplateObject", function() { return __makeTemplateObject; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__importStar", function() { return __importStar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__importDefault", function() { return __importDefault; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__classPrivateFieldGet", function() { return __classPrivateFieldGet; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__classPrivateFieldSet", function() { return __classPrivateFieldSet; });
/*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */
/* global Reflect, Promise */

var extendStatics = function(d, b) {
    extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return extendStatics(d, b);
};

function __extends(d, b) {
    extendStatics(d, b);
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
}

var __assign = function() {
    __assign = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
        return t;
    }
    return __assign.apply(this, arguments);
}

function __rest(s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
}

function __decorate(decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
}

function __param(paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
}

function __metadata(metadataKey, metadataValue) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(metadataKey, metadataValue);
}

function __awaiter(thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
}

function __generator(thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
}

function __createBinding(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}

function __exportStar(m, exports) {
    for (var p in m) if (p !== "default" && !exports.hasOwnProperty(p)) exports[p] = m[p];
}

function __values(o) {
    var s = typeof Symbol === "function" && Symbol.iterator, m = s && o[s], i = 0;
    if (m) return m.call(o);
    if (o && typeof o.length === "number") return {
        next: function () {
            if (o && i >= o.length) o = void 0;
            return { value: o && o[i++], done: !o };
        }
    };
    throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
}

function __read(o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    }
    catch (error) { e = { error: error }; }
    finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        }
        finally { if (e) throw e.error; }
    }
    return ar;
}

function __spread() {
    for (var ar = [], i = 0; i < arguments.length; i++)
        ar = ar.concat(__read(arguments[i]));
    return ar;
}

function __spreadArrays() {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};

function __await(v) {
    return this instanceof __await ? (this.v = v, this) : new __await(v);
}

function __asyncGenerator(thisArg, _arguments, generator) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var g = generator.apply(thisArg, _arguments || []), i, q = [];
    return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i;
    function verb(n) { if (g[n]) i[n] = function (v) { return new Promise(function (a, b) { q.push([n, v, a, b]) > 1 || resume(n, v); }); }; }
    function resume(n, v) { try { step(g[n](v)); } catch (e) { settle(q[0][3], e); } }
    function step(r) { r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r); }
    function fulfill(value) { resume("next", value); }
    function reject(value) { resume("throw", value); }
    function settle(f, v) { if (f(v), q.shift(), q.length) resume(q[0][0], q[0][1]); }
}

function __asyncDelegator(o) {
    var i, p;
    return i = {}, verb("next"), verb("throw", function (e) { throw e; }), verb("return"), i[Symbol.iterator] = function () { return this; }, i;
    function verb(n, f) { i[n] = o[n] ? function (v) { return (p = !p) ? { value: __await(o[n](v)), done: n === "return" } : f ? f(v) : v; } : f; }
}

function __asyncValues(o) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var m = o[Symbol.asyncIterator], i;
    return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i);
    function verb(n) { i[n] = o[n] && function (v) { return new Promise(function (resolve, reject) { v = o[n](v), settle(resolve, reject, v.done, v.value); }); }; }
    function settle(resolve, reject, d, v) { Promise.resolve(v).then(function(v) { resolve({ value: v, done: d }); }, reject); }
}

function __makeTemplateObject(cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};

function __importStar(mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result.default = mod;
    return result;
}

function __importDefault(mod) {
    return (mod && mod.__esModule) ? mod : { default: mod };
}

function __classPrivateFieldGet(receiver, privateMap) {
    if (!privateMap.has(receiver)) {
        throw new TypeError("attempted to get private field on non-instance");
    }
    return privateMap.get(receiver);
}

function __classPrivateFieldSet(receiver, privateMap, value) {
    if (!privateMap.has(receiver)) {
        throw new TypeError("attempted to set private field on non-instance");
    }
    privateMap.set(receiver, value);
    return value;
}


/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIn0= */");

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let AppComponent = class AppComponent {
    constructor() {
        this.title = 'print-ticket';
        this.input = true;
        this.lng = 'en';
        this.iframeVisible = true;
        this.enableFood = 'false';
        this.concessionOption = 'false';
        this.bedrollChoice = 'false';
        this.pmfAgentFlage = 'false';
        this.agentUserFlag = false;
        this.alertFlag = false;
        this.printPopup = true;
        this.displayMpPhoto = 'false';
    }
    ngOnInit() {
    }
    // @HostListener('window:keydown', ['$event'])
    // keyboardInput(event: any) {
    //   event.preventDefault();
    //   event.stopPropagation();
    // }
    setFlag() {
        this.scheduleDepartureFlag = String(this.printTktResp.scheduleDepartureFlag);
        this.scheduleArrivalFlag = String(this.printTktResp.scheduleArrivalFlag);
        this.travelAgentFlag = String(this.printTktResp.travelAgentFlag);
        this.gstFlag = String(this.printTktResp.gstFlag);
        this.ecsFlag = String(this.printTktResp.ecsFlag);
        this.tatkalIDChoice = String(this.printTktResp.tatkalIDChoice);
        this.gstDisplay = String(this.printTktResp.gstDisplay);
        this.userGroupTypeIdFlag = String(this.printTktResp.userGroupTypeIdFlag);
        this.codPaymentMsgFlag = String(this.printTktResp.codPaymentMsgFlag);
        this.pmfAgentFlage = String(this.printTktResp.pmfAgentFlage);
        this.displayCateringFlag = String(this.printTktResp.displayCateringFlag);
        //this.gstFlag='true';
    }
    get informationMessages() {
        return Array.isArray(this.printTktResp.ticketLegendMessage) ?
            this.printTktResp.ticketLegendMessage : Array.of(this.printTktResp.ticketLegendMessage);
    }
    get psgnDtlList() {
        return Array.isArray(this.printTktResp.passengerList) ?
            this.printTktResp.passengerList : Array.of(this.printTktResp.passengerList);
    }
    get topTktMsg() {
        return Array.isArray(this.printTktResp.topTicketMessage) ?
            this.printTktResp.topTicketMessage : Array.of(this.printTktResp.topTicketMessage);
    }
    get bottomTktMsg() {
        return Array.isArray(this.printTktResp.bottomTicketMessage) ?
            this.printTktResp.bottomTicketMessage : Array.of(this.printTktResp.bottomTicketMessage);
    }
    get fundmntlTktMsg() {
        return Array.isArray(this.printTktResp.fundmntlTicketMessage) ?
            this.printTktResp.fundmntlTicketMessage : Array.of(this.printTktResp.fundmntlTicketMessage);
    }
    get fareInfoData() {
        return Array.isArray(this.printTktResp.fareInfoData) ?
            this.printTktResp.fareInfoData : Array.of(this.printTktResp.fareInfoData);
    }
    get CancellationRefundData() {
        return Array.isArray(this.printTktResp.cancelFareDetail) ?
            this.printTktResp.cancelFareDetail : Array.of(this.printTktResp.cancelFareDetail);
    }
    processData() {
        this.printTktResp = JSON.parse(this.printTktInput);
        this.printTktInput = '';
        this.printPopup = false;
        //console.log(this.printTktResp);
        this.accommodationStatus = this.printTktResp.accommodationStatus;
        this.passengerList = Array.isArray(this.printTktResp.passengerList) ?
            this.printTktResp.passengerList : Array.of(this.printTktResp.passengerList);
        if (this.printTktResp.concessionOption == 'true') {
            this.concessionOption = 'true';
        }
        if (this.printTktResp.bedrollChoice == 'true') {
            this.bedrollChoice = 'true';
        }
        for (let psgn of this.passengerList) {
            if (psgn.foodChoice !== undefined && psgn.foodChoice != null) {
                this.enableFood = 'true';
                break;
            }
        }
        for (let psgn of this.passengerList) {
            if (psgn.passengerConcession == 'MPPASS' || psgn.passengerConcession == 'EXMP') {
                this.displayMpPhoto = 'true';
                break;
            }
        }
        this.setFlag();
    }
    printTicket() {
        let printContents, popupWin;
        printContents = document.getElementById('print-section').innerHTML;
        popupWin = window.open('', '_blank', 'top=0,left=0,width=1000,height=900');
        popupWin.document.open();
        popupWin.document.write(`
      <html>
        <body onload="window.print()">${printContents}</body>
      </html>`);
        popupWin.document.close();
    }
};
AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-root',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./app.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")).default]
    })
], AppComponent);



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var angular2_qrcode__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! angular2-qrcode */ "./node_modules/angular2-qrcode/lib/angular2-qrcode.js");
/* harmony import */ var _pipe_rupees_in_words_pipe__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./pipe/rupees-in-words.pipe */ "./src/app/pipe/rupees-in-words.pipe.ts");
/* harmony import */ var _pipe_rupees_in_hindi_pipe__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./pipe/rupees-in-hindi.pipe */ "./src/app/pipe/rupees-in-hindi.pipe.ts");
/* harmony import */ var primeng_inputtextarea__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! primeng/inputtextarea */ "./node_modules/primeng/fesm2015/primeng-inputtextarea.js");
/* harmony import */ var primeng_inputtext__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! primeng/inputtext */ "./node_modules/primeng/fesm2015/primeng-inputtext.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");










let AppModule = class AppModule {
};
AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
        declarations: [
            _app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"],
            _pipe_rupees_in_words_pipe__WEBPACK_IMPORTED_MODULE_5__["RupeesInWordsPipe"],
            _pipe_rupees_in_hindi_pipe__WEBPACK_IMPORTED_MODULE_6__["RupeesInHindiPipe"],
        ],
        imports: [
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
            angular2_qrcode__WEBPACK_IMPORTED_MODULE_4__["QRCodeModule"],
            primeng_inputtextarea__WEBPACK_IMPORTED_MODULE_7__["InputTextareaModule"],
            primeng_inputtext__WEBPACK_IMPORTED_MODULE_8__["InputTextModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_9__["FormsModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_9__["ReactiveFormsModule"],
        ],
        providers: [_pipe_rupees_in_words_pipe__WEBPACK_IMPORTED_MODULE_5__["RupeesInWordsPipe"], _pipe_rupees_in_hindi_pipe__WEBPACK_IMPORTED_MODULE_6__["RupeesInHindiPipe"]],
        bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]]
    })
], AppModule);



/***/ }),

/***/ "./src/app/pipe/rupees-in-hindi.pipe.ts":
/*!**********************************************!*\
  !*** ./src/app/pipe/rupees-in-hindi.pipe.ts ***!
  \**********************************************/
/*! exports provided: RupeesInHindiPipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RupeesInHindiPipe", function() { return RupeesInHindiPipe; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let RupeesInHindiPipe = class RupeesInHindiPipe {
    constructor() {
        this.a = ['', 'एक ', 'दो ', 'तीन ', 'चार ', 'पांच ', 'छह ', 'सात ', 'आठ ', 'नौ ',
            'दस ', 'ग्यारह ', 'बारह ', 'तेरह ', 'चौदह ', 'पंद्रह ', 'सोलह ', 'सत्रह ', 'अठारह ', 'उन्नीस ',
            ' बीस', ' इक्कीस', ' बाईस', ' तेईस', ' चौबीस', ' पच्चीस', ' छब्बीस', ' सत्ताईस', ' अट्ठाईस', ' उनतीस',
            ' तीस', ' इकतीस', ' बत्तीस', ' तैंतीस', ' चौंतीस', ' पैंतीस', ' छत्तीस', ' सैंतीस', ' अड़तीस', ' उनतालीस',
            ' चालीस', ' इकतालीस', ' बयालीस', ' तैंतालीस', ' चवालीस', ' पैंतालीस', ' छियालीस', ' सैंतालीस', ' अड़तालीस', ' उनचास',
            ' पचास', ' इक्यावन', ' बावन', ' तिरपन', ' चौवन', ' पचपन', ' छप्पन', ' सत्तावन', ' अट्ठावन', ' उनसठ',
            ' साठ', ' इकसठ', ' बासठ', ' तिरसठ', ' चौंसठ', ' पैंसठ', ' छियासठ', ' सरसठ', ' अड़सठ', ' उनहत्तर',
            ' सत्तर', ' इकहत्तर', ' बहत्तर', ' तिहत्तर', ' चौहत्तर', ' पचहत्तर', ' छिहत्तर', ' सतहत्तर', ' अठहत्तर', ' उनासी',
            ' अस्सी', ' इक्यासी', ' बयासी', ' तिरासी', ' चौरासी', ' पचासी', ' छियासी', ' सत्तासी', ' अट्ठासी', ' नवासी',
            ' नब्बे', ' इक्यानबे', ' बानवे', ' तिरानवे', ' चौरानबे', ' पंचानवे', ' छियानबे', ' सत्तानवे', ' अट्ठानबे', ' निन्यानवे'];
        this.b = ['', '', 'बीस', 'तीस', 'चालीस', 'पचास', 'साठ', 'सत्तर', 'अस्सी', 'नव्वे'];
    }
    transform(value, args) {
        let decimal;
        let fraction;
        let rsInWords;
        if (value.toString().indexOf('.') === -1) {
            decimal = value;
            rsInWords = this.inWords(decimal) + ' रुपये';
        }
        else {
            decimal = value.toString().split('.')[0];
            fraction = value.toString().split('.')[1];
            if (fraction.length == 1) {
                fraction = fraction + "0";
            }
            rsInWords = this.inWords(decimal) + ' रुपये ' + 'तथा ' + this.inWords(fraction) + 'पैसा';
        }
        return rsInWords;
    }
    inWords(num) {
        if (Number(num) === 0) {
            return 'शून्य ';
        }
        if (num.length > 9) {
            return 'बाढ़';
        }
        const n = ('000000000' + num).substr(-9).match(/^(\d{2})(\d{2})(\d{2})(\d{1})(\d{2})$/);
        if (!n) {
            return;
        }
        let str = '';
        str += (Number(n[1]) !== 0) ? (this.a[Number(n[1])] || this.b[n[1][0]] + ' ' + this.a[n[1][1]]) + 'करोड़ ' : '';
        str += (Number(n[2]) !== 0) ? (this.a[Number(n[2])] || this.b[n[2][0]] + ' ' + this.a[n[2][1]]) + 'लाख ' : '';
        str += (Number(n[3]) !== 0) ? (this.a[Number(n[3])] || this.b[n[3][0]] + ' ' + this.a[n[3][1]]) + 'हज़ार ' : '';
        str += (Number(n[4]) !== 0) ? (this.a[Number(n[4])] || this.b[n[4][0]] + ' ' + this.a[n[4][1]]) + 'सौ ' : '';
        str += (Number(n[5]) !== 0) ? ((str !== '') ? '' : '') +
            (this.a[Number(n[5])] || this.b[n[5][0]] + ' ' + this.a[n[5][1]]) + ' ' : '';
        return str;
    }
};
RupeesInHindiPipe = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Pipe"])({
        name: 'rupeesInHindi'
    })
], RupeesInHindiPipe);



/***/ }),

/***/ "./src/app/pipe/rupees-in-words.pipe.ts":
/*!**********************************************!*\
  !*** ./src/app/pipe/rupees-in-words.pipe.ts ***!
  \**********************************************/
/*! exports provided: RupeesInWordsPipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RupeesInWordsPipe", function() { return RupeesInWordsPipe; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let RupeesInWordsPipe = class RupeesInWordsPipe {
    constructor() {
        this.a = ['', 'One ', 'Two ', 'Three ', 'Four ', 'Five ', 'Six ', 'Seven ', 'Eight ', 'Nine ',
            'Ten ', 'Eleven ', 'Twelve ', 'Thirteen ', 'Fourteen ', 'Fifteen ', 'Sixteen ', 'Seventeen ', 'Eighteen ', 'Nineteen '];
        this.b = ['', '', 'Twenty', 'Thirty', 'Forty', 'Fifty', 'Sixty', 'Seventy', 'Eighty', 'Ninety'];
    }
    transform(value, args) {
        let decimal;
        let fraction;
        let rsInWords;
        if (value.toString().indexOf('.') === -1) {
            decimal = value;
            rsInWords = 'Rupees ' + this.inWords(decimal);
        }
        else {
            decimal = value.toString().split('.')[0];
            fraction = value.toString().split('.')[1];
            if (fraction.length == 1) {
                fraction = fraction + "0";
            }
            rsInWords = 'Rupees ' + this.inWords(decimal) + 'and ' + this.inWords(fraction) + 'Paisa';
        }
        return rsInWords;
    }
    inWords(num) {
        if (Number(num) === 0) {
            return 'Zero ';
        }
        if (num.length > 9) {
            return 'overflow';
        }
        const n = ('000000000' + num).substr(-9).match(/^(\d{2})(\d{2})(\d{2})(\d{1})(\d{2})$/);
        if (!n) {
            return;
        }
        let str = '';
        str += (Number(n[1]) !== 0) ? (this.a[Number(n[1])] || this.b[n[1][0]] + ' ' + this.a[n[1][1]]) + 'Crore ' : '';
        str += (Number(n[2]) !== 0) ? (this.a[Number(n[2])] || this.b[n[2][0]] + ' ' + this.a[n[2][1]]) + 'Lakh ' : '';
        str += (Number(n[3]) !== 0) ? (this.a[Number(n[3])] || this.b[n[3][0]] + ' ' + this.a[n[3][1]]) + 'Thousand ' : '';
        str += (Number(n[4]) !== 0) ? (this.a[Number(n[4])] || this.b[n[4][0]] + ' ' + this.a[n[4][1]]) + 'Hundred ' : '';
        str += (Number(n[5]) !== 0) ? ((str !== '') ? '' : '') +
            (this.a[Number(n[5])] || this.b[n[5][0]] + ' ' + this.a[n[5][1]]) + ' ' : '';
        return str;
    }
};
RupeesInWordsPipe = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Pipe"])({
        name: 'rupeesInWords'
    })
], RupeesInWordsPipe);



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

const environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm2015/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");





if (_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_3__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! F:\workspace\print-ticket\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main-es2015.js.map