import Select from 'react-select';


function App() {
  const options = [
    { value: 'first', label: 'first', fixed: true },
    { value: 'chocolate', label: 'Chocolate' },
    { value: 'strawberry', label: 'Strawberry' },
    { value: 'vanilla', label: 'Vanilla' },
    { value: 'last', label: 'last', fixed: true },
  ]

  const customFilter = (option, rawInput) => {
    const inputValue = rawInput.toLowerCase();

    // If there's no input, include all options
    if (!inputValue) {
      return true;
    }

    // Allow the first and last options to always be visible
    if (option.data.fixed) {
      return true;
    }

    // Apply regular filtering for other options
    return (
      option.label.toLowerCase().includes(inputValue) ||
      option.value.toLowerCase().includes(inputValue)
    );
  }

  return (
    <div className="App">
      <Select
        options={options}
        isSearchable={true}
        filterOption={customFilter}
      />
    </div>
  );
}

export default App;




