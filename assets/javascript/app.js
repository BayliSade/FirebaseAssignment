var config = {
    apiKey: "AIzaSyCCg1TsZT2sH0PB_7ZjbvHC1VCphJIwcIY",
    authDomain: "fir-assignment-c7965.firebaseapp.com",
    databaseURL: "https://fir-assignment-c7965.firebaseio.com",
    projectId: "fir-assignment-c7965",
    storageBucket: "",
    messagingSenderId: "747713187774"
  };
  firebase.initializeApp(config);

  $("#add-train-btn").on("click", function(event) {
      event.preventDefult();

      var trainName = $("#train-name-input").val().trim();
      var trainDestination = $("#destination-input").val().trim();
      var firstTrain = moment($("#first-train-input").val().trim(), "HH:mm").format("");
      var frequencyInput = $("#frequency-input").val().trim();

      var newTrains = {
          name: trainName,
          tDestination: trainDestination,
          tFirst: firstTrain,
          tFreq: frequencyInput,
      }
  })
