const axios = require('axios');

const data = {
  features: [property_building_status, property_type, property_status, is_furnished, city_name, price_per_unit_area, no_of_bhk, size, posted_days_ago]  // Modify to match your data format
};

axios.post('http://localhost:5000/predict', data)
  .then((response) => {
    console.log('Prediction:', response.data.prediction);
  })
  .catch((error) => {
    console.error('Error:', error);
  });
