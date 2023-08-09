export default defineI18nConfig(() => ({
  legacy: false,
  locale: "en",
  messages: {
    en: {
      home: {
        name: "Home",
        welcome: "This is home page!",
        description:
          "Welcome to the Quiz App! Test your knowledge and have fun with our challenging quizzes. Choose from a" +
          " variety of exciting topics and see how well you can score, or create your own quiz for others and " +
          "share the link with them! Are you ready to take on the challenge? Let's get started and show off your " +
          "expertise!",
        quizzes: "List of quizzes",
      },

      quizzes: {
        name: "Quizzes",
        title: "Choose your quiz",
        category: "Category",
        userQuizzes: "My quizzes",
        globalQuizzes: "Global quizzes",
        open: "Open Quiz",
        questionAmount: "Amount of questions",
        new: "Create new Quiz",
      },

      result: {
        title: "Congratulation! You have just finished a quiz",
        redirect: "Go to all quizzes",
        right: "correct answers",
        userHas: "You got",
      },

      profile: {
        name: "Profile",
        userQuizzes: "Your Quizzes",
        title: "Your profile",
      },
      admin: {
        name: "Admin",
        admin: "This user is admin",
        title: "Admin Page",
        list: "List of all users",
      },

      signIn: {
        name: "Sign in",
        github: "Sign in with Github",
        title: "Sign in Page",
        submit: "Sign in",
        redirect: "Don't have an account? Then just",
      },
      signUp: {
        name: "Sign up",
        title: "Sign up page",
        submit: "Sign up",
        redirect: "Already have an account? Then just",
      },
      newQuiz: {
        title: "New Quiz",
      },

      editQuiz: {
        title: "Edit Quiz",
      },
      category: {
        all: "All",
        fun: "Fun",
        education: "Education",
        other: "Other",
        sport: "Sport",
      },
      logout: "Logout",
      name: "Name",
      email: "Email",
      password: "Password",
      emailInvalid: "Email must be valid",
      passwordInvalid: "Password must be valid",
      nameInvalid: "Name is required",
      quiz: "Quiz",
      description: "Description",
      questions: "Questions",
      start: "Start Quiz",
      nextQuestion: "Next question",
      correct: "You are right!",
      wrong: "You are wrong!",
      correctWas: "The right answer was",
      answeredCorrectly: "Answered correctly",
      question: "Question",
      endQuiz: "End Quiz",
    },
    de: {
      home: {
        name: "Startseite",
        welcome: "Das ist die Startseite!",
        description:
          "Willkommen in der Quiz-App! Testen Sie Ihr Wissen und haben Sie Spaß mit unseren anspruchsvollen Quizfragen." +
          " Wählen Sie aus einer Vielzahl spannender Themen und sehen Sie, wie gut Sie punkten können, oder erstellen" +
          " Sie Ihr eigenes Quiz für andere und teilen Sie den Link mit ihnen! Sind Sie bereit, die Herausforderung " +
          "anzunehmen? Legen wir los und zeigen Sie Ihr Fachwissen!",
        quizzes: "Liste der Quizze",
      },
      quizzes: {
        name: "Quizze",
        title: "Wählen Sie Ihr Quiz",
        category: "Kategorie",
        userQuizzes: "Meine Quizze",
        globalQuizzes: "Globale Quizze",
        open: "Quiz öffnen",
        questionAmount: "Anzahl der Fragen",
        new: "Neues Quiz erstellen",
      },

      result: {
        title: "Herzlichen Glückwunsch! Sie haben gerade ein Quiz beendet",
        redirect: "Zu allen Quizze gehen",
        right: "Fragen richtig beantworten",
        userHas: "Sie haben",
      },

      profile: {
        name: "Profil",
        userQuizzes: "Ihre Quizze",
        title: "Dein Profil",
      },
      admin: {
        name: "Admin",
        admin: "Dieser Benutzer ist Administrator",
        title: "Administrator Seite",
        list: "Liste aller Benutzer",
      },

      signIn: {
        name: "Anmelden",
        github: "Melden Sie sich mit Github an",
        title: "Anmeldeseite",
        submit: "Anmelden",
        redirect: "Sie haben noch kein Konto? Dann einfach",
      },
      signUp: {
        name: "Registrieren",
        title: "Registrierungsseite",
        submit: "Registrieren",
        redirect: "Sie haben bereits ein Konto? Dann einfach",
      },
      newQuiz: {
        title: "Neues Quiz",
      },
      editQuiz: {
        title: "Das Quiz bearbeiten",
      },
      category: {
        all: "Alle",
        fun: "Spaß",
        education: "Bildung",
        other: "Andere",
        sport: "Sport",
      },
      logout: "Ausloggen",
      name: "Name",
      email: "Email",
      password: "Passwort",
      emailInvalid: "Email muss gültig sein",
      passwordInvalid: "Passwort muss gültig sein",
      nameInvalid: "Name ist erforderlich",
      quiz: "Das Quiz",
      description: "Beschreibung",
      questions: "Fragen",
      start: "Das Quiz anfangen",
      nextQuestion: "Nächste Frage",
      correct: "Du hast Recht!",
      wrong: "Du hast unrecht!",
      correctWas: "Die richtige Antwort war",
      answeredCorrectly: "Richtig beantwortet",
      question: "Frage",
      endQuiz: "Quiz beenden",
    },
  },
}));
