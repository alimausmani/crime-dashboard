# Crime Awareness Dashboard

The **Crime Awareness Dashboard** is an interactive web application built using **React.js** and **Chart.js**. It visualizes crime statistics by state, year, and type of crime, allowing users to analyze trends and gain insights.

---

## 🚀 Features

1. **Interactive Dashboard**: Visualizes crime data as charts for better understanding.
2. **Filtering Options**:
   - Filter data by **State** (e.g., Delhi, Maharashtra).
   - Filter by **Crime Type** (e.g., Theft, Cybercrime).
   - Filter by **Year** (e.g., 2022, 2023).
3. **Real-Time Visualization**:
   - Data updates instantly as filters are applied.
   - Display data using **Bar Charts** for easy comparison.
4. **User-Friendly Design**: Simple and clean UI for a seamless experience.

---

## 🛠️ Technology Stack

- **React.js**: Front-end framework for building the application.
- **Chart.js**: Library for rendering interactive charts.
- **CSS**: Styling the UI for responsiveness and simplicity.

---

## 📂 Project Structure

```
crime-dashboard/
│-- public/
│-- src/
│   ├── components/
│   │   ├── CrimeChart.js       # Chart component (Bar chart)
│   │   ├── FilterPanel.js      # Filter options UI
│   │   └── CrimeDashboard.js   # Parent component managing state
│   ├── App.js                  # Main App component
│   ├── index.js                # Entry point for React
│   └── styles.css              # Styling for the project
│-- package.json                # Project dependencies
└── README.md                   # Project documentation
```

---

## 🖥️ Installation

Follow these steps to set up and run the project on your local machine:

1. **Clone the repository**:
   ```bash
   git clone https://github.com/alimausmani/crime-awareness-dashboard.git
   cd crime-awareness-dashboard
   ```

2. **Install dependencies**:
   ```bash
   npm install
   ```

3. **Start the development server**:
   ```bash
   npm start
   ```

4. **Access the app**: Open your browser and go to [http://localhost:3000](http://localhost:3000).

---

## 🖼️ Screenshots

### Dashboard View:
![Dashboard View](screenshot-url)

---

## 📊 Mock Data
This project uses mock data for demonstration purposes. Replace the `mockData` array in `CrimeDashboard.js` with real API calls from a government source (e.g., NCRB or state crime datasets).

---

## 📈 Future Improvements
- Integrate **REST APIs** to fetch real crime data dynamically.
- Add more **charts** like line graphs and pie charts.
- Implement a **map view** to visualize crime statistics by region.
- Enhance the UI with more detailed data insights.

---

## 🤝 Contributing
Contributions are welcome! Please submit an issue or a pull request if you’d like to improve the project.

---

## 💡 How to Use
1. Select a **State**, **Crime Type**, and **Year** from the filter panel.
2. The chart updates automatically to display relevant crime statistics.
3. Analyze the data trends using the **interactive bar chart**.

---

## 📜 License
This project is licensed under the MIT License.

---

## 🔗 Connect
If you have any questions or feedback, feel free to reach out!

- **Name**: Alima Usmani
- **Email**: alimausmani21@navgurukul.org
- **GitHub**: [https://github.com/alimausmani](https://github.com/alimausmani)
- **LinkedIn**: [https://www.linkedin.com/in/alima-usmani/](https://www.linkedin.com/in/alima-usmani/)

---

Enjoy analyzing and visualizing crime data with the **Crime Awareness Dashboard**! 🚀
