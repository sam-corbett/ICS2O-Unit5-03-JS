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


// This function helps some dumb thing out
function myButtonClicked() {
 //input
 var valueOfAge = document.getElementById("ageValue").checked

 //process
if (valueOfAge >= 17) {
   document.getElementById("movie-desiding-button").innerHTML = "You can watch R-Rated Movies"
}

