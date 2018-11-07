var config = {
    apiKey: "AIzaSyCCg1TsZT2sH0PB_7ZjbvHC1VCphJIwcIY",
    authDomain: "fir-assignment-c7965.firebaseapp.com",
    databaseURL: "https://fir-assignment-c7965.firebaseio.com",
    projectId: "fir-assignment-c7965",
    storageBucket: "",
    messagingSenderId: "747713187774"
  };
  firebase.initializeApp(config);
  var database = firebase.database();

  $("button").on("click", function(event) {
      event.preventDefault();
      var trainName = $("#train-name-input").val().trim();
      var trainDestination = $("#destination-input").val().trim();
      var firstTrain = moment($("#first-train-input").val().trim(), "HH:mm").format("");
      var frequencyInput = $("#frequency-input").val().trim();

      var newTrains = {
          name: trainName,
          destination: trainDestination,
          first: firstTrain,
          freq: frequencyInput,
      }

      database.ref().push(newTrains);

      console.log(newTrains.name);
      console.log(newTrains.destination);
      console.log(newTrains.first);
      console.log(newTrains.freq);

      alert("Train Succesfully Added!");

      $("#train-name-input").val("");
      $("#destination-input").val("");
      $("#first-train-input").val("");
      $("#frequency-input").val("");
  })

    database.ref().on("child_added", function(childSnapshot){
        console.log(childSnapshot.val());

        var trainName = childSnapshot.val().name;
        var trainDestination = childSnapshot.val().destination;
        var firstTrain = childSnapshot.val().first;
        var trainFreq = childSnapshot.val().freq;

        console.log(trainName);
        console.log(trainDestination);
        console.log(firstTrain);
        console.log(trainFreq);

        // Convert first time (push back 1 year to make sure it comes before current time)
    var firstTimeConverted = moment(firstTrain, "HH:mm").subtract(1, "years"); // MomentJS
    console.log(firstTimeConverted);

    // Current time using MomentJS
    var currentTime = moment(); // MomentJS
    console.log("CURRENT TIME: " + moment(currentTime).format("HH:mm")); // MomentJS

    // Difference between the times
    var diffTime = moment().diff(moment(firstTimeConverted), "minutes"); // MomentJS
    console.log("DIFFERENCE IN TIME: " + diffTime);

    // Time apart (remainder)
    var tRemainder = diffTime % frequency;
    console.log(tRemainder);

    // Minute until train arrives
    var tMinutesTillTrain = frequency - tRemainder;
    console.log("MINUTES TILL TRAIN: " + tMinutesTillTrain);

    // Next train
    var nextTrain = moment().add(tMinutesTillTrain, "minutes"); // MomentJS
    var nextTrainConverted = moment(nextTrain).format("hh:mm a"); // MomentJS
    console.log("ARRIVAL TIME: " + moment(nextTrain).format("HH:mm")); // MomentJS

    // Add each trains data into the HTML table
    $("#train-table > tbody").append("<tr><td>" + trainName + "</td><td>" + destination + "</td><td>" + "Every " + frequency + " minutes" + "</td><td>" + nextTrainConverted + "</td><td>" + tMinutesTillTrain + "</td></tr>");
})
