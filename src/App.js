import { TreeView, handleTreeViewCheckChange, processTreeViewItems } from '@progress/kendo-react-treeview';
import * as React from 'react';
const tree = [
    
  {
    text: "Item1",
  },
  {
    text: "Item2",
  },
];
const App = () => {
  const [items] = React.useState(tree);
  const [singleMode, setSingleMode] = React.useState(false);
  const [checkChildren, setCheckChildren] = React.useState(false);
  const [checkParents, setCheckParents] = React.useState(false);
  const [expanded, setExpanded] = React.useState(false);
  const [check, setCheck] = React.useState({
    ids: [],
    applyCheckIndeterminate: true
  });
  const onCheckChange = event => {
    const settings = {
      singleMode,
      checkChildren,
      checkParents
    };
    setCheck(handleTreeViewCheckChange(event, check, items, settings));
  };
  const onSingleModeChange = ({
    target: {
      checked
    }
  }) => {
    setSingleMode(checked);
    setCheckChildren(false);
    setCheckParents(false);
  };
  const onCheckChildrenChange = ({
    target: {
      checked
    }
  }) => {
    setSingleMode(false);
    setCheckChildren(checked);
  };
  const onCheckParentsChange = ({
    target: {
      checked
    }
  }) => {
    if (checked) {
      setSingleMode(false);
    }
    setCheckParents(checked);
  };
  return <div>
      <div className="example-config">
        <h5>Check Settings</h5>
        <input id="singleMode" type="checkbox" checked={singleMode} onChange={onSingleModeChange} className="k-checkbox k-checkbox-md k-rounded-md" />
        <label htmlFor="singleMode" className="k-checkbox-label" style={{
        marginRight: 5
      }}>
          Single mode
        </label>
        <input id="checkChildren" type="checkbox" checked={checkChildren} onChange={onCheckChildrenChange} className="k-checkbox k-checkbox-md k-rounded-md" />
        <label htmlFor="checkChildren" className="k-checkbox-label" style={{
        marginRight: 5
      }}>
          Check all children
        </label>
        <input id="checkParents" type="checkbox" checked={checkParents} onChange={onCheckParentsChange} className="k-checkbox k-checkbox-md k-rounded-md" />
        <label htmlFor="checkParents" className="k-checkbox-label" style={{
        marginRight: 5
      }}>
          Check all parents when children are checked
        </label>
      </div>
      <button onClick={() => setExpanded(!expanded)}>expand button</button>
      {expanded && <TreeView data={processTreeViewItems(items, {
      check: check
    })} checkboxes={true} onCheckChange={onCheckChange} />}
      <div style={{
      marginTop: 5
    }}>
        <i>Press SPACE to check/uncheck the active item</i>
        <div className="example-config">
          Checked indices: {check.ids.join(",")}
        </div>
      </div>
    </div>;
};

export default App;
