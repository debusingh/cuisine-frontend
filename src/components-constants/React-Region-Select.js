export const regionSelectCustomStyles = {
  
    option: (provided, state) => ({
      ...provided,
    }),
    menu: (provided, state) => ({
      ...provided,
      borderBottom: '1px dotted pink',
      color: 'green',
      align: 'left',
      padding: 5,
    }),
    control: (provided, state) => ({
      ...provided,
      background: '#fff',
      borderColor: '#9e9e9e',
      minHeight: '30px',
      height: '30px',
      boxShadow: state.isFocused ? 'green' : null,

    }),

    valueContainer: (provided, state) => ({
      ...provided,
      height: '30px',
      

    }),

    input: (provided, state) => ({
      ...provided,
      margin: '0px',
    }),
    indicatorSeparator: state => ({
      display: 'none',
    }),
    indicatorsContainer: (provided, state) => ({
      ...provided,
      height: '30px',
    }),
  };

