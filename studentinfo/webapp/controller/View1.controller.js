sap.ui.define([
    "sap/ui/core/mvc/Controller"
], (Controller) => {
    "use strict";

    return Controller.extend("org.inedxit.studentinfo.controller.View1", {
        onInit() {
        },
        onGetDetails() {

            let studata = {
                "studentid": "001",
                "name": "Manikanta",
                "class": "10",
                "section": "A"
            };

            // let jModel = new sap.ui.model.json.JSONModel(studata);
            let jModel = new sap.ui.model.json.JSONModel();
            jModel.setData(studata);
            this.getView().setModel(jModel, "stdModel");
            let sId = this.getView.getModel("stdModel").getProperty("/studentid");
            let sname = this.getView.getModel("stdModel").getProperty("/name");
            let sclass = this.getView.getModel("stdModel").getProperty("/class");
            let ssec = this.getView.getModel("stdModel").getProperty("/section");

            this.getView().byId("stdId").setValue(sId);
            this.getView().byId("stdName").setValue(sname);
            this.getView().byId("stdcla").setValue(sclass);
            this.getView().byId("stdSec").setValue(ssec);
        }
    });
});