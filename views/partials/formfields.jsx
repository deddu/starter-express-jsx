var React = require('react');


var dispatcher = (field) => (!!types[field.type])
  ? types[field.type](field)
  : err(field);

var err = (field) =>
  <wrapper>
    <code><pre>{JSON.stringify(field)}</pre></code>
  </wrapper>


var wrapper = (f) =>
  <div key={f.name} style={{padding:'10px 0px'}}>
    <label>{f.label}
      <span id="{field.name}-error" className="field-error"></span>
      {dispatcher(f)}
    </label>
  </div>


var radio = (field) =>
    <fieldset className="ui-grid-a">
    <div className="ui-block-a">
      <label>
        <input name={field.name} type="radio" value="1"/>Yes
      </label>
    </div>
    <div className="ui-block-b">
      <label>
        <input name={field.name} type="radio" value="0"/>No
      </label>
    </div>
    </fieldset>;


var text = (field) =>
  <input type="text" id={field.name} name={field.name} className={field.required?"required":""} required={field.required}/>


var textarea = (field) =>
  <textarea id={field.name} name={field.name} className={field.required?"required":""} required={field.required}/>


var range = (field) =>
  <input type="range" name={field.name} id={field.name} value={field.range.default} min={field.range.min} max={field.range.max} />


var checkbox = (field) =>
  <input type="checkbox" id={field.name} name={field.name} className={field.required?"required":""} required={field.required}/>

var paragraph = (f) => <p>{f.text}</p>

var hr = (f)=> <hr/>

const types = {
  radio:radio,
  text:text,
  textarea:textarea,
  range:range,
  checkbox:checkbox,
  hr:hr,
  paragraph:paragraph
}



module.exports = wrapper;
