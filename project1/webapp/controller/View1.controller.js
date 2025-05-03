sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/m/MessageBox","sap/m/MessageToast"
], (Controller,MessageBox,MessageToast) => {
    "use strict";

    return Controller.extend("project1.controller.View1", {
        onInit() {
        },
        // onAddition() {
        //     let value1=parseInt(this.getView().byId("idVal1").getValue());
        //     let value2=parseInt(this.getView().byId("idVal2").getValue());
        //     let add=value1+value2;


        //     MessageBox.alert("Total of two numbers " + add, {
        //         title: "Alert",                                      // default
        //         onClose: null,                                       // default
        //         styleClass: "",                                      // default
        //         actions: sap.m.MessageBox.Action.OK,                 // default
        //         emphasizedAction: sap.m.MessageBox.Action.OK,        // default
        //         initialFocus: null,                                  // default
        //         textDirection: sap.ui.core.TextDirection.Inherit,    // default
        //         dependentOn: null                                    // default
        //     });

        //     this.getView().byId("idVal1").setValue("");
        //     this.getView().byId("idVal2").setValue("");

        // },
        // onMulitiplication (){
        //     let value1=parseInt(this.getView().byId("idVal1").getValue());
        //     let value2=parseInt(this.getView().byId("idVal2").getValue());
        //     let mul=value1*value2;

        //     MessageBox.show("Multipule of two numbers " + mul, {
        //         icon: sap.m.MessageBox.Icon.NONE,                    // default
        //         title: "",                                           // default
        //         actions: sap.m.MessageBox.Action.OK,                 // default
        //         emphasizedAction: sap.m.MessageBox.Action.OK,        // default
        //         onClose: null,                                       // default
        //         styleClass: "",                                      // default
        //         initialFocus: null,                                  // default
        //         textDirection: sap.ui.core.TextDirection.Inherit,    // default
        //         dependentOn: null                                    // default
        //     });

           
        //     this.getView().byId("idVal1").setValue("");
        //     this.getView().byId("idVal2").setValue("");

        //    // console.log(total);
            
        // }

        onOperation (oEvent){
            let value1 = parseInt(this.getView().byId("idVal1").getValue());
            let value2 = parseInt(this.getView().byId("idVal2").getValue());
            let operation = oEvent.getSource().getText();
            let result;

            switch (operation){
                    case "addition":
                    result = value1+value2
                    this.getView().byId("idVal1").setValue("");
                    this.getView().byId("idVal2").setValue("");
                    break;
                    case "subtraction":
                    result = value1-value2
                    this.getView().byId("idVal1").setValue("");
                    this.getView().byId("idVal2").setValue("");
                    break;
                    case "multiplication":
                    result = value1*value2
                    this.getView().byId("idVal1").setValue("");
                    this.getView().byId("idVal2").setValue("");
                    break;
                    case "division":
                    result = value1/value2
                    this.getView().byId("idVal1").setValue("");
                    this.getView().byId("idVal2").setValue("");
                    break;
                    default:
                        result = "Unknown operation";

            }
            MessageBox.show("The result of two numbers is "     + result);
        }

    });
});