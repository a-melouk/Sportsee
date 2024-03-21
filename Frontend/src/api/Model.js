export class UserInfo {
  constructor(data) {
    this.data = {
      userInfos: data.userInfos,
      score: data.score * 100 || data.todayScore * 100,
      macronutriments: [
        {
          name: "Calories",
          value: data.keyData.calorieCount,
        },
        {
          name: "Proteines",
          value: data.keyData.proteinCount,
        },
        {
          name: "Glucides",
          value: data.keyData.carbohydrateCount,
        },
        {
          name: "Lipides",
          value: data.keyData.lipidCount,
        },
      ],
    };
  }
}

export class UserActivity {
  constructor(data) {
    this.data = data.sessions;
  }
}
const daysMap = {
  1: "Lundi",
  2: "Mardi",
  3: "Mercredi",
  4: "Jeudi",
  5: "Vendredi",
  6: "Samedi",
  7: "Dimanche",
};
export class UserAverageSessions {
  constructor(data) {
    this.data = data.sessions.map((session) => ({
      day: daysMap[session.day],
      sessionLength: session.sessionLength,
    }));
  }
}

export class UserPerformance {
  constructor(data) {
    this.data = [
      { subject: "Intensité", value: data.data[5].value },
      { subject: "Vitesse", value: data.data[4].value },
      { subject: "Force", value: data.data[3].value },
      { subject: "Endurance", value: data.data[2].value },
      { subject: "Energie", value: data.data[1].value },
      { subject: "Cardio", value: data.data[0].value },
    ];
  }
}
