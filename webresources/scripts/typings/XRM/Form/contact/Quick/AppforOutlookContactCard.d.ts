declare namespace Form.contact.Quick {
  namespace AppforOutlookContactCard {
    namespace Tabs {
      interface tab_1 extends Xrm.SectionCollectionBase {
        get(name: "tab_1_column_1_section_1"): Xrm.PageSection;
        get(name: string): undefined;
        get(): Xrm.PageSection[];
        get(index: number): Xrm.PageSection;
        get(chooser: (item: Xrm.PageSection, index: number) => boolean): Xrm.PageSection[];
      }
    }
    interface Attributes extends Xrm.AttributeCollectionBase {
      get(name: "birthdate"): Xrm.DateAttribute | null;
      get(name: "emailaddress1"): Xrm.Attribute<string> | null;
      get(name: "familystatuscode"): Xrm.OptionSetAttribute<contact_familystatuscode> | null;
      get(name: "firstname"): Xrm.Attribute<string> | null;
      get(name: "industrycode"): Xrm.OptionSetAttribute<number> | null;
      get(name: "jobtitle"): Xrm.Attribute<string>;
      get(name: "lastname"): Xrm.Attribute<string> | null;
      get(name: "middlename"): Xrm.Attribute<string> | null;
      get(name: "mobilephone"): Xrm.Attribute<string>;
      get(name: "name"): Xrm.Attribute<string> | null;
      get(name: "parentaccountid"): Xrm.LookupAttribute<"account"> | null;
      get(name: "spousesname"): Xrm.Attribute<string> | null;
      get(name: "telephone1"): Xrm.Attribute<string>;
      get(name: "websiteurl"): Xrm.Attribute<string> | null;
      get(name: string): undefined;
      get(): Xrm.Attribute<any>[];
      get(index: number): Xrm.Attribute<any>;
      get(chooser: (item: Xrm.Attribute<any>, index: number) => boolean): Xrm.Attribute<any>[];
    }
    interface Controls extends Xrm.ControlCollectionBase {
      get(name: "header_process_birthdate"): Xrm.DateControl | null;
      get(name: "header_process_emailaddress1"): Xrm.StringControl | null;
      get(name: "header_process_familystatuscode"): Xrm.OptionSetControl<contact_familystatuscode> | null;
      get(name: "header_process_firstname"): Xrm.StringControl | null;
      get(name: "header_process_industrycode"): Xrm.OptionSetControl<number> | null;
      get(name: "header_process_lastname"): Xrm.StringControl | null;
      get(name: "header_process_middlename"): Xrm.StringControl | null;
      get(name: "header_process_mobilephone"): Xrm.StringControl | null;
      get(name: "header_process_name"): Xrm.StringControl | null;
      get(name: "header_process_parentaccountid"): Xrm.LookupControl<"account"> | null;
      get(name: "header_process_spousesname"): Xrm.StringControl | null;
      get(name: "header_process_telephone1"): Xrm.StringControl | null;
      get(name: "header_process_websiteurl"): Xrm.StringControl | null;
      get(name: "jobtitle"): Xrm.StringControl;
      get(name: "mobilephone"): Xrm.StringControl;
      get(name: "telephone1"): Xrm.StringControl;
      get(name: string): undefined;
      get(): Xrm.BaseControl[];
      get(index: number): Xrm.BaseControl;
      get(chooser: (item: Xrm.BaseControl, index: number) => boolean): Xrm.BaseControl[];
    }
    interface Tabs extends Xrm.TabCollectionBase {
      get(name: "tab_1"): Xrm.PageTab<Tabs.tab_1>;
      get(name: string): undefined;
      get(): Xrm.PageTab<Xrm.Collection<Xrm.PageSection>>[];
      get(index: number): Xrm.PageTab<Xrm.Collection<Xrm.PageSection>>;
      get(chooser: (item: Xrm.PageTab<Xrm.Collection<Xrm.PageSection>>, index: number) => boolean): Xrm.PageTab<Xrm.Collection<Xrm.PageSection>>[];
    }
  }
  interface AppforOutlookContactCard extends Xrm.PageBase<AppforOutlookContactCard.Attributes,AppforOutlookContactCard.Tabs,AppforOutlookContactCard.Controls> {
    getAttribute(attributeName: "birthdate"): Xrm.DateAttribute | null;
    getAttribute(attributeName: "emailaddress1"): Xrm.Attribute<string> | null;
    getAttribute(attributeName: "familystatuscode"): Xrm.OptionSetAttribute<contact_familystatuscode> | null;
    getAttribute(attributeName: "firstname"): Xrm.Attribute<string> | null;
    getAttribute(attributeName: "industrycode"): Xrm.OptionSetAttribute<number> | null;
    getAttribute(attributeName: "jobtitle"): Xrm.Attribute<string>;
    getAttribute(attributeName: "lastname"): Xrm.Attribute<string> | null;
    getAttribute(attributeName: "middlename"): Xrm.Attribute<string> | null;
    getAttribute(attributeName: "mobilephone"): Xrm.Attribute<string>;
    getAttribute(attributeName: "name"): Xrm.Attribute<string> | null;
    getAttribute(attributeName: "parentaccountid"): Xrm.LookupAttribute<"account"> | null;
    getAttribute(attributeName: "spousesname"): Xrm.Attribute<string> | null;
    getAttribute(attributeName: "telephone1"): Xrm.Attribute<string>;
    getAttribute(attributeName: "websiteurl"): Xrm.Attribute<string> | null;
    getAttribute(attributeName: string): undefined;
    getAttribute(delegateFunction: Xrm.Collection.MatchingDelegate<Xrm.Attribute<any>>): Xrm.Attribute<any>[];
    getControl(controlName: "header_process_birthdate"): Xrm.DateControl | null;
    getControl(controlName: "header_process_emailaddress1"): Xrm.StringControl | null;
    getControl(controlName: "header_process_familystatuscode"): Xrm.OptionSetControl<contact_familystatuscode> | null;
    getControl(controlName: "header_process_firstname"): Xrm.StringControl | null;
    getControl(controlName: "header_process_industrycode"): Xrm.OptionSetControl<number> | null;
    getControl(controlName: "header_process_lastname"): Xrm.StringControl | null;
    getControl(controlName: "header_process_middlename"): Xrm.StringControl | null;
    getControl(controlName: "header_process_mobilephone"): Xrm.StringControl | null;
    getControl(controlName: "header_process_name"): Xrm.StringControl | null;
    getControl(controlName: "header_process_parentaccountid"): Xrm.LookupControl<"account"> | null;
    getControl(controlName: "header_process_spousesname"): Xrm.StringControl | null;
    getControl(controlName: "header_process_telephone1"): Xrm.StringControl | null;
    getControl(controlName: "header_process_websiteurl"): Xrm.StringControl | null;
    getControl(controlName: "jobtitle"): Xrm.StringControl;
    getControl(controlName: "mobilephone"): Xrm.StringControl;
    getControl(controlName: "telephone1"): Xrm.StringControl;
    getControl(controlName: string): undefined;
    getControl(delegateFunction: Xrm.Collection.MatchingDelegate<Xrm.Control<any>>): Xrm.Control<any>[];
  }
}
