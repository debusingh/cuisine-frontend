const validQueryParamHeaders=["Region"];

export const commonConstants = {

    apiUrl: (process.env.NODE_ENV === "development") ? 'http://localhost:5000/': '/',
    //apiUrl: '/',


    vegNonVegOptions: [
        { value: true, label: 'Yes (Its Veg)' },
        { value: false, label: 'No (Its Not Veg)' },
    ],

    foodTypesOptions: [
        { label: 'Breakfast', value: 'Breakfast' },
        { label: 'Dessert', value: 'Dessert' },
        { label: 'Drink', value: 'Drink' },
        { label: 'Noodle Soup', value: 'Noodle Soup' },
        { label: 'Main Course', value: 'Main Course' },
        { label: 'Pastry', value: 'Pastry' },
        { label: 'Salad', value: 'Salad' },
        { label: 'Side Dish', value: 'Side Dish' },
        { label: 'Snack', value: 'Snack' },
        { label: 'Stew', value: 'Stew' },
        { label: 'Sweet', value: 'Sweet' },
        { label: 'Tea', value: 'Tea' }],

    consoleLog : (message)=> 
        {
            if (process.env.NODE_ENV !== "development") {
                    commonConstants.consoleLog = () => {};
        } else {

                console.log(message);
        }
    },

    parseQueryString : (string) => {

        return string.slice(1).split("&")
        .map((queryParam) => {
          let kvp = queryParam.split("=")
      
          return { key: kvp[0], value: kvp[1] }
        })
        .reduce((query, kvp) => {

          if (validQueryParamHeaders.includes(kvp.key)) {

            query[kvp.key] = kvp.value;
          }
          return query
        }, {})
      }
}
