// Copyright (c) 2020 Mr. Coxall All rights reserved
//
// Created by: Mr. Coxall
// Created on: Sep 2020
// This file contains the JS functions for index.html

"use strict"

/**
 * Check servie worker.
 */
if (navigator.serviceWorker) {
  navigator.serviceWorker.register("/ICS2O-Unit5-03-JS/sw.js", {
    scope: "/ICS2O-Unit5-03-JS/",
  })
}

/**
 * This function tells you what movie to watch, depending on the age.
 */
function myButtonClicked() {
  /**
   * This is the age user enters.
   */
  var age = parseFloat(document.getElementById("ageValue").value)

  //process
  if (age >= 17) {
    document.getElementById("movie-desiding-button").innerHTML =
      "<p>You can watch up to R-Rated Movies</p>"
  } else if (age >= 13) {
    document.getElementById("movie-desiding-button").innerHTML =
      "<p>You can only watch up to PG-13 Rated Movies</p>"
  } else if (age >= 5) {
    document.getElementById("movie-desiding-button").innerHTML =
      "<p>You can only watch up to G & PG Rated Movies</p>"
  } else {
    document.getElementById("movie-desiding-button").innerHTML =
      "<p>You are either too young to watch any movie, or not born yet.</p>"
  }
}
