/* global QUnit*/

sap.ui.define([
	"sap/ui/test/Opa5",
	"user_ui/user_ui/test/integration/pages/Common",
	"sap/ui/test/opaQunit",
	"user_ui/user_ui/test/integration/pages/UserForm",
	"user_ui/user_ui/test/integration/navigationJourney"
], function (Opa5, Common) {
	"use strict";
	Opa5.extendConfig({
		arrangements: new Common(),
		viewNamespace: "user_ui.user_ui.view.",
		autoWait: true
	});
});