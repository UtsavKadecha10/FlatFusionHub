import joblib

model = joblib.load('model.pkl')  # backend mai jaha model pada hai rent wala waha ki loacation daal dena 

predicted_price = model.predict([[bedrooms, bathrooms, area, furnishing, available_for, floor_number, parking, brokerage_amt]])[0]

return f"Predicted Rent Price: {predicted_price:.2f} INR"

#

