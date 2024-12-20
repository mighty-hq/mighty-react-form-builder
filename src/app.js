import React from 'react';
import { ReactFormBuilder, ElementStore, Registry } from 'react-form-builder2';
import * as variables from './variables';
import FormElementsEdit from './form-elements-edit';
import Toolbar from './toolbar';
import Select from "react-select";

const url = '/api/formdata';
const saveUrl = '/api/formdata';

const TestComponent = () => <h2>Hello</h2>;

const MyInput = React.forwardRef((props, ref) => {
  const { name, defaultValue, disabled } = props;
  return <input ref={ref} name={name} defaultValue={defaultValue} disabled={disabled} />;
});

const reactSelectLabel = React.forwardRef((props, ref) => {
  const { name, defaultValue, disabled, label } = props;
  return (
    <Select
      className="reactSelect"
      name={name}
      label={label}
      placeholder="Filters"
      disabled={disabled}
      defaultValue={defaultValue}
      options={[
        { value: "chocolate", label: "Chocolate" },
        { value: "strawberry", label: "Strawberry" },
        { value: "vanilla", label: "Vanilla" }
      ]}
      isMulti
    />
  );
});

Registry.register('MyInput', MyInput);
Registry.register('TestComponent', TestComponent);
Registry.register('reactSelectLabel', reactSelectLabel);

const items = [


  {
    group_name: 'Custom Element',
    key: 'TestComponent',
    element: 'CustomElement',
    component: TestComponent,
    type: 'custom',
    field_name: 'test_component',
    name: 'Something You Want',
    icon: 'fa fa-cog',
    static: true,
    props: { test: 'test_comp' },
    label: 'Label Test',
  },
  {
    key: 'MyInput',
    element: 'CustomElement',
    component: MyInput,
    type: 'custom',
    forwardRef: true,
    bare: true,
    field_name: 'my_input_',
    name: 'My Input',
    icon: 'fa fa-cog',
    props: { test: 'test_input' },
    label: { id: 'place-holder-label' },
  },
  {
    key: 'reactSelectLabel',
    element: 'CustomElement',
    component: reactSelectLabel,
    type: 'custom',
    forwardRef: true,
    bare: true,
    field_name: 'my_reactSelectLabel_',
    name: 'reactSelectLabel',
    icon: 'fa fa-cog',
    props: { test: 'test_reactSelectLabel' },
    label: 'Label Input',
  },
  { "key": "Header" },
  { "key": "Label" },
  { "key": "Paragraph" },
  { "key": "LineBreak" },
  { "key": "Dropdown" },
  { "key": "Tags" },
  { "key": "Checkboxes" },
  { "key": "RadioButtons" },
  { "key": "TextInput" },
  { "key": "EmailInput" },
  { "key": "NumberInput" },
  { "key": "PhoneNumber" },
  { "key": "TextArea" },
  { "key": "FieldSet" },
  { "key": "TwoColumnRow",     group_name: 'Columns Element' },
  { "key": "ThreeColumnRow",  group_name: 'Columns Element' },
     {
        key: 'FourColumnRow',
        group_name: 'Columns Element',
        element: 'MultiColumnRow',
        canHaveAnswer: false,
        name: "four-columns-row",
        label: '',
        icon: 'fas fa-columns',
        field_name: 'four_col_row_',
        col_count: 4,
        class_name: 'col-md-3',
      },
      {
        key: 'FiveColumnRow',
        group_name: 'Columns Element',
        element: 'MultiColumnRow',
        canHaveAnswer: false,
        name: "five-columns-row",
        label: '',
        icon: 'fas fa-columns',
        field_name: 'five_col_row_',
        col_count: 5,
        class_name: 'col',
      },
      {
        key: 'SixColumnRow',
        group_name: 'Columns Element',
        element: 'MultiColumnRow',
        canHaveAnswer: false,
        name: "six-columns-row",
        label: '',
        icon: 'fas fa-columns',
        field_name: 'six_col_row_',
        col_count: 6,
        class_name: 'col-md-2',
      },
  { "key": "Image" },
  { "key": "Rating" },
  { "key": "DatePicker" },
  { "key": "Signature" },
  { "key": "HyperLink" },
  { "key": "Download" },
  { "key": "Range" },
  { "key": "Camera" },
  { "key": "FileUpload" },

];

const App = () => (
  
  <ReactFormBuilder
    variables={variables}
    url={url}
    saveUrl={saveUrl}
    locale='en'
    saveAlways={false}  
    customToolbarItems={items}
    renderEditForm={props => <FormElementsEdit {...props}/>}
    toolbarItems={items}
  />)
  ;

export default App;

