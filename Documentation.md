# Project Overview: FlatFusionHub 🏢

FlatFusionHub is an ambitious web application project that combines the power of the MERN stack 🌐 with Machine Learning (ML) and Deep Learning (DL) techniques 🤖, all seamlessly integrated with MLOps practices 🚀. In a world where finding flats and apartments can be a daunting task, our web app aims to simplify the process, helping users find affordable housing solutions.

## Project Components 🛠️

### Frontend 🌟
- **Tech Stack**: React, HTML, CSS, JavaScript
- **Features**: Buying, Selling, and Renting flats/apartments, with a future plan for property comparison.
- **User Experience**: Users can effortlessly browse available flats and apartments for buying or renting.
- **Authentication**: For additional functionalities like detailed property information, related insights, or listing properties for sale, users will need to authenticate via login/sign-in. 🔐

### Backend ⚙️
- **Technology**: Node.js
- **Functionality**: Creating APIs, middleware, and methods to ensure a functional website.
- **User Experience**: Authentication implemented using JSON Web Tokens (JWT) and enhanced with cookies for an exceptional user experience. 🍪

### Database 📊
- **Critical Component**: The database is pivotal.
- **Databases Used**: MongoDB and MySQL
- **Key Tables Include**:
    - **APARTMENT/FLAT FOR SELL/RENT**:
        - **Entries in db**:
            - Type of User
            - Name
            - Mobile No.
            - Email
            - Property for (sell/rent)
            - Property Type
            - City
            - Locality
            - Furnishing details
        - **Entries for predicting rate** 📈

    - **APARTMENT/FLAT FOR RENT**:
        - **Entries in db**: 
            - Flat No. 
            - BHK
            - Rent
            - Total Floor
            - Current Floor
            - Area Locality
            - City
            - Furnishing status
            - Preferred Tenants
            - Bathroom
            - Point of contact
        - **Entries for predicting rent**:
            - BHK	
            - Size
            - Area Locality
            - Current Floor
            - City
            - Furnishing status
            - Preferred tenants
            - Bathroom 

    - **APARTMENT/FLAT TO BUY**:
        - **Entries in db**
        - **Entries for predicting amount** 

    - **LOGS**:
        - **Entry every time we hit any API**:
            - url
            - method
            - ipAddress 

    - **USER INFORMATION**:
        - **Entries in db**:
            - User Type(Agent/Owner/Tenant/Buyer/Builder)
            - Name
            - Age
            - Email
            - Phone No. 

### Machine Learning and Deep Learning Integration with MLOps 🤯

In this section, we will harmoniously merge ML and DL methodologies with MLOps practices to ensure a structured and efficient workflow. Our objectives encompass:

- Predicting flat rents using the scikit-learn library and the XGBRFRegressor algorithm 🏡📈
- Forecasting final flat prices for buying purposes using artificial neural networks (ANN) implemented with TensorFlow and Keras 🏡💰🧠

## Key Components 🧩

### MLOps Integration 🚀
- **Methodologies**: Implementing MLOps methodologies to streamline various project stages, including data preparation, model training, model evolution, hyperparameter tuning, and deployment. 🛠️📊

### Library Utilization 📚
- Leveraging renowned libraries such as Pandas, NumPy, Matplotlib, Seaborn, Scikit-learn, TensorFlow, and Keras to facilitate efficient development and analysis. 💡

### Rent Prediction Model (scikit-learn) 📊
- **Model**: Utilizing the scikit-learn library to construct a robust rent prediction model.
- **Algorithm**: Employing the XGBRFRegressor algorithm, acknowledged for its exceptional regression capabilities. 🏡📈

### Deep Learning Model (TensorFlow and Keras) 🧠
- **Techniques**: Implementing advanced deep learning techniques using TensorFlow and Keras for forecasting final flat prices.
- **Customization**: Tailoring artificial neural networks (ANN) to the specific prediction task.
- **Validation**: Validating model performance using appropriate evaluation metrics. 📊

### Dataset Acquisition 📂
- **Data Source**: Acquiring authentic and pertinent datasets from Kaggle, ensuring alignment with the project's core objectives.
- **Preprocessing**: Employing data preprocessing techniques, including data cleaning, handling missing values, and encoding categorical variables, as required. 🧹📊

Our objective is to provide accurate predictions for both flat rents and final flat prices, all while adhering to industry best practices in ML and DL development, as well as MLOps methodologies. 🎯
